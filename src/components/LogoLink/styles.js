import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    color: inherit;
    display: flex;
    align-items: center;
    text-decoration: none;

    > img {
      max-height: 2.5rem;
    }
  `}
`;
