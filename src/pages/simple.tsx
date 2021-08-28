import Head from 'next/head'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'

import Overlay from 'components/Overlay/Overlay'
import Pagination from 'components/Pagination/Pagination'
import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
import { fetchData } from 'services/simpleService'

import s from '../styles.module.scss'

/* Generate faker data
function generateUsers() {

  let users = []

  for (let id=1; id <= 2500; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let username = faker.internet.userName();
    let email = faker.internet.email();
    let jobTitle = faker.name.jobTitle();
    let dob = faker.date.past();
    let avatar = faker.image.avatar();

    users.push({
        id,
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        job: {title:jobTitle},
        dob,
        avatar,
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();
*/

const Simple = () => {
  const [data, setData] = useState([])
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
        <title>Simple - React tables</title>
      </Head>
      <div className={s.container}>
        <div className={s.card}>
          <ViewSource pathname="pages/simple.js" />

          <h1>Simple</h1>

          <Pagination
            totalPages={totalPages}
            page={page}
            onPageChange={nextPage => setPage(nextPage)}
          />

          <div className="position-relative overflow-x">
            {isLoading && <Overlay />}

            <Table striped>
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
        </div>
      </div>
    </>
  )
}

export default Simple
