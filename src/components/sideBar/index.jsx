import React, {useEffect, useState} from 'react';
import {
    NavList,
    SidebarContainer
} from "./common";
import NavListItemWithTooltip from "./NavListItemWithTooltip.jsx";
import ProfileContent from "./ProfileContent.jsx";
import LogoHeader from "./LogoHeader.jsx";

export default function SideBar() {

    const [isOpen, setIsOpen] = useState(() => {
        const savedState = localStorage.getItem('sidebarOpen');
        return savedState !== 'false';
    });

    useEffect(() => {
        localStorage.setItem('sidebarOpen', isOpen.toLocaleString());
    }, [isOpen]);

    const widthVariants = {
        expanded: {
            width: 250,
        },
        collapsed: {
            width: 78,
        }
    }

    const expandingTransition = {
        type: "spring",
        duration: 2.3,
        stiffness: 50,
    }

    return (
        <SidebarContainer
            initial={false}
            animate={isOpen ? "expanded" : "collapsed"}
            variants={widthVariants}
            transition={expandingTransition}>
            <LogoHeader open={isOpen} setOpen={setIsOpen} title={"Название"}/>
            <NavList>
                <NavListItemWithTooltip open={isOpen} text={"Item1"} icon={"bx bxs-home"}/>
                <NavListItemWithTooltip open={isOpen} text={"Item2"} icon={"bx bx-grid-alt"}/>
                <NavListItemWithTooltip open={isOpen} text={"Item3"} icon={"bx bx-cctv"}/>
                <ProfileContent open={isOpen} name={"Долхлый джуниор"} role={"Лошпед"}/>
            </NavList>
        </SidebarContainer>
    );
}