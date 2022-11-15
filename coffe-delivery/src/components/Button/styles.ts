import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 0.75rem 2.8rem;
    margin-top: 0.7rem;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    line-height: 1.3rem;
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors["brand-yellow"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;