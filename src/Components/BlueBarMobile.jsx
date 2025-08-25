import React from "react";
import styled from "styled-components";

const BlueRectangle = styled.div`
    background-color: #001C35;
    width: 100%;
    height: 60px;
    position: relative;
`;

const CrownIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    width: 10%;
    height: auto;
    cursor: pointer;
`;

const BlueBarMobile = () => {
    return (
        <BlueRectangle>
            <a href="https://columbiaspectator.com" target="_blank" rel="noopener noreferrer">
                <CrownIcon src="whiteCrown.png" alt="Crown icon" />
            </a>
        </BlueRectangle>
    );
}

export default BlueBarMobile;