import {useState, useEffect} from 'react'

export default function Missions() {
    const [missions, setMissions] = useState(null)

    useEffect(() => {
        fetch('https://ethelle.ru/1.php')
            .then(res => res.json())
            .then(res => setMissions(res))
            .catch(err => console.error(err))
    },[])

    console.log(missions)
    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src="/img/c89cfefaba0247d8a21e071e318b57d2.jpeg"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Миссии</h1>
                            {
                                !missions ? (
                                    <p>Загрузка...</p>
                                ) : (
                                   missions.map(index => (
                                       <div className="flight" key={index.mission.name}>
                                           <h2>{index.mission.name}</h2>
                                           <h3>{index.mission.launch_details.launch_site.name}</h3>
                                           <p>Дата запуска: <span className="birthday">{index.mission.launch_details.launch_date}</span></p>
                                           <h3>Миссия:</h3>
                                           <div className="">
                                               <p className="pilot">{index.mission.landing_details.landing_site.name}</p>
                                               <p className="small">{index.mission.landing_details.landing_date}</p>
                                           </div>
                                           <h4>Командный модуль</h4>
                                           <p>{index.mission.spacecraft.command_module}</p>
                                           <h4>{index.mission.spacecraft.lunar_module}</h4>
                                           <p>Орел</p>
                                           <h3>Члены экипажа:</h3>
                                           <div className="">
                                               {index.mission.spacecraft.crew.map( crew =>
                                                           (
                                                       <>
                                                           <p className="pilot">{crew.name}</p>
                                                           <p className="small">{crew.role}</p>
                                                       </>
                                                       ))}
                                           </div>
                                       </div>
                                   ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}