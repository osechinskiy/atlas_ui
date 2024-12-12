import React, {useEffect, useState} from "react";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import {Stack} from "@mui/material";
import {getOrders} from "../service/userOrders/userOrdersService";
import OrderCardComponent from "../components/card/OrderCardComponent.jsx";
import {getFullUserInfo} from "../service/userService/userService";
import OrderList from "../view/order/OrderList.jsx";

const OrdersPage = () => {

    const [loading, setLoading] = useState(true); // Инициализация состояния loading
    const [data, setData] = useState([]);
    const [notFound, setNotFound] = useState(true);
    const userId = getFullUserInfo().id

    useEffect(() => {

            setLoading(true); // Устанавливаем loading в true перед началом загрузки

            getOrders(userId)
                .then(res => {
                    setData(res); // Устанавливаем полученные данные
                    setNotFound(false);
                })
                .catch(err => {
                    const errMsg = JSON.parse(err.message);
                    if (errMsg.status === 'NOT_FOUND') {
                        setNotFound(true);
                    }
                })
                .finally(() => setLoading(false));

        }, []
    )
    ;
    return (
        <MainContainerComponent>
            {
                loading ? (
                    <Stack spacing={2}>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                        <OrderCardComponent loading={loading}/>
                    </Stack>
                ) : (
                    <OrderList data={data} notFound={notFound} loading={loading}/>
                )
            }
        </MainContainerComponent>
    );
}

export default OrdersPage;