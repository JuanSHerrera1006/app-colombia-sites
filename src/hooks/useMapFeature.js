import { useState, useEffect } from 'react'
import { OSM } from 'ol/source'
import TileLayer from 'ol/layer/Tile'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { createFeature } from '../utils/feature'

export const useMapFeatures = (map) => {
  const [mapFeatures, setMapFeatures] = useState([])

  const adjustView = (feature) => {
    const view = map.olMap.getView()
    view.fit(feature.getGeometry(), {
      padding: [50, 50, 50, 50],
      duration: 1000,
    })
  }
  const addRouteToMap = (route) => {
    const feature = createFeature(route)
    adjustView(feature)
    setMapFeatures([feature])
  }

  useEffect(() => {
    if (!map || !map.olMap) return

    const layer = new TileLayer({
      source: new OSM(),
    })

    map.olMap.addLayer(layer)

    const source = new VectorSource({
      features: mapFeatures,
    })

    const vectorLayer = new VectorLayer({
      source: source,
    })

    map.olMap.addLayer(vectorLayer)

    return () => {
      map.olMap.removeLayer(vectorLayer)
    }
  }, [map, mapFeatures])

  return { addRouteToMap }
}
