import React, {useEffect} from "react";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const OrderDescriptionView = (props) => {

    const [localDescription, setLocalDescription] = React.useState('');

    const {description, setDescription} = props;

    const handleChange = (event) => {
        const newValue = event.target.value;
        setLocalDescription(newValue);
        setDescription(newValue);

    };

    useEffect(() => {
        if (description !== '') {
            setLocalDescription(description);
        }
    }, [description]);

    return (
        <Box>
            <TextField
                id="outlined-multiline-static"
                label="Описание заказа"
                multiline
                onChange={handleChange}
                value={localDescription}
                rows={4}
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
            />
            <Typography variant="caption" gutterBottom sx={{display: 'block', color: 'grey'}}>
                Описание поможет более детально понять суть заказа
            </Typography>
        </Box>
    )
}

export default OrderDescriptionView;