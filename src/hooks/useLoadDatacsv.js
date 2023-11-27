import { useEffect, useState } from 'react'
import { getSitesInfo } from '../services/sites'

export const useLoadDatacsv = () => {
  const [data, setData] = useState([])

  const loadData = () => {
    getSitesInfo((err, result) => {
      if (err) console.error(err)
      else setData(result)
    })
  }

  useEffect(loadData, [])
  return { data, loadData }
}
