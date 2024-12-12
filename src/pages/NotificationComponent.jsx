import React, {useEffect, useState} from 'react';
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import {Box, Stack} from "@mui/material";
import BackButtonComponent from "../components/button/BackButtonComponent.jsx";
import PropTypes from "prop-types";
import Img from '../img/notification/1.png'
import { useLocation } from 'react-router-dom';


const NotificationComponent = ({data}) => {

    console.log( data)
    return (
        <MainContainerComponent>
            <Stack spacing={2} sx={{position: 'relative', height: '100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <BackButtonComponent/>
                </Box>
                {
                    data && data.length === 0 ? (
                    <Box
                        component="img"
                        alt="left Img"
                        src={Img}
                        sx={{
                            position: 'absolute',
                            bottom: '0%',
                            right: '25%',
                            width: '50%',
                            mb: 1
                        }}/>
                ) : (
                    <React.Fragment>

                    </React.Fragment>
                    )
                }
            </Stack>
        </MainContainerComponent>
    );
};

NotificationComponent.PropTypes = {
    data: PropTypes.array.isRequired,
}

export default NotificationComponent;