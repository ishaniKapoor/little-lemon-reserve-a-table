import React, {useState} from "react";

function BookingPage() {
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(["Birthday", "Anniversary"]);

  const getFormIsValid = date && time && guests > 0 && occasion;
  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingDetails = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    };
    console.log("Booking Details:", bookingDetails);
    alert(`Reservation made for ${guests} guests on ${date} at ${time}. Occasion: ${occasion}`);
    // Here you would typically send the bookingDetails to your server or API
  }
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Welcome to the booking page. Please select your preferred date and time.</p>
      
      <form onSubmit={handleSubmit}>
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" id="booking-res-date" name="booking-date"/>
        <label htmlFor="res-time">Choose time</label>
        <select value={time} onChange={(e) => setTime(e.target.value)} id="res-time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input value={guests} onChange={(e) => setGuests(e.target.value)} type="number" id="guests" placeholder="1" min="1" max="10"/>
        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" disabled={!getFormIsValid} value="Make Your reservation" className="btn btn-primary"/>
      </form>
    </div>
  );
}

export default BookingPage;