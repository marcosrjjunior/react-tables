import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'

import Table from 'components/Table/Table'
import ViewSource from 'components/ViewSource'
import { fetchData } from 'services/simpleService'
import { Card, Container } from 'components/Layout'

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

  useEffect(() => {
    fetchData({ page: 1 }).then(response => setData(response.data))
  }, [])

  return (
    <>
      <Head>
        <title>
          <Link href="/">&#8672; </Link> Simple - React tables
        </title>
      </Head>

      <Container>
        <Card>
          <ViewSource pathname="pages/simple.js" />

          <h1>Simple</h1>

          <div className="position-relative overflow-x">
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
        </Card>
      </Container>
    </>
  )
}

export default Simple
