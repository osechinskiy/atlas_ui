import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import {Stack} from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


const OrderStartDateView = (props) => {

    const [value, setValue] = useState(dayjs());
    const [checked, setChecked] = useState(false);
    const {startDate, setStartDate} = props;

    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: 'rgba(241, 196, 15, 1)',
            '&:hover': {
                backgroundColor: alpha('rgba(241, 196, 15, 1)', theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor:'rgba(241, 196, 15, 1)',
        },
    }));

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handler = (newValue) => {
        setValue(newValue);
        setStartDate(newValue);
    }

    useEffect(() => {
        if (startDate && startDate.isValid()) {
            setChecked(true);
            setValue(startDate);
        } else {
            setChecked(false);

        }
    }, [startDate]);

    return (
        <Box>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2} sx={{pl:1, alignItems: "center"}}>
                    <Typography variant="caption" gutterBottom>
                        Длительный заказ
                    </Typography>
                    <PinkSwitch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                </Stack>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            disabled={!checked}
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
                            }}
                            slotProps={{
                                day: {
                                    sx: {
                                        '&.MuiPickersDay-root.Mui-selected': {
                                            backgroundColor: 'rgba(241, 196, 15, 1)',
                                        }
                                    }
                                }
                            }}
                            label="Дата окончания заказа"
                            value={value}
                            onChange={handler}
                        />
                    </LocalizationProvider>
                    <Typography variant="caption" gutterBottom sx={{display: 'block', color: 'grey'}}>
                        Категория сужает область поиска заказа
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default OrderStartDateView;