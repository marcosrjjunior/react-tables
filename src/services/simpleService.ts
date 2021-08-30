type SortType = { column: string; direction: string }

type FetchDataProps = {
  page?: number
  perPage?: number
  sort?: SortType
}

type DataType = {
  id: number
  first_name: string
  last_name: string
  email: string
  dob: Date
}

type FetchDataResponse = { data: DataType[]; pages: number }

// ---------------------------------------------------------------

const fetchData = async ({
  page,
  perPage = 40
}: FetchDataProps): Promise<FetchDataResponse> => {
  // TODO: implement your error handler here : )
  const response = await fetch(
    `/api/simple?page=${page}&perPage=${perPage}`
  ).then(response => response.json())

  return response
}

// ---------------------------------------------------------------

const fetchDataWithSort = async ({
  sort = {
    column: '',
    direction: 'asc'
  }
}: FetchDataProps): Promise<FetchDataResponse> => {
  // TODO: implement your error handler here : )
  const response = await fetch(
    `/api/sort?column=${sort.column}&direction=${sort.direction}`
  ).then(response => response.json())

  return response
}

export type { DataType, SortType }

export { fetchData, fetchDataWithSort }
