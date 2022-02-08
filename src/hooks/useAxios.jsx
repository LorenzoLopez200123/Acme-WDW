import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAxios = () => {
  const [data, setData] = useState({ hits: [] })
  const [url, setUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return [{ data, isLoading, isError }, setUrl]
}
