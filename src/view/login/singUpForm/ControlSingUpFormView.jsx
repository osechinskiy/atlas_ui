import React, {useState} from 'react';
import {FormHelperText, InputAdornment, OutlinedInput, Stack, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const ControlSingUpFormView = (props) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {errorData, userFirstName, userLastName, userEmail, userPass} = props;

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeFirstName = (event) => {
        const newValue = event.target.value;
        setFirstName(newValue);
        userFirstName(newValue);
    };

    const handleChangeLastName = (event) => {
        const newValue = event.target.value;
        setLastName(newValue);
        userLastName(newValue);
    };

    const handleChangeEmail = (event) => {
        const newValue = event.target.value;
        setEmail(newValue);
        userEmail(newValue);
    };

    const handleChangePassword = (event) => {
        const newValue = event.target.value;
        setPassword(newValue);
        userPass(newValue);
    };

    return (
        <Stack spacing={2}>
            <TextField id="outlined-basic"
                       error={!!errorData?.firstName}
                       helperText={errorData?.firstName || ''}
                       label="Имя"
                       variant="outlined"
                       onChange={handleChangeFirstName}
                       value={firstName}
                       size="small"
                       sx={{
                           width: '100%',
                           '& .MuiOutlinedInput-root': {
                               '&:hover fieldset': {
                                   borderColor: 'rgba(241, 196, 15, 1)', // Цвет рамки при наведении
                               },
                               '&.Mui-focused fieldset': {
                                   borderColor: 'rgba(241, 196, 15, 1)', // Цвет рамки при фокусе
                               },
                           },
                           '& .MuiInputLabel-root': {
                               fontFamily: 'Montserrat',
                           },
                           '& .MuiInputLabel-root.Mui-focused': {
                               color: '#333333', // Цвет лейбла при фокусе
                           },
                       }}/>
            <TextField id="outlined-basic"
                       error={!!errorData?.lastName}
                       helperText={errorData?.lastName || ''}
                       label="Фамилия"
                       variant="outlined"
                       onChange={handleChangeLastName}
                       value={lastName}
                       size="small"
                       sx={{
                           width: '100%',
                           '& .MuiOutlinedInput-root': {
                               '&:hover fieldset': {
                                   borderColor: 'rgba(241, 196, 15, 1)', // Цвет рамки при наведении
                               },
                               '&.Mui-focused fieldset': {
                                   borderColor: 'rgba(241, 196, 15, 1)', // Цвет рамки при фокусе
                               },
                           },
                           '& .MuiInputLabel-root': {
                               fontFamily: 'Montserrat',
                           },
                           '& .MuiInputLabel-root.Mui-focused': {
                               color: '#333333', // Цвет лейбла при фокусе
                           },
                       }}/>
            <TextField id="outlined-basic"
                       error={!!errorData?.email}
                       helperText={errorData?.email || ''}
                       label="Email"
                       variant="outlined"
                       onChange={handleChangeEmail}
                       value={email}
                       size="small"
                       sx={{
                           width: '100%',
                           '& .MuiOutlinedInput-root': {
                               '&:hover fieldset': {
                                   borderColor: 'rgba(241, 196, 15, 1)', // Цвет рамки при наведении
                               },
                               '&.Mui-focused fieldset': {
                                   borderColor: 'rgba(241, 196, 15, 1)', // Цвет рамки при фокусе
                               },
                           },
                           '& .MuiInputLabel-root': {
                               fontFamily: 'Montserrat',
                           },
                           '& .MuiInputLabel-root.Mui-focused': {
                               color: '#333333', // Цвет лейбла при фокусе
                           },
                       }}/>
            <FormControl variant="outlined" error={!!errorData?.password}>
                <InputLabel size="small"
                            sx={{
                                "&.MuiInputLabel-root.Mui-focused": {
                                    color: '#333333'
                                },
                                fontFamily: 'Montserrat',
                            }}>Пароль</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChangePassword}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    sx={{
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgba(241, 196, 15, 1)'
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgba(241, 196, 15, 1)'
                        },
                    }}
                />
                {errorData?.password && <FormHelperText>{errorData.password}</FormHelperText>}
            </FormControl>
        </Stack>
    );
}

export default ControlSingUpFormView;