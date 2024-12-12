import React, {useEffect, useState} from 'react';
import LoginPage from "./pages/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import ApplBarComponent from "./components/appBar/ApplBarComponent.jsx";
import MainPage from "./pages/MainPage.jsx";
import CreateTaskPage from "./pages/CreateTaskPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProfileSettingPage from "./pages/ProfileSettingPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import Specialist from "./pages/Specialist.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import CreateResumePage from "./pages/CreateResumePage.jsx";
import NotificationComponent from "./pages/NotificationComponent.jsx";

const isAuthenticated = () => {
    const token = sessionStorage.getItem('token');
    return token !== null;
};

function App() {

    const [token, setToken] = useState(null);

    useEffect(() => {
        isAuthenticated();
    }, [token]);

    if (!isAuthenticated()) {
        return (
            <LoginPage/>
        );
    }
    return (
        <React.Fragment>
            <ApplBarComponent/>
            <Routes>
                <Route path="/" Component={MainPage}/>
                <Route path="/category" Component={CategoriesPage}/>
                <Route path="/create-task" Component={CreateTaskPage}/>
                <Route path="/profile" Component={ProfilePage}/>
                <Route path="/profileSetting" Component={ProfileSettingPage}/>
                <Route path={"order/:orderId"} Component={OrderPage}/>
                <Route path="/orders" Component={OrdersPage}/>
                <Route path={"/category/:category"} Component={Specialist}/>
                <Route path={"/resume/:resumeId"} Component={ResumePage}/>
                <Route path={"/create-resume"} Component={CreateResumePage}/>
                <Route path={"/notification"} Component={NotificationComponent}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;
