import React, {useEffect, useState} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {InputAdornment, OutlinedInput} from "@mui/material";
import Box from "@mui/material/Box";

const ResumeExperienceView = ({experience, setExperience}) => {

    const [localExperience, setLocalExperience] = useState(0);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setLocalExperience(parseInt(newValue));
        setExperience(parseInt(newValue));
    }

    useEffect(() => {
        if (experience !== '') {
            setLocalExperience(experience);
        }
    }, [experience]);

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount"
                            sx={{
                                "&.MuiInputLabel-root.Mui-focused": {
                                    color: '#333333'
                                },
                            }}>Стаж работы</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Стаж работы"
                    onChange={handleChange}
                    value={localExperience}
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

export default ResumeExperienceView;