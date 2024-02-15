import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./component/Navbar"
import Footer from "./components/Footer"
import AboutPage from './pages/AboutPage'
import AllPlaces from "./pages/AllPlaces"
import PageNotFound from "./components/PageNotFound"
import Search from "./components/Search"
import RandomPlace from "./components/RandomPlace"

function App() {

  return (
    <>
      <div>
        <h1>Melucia</h1>
      </div>
      <Navbar />
      <Search />
      <RandomPlace />
      <Routes>
        <Route path='/' element={<AllPlaces />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/:placeId" element={<PlaceDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
