import Papa from 'papaparse'
import csvFile from '../assets/csv/sitios_turisticos.csv'

export function getSitesInfo() {
  return new Promise((resolve, reject) => {
    const papaConfig = {
      complete: (result) => {
        resolve(result.data)
      },
      error: (err) => {
        reject(err)
      },
      download: true,
      header: true,
      delimiter: ',',
      skipEmptyLines: true,
    }

    Papa.parse(csvFile, papaConfig)
  })
}
