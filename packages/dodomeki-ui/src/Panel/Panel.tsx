import styled from 'styled-components';

export interface PanelProps {}

export const Panel = styled.div<PanelProps>`
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(54, 97, 126, 0.3);
`;
