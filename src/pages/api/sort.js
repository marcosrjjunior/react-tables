import simple from 'data/simple'
import { chunk, orderBy, isEmpty } from 'lodash'

/**
 * This is a simulation of an API using lodash to manipulate the data
 */
export default function handler(req, res) {
  const { column, direction, page = 1, perPage = 40 } = req.query

  if (page < 1) return 'Invalid page value'

  const response = isEmpty(column)
    ? simple
    : orderBy(simple, [column], [direction])

  const data = chunk(response, perPage)
  const pages = data.length

  res.status(200).json({ data: data[page - 1], pages })
}
