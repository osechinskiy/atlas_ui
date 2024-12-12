import React from 'react';
import CategoriesView from "../view/categories/CategoriesView.jsx";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";

const CategoriesPage = () => {

    return (
        <MainContainerComponent>
            <CategoriesView/>
        </MainContainerComponent>
    );
}

export default CategoriesPage;