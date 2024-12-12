import React, {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import OrderCardComponent from "../../components/card/OrderCardComponent.jsx";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Img from "../../img/profile/empty.png";
import Typography from "@mui/material/Typography";
import {getFullUserInfo} from "../../service/userService/userService";
import {getUserOrders} from "../../service/userOrders/userOrdersService";

const UserOrdersView = () => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true); // Инициализация состояния loading

    const userId = getFullUserInfo().id;

    useEffect(() => {
        setLoading(true); // Устанавливаем loading в true перед началом загрузки
        getUserOrders(userId)
            .then((response) => {
                setData(response); // Устанавливаем полученные данные
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            })
            .finally(() => {
                setLoading(false) // Устанавливаем loading в false после завершения загрузки
            })

    }, [userId]);

    return (
        <React.Fragment>
            {
                loading ? (
                    <Stack spacing={2}>
                        <Button variant="contained"
                                component={Link} to={"/create-task"}
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#333333',
                                    boxShadow: 'none'
                                }}

                                endIcon={<AddIcon/>}>
                            Разместить новый заказ
                        </Button>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                    </Stack>
                ) : (
                    <Stack spacing={2}>
                        <Button variant="contained"
                                component={Link} to={"/create-task"}
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#333333',
                                    boxShadow: 'none'
                                }}

                                endIcon={<AddIcon/>}>
                            Разместить новый заказ
                        </Button>
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
            }
        </React.Fragment>
    );
}

export default UserOrdersView;