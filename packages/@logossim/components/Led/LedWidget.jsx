import React from 'react';

import { Port } from '@logossim/core';

import styled from 'styled-components';

const PositionedPort = styled(Port)`
  position: absolute;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Shape = styled.div`
  position: relative;

  width: 30px;
  height: 30px;

  background: ${props =>
    `${props.color}${props.selected ? '80' : 'ff'}`};
  box-shadow: 0 0 ${props => (props.isActive ? 15 : 0)}px
    ${props => props.color};
  border: 2px solid
    ${props =>
      props.selected
        ? 'var(--border-selected)'
        : 'var(--border-unselected)'};
  border-radius: 15px;
`;

const LedWidget = props => {
  const { model, engine } = props;
  const {
    options: { selected },
  } = model;

  return (
    <Shape
      selected={selected}
      color={model.getColor()}
      isActive={model.isActive()}
    >
      <PositionedPort
        name="in"
        model={model}
        port={model.getPort('in')}
        engine={engine}
      />
    </Shape>
  );
};

export default LedWidget;
