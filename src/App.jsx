import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contato from './components/Contato'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Contato />
      </main>
    </>
  )
}

export default App
