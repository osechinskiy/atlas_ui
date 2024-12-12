import React from "react";
import SelectComponent from "../../components/select/selectComponent.jsx";
import PropTypes from "prop-types";

const OrderSelectPhoneView = ({data, userCommunication, setUserCommunication}) => {

    const transformedArray = data.map(item => ({
        value: item.id,
        title: item.phone
    }));

    return (
        <SelectComponent data={transformedArray}
                         label="Номер телефона"
                         value={userCommunication}
                         setValue={setUserCommunication}
                         typographyText=" Номер телефона по которому специалисты смогут с вами связаться"
                         noDataValue="Отсутствует информация о номере телефона. Пожалуйста, укажите номер в Вашем профиле."
        />
    );
}

OrderSelectPhoneView.propTypes = {
    data: PropTypes.array.isRequired,
    userCommunication: PropTypes.string.isRequired,
    setUserCommunication: PropTypes.func.isRequired,
}

export default OrderSelectPhoneView;