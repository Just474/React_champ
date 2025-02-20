export default function Reg(){
    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src="/img/53f7b6fb9842421c3ae8d5a2e2390226.jpeg"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Регистрация</h1>
                            <form method="post" className="space-form">
                                <input type="text" required placeholder="Введите ваше имя" name="first-name"
                                       className="form-control"/>
                                <input type="text" required placeholder="Введите вашу фамилию" name="last_name"
                                       className="form-control"/>
                                <input type="text" required placeholder="Введите ваше отчество" name="patronymic"
                                       className="form-control"/>
                                <input type="email" required placeholder="Введите ваш email" name="email"
                                       className="form-control"/>
                                <input type="password" required placeholder="Введите пароль" name="password "
                                       className="form-control"/>
                                <input type="date" required placeholder="Введите вашу дату рождения" name="birth_date"
                                       className="form-control"/>
                                <input type="submit" value="Зарегистрироваться" className="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}