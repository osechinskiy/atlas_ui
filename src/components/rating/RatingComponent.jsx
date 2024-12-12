import React from 'react';
import {Rating, Box} from "@mui/material";
import {StarIcon} from "lucide-react";

const RatingComponent = () => {

    const value = 3.5;

    return (
        <Box>
            <Rating
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </Box>
    );
}

export default RatingComponent;