import {Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function Main(){
    return (
        <main>
            <Routes>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/reservations" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
};

export default Main;