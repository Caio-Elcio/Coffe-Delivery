import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: ${({ theme }) => theme.colors["base-background"]};

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface HeaderButtonProps {
    variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.3rem; 
    height: 2.3rem;
    padding: 0 0.5rem;
    gap: 4px;
    border: none;
    border-radius: 6px;
    position: relative;
    cursor: inherit;
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

    span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors["base-white"]};
    }

    ${({ variant, theme }) => css`
      background: ${theme.colors[`brand-${variant}-light`]};
      color: ${theme.colors[`brand-${variant}-dark`]};

      span {
        background: ${theme.colors[`brand-${variant}-dark`]};
      }
    `}

    ${({ variant, theme }) => variant === 'purple' && css`
        svg {
            color: ${theme.colors["brand-purple"]};
        }
    `}
`;