import Head from 'next/head'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'

import Overlay from 'components/Overlay/Overlay'
import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
import { DataType, fetchData } from 'services/simpleService'
import { Card, Container } from 'components/Layout'

import s from '../styles/pages/row-selection.module.scss'

const Pagination = () => {
  const [data, setData] = useState<DataType[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    fetchData({ page }).then(response => {
      // The setTimeout is just to simulate data coming from the server
      setTimeout(() => {
        setData(response.data)
        setTotalPages(response.pages)

        setIsLoading(false)
      }, 300)
    })
  }, [page])

  return (
    <>
      <Head>
        <title>Row selection - React tables</title>
      </Head>

      <Container>
        <Card>
          <ViewSource pathname="pages/pagination.js" />

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
                  <tr key={row.id}>
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

export default Pagination
