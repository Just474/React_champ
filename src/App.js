import './App.css';
import Header from "./components/Header";
import {Routes, Route, Router, BrowserRouter} from "react-router-dom";
import Gagarin from "./components/Gagarin";
import Footer from "./components/Footer";
import Missions from "./components/Missions";
import Flight from "./components/Flight";
import Auth from "./components/Auth";
import Reg from "./components/Reg";
import Booking from "./components/Booking";
import AddFlight from "./components/Add-flight";
import Search from "./components/Search";


export default function App() {
    return (
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Gagarin />}/>
                <Route path="/missions" element={<Missions />}/>
                <Route path="/flight" element={<Flight />}/>
                <Route path="/auth" element={<Auth />}/>
                <Route path="/reg" element={<Reg />}/>
                <Route path="/booking" element={<Booking />}/>
                <Route path="/add-flight" element={<AddFlight />}/>
                <Route path="/search" element={<Search />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    );
}


