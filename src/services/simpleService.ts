type FetchDataProps = {
  page: number
  perPage?: number
}

type DataType = {
  id: number
  first_name: string
  last_name: string
  email: string
  dob: Date
}

type FetchDataResponse = { data: DataType[]; pages: number }

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

export type { DataType }

export { fetchData }
