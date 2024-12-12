import React from 'react';
import Img from "../../img/steps/6.png";
import Box from "@mui/material/Box";
import {Grid2, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {geOrderTypesTitle} from "../../service/userOrders/userOrdersService";
import PropTypes from "prop-types";
import {findPhoneById} from "../../service/userService/userService";

const StepView4 = ({
                       orderCategory,
                       orderName,
                       orderDescription,
                       orderStartDate,
                       orderAmount,
                       userAddress,
                       userName,
                       userCommunication,
                       phones,
                   }) => {

    return (
        <Grid2 container spacing={2} sx={{p: 2, height: '100%'}}>
            <Grid2 size={7}>
                <Stack spacing={2} direction="column" sx={{height: '100%', justifyContent: 'center'}}>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Заказчик:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {userName}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Телефон для связи:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {findPhoneById(phones, userCommunication)}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Категория:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {geOrderTypesTitle(orderCategory)}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Название:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {orderName}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Описание:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {orderDescription}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Дата завершения:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {orderStartDate ? orderStartDateformat('DD.MM.YYYY') : "Бессрочная дата заказа"}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Адрес:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {userAddress}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign: 'right'}} variant="subtitle2" gutterBottom>
                            Стоимость:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {orderAmount + '  ₽'}
                        </Typography>
                    </Box>
                </Stack>

            </Grid2>
            <Grid2 size={5}>
                <Box
                    component="img"
                    alt="left Img"
                    src={Img}
                    sx={{
                        width: '100%',
                    }}/>
            </Grid2>
        </Grid2>
    );
}

StepView4.propTypes = {
    orderCategory: PropTypes.string,
    orderName: PropTypes.string,
    orderDescription: PropTypes.string,
    startDate: PropTypes.object,
    amount: PropTypes.number,
    location: PropTypes.array,
}

export default StepView4;