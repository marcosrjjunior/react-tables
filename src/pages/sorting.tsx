import Link from 'next/link'
import { useEffect, useState } from 'react'

import { format } from 'date-fns'

import Overlay from 'components/Overlay/Overlay'
import Table from 'components/Table/Table'
import Pagination from 'components/Pagination/Pagination'
import Meta from 'components/Meta'
import ViewSource from 'components/ViewSource'
import { Card, Container } from 'components/Layout'
import { DataType, SortType, fetchDataWithSort } from 'services/simpleService'

const SortIcon = {
  asc: <span>&#8639;</span>,
  desc: <span>&#8643;</span>
}

const Sorting = () => {
  const [data, setData] = useState<DataType[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [sort, setSort] = useState<SortType>({
    column: '', // set the default column sort here if required
    direction: 'desc'
  })

  useEffect(() => {
    setIsLoading(true)
    fetchDataWithSort({ page, sort }).then(response => {
      // The setTimeout is just to simulate data coming from the server
      setTimeout(() => {
        setData(response.data)
        setTotalPages(response.pages)

        setIsLoading(false)
      }, 200)
    })
  }, [page, sort])

  const applySort = column => {
    let direction = 'asc'
    if (column === sort?.column && sort?.direction === 'desc') {
      return setSort({
        ...sort,
        ...{
          column: '',
          direction: 'desc'
        }
      })
    }

    if (sort?.direction === 'asc') {
      direction = 'desc'
      return setSort({ ...sort, ...{ column, direction } })
    }

    if (sort?.direction === 'desc') {
      setSort({ ...sort, ...{ column, direction } })
      return true
    }
  }

  return (
    <>
      <Meta title="Sorting - React tables" url="/sorting" />

      <Container>
        <Card>
          <ViewSource pathname="pages/sorting.js" />

          <h1>
            <Link href="/">&#8672; </Link> Sorting
          </h1>

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
                  <th onClick={() => applySort('first_name')}>
                    First name
                    {sort?.column === 'first_name'
                      ? SortIcon[sort.direction]
                      : ''}
                  </th>

                  <th onClick={() => applySort('last_name')}>
                    Last name
                    {sort?.column === 'last_name'
                      ? SortIcon[sort.direction]
                      : ''}
                  </th>
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

export default Sorting
