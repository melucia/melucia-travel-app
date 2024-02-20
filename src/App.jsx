import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import AllPlaces from "./pages/AllPlaces";
import PageNotFound from "./components/PageNotFound";
import RandomPlace from "./pages/RandomPlace";
import PlaceDetails from "./pages/PlaceDetails";
import HomePage from "./pages/HomePage";
import HomeCarousel from "./components/HomeCarousel";

function App() {
  return (
    <div className="font-nunito text-blue-950 bg-green-50">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<AllPlaces />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/places/:placeId" element={<PlaceDetails />} />
        <Route path="/randomplace" element={<RandomPlace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
