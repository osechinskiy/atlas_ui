import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {FormHelperText} from "@mui/material";

const selectComponent = ({data, label, value, setValue, typographyText, noDataValue}) => {

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

    };

    return (
        <Box>
            <FormControl
                fullWidth
                variant="outlined"
                error={data.length === 0}
            >
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                        "&.MuiInputLabel-root.Mui-focused": {
                            color: '#333333'
                        },
                    }}>{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                    sx={{
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgba(241, 196, 15, 1)'
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgba(241, 196, 15, 1)'
                        },
                    }}
                    inputProps={{readOnly: (data.length === 0)}}
                >
                    {data.map((entry, index) => (
                        <MenuItem key={index} value={entry.value}>
                            {entry.title}
                        </MenuItem>
                    ))}
                </Select>
                {
                    data.length === 0 && (
                        <FormHelperText>{noDataValue}</FormHelperText>
                    )
                }
            </FormControl>
            {data.length !== 0 && (
                <Typography variant="caption" gutterBottom sx={{display: 'block', color: 'grey'}}>
                    {typographyText}
                </Typography>
            )
            }
        </Box>
    )
};

Select.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    typographyText: PropTypes.string,
    noDataValue: PropTypes.string,
}

export default selectComponent;