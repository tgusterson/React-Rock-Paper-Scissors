import React from 'react';
import styled from 'styled-components';
import closeButtonSVG from './styles/assets/icon-close.svg';
import gameRulesSVG from './styles/assets/image-rules.svg';
import { fontWeightBold, desktopBreakpoint } from './styles/theme';

const RulesModalContainerBg = styled.div`
  position:fixed;
  padding:0;
  margin:0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.3);
`

const RulesModalContainer = styled.div`
    position: fixed;
    padding: 0;
    margin: 0;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: white;
        
    h1 {
      position: absolute;
      top: 80px;
      left: 50%;
      margin-left: -37.2px;
      text-transform: uppercase;
      font-size: 2.2rem;
      font-weight: ${fontWeightBold};
    }

    img{
      position: absolute;
      top: 220px;
      left: 50%;
      margin-left: -151px;
    }

    img:last-child {
      position: absolute;
      top: 645px;
      cursor: pointer;
      left: 50%;
      margin-left: 0px;
    }

    @media screen and (min-width: ${desktopBreakpoint}) {
      position: absolute;
      height: 420px;
      width: 400px;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top: -400px;
      border-radius: 15px;

      h1 {
        top: 20px;
        left: 60px;
      }

      img{
        top: 100px;
      }

      img:last-child {
        top: 30px;
        left: 350px;
      }
    }
`;

const RulesModal = (props) => {
  return (
    <RulesModalContainerBg>
      <RulesModalContainer>
        <h1>Rules</h1>
        <img src={gameRulesSVG} />
        <img src={closeButtonSVG} onClick={props.handleClick} />
      </RulesModalContainer>
    </RulesModalContainerBg>
  );
};

export default RulesModal;