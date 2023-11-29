export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude])
      },
      (err) => {
        alert('No se puede obtener la geolocalizacion')
        console.error(err)
        reject()
      },
    )
  })
}
