import { NavLink } from "react-router-dom";
import { date as json } from '../data';
import { useEffect, useState } from "react";

export default function Flight() {
    const [availableSeats, setAvailableSeats] = useState([]);

    useEffect(() => {
        setAvailableSeats(
            json.map((item, index) => ({
                id: index,
                seat: item.seats_available
            }))
        );
    }, []);
    const handleAppointment = (e) => {
        const id = parseInt(e.target.id);

        setAvailableSeats(prevSeats =>
            prevSeats.map(seatitems =>
                seatitems.id === id ? { ...seatitems, seat:  seatitems.seat - 1 } : seatitems
            )
        );
    };

    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src="/img/67c9e921661452cf8ad11cde7a8124c0.jpeg" />
                        </div>

                        <div className="col-md-6 col sm-12">
                            <h1>Список космических рейсов</h1>

                            {json.length === 0 ? (
                                <p>Загрузка...</p>
                            ) : (
                                json.map((item, index) => {
                                    const seatInfo = availableSeats.find(seat => seat.id === index);

                                    return (
                                        <div className="booking-flight" key={index}>
                                            <div className="number">{item.flight_number}</div>
                                            <div className="arrival">{item.destination}</div>
                                            <div className="date">{item.launch_date}</div>
                                            <div className="amount">
                                                {seatInfo ? seatInfo.seat : "Загрузка..."}
                                            </div>
                                            <button
                                                onClick={handleAppointment}
                                                className={`btn btn-primary ${seatInfo && seatInfo.seat === 0 ? 'disabled' : ''}`}
                                                id={index}
                                                disabled={seatInfo && seatInfo.seat === 0}
                                            >
                                                Записаться
                                            </button>
                                        </div>
                                    );
                                })
                            )}

                            <NavLink className="btn btn-primary" to="/add-flight">Добавить рейс</NavLink>
                            <NavLink className="btn btn-secondary" to="/">На главную</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
