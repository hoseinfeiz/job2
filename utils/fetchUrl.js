const DelayMaker = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const fetchUrl = async ({ url, method }) => {
  await DelayMaker(3000)
  const res = await fetch(url, {
    method: method,
  })
  const response = await res.json()
  return response
}

export default fetchUrl
