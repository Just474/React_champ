export default function Auth(){
    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src="/img/53f7b6fb9842421c3ae8d5a2e2390226.jpeg"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Авторизация</h1>
                            <form method="post" className="space-form">
                                <input type="email" required placeholder="Введите ваш email" name="email"
                                       className="form-control"/>
                                <input type="password" required placeholder="Введите пароль" name="password "
                                       className="form-control"/>
                                <input type="submit" value="Войти" className="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}