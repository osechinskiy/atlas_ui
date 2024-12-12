import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Box from "@mui/material/Box";

const YandexMap = ({ coordinates }) => {
    const mapState = {
        center: coordinates,
        zoom: 13,
    };

    return (
        <YMaps query={{ apikey: '65b6dcd1-9dc3-4e84-a709-a565a2f7a536' }}>
            <Box sx={{borderRadius: 3, boxShadow: 3, width: '100%'}}>
                <Map state={mapState} width="100%" height="400px">
                    <Placemark geometry={coordinates} />
                </Map>
            </Box>

        </YMaps>
    );
};

export default YandexMap;
