import { useEffect, useState } from 'react'
import { getRoute } from '../services/osrmRoutes'
import { getUserLocation } from '../services/userLocation'

export const useRoute = ({ randomSite }) => {
  const [route, setRoute] = useState('')

  const updateRoute = () => {
    console.log('Updating route with randomSite:', randomSite)

    if (Object.keys(randomSite).length === 0) return

    const { longitud, latitud } = randomSite

    getUserLocation()
      .then((lngLatUser) => {
        getRoute(lngLatUser, [longitud, latitud])
          .then((data) => setRoute(data[0]?.geometry))
          .catch((err) => console.error(err))
      })
      .catch((err) => console.err(err))
  }

  useEffect(updateRoute, [randomSite])
  return { route }
}
