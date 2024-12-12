import React from "react";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import ProfileSettingView from "../view/profileSetting/ProfileSettingView.jsx";

const ProfileSettingPage = () => {
    return (
        <MainContainerComponent>
            <ProfileSettingView />
        </MainContainerComponent>
    );
}

export default ProfileSettingPage;