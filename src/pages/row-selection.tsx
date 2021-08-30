import Head from 'next/head'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'

import Overlay from 'components/Overlay/Overlay'
import Pagination from 'components/Pagination/Pagination'
import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
import { DataType, fetchData } from 'services/simpleService'
import { Card, Container } from 'components/Layout'

import s from '../styles/pages/row-selection.module.scss'

import cx from 'classnames'

const RowSelection = () => {
  const [data, setData] = useState<DataType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [selectedRow, setSelectedRow] = useState<DataType>()

  useEffect(() => {
    setIsLoading(true)

    fetchData({ page: 1 }).then(response => {
      // The setTimeout is just to simulate data coming from the server
      setTimeout(() => {
        setData(response.data)

        setIsLoading(false)
      }, 300)
    })
  }, [])

  const selectRow = (row: DataType) => {
    alert(JSON.stringify(row))
    setSelectedRow(row)
  }

  return (
    <>
      <Head>
        <title>Row selection - React tables</title>
      </Head>

      <Container>
        <Card>
          <ViewSource pathname="pages/row-selection.js" />

          <h1>Row selection</h1>

          <div className="position-relative overflow-x">
            {isLoading && <Overlay />}

            <Table striped className={s.root}>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Date of Birth</th>
                </tr>
              </thead>

              <tbody>
                {data.map(row => (
                  <tr
                    key={row.id}
                    onClick={() => selectRow(row)}
                    className={cx({ [s.selected]: row.id === selectedRow?.id })}
                  >
                    <td>
                      <a href="#">{row.first_name}</a>
                    </td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                    <td>{format(new Date(row.dob), 'dd/mm/yyyy')}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Container>
    </>
  )
}

export default RowSelection
