import React, {useState} from "react";
import Button from '@mui/material/Button';
import {InputAdornment, OutlinedInput, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {changeUserPassword} from "../../service/userService/userService";
import PasswordInput from "../../components/input/PasswordInputComponent.jsx";
import SnackbarComponent from "../../components/snackbar/SnackbarComponent.jsx";

const ChangePasswordView = ({data}) => {

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [showInfo, setShowInfo] = useState(false);
    const [error, setError] = useState([]);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState("");


    const handleToggleShowOldPassword = () => setShowOldPassword(prev => !prev);
    const handleToggleShowNewPassword = () => setShowNewPassword(prev => !prev);

    const handleChange = (setter) => (event) => setter(event.target.value);

    const handleSubmit = () => {
        const userId = data.id;
        let changePasswordRequest = {
            oldPassword: oldPassword,
            newPassword: newPassword,
        }
        changeUserPassword(userId, changePasswordRequest)
            .then((res) => {
                if (res.ok) {
                    setShowInfo(true);
                    setMessage(`Пароль успешно обновлен`);
                }
            })
            .catch((e) => {
                const errorData = JSON.parse(e.message)
                setError(errorData);
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 2000);
            })
    }

    return (
        <React.Fragment>
            <Stack spacing={2}>
                <PasswordInput
                    label="Текущий пароль"
                    value={oldPassword}
                    onChange={handleChange(setOldPassword)}
                    showPassword={showOldPassword}
                    onToggleShowPassword={handleToggleShowOldPassword}
                />
                <PasswordInput
                    label="Новый пароль"
                    value={newPassword}
                    onChange={handleChange(setNewPassword)}
                    showPassword={showNewPassword}
                    onToggleShowPassword={handleToggleShowNewPassword}
                />
                <Box sx={{width: '100%'}}>
                    <Button
                        component="label"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            width: '100%',
                            textTransform: 'none',
                            backgroundColor: '#333333',
                            boxShadow: 'none'
                        }}
                    >
                        Обновить пароль
                    </Button>
                </Box>
            </Stack>
            <SnackbarComponent
                open={showInfo}
                onClose={setShowInfo}
                message={message}
                isSuccess={true}/>
            <SnackbarComponent
                open={showError}
                onClose={setShowError}
                message={error.message}/>
        </React.Fragment>
    );
}

ChangePasswordView.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
    }),
};


export default ChangePasswordView;