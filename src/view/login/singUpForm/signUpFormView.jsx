import React, {useContext, useState} from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    LineText,
    MutedLink,
    SubmitButton,
} from "../../../components/accountBox/common.jsx";
import {Marginer} from "../../../components/accountBox/marginer";
import {AccountContext} from '../../../components/accountBox/accountContext';
import {useNavigate} from "react-router-dom";
import {Alert, InputAdornment, OutlinedInput, Snackbar, Stack, TextField} from "@mui/material";
import ControlSingUpFormView from "./ControlSingUpFormView.jsx";
import {parseJwt, signIn, signUp} from "../../../service/authSertvice/authService";
import {getApiUserInfo} from "../../../service/userService/userService";

export function SignUpFormView(props) {

    const {switchToSignin} = useContext(AccountContext);
    const [error, setError] = useState([]);
    const [showError, setShowError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        try {
            const response = await signUp(firstName, lastName, email, password);
            const token = response.token; // Предполагается, что токен приходит в поле "token"
            sessionStorage.setItem('token', token);
            console.log('Вход успешен, токен:', token);
            const userInfo = parseJwt(token); // Извлекаем информацию о пользователе
            await getApiUserInfo(userInfo.userId);
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
                    <ControlSingUpFormView errorData={error}
                                           userFirstName={setFirstName}
                                           userLastName={setLastName}
                                           userEmail={setEmail}
                                           userPass={setPassword}/>
                </FormContainer>
                <Marginer direction="vertical" margin={10}/>
                <SubmitButton onClick={handleSubmit} type="submit">Создать</SubmitButton>
                <Marginer direction="vertical" margin="5px"/>
                <LineText>
                    У вас уже есть аккаунт?{" "}
                    <BoldLink onClick={switchToSignin} href="#">
                        Войти
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