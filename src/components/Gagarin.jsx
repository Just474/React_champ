import {useEffect, useState} from "react";


export default function Gagarin() {
    const [gagarin, setGagarin] = useState(null)

    useEffect(() => {
        fetch('https://ethelle.ru/')
            .then(res => res.json())
            .then(res => setGagarin(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(gagarin)
    return (
        <>
            <main>
                <section className="gagarin-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 gagarin-img">
                                <img src="https://interesnyefakty.org/wp-content/uploads/Foto-YUriya-Gagarina-8.jpg"/>
                            </div>
                            {!gagarin ? (
                                <p>Загрузка...</p>
                            ) : (
                                gagarin.map(item =>
                                    (
                                        <div className="col-md-6 col sm-12" key={item.cosmonaut.name}>
                                            <h1>{item.cosmonaut.name}</h1>
                                            <p className="birthday">{item.cosmonaut.birthdate}</p>
                                            <p className="rank">{item.cosmonaut.rank}</p>
                                            <div className="bio">
                                                <p>{item.cosmonaut.bio.early_life}</p>
                                                <p>{item.cosmonaut.bio.career}</p>
                                                <p>{item.cosmonaut.bio.post_flight}</p>
                                            </div>
                                            <a className="btn btn-primary" href="#">К списку миссий</a>
                                        </div>
                                    )
                                )
                            )}

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}