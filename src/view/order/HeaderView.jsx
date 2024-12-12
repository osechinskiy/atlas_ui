import React from "react";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import CategoryIcon from "@mui/icons-material/Category";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {formatPhoneNumber} from "../../service/orderService/orderService";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {geOrderTypesTitle} from "../../service/userOrders/userOrdersService";

const HeaderView = ({data}) => {
    return (
        <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-around'}}>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: '#F5F5F5',
                    width: '50px',
                    height: '50px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2
                }}>
                    <CategoryIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                </Box>
                <Box>
                    <Stack>
                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                            Категория
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            {geOrderTypesTitle(data?.category)}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: '#F5F5F5',
                    width: '50px',
                    height: '50px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2
                }}>
                    <PersonIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                </Box>
                <Box>
                    <Stack>
                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                            Клиент
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            {data?.userName}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: '#F5F5F5',
                    width: '50px',
                    height: '50px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2
                }}>
                    <PhoneIphoneIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                </Box>
                <Box>
                    <Stack>
                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                            Телефон
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            {formatPhoneNumber(data?.userPhone)}
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

HeaderView.propTypes = {
    data: PropTypes.shape({
        category: PropTypes.string,
        userName: PropTypes.string,
        userPhone: PropTypes.string,
    })
};

export default HeaderView