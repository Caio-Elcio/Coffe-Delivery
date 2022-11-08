import styled from "styled-components";

export const InputStyleContainer = styled.input`
    height: 2.625rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    transition: 0.4s;
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &:focus {
        border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
    }
`;