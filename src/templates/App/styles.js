import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.darkBg};
    color: ${theme.colors.colorRed};
  `}
`;
