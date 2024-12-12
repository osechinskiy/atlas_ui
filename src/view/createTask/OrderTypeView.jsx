import React from "react";
import {getOrderTypes} from "../../service/userOrders/userOrdersService.js";
import SelectComponent from "../../components/select/selectComponent.jsx";
import PropTypes from "prop-types";

const OrderTypeView = ({orderCategory, setOrderCategory}) => {

    return (
        <SelectComponent data={getOrderTypes()}
                         label={"Категория заказа"}
                         value={orderCategory}
                         setValue={setOrderCategory}
                         typographyText="Категория сужает область поиска заказа"/>
    )
}

OrderTypeView.propTypes = {
    orderCategory: PropTypes.string.isRequired,
    setOrderCategory: PropTypes.func.isRequired,
}

export default OrderTypeView;