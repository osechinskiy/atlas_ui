import React, {useContext, useState} from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    LineText,
    SubmitButton,
} from "../../../components/accountBox/common.jsx";
import {Marginer} from "../../../components/accountBox/marginer";
import {AccountContext} from '../../../components/accountBox/accountContext';
import {useNavigate} from 'react-router-dom';
import ControlFormView from "./ControlFormView.jsx";
import {parseJwt, signIn} from "../../../service/authSertvice/authService";
import {Alert, Snackbar} from "@mui/material";
import {getApiUserInfo} from "../../../service/userService/userService";

export function SingInFormView() {

    const {switchToSignup} = useContext(AccountContext);
    const [error, setError] = useState([]);
    const [showError, setShowError] = useState(false); // Состояние для управления видимостью сообщения об ошибке
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        try {
            const response = await signIn(login, password); // Используем сервис для входа
            const token = response.token; // Предполагается, что токен приходит в поле "token"

            if (token) {
                // Сохраняем токен в localStorage
                sessionStorage.setItem('token', token);
                const userInfo = parseJwt(token);
                console.log(userInfo);
                await getApiUserInfo(userInfo.userId);

            }
            window.location.reload();
            navigate('/');

        } catch (e) {
            const errorData = JSON.parse(e.message)
            console.log(errorData)
            setError(errorData);
            if (errorData.message) {
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 2000);
            }
        }
    };

    return (
        <React.Fragment>
            <BoxContainer>
                <FormContainer>
                    <Marginer direction="vertical" margin={60}/>
                    <ControlFormView errorData={error} username={setLogin} userpassword={setPassword}/>
                </FormContainer>
                <Marginer direction="vertical" margin={10}/>
                <Marginer direction="vertical" margin="1.6em"/>
                <SubmitButton type="submit" onClick={handleSubmit}>Войти</SubmitButton>
                <Marginer direction="vertical" margin="5px"/>
                <LineText>
                    У вас нет учетной записи?{" "}
                    <BoldLink onClick={switchToSignup} href="#">
                        Создать
                    </BoldLink>
                </LineText>
            </BoxContainer>
            <Snackbar
                open={showError}
                autoHideDuration={2000}
                onClose={() => setShowError(false)}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                <Alert variant="filled" sx={{fontFamily: '"Montserrat"'}} onClose={() => setShowError(false)}
                       severity="error">
                    {error.message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );

}