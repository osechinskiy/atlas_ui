import React, {useState} from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {Input} from "@mui/material";
import PropTypes from "prop-types";

const PhoneInput = ({value, onChange}) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <FormControl variant="standard" sx={{width: '100%'}}>
            <InputLabel
                        sx={{
                            "&.MuiInputLabel-root.Mui-focused": {
                                color: '#333333'
                            },
                        }}
            >
                Номер телефона
            </InputLabel>
            <Input
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                sx={{
                    "&.MuiInput-root::after": {
                        borderBottom: '2px solid rgba(241, 196, 15, 1)',
                    },
                }}
                startAdornment={
                    <InputAdornment
                        sx={{
                            color: isFocused ? 'rgba(241, 196, 15, 1)' : '#333333',
                        }}
                        position="start">
                        <PhoneIphoneIcon/>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

PhoneInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default PhoneInput;