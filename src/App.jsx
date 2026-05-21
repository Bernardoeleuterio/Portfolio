import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contato from './components/Contato'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'

 export default function App() {
   return(
    <>
    <Navbar />
    <Home />
    <Sobre />
    <Projetos />
    <Contato />
    </>
    
  );
}

