import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const DatePickerComponent = (props) => {

    const [value, setValue] = useState(dayjs());
    const {startDate, setStartDate, label} = props;

    const handler = (newValue) => {
        setValue(newValue);
        setStartDate(newValue);
    }

    useEffect(() => {
        if(startDate) {
            setValue(startDate);
        }
    }, [startDate]);

    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{width:'100%',
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
                        }}}
                    label={label}
                    value={value}
                    onChange={handler}
                />
            </LocalizationProvider>
        </Box>
    );
}

export default DatePickerComponent;