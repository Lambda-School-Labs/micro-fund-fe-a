import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from '../../common/Footer';
const Landingheader = styled.div`
  border-top: 5px solid gray;
  font-size: 30px;
  color: black;
`;
const Landingarea = styled.div`
  border: 5px solid black;
  align-items: center;
  padding: 4em;
  color: black;
`;
const Landingareatwo = styled.div`
  border: 5px solid black;
  align-items: center;
  padding: 4em;
  color: black;
`;
function RenderLandingPage(props) {
  return (
    <div>
      <Nav />
      <Landingheader>MicroFund</Landingheader>
      <Landingarea>
        Helping microentrepreneurs around the world to start their businesses.
        <br/>
        What is MicroFund?
      </Landingarea>
      <div>
        <Landingareatwo>

        </Landingareatwo>
      </div>
      <Footer />
    </div>
  );
}
export default RenderLandingPage;
