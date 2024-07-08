const DelayGen = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const fetchUrl = async ({ url, method }) => {
  await DelayGen(3000)
  const response = await fetch(url, {
    method: method,
  })
  const res = await response.json()
  return res
}

export default fetchUrl
