import React, {useState} from 'react';
import styled from 'styled-components';
import {SingInFormView} from '../../view/login/signInForm/SingInFormView.jsx';
import {SignUpFormView} from '../../view/login/singUpForm/signUpFormView.jsx';
import {motion} from 'framer-motion';
import {AccountContext} from './accountContext'
import '../../styles/stylesAccountBox.css';

const BoxContainer = styled.div`
    width: 380px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
    z-index: 10;
`;

const BackDrop = styled(motion.div)`
    position: absolute;
    width: 50%;
    height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    top: -290px;
    left: -70px;
    transform: rotate(60deg);
    background: linear-gradient(
            58deg, #333333 20%, #666666 100%
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
`;

const SmallText = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: #fff;
    margin-top: 7px;
    z-index: 10;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1180px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "130%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

export default function AccountBox() {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    }

    const contextValue = {switchToSignup, switchToSignin};

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === "signin" && <HeaderContainer>
                        <HeaderText>Добро</HeaderText>
                        <HeaderText>Пожаловать</HeaderText>
                        <SmallText>Пожалуйста, войдите в систему, чтобы продолжить</SmallText>
                    </HeaderContainer>}
                    {active === "signup" && <HeaderContainer>
                        <HeaderText>Создать</HeaderText>
                        <HeaderText>Аккаунт</HeaderText>
                        <SmallText>Пожалуйста, зарегистрируйтесь, чтобы продолжить</SmallText>
                    </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <SingInFormView/>}
                    {active === "signup" && <SignUpFormView/>}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}