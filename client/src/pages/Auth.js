import React, {useContext, useState} from 'react';
import {Card, Container, Form, FormControl, Button, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async  () => {
        try {
            let data;
            if (isLogin) {
                data = await  login(email, password)
            } else {
                data = await  registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}

        >
            <Card style={{width:680}} className="p-5">
                <h2 className="m-auto">
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        placeholder="Введите почту"
                        className="mt-3"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        placeholder="Введите пароль"
                        className="mt-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">

                        <Button
                            variant={"outline-dark"}
                            onClick={click}
                            className="mb-3"
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        {isLogin ?
                            <div>
                                Нет акка? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;