import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
    input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div {
        ${({ theme }) => css`
            background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
            border-color: ${({ theme }) => theme.colors["brand-purple"]};

            &:hover {
                background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
            }
        `}
    }
`;

export const ContentContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    transition: 0.4s;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background-color: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};

    svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    user-select: none;
`;