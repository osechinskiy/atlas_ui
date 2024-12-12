import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CardBlockComponent = ({
                                title,
                                description,
                                image,
                                to
                            }) => {

    return (
        <Card
            component={Link} to={to}
            sx={{
                boxShadow: 0,
                textDecoration: "none",
                border: 2,
                borderRadius: 2,
                borderColor: '#f5f5f5',
                width: '47%',
                mb: 4,
                transition: '0.2s',
                '&:hover': {
                    color: 'white',
                    '& .MuiTypography-body2': {
                        color: 'white',
                    },
                    backgroundColor: 'rgba(241, 196, 15, 1)'
                },
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

CardBlockComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    to: PropTypes.string
}

export default CardBlockComponent;