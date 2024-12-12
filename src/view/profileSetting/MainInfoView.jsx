import React, {useEffect, useState} from "react";
import {FormControlLabel, FormLabel, RadioGroup, Stack, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Radio from '@mui/material/Radio';
import DatePickerComponent from "../../components/datePicker/DatePickerComponent.jsx";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import {getFullUserInfo, updateUserMainInfo} from "../../service/userService/userService";

const MainInfoView = (props) => {

    const {data} = props;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: dayjs(),
        gender: ''
    });

    const [showInfo, setShowInfo] = useState(false);
    const [error, setError] = useState([]);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        let userInfo = {
            id: data.id,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            birthday: formData.birthday.format('YYYY-MM-DD'),
            gender: formData.gender,
        };

        updateUserMainInfo(userInfo)
            .then((res) => {
                if (res.ok) {
                    setShowInfo(true);
                    setMessage(`Информация обновлена`);
                }
            })
            .catch((e) => {
                const errorData = JSON.parse(e.message)
                console.log(errorData)
                setError(errorData);
            })

    }

    useEffect(() => {
        setFormData({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            birthday: dayjs(data.birthday),
            gender: data.gender
        });
    }, [data]);

    return (
        <Stack spacing={2}>
            <TextField
                error={!!error?.firstName}
                helperText={error?.firstName || ''}
                id="firstName"
                name="firstName"
                label="Имя"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
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
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#333333', // Цвет лейбла при фокусе
                    },
                }}/>
            <TextField
                error={!!error?.lastName}
                helperText={error?.lastName || ''}
                id="lastName"
                name="lastName"
                label="Фамилия"
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
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
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#333333', // Цвет лейбла при фокусе
                    },
                }}/>
            <TextField
                error={!!error?.email}
                helperText={error?.email || ''}
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
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
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#333333', // Цвет лейбла при фокусе
                    },
                }}/>
            <FormControl>
                <FormLabel
                    id="demo-controlled-radio-buttons-group"
                    sx={{color: '#333333'}}>
                    Пол
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="gender-label"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="FEMALE"
                                      control={<Radio sx={{
                                          '&.Mui-checked': {
                                              color: 'rgba(241, 196, 15, 1)',
                                          },
                                      }}/>} label="Женский"/>
                    <FormControlLabel value="MALE" control={<Radio sx={{
                        '&.Mui-checked': {
                            color: 'rgba(241, 196, 15, 1)',
                        },
                    }}/>} label="Мужской"/>
                </RadioGroup>
            </FormControl>
            <DatePickerComponent
                startDate={formData.birthday}
                setStartDate={(date) => setFormData({...formData, birthday: date})}
                label={"Дата рождения"}/>
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
                > Сохранить </Button>
            </Box>
        </Stack>
    );
}

export default MainInfoView;