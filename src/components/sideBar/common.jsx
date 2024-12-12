import styled from "styled-components";
import {motion} from "framer-motion";

export const SidebarContainer = styled(motion.div)`
    min-height: 100vh;
    width: 250px;
    padding: 6px 14px;
    z-index: 99;
    background: linear-gradient(58deg, rgba(243, 172, 18, 1) 20%, rgba(241, 196, 15, 1) 100%
    );
    position: fixed;
    top: 0;
    left: 0;
    //transition: all 0.5s ease;
`;

export const LogoDetails = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Icon = styled(motion.i)`
    opacity: 1;
    transition: all 0.5s ease;
    color: white;
    height: 60px;
    line-height: 60px;
    min-width: 50px;
    font-size: 25px;
    text-align: center;
`;

export const LogoName = styled(motion.div)`
    color: white;
    font-size: 22px;
    font-weight: 600;
`;

export const MenuBtn = styled(motion.i)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 23px;
    text-align: right;
    cursor: pointer;
    color: white;
    height: 60px;
    line-height: 60px;
`;

export const NavList = styled.ul`
    margin-top: 20px;
    height: 100%;
    padding: 0;
`;

export const NavListItem = styled.li`
    position: relative;
    margin: 8px 0;
    list-style: none;
`;

export const NavLink = styled(motion.a)`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
    position: relative;
    transition: all .5s ease;
    z-index: 12;
    color: white;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        background-color: white;
        border-radius: 5px;
        transition: transform 0.3s ease-in-out;
        transform-origin: left;
        z-index: -2;

    }

    &:hover:after {
        transform: scaleX(1);
    }

    &:hover {
        color: rgba(243, 172, 18, 1)
    }
`;

export const LinkName = styled(motion.span)`
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    pointer-events: auto;
`;

export const LinkIcon = styled.i`
    height: 35px;
    min-width: 50px;
    line-height: 35px;
    font-size: 18px;
    border-radius: 5px;
    text-align: center;
`;

export const Tooltip = styled(motion.span)`
    position: absolute;
    top: 0;
    left: calc(100% + 15px);
    z-index: 3;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 14px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;

    &.visible {
        opacity: 1;
        pointer-events: auto;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const Profile = styled(motion.li)`
    position: fixed;
    height: 60px;
    left: 0;
    bottom:-8px;
    padding:10px 14px;
    overflow: hidden;
    margin: 8px 0;
`;

export const ProfileDetails = styled(motion.div)`
    display: flex;
    align-items: center;
`;

export const ProfileIcon = styled(motion.i)`
    font-size: 45px;
    color: white;
    margin-right: 10px;
`;

export const ProfileName = styled(motion.div)`
    font-size: 15px;
    font-weight: 400;
    color: white;
    white-space: nowrap;
`;

export const ProfileDesignation = styled(motion.div)`
    font-size: 15px;
    font-weight: 400;
    color: white;
    white-space: nowrap;
`;

export const LogOut = styled(motion.i)`
    position: absolute;
    top:50%;
    right: 0;
    transform: translateY(-50%);
    color: white;
    height: 60px;
    line-height: 60px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 23px;
    text-align: center;
`;

