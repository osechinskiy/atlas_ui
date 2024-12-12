import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment, OutlinedInput} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import PropTypes from "prop-types";

const PasswordInput = ({ label, value, onChange, showPassword, onToggleShowPassword }) => {
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl variant="outlined" sx={{ width: '100%' }}>
            <InputLabel sx={{
                "&.MuiInputLabel-root.Mui-focused": {
                    color: '#333333'
                },
                fontFamily: 'Montserrat',
            }}>{label}</InputLabel>
            <OutlinedInput
                onChange={onChange}
                value={value}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={showPassword ? 'hide the password' : 'display the password'}
                            onClick={onToggleShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
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
    );
};

PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    showPassword: PropTypes.bool,
    onToggleShowPassword: PropTypes.func.isRequired
};

export default PasswordInput;