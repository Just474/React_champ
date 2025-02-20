import {NavLink} from "react-router-dom";
import {useState} from "react";
import {date as json} from '../data'

export default function AddFlight() {

    const [form, setForm] = useState({
        flight_number: "",
        destination: "",
        launch_date: "",
        seats_available: ""
    })


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        json.push(form);

        setForm(
            {
                flight_number: "",
                destination: "",
                launch_date: "",
                seats_available: ""
            }
        )
        console.log(json)
    }

    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src="/img/53f7b6fb9842421c3ae8d5a2e2390226.jpeg"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Добавить рейс</h1>
                            <form className="space-form" onSubmit={handleSubmit}>
                                <input type="number" value={form.flight_number} required placeholder="Номер рейса"
                                       name="flight_number"
                                       className="form-control" onChange={handleChange}/>
                                <input type="text" value={form.destination} required placeholder="Место прибытия"
                                       name="destination"
                                       className="form-control" onChange={handleChange}/>
                                <input type="date" value={form.launch_date} required placeholder="Дата"
                                       name="launch_date"
                                       className="form-control" onChange={handleChange}/>
                                <input type="number" value={form.seats_available} required placeholder="Доступных мест"
                                       name="seats_available"
                                       className="form-control" onChange={handleChange}/>
                                <input type="submit" value="Сохранить" className="btn btn-primary"/>
                                <NavLink className={"btn btn-secondary"} to='/'>К списку рейсов</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}