import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutPage from './pages/AboutPage'
import AllPlaces from "./pages/AllPlaces"
import PageNotFound from "./components/PageNotFound"
import Search from "./components/Search"
import RandomPlace from "./pages/RandomPlace"
import PlaceDetails from "./pages/PlaceDetails"
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <div>
        <h1>Melucia</h1>
      </div>
      <NavBar />
      <Search />
      <RandomPlace />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/places' element={<AllPlaces />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/places/:placeId" element={<PlaceDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
