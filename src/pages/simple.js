import Image from 'next/image'
import ViewSource from 'components/ViewSource'
import { bgWrap, bgText } from '../styles.module.css'
import styles from '../styles.module.css'

/* Generate faker data
function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();
*/

const Simple = ({data}) => (
  <div className={styles.container}>
    <div className={styles.card}>
    <ViewSource pathname="pages/simple.js" />
    {console.log(data)}

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Random number</th>
        </tr>
      </thead>

      <tbody>
        {data.map(row => (
          <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td>{row.email}</td>
          <td>{row.random_number}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
)

export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST}/api/simple`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

export default Simple
