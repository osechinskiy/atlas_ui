import React, {useState} from 'react';
import {FormHelperText, InputAdornment, OutlinedInput, Stack, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const SignInForm = (props) => {

    const {errorData, username, userpassword} = props;
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = (event) => {
        const newValue = event.target.value;
        setEmail(newValue);
        username(newValue);
    };

    const handleChangePassword = (event) => {
        const newValue = event.target.value;
        setPassword(newValue);
        userpassword(newValue);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Stack spacing={2}>
            <TextField id="outlined-basic"
                       error={!!errorData?.email}
                       helperText={errorData?.email || ''}
                       label="Email"
                       variant="outlined"
                       onChange={handleChangeLogin}
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
                           '& .MuiInputLabel-root' : {
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
                    onChange={handleChangePassword}
                    value={password}
                    type={showPassword ? 'text' : 'password'}
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
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Пароль"
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

export default SignInForm;