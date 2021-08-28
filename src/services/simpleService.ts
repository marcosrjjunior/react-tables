type FetchDataProps = {
  page: number
  perPage?: number
}

const fetchData = async ({ page, perPage = 40 }: FetchDataProps) => {
  // TODO: implement your error handler here : )
  const response = await fetch(
    `/api/simple?page=${page}&perPage=${perPage}`
  ).then(response => response.json())

  return response
}

export { fetchData }
