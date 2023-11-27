import Papa from 'papaparse'
import csvFile from '../assets/csv/sitios_turisticos.csv'

export async function getSitesInfo(cb) {
  const papaConfig = {
    complete: (result) => {
      cb(null, result.data)
    },
    error: (err) => {
      cb(err, null)
    },
    download: true,
    header: true,
    delimeter: ',',
    skipEmptyLines: true,
  }
  Papa.parse(csvFile, papaConfig)
}
