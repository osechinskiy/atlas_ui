import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const OrderDescriptionView = (props) => {

    const [orderName, setOrderName] = useState('');
    const {taskName, setTaskName} = props;

    const handleChange = (event) => {
        const newValue = event.target.value;
        setOrderName(newValue);
        setTaskName(newValue);

    };
    
    useEffect(() => {
        if (taskName !== '') {
            setOrderName(taskName);
        }
    }, [taskName]);

    return(
        <Box>
            <TextField id="outlined-basic"
                       label="Название заказа"
                       variant="outlined"
                       onChange={handleChange}
                       value={orderName}
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
            <Typography variant="caption" gutterBottom sx={{display: 'block', color: 'grey'}}>
                Название поможет специалистам быстрее понять, что нужно сделать
            </Typography>
        </Box>
    );
}

export default OrderDescriptionView;