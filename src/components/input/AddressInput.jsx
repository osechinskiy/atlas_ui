import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import config from '../../config';
import {getCoordinates} from "../../service/orderService/orderService";
import PropTypes from "prop-types";


const AddressInput = ({address, location, setAddress, setLocation}) => {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        console.log(address)
        if (address && address !== '') {
            setQuery(address);
        }
        if (location !== null) {
            setCoordinates(location);
        }

        const loadYandexMaps = () => {
            if (typeof ymaps === 'undefined') {
                const script = document.createElement('script');
                script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${config.YANDEX_MAPS_API_KEY}`;
                script.async = true;
                script.onload = () => {
                    window.ymaps.ready(init);
                };
                document.body.appendChild(script);
            } else {
                window.ymaps.ready(init);
            }
        };

        const init = () => {
            const inputElement = document.getElementById('address-input');

            inputElement.addEventListener('input', async (event) => {
                setQuery(event.target.value);
                setAnchorEl(event.currentTarget);

                if (event.target.value.length > 2) {
                    const results = await getSuggestions(event.target.value);
                    setSuggestions(results);
                } else {
                    setSuggestions([]);
                }
            });
        };

        const getSuggestions = async (query) => {
            const myGeocoder = new window.ymaps.geocode(query);
            const results = await myGeocoder;
            return results.geoObjects.toArray().map((obj) => ({
                displayName: obj.getAddressLine(),
            }));
        };

        loadYandexMaps();

        return () => {
            setSuggestions([]);
            setAnchorEl(null);
        };
    }, []);

    const handleSuggestionClick = async (suggestion) => {
        setQuery(suggestion.displayName);
        setSuggestions([]);
        setAnchorEl(null);
        setAddress(suggestion.displayName);

        // Получаем координаты выбранного адреса
        const coordinates = await getCoordinates(suggestion.displayName);
        console.log(coordinates);
        if (coordinates !== null) {
            setCoordinates(coordinates);
            setLocation(coordinates);
        } else {
            console.error('Не удалось получить координаты для адреса:', suggestion.displayName);
        }
    };

    return (
        <div>
            <TextField
                id="address-input"
                label="Введите адрес"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
            <Popper open={Boolean(anchorEl) && suggestions.length > 0} anchorEl={anchorEl} placement="bottom-start"
                    sx={{zIndex: 1500}}>
                <Paper>
                    {suggestions.map((suggestion, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion.displayName}
                        </MenuItem>
                    ))}
                </Paper>
            </Popper>
        </div>
    );
};

AddressInput.propTypes = {
    address: PropTypes.string,
    location: PropTypes.array,
    setAddress: PropTypes.func,
    setLocation: PropTypes.func,
}

export default AddressInput;