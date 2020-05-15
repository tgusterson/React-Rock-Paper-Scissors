import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import RulesModal from './RulesModal';
import { desktopBreakpoint } from './styles/theme'

const RulesSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (min-width: ${desktopBreakpoint}) {
    max-width: ${ desktopBreakpoint};
    margin: auto;
    padding: 0 30px;
    justify-content: flex-end;
  }
`;

const RulesSection = () => {
  const [modalIsOpen, toggleModalIsOpen] = useState(false);

  const handleClick = () => {
    return toggleModalIsOpen(!modalIsOpen);
  };

  return (
    <RulesSectionContainer>
      {modalIsOpen && <RulesModal handleClick={handleClick} />}
      <Button inverted
        onClick={handleClick}
      >Rules
      </Button>
    </RulesSectionContainer>
  );
}

export default RulesSection;