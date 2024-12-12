import React, {useEffect, useState} from "react";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import {Stack} from "@mui/material";
import HeaderView from "../view/order/HeaderView.jsx";
import {useParams} from "react-router-dom";
import {getOrder, getOrderStat} from "../service/orderService/orderService";
import HeadView from "../view/order/HeadView.jsx";
import OrderBodyView from "../view/order/OrderBodyView.jsx";
import Typography from "@mui/material/Typography";
import BarChartComponent from "../components/chart/BarChartComponent.jsx";

const OrderPage = () => {

    const {orderId} = useParams();

    const [orderData, setOrderData] = useState(null);
    const [location, setLocation] = useState([]);
    const [statistic, setStatistic] = useState(null);

    const fetchData = async () => {
        try {
            const response = await getOrder(orderId);
            setOrderData(response);

            if (response.location) {
                setLocation(response.location.split(',').map(cord => parseFloat(cord)));
            }
            if (response.editable) {
                const statResponse = await getOrderStat(orderId);
                setStatistic(statResponse);
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [orderId]);

    return (
        <MainContainerComponent>
            <Stack spacing={2} sx={{position: 'relative', height: '100%'}}>
                <HeadView data={orderData}/>
                <HeaderView data={orderData}/>
                <OrderBodyView data={orderData} location={location}/>

                {orderData?.editable && (
                    <Stack spacing={2}>
                        <Typography variant="body2" sx={{color: 'text.secondary', alignItems: 'center', pl: 2}}>
                            Статистика просмотров вашего объявления за последние 7 дней
                        </Typography>
                        <BarChartComponent data={statistic}/>
                    </Stack>
                )}
            </Stack>
        </MainContainerComponent>
    );
}

export default OrderPage;