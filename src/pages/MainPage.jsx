import React from 'react';
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import SelectView from "../view/main/SelectView.jsx";

const MainPage = () => {
    return (
            <MainContainerComponent>
                <SelectView/>
            </MainContainerComponent>
    );
}

export default MainPage;