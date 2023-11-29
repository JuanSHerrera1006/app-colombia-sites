import { useEffect } from 'react'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { createFeature } from '../utils/feature'

export const useMapFeatures = ({ map, route }) => {
  const updateRouteFeature = () => {
    if (!map || !map.olMap || !route) return

    const adjustView = (feature) => {
      const view = map.olMap.getView()
      view.fit(feature.getGeometry(), {
        padding: [50, 50, 50, 50],
        duration: 1000,
      })
    }

    const feature = createFeature(route)
    adjustView(feature)

    const source = new VectorSource({
      features: [feature],
    })

    const vectorLayer = new VectorLayer({
      source: source,
    })

    map.olMap.addLayer(vectorLayer)
    return () => {
      map.olMap.removeLayer(vectorLayer)
    }
  }

  useEffect(updateRouteFeature, [map, route])
}
