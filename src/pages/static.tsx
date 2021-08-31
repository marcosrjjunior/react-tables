import Link from 'next/link'

import { format } from 'date-fns'
import { chunk } from 'lodash'

import ViewSource from 'components/ViewSource'
import Table from 'components/Table/Table'
import { Card, Container } from 'components/Layout'
import simple from 'data/simple.json'

const Static = ({ data }) => (
  <Container>
    <Card>
      <ViewSource pathname="pages/static.js" />

      <ViewSource pathname="pages/static.js" />

      <h1>
        <Link href="/">&#8672; </Link> Static next.js
      </h1>

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
)

export async function getStaticProps() {
  const data = chunk(simple, 50)
  const response = data[0]

  if (!response) {
    return {
      notFound: true
    }
  }

  return {
    props: { data: response }
  }
}

export default Static
