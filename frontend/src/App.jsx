import './App.css'
import Card from './components/Card'

function App() {
  const number = 1

  return (
    <>
      {number === 1 ?  (
        <>
          <Card info={{title: "My project", year: "2026"}}/>
          <Card info={{title: "My previous project", year: "2022"}}/>
        </>
      ) : (
        <>
        <Card info={{title: "My first ever project", year: "2019"}}/>
        </>
      )}
    </>
  )
}

export default App