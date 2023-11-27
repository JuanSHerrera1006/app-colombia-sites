import { useLoadDatacsv } from './hooks/useLoadDatacsv'
import './App.css'

function App() {
  const { data, loadData } = useLoadDatacsv()
  console.log(data)
  return <p>Show console</p>
}

export default App
