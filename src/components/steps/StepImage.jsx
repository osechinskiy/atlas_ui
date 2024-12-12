import React from 'react';
import Box from "@mui/material/Box";

const StepImage = ({ image }) => {

    return (
        <Box
            component="img"
            alt="left Img"
            src={image}
            sx={{
                position: 'absolute',
                bottom: '0%',
                right: '25%',
                width: '50%',
                mb: 1
            }}/>
    );
}

export default StepImage;