import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center'}}>
            <IconButton sx={{color: 'rgba(241, 196, 15, 1)'}}
                        onClick={() => navigate(-1)}
                        aria-label="back">
                <KeyboardBackspaceIcon/>
            </IconButton>
            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                Вернуться назад
            </Typography>
        </Box>
    )
}

export default BackButton