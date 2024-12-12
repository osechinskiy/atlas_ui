import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment, OutlinedInput} from "@mui/material";

const OrderAmountView = (props) => {

    const [localAmount, setLocalAmount] = useState(0);
    const {amount, setAmount} = props;

    const handleChange = (e) => {
        const newValue = e.target.value;
        setLocalAmount(parseInt(newValue));
        setAmount(parseInt(newValue));
    }

    useEffect(() => {
        if (amount !== '') {
            setLocalAmount(amount);
        }
    }, [amount]);

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount"
                            sx={{
                                "&.MuiInputLabel-root.Mui-focused": {
                                    color: '#333333'
                                },
                            }}>Стоимость заказа</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">₽</InputAdornment>}
                    label="Стоимость заказа"
                    onChange={handleChange}
                    value={localAmount}
                    inputProps={{ type: 'number'}}
                    sx={{
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgba(241, 196, 15, 1)'
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgba(241, 196, 15, 1)'
                        },
                    }}
                />
            </FormControl>
        </Box>
    );
}

export default OrderAmountView;