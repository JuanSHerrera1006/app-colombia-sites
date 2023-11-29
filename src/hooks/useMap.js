import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { OSM } from 'ol/source'
import { to4326 } from '../utils/feature'
import { useRef, useEffect } from 'react'

export const useMap = () => {
  const mapRef = useRef(null)

  const initializeMap = () => {
    if (!mapRef.current) return

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: to4326([-75.56359, 6.25184]),
        zoom: 15,
      }),
      controls: [],
    })

    mapRef.current.olMap = map
    return () => {
      map.setTarget(null)
    }
  }

  useEffect(initializeMap, [])

  return { mapRef }
}
