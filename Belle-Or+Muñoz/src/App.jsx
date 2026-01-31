import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  const categories = ["Anillos", "Cadenitas", "Pulseras", "Aros", "Conjuntos"]

  return (
    <div>
      <NavBar categoriesNav = {categories}></NavBar>
    </div>
  )
}

export default App
