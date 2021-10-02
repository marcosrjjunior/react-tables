import Link from 'next/link'
import { useEffect, useState } from 'react'

import { FixedSizeGrid as Grid } from 'react-window'

import ViewSource from 'components/ViewSource'
import Meta from 'components/Meta'
import { fetchData } from 'services/simpleService'
import { Card, Container } from 'components/Layout'

import s from '../styles/pages/ReactWindow.module.scss'

const ReactWindow = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData({ page: 1, perPage: 2500 }).then(response =>
      setData(response.data)
    )
  }, [])

  const Cell = ({ columnIndex, rowIndex, style }) => {
    if (!data[rowIndex]) return <></>

    const column = Object.keys(data[rowIndex])[columnIndex]

    return (
      <div style={style} className={rowIndex % 2 === 0 ? s.odd : ''}>
        {column === 'first_name' ? (
          <a href="#">{data[rowIndex] && data[rowIndex][column]}</a>
        ) : (
          <span>{data[rowIndex][column]}</span>
        )}
      </div>
    )
  }

  return (
    <>
      <Meta title="React window - React tables" url="/react-window" />

      <Container>
        <Card>
          <ViewSource pathname="src/pages/react-window.tsx" />

          <h1>
            <Link href="/">&#8672; </Link> React window
          </h1>

          <p>
            This is just a test using the react-window library and displaying
            2500 records.
          </p>

          <div className="position-relative overflow-x">
            <Grid
              className={s.grid}
              columnCount={5}
              columnWidth={200}
              height={500}
              rowCount={2500}
              rowHeight={32}
              width={960}
            >
              {Cell}
            </Grid>
          </div>
        </Card>
      </Container>
    </>
  )
}

export default ReactWindow
