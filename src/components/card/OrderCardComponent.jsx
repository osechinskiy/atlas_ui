import React from 'react';
import {Card, CardActionArea, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Skeleton} from "@mui/lab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";


const OrderCardComponent = ({ loading, data }) => {

    const navigate = useNavigate();

    return (
        <Card
            sx={{
                boxShadow: 0,
                border: 1,
                borderRadius: 2,
                borderColor: 'divider',
                transition: '0.2s',
                '&:hover': {
                    color: 'white',
                    '& .MuiTypography-body2': {
                        color: 'white',
                    },
                    backgroundColor: 'rgba(241, 196, 15, 1)'
                },
            }}
            onClick={() => navigate(`/order/${data.id}`)}
        >
            <CardActionArea>
                <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {loading ? <Skeleton sx={{ width: '30%' }} animation="wave" /> : data?.title}
                        </Typography>
                        <Typography variant="h6">
                            {loading ? <Skeleton sx={{ width: '30%' }} animation="wave" /> : data?.amount + '₽'}
                        </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                            </React.Fragment>
                        ) : (
                            data?.description
                        )}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

OrderCardComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        amount: PropTypes.number,
        desiredCompletionDate: PropTypes.string,
    }),
};


export default OrderCardComponent;