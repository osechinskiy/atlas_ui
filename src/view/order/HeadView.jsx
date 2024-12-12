import React from "react";
import Box from "@mui/material/Box";
import BackButton from "../../components/button/BackButtonComponent.jsx";
import Typography from "@mui/material/Typography";
import {formatDateTime} from "../../service/orderService/orderService";
import PropTypes from "prop-types";

const HeadView = ({data}) => {
    return (
            <Box sx={{display: 'flex', justifyContent:'space-evenly'}}>
                <BackButton/>
                <Typography variant="body2" sx={{color: 'text.secondary', alignItems: 'center'}}>
                    {data?.creationTimestamp ? ("Опубликовано " + formatDateTime(data?.creationTimestamp)) : null}
                </Typography>
            </Box>
    )
};

HeadView.propTypes = {
    data: PropTypes.shape({
        creationTimestamp: PropTypes.string,
    })
}

export default HeadView;