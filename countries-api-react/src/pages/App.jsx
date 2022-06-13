import '../styles/App.css'
import Countries from '../components/Countries'
import SearchBar from '../components/SearchBar'

function App () {
  return (
    <div className='App container'>
      <SearchBar />
      <Countries />
    </div>
  )
}

export default App
