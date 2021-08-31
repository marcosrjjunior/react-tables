import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'

import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
import { fetchData } from 'services/simpleService'
import { Card, Container } from 'components/Layout'

import s from '../styles/pages/StickyColumn.module.scss'

const sticky = {
  firstNameCol: 120
}

const StickyColumn = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData({ page: 1, perPage: 15 }).then(response => setData(response.data))
  }, [])

  console.log('data', data)
  return (
    <>
      <Head>
        <title>
          <Link href="/">&#8672; </Link> Sticky column - React tables
        </title>
      </Head>

      <Container>
        <Card>
          <ViewSource pathname="pages/simple.js" />

          <h1>
            <Link href="/">&#8672; </Link> Sticky column
          </h1>

          <div className="position-relative overflow-x">
            <Table striped className={s.table}>
              <thead>
                <tr>
                  <th
                    className="sticky"
                    style={{
                      maxWidth: sticky.firstNameCol,
                      minWidth: sticky.firstNameCol,
                      left: 0
                    }}
                  >
                    First name
                  </th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th className={s.dobCol}>Date of Birth</th>
                  <th className={s.jobCol}>Job</th>
                </tr>
              </thead>

              <tbody>
                {data.map(row => (
                  <tr key={row.id}>
                    <td
                      className="sticky"
                      style={{
                        maxWidth: sticky.firstNameCol,
                        minWidth: sticky.firstNameCol,
                        left: 0
                      }}
                    >
                      <a href="#">{row.first_name}</a>
                    </td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                    <td>{row.username}</td>
                    <td>{format(new Date(row.dob), 'dd/mm/yyyy')}</td>
                    <td>{row.job.title}</td>
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

export default StickyColumn
