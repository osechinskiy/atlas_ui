import React from "react";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import NotFoundImg from "../../img/resume/resume1.png";
import Typography from "@mui/material/Typography";
import OrderCardComponent from "../../components/card/OrderCardComponent.jsx";
import Img from "../../img/profile/empty.png";
import PropTypes from "prop-types";

const OrderList = ({data, notFound, loading}) => {
    return (
        notFound ? (
            <Stack spacing={2}>
                <Box
                    component="img"
                    alt="left Img"
                    src={NotFoundImg}
                    sx={{
                        width: '100%',
                    }}/>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h6" gutterBottom>
                        Активных анкет специалиста не найдено
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}} variant="subtitle2" gutterBottom>
                        Для просмотра активных заказов других пользователей необходимо создать анкету специалиста
                    </Typography>
                </Box>
            </Stack>) : (
            <Stack spacing={2}>
                {data && (data.length > 0) ? (
                    data.map((order) => (
                            <OrderCardComponent loading={loading}
                                                data={order}
                                                key={order.id}/>
                        )
                    )
                ) : (
                    <Stack spacing={2}>
                        <Box
                            component="img"
                            alt="left Img"
                            src={Img}
                            sx={{
                                width: '100%',
                            }}/>
                        <Box sx={{textAlign: 'center'}}>
                            <Typography variant="h6" gutterBottom>
                                Созданных заказов нет
                            </Typography>
                            <Typography sx={{color: 'text.secondary'}} variant="subtitle2" gutterBottom>
                                Для создания нового заказа просто нажмите кнопку сверху - создать заказ
                            </Typography>
                        </Box>
                    </Stack>
                )
                }
            </Stack>
        )
    );
}

OrderList.propTypes = {
    notFound: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,

}

export default OrderList;