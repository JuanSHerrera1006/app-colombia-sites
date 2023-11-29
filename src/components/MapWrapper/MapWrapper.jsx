import { Row, Button } from 'react-bootstrap'
import { useMap } from '../../hooks/useMap'
import { useMapFeatures } from '../../hooks/useMapFeature'
import { useRoute } from '../../hooks/useRoute'
import { useRandomSite } from '../../hooks/useRandomSite'

export function MapWrapper() {
  const { randomSite, updateRandomSite } = useRandomSite()
  const { mapRef } = useMap()
  const { route } = useRoute({ randomSite })
  const { addRouteToMap } = useMapFeatures(mapRef.current)

  const onClickEvent = () => {
    updateRandomSite()
    addRouteToMap(route)
  }

  return (
    <>
      {randomSite.sitio}
      <Row className="pt-5" style={{ minHeight: '80vh' }}>
        <div ref={mapRef} style={{ width: '100%', height: '600px' }}></div>
        <Button onClick={onClickEvent}>Add Polyline</Button>
      </Row>
    </>
  )
}
