import styled from 'styled-components';

import { ButtonBase, ButtonBaseProps } from '../button-base';

export interface AnchorButtonProps extends ButtonBaseProps {
  href: string;
}

export const AnchorButton = styled(ButtonBase).attrs<AnchorButtonProps>(
  (props) => ({
    as: 'a',
    href: props.href,
  }),
)<AnchorButtonProps>``;
