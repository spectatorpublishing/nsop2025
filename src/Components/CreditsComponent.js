import React from "react";
import styled from "styled-components";

const Page = styled.main`
  min-height: 100vh;
  background-color: #3EB8E7;
  padding-top: 96px;
  padding-bottom: 96px;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 180px;
  padding-right: 230px;
`;



const LetterCard = styled.div`
  box-sizing: border-box;
  background: #f7f7f7;
  border: 8.729px solid #000;
  padding: 25px 85px 100px;
  color: #2C2C2C;
  font-family: 'Righteous';
  line-height: 32px;

  h2 {
    font-size: 34.6px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 25px;
  }

  .credits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 50px;
  }
  
  .section h3 {
    font-size: 28.65px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  .section p {
    font-size: 24.88px;
    font-weight: 400;
    margin: 12px 0;
  }
`;


const CreditsComponent = () => {
    return (
        <Page>
            <Container>
                <LetterCard>
                    <h2>Staff Who Made This Issue Possible</h2>
                    <div className="credits-grid">
                        <div className="section">
                            <h3>Section</h3>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                        </div>
                        <div className="section">
                            <h3>Section</h3>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                        </div>
                        <div className="section">
                            <h3>Section</h3>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                        </div>
                    </div>
                    <div className="credits-grid">
                        <div className="section">
                            <h3>Section</h3>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                        </div>
                        <div className="section">
                            <h3>Section</h3>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                        </div>
                        <div className="section">
                            <h3>Section</h3>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                            <p>First Last, Title</p>
                        </div>
                    </div>
                </LetterCard>
            </Container>
        </Page>
    );
};

export default CreditsComponent;