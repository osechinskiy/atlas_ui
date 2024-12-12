import React from "react";
import AddressInput from "../../components/input/AddressInput.jsx";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const OrderAddressView = ({address, setAddress, setLocation, location}) => {
    console.log(address)
    return (
        <Box>
            <AddressInput address={address}
                          location={location}
                          setAddress={setAddress}
                          setLocation={setLocation}/>
            <Typography variant="caption" gutterBottom sx={{display: 'block', color: 'grey'}}>
                Поможет географически понять где необходимо будет выполнять заказ
            </Typography>
        </Box>
    );
}

OrderAddressView.propTypes = {
    address: PropTypes.string.isRequired,
    setAddress: PropTypes.func.isRequired,
    location: PropTypes.array,
    setLocation: PropTypes.func.isRequired,
}

export default OrderAddressView;