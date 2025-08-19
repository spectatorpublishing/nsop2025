import React from 'react';
import styled from 'styled-components';
import SampleComponent from '../Components/SampleComponent';

const StyledText = styled.div` 
    font-size: 20px;
    color: #333;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UniversityNewsPage = () => {
    return (
        <>
            <StyledText>
            Start Working here
            </StyledText>
         <SampleComponent/>
         </>
        );
    };

export default UniversityNewsPage;