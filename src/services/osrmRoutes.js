const BASE_ENDPOINT_ROUTES_OSRM = '//router.project-osrm.org/route/v1/driving/'

export const getRoute = async (startPoint, finalPoint) => {
  const url =
    BASE_ENDPOINT_ROUTES_OSRM +
    startPoint.join() +
    ';' +
    finalPoint.join() +
    '?overview=full'
  const res = await fetch(url)
  const data = await res.json()
  const { routes } = data
  return routes
}
