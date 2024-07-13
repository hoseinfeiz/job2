const DelayMaker = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchUrl = async ({ url, method }) => {
  await DelayMaker(3000)
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`, {
      method,
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export default fetchUrl
