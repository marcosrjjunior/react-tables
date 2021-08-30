import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'
import cx from 'classnames'

import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
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
      <Head>
        <title>Row selection - React tables</title>
      </Head>

      <Container>
        <Card>
          <ViewSource pathname="pages/row-selection.js" />

          <h1>
            <Link href="/">&#8672; </Link> Row selection
          </h1>

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
