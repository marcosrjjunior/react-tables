import Link from 'next/link'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'
import cx from 'classnames'

import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
import Meta from 'components/Meta'
import { DataType, fetchData } from 'services/simpleService'
import { Card, Container } from 'components/Layout'

import s from '../styles/pages/RowSelection.module.scss'

const RowSelection = () => {
  const [data, setData] = useState<DataType[]>([])
  const [selectedRow, setSelectedRow] = useState<DataType>()

  useEffect(() => {
    fetchData({ page: 1 }).then(response => setData(response.data))
  }, [])

  const selectRow = (row: DataType) => {
    // alert(JSON.stringify(row))
    console.log(row)
    setSelectedRow(row)
  }

  return (
    <>
      <Meta title="Row selection - React tables" url="/row-selection" />

      <Container>
        <Card>
          <ViewSource pathname="src/pages/row-selection.tsx" />

          <h1>
            <Link href="/">&#8672; </Link> Row selection
          </h1>

          <p>
            You could use this approach on a scenario where you have some view
            open on top of the table like a drawer, modal and would like to keep
            the row marked as "selected".
          </p>

          <div className="position-relative overflow-x">
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
