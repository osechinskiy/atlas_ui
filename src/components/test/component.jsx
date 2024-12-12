import React from 'react';

import styled from "styled-components";

const Wrapper = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    display: block;
    z-index: 2;
    transition: transform 0.3s ease-in-out;
`;

const SideBArBody = styled.div`
background: linear-gradient(0deg, #3358f4, #1d8cf8);
    height: 100vh;
    overflow: hidden;
`

const UnorderList = styled.div`
position: relative;
    list-style: none;
    padding: 0;
    display: block;
    transition: all 0.5s ease;
`

const makeButtons = [
    {
        to: "/dashboard/home",
        icon: <i className="fa-solid fa-house"></i>,
            title: "Dashboard",
            },
            {
                to: "/dashboard/profile",
                icon: <i className="fa-solid fa-id-card"></i>, title: "profile",
                subBtn: ["passwords", "Mail", "Accounts"]
            }
            ]

const component = () => {
    return(
       <div>
           <Wrapper>
               <SideBArBody>
                   <UnorderList>

                   </UnorderList>
               </SideBArBody>
           </Wrapper>
       </div>
    );
}

export default component;