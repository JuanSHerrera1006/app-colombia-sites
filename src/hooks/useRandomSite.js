import { useEffect, useState } from 'react'
import { getSitesInfo } from '../services/sites'

export const useRandomSite = () => {
  const [randomSite, setRandomSite] = useState({})

  const getRandomSite = (data) => data[Math.floor(Math.random() * data.length)]

  const updateRandomSite = () => {
    getSitesInfo()
      .then((result) => {
        const randomSiteData = getRandomSite(result)
        setRandomSite(randomSiteData)
      })
      .catch((err) => console.error(err))
  }

  useEffect(updateRandomSite, [])
  return { randomSite, updateRandomSite }
}
