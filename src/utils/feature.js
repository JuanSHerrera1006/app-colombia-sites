import { Style, Stroke } from 'ol/style'
import { Polyline } from 'ol/format'
import { Feature } from 'ol'
import { transform } from 'ol/proj'

const styles = {
  route: new Style({
    stroke: new Stroke({
      width: 6,
      color: [52, 168, 235, 0.9],
    }),
  }),
}

export const createFeature = (polyline) => {
  const route = new Polyline({
    factor: 1e5,
  }).readGeometry(polyline, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857',
  })

  const feature = new Feature(route)
  feature.setStyle(styles.route)
  return feature
}

export const to4326 = (coord) => {
  return transform([coord[0], coord[1]], 'EPSG:4326', 'EPSG:3857')
}
