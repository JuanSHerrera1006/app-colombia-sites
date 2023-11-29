import { Row, Button, Col } from 'react-bootstrap'
import { useMap } from '../../hooks/useMap'
import { useMapFeatures } from '../../hooks/useMapFeature'
import { useRoute } from '../../hooks/useRoute'
import { useRandomSite } from '../../hooks/useRandomSite'

export function MapWrapper() {
  const { randomSite, updateRandomSite } = useRandomSite()
  const { mapRef } = useMap()
  const { route } = useRoute({ randomSite })
  // Custom Hook to update the feature
  useMapFeatures({ map: mapRef.current, route })


  const onClickEvent = () => {
    console.log(randomSite)
    updateRandomSite()
  }

  return (
    <>

      <Row className='m-md-5'>
        <h1 className='pt-2'>{randomSite.sitio}</h1>
        <Col xs={12} lg={6} ref={mapRef} style={{height: '600px' }}></Col>
        <Col xs={12} lg={6} className='pt-xs-3' >
          <h3 className="mb-4">Detalles del Sitio:</h3>
          <ul className="list-unstyled">
            <li><strong>Barrio:</strong> {randomSite.barrio}</li>
            <li><strong>Comuna:</strong> {randomSite.comuna}</li>
            <li><strong>Dirección:</strong> {randomSite.direccion}</li>
            <li><strong>Imperdible:</strong> {randomSite.imperdible}</li>
            <li><strong>Latitud:</strong> {randomSite.latitud}</li>
            <li><strong>Longitud:</strong> {randomSite.longitud}</li>
            <li><strong>Tipo de Atractivo:</strong> {randomSite.tipo_atractivo}</li>
          </ul>
          <Button onClick={onClickEvent}>Dame un nuevo sitio</Button>
        </Col>
      </Row>
    </>
  )
}
