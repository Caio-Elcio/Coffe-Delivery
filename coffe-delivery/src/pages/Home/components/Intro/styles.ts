import { TitleText } from "../../../../components/Typography";
import { rgba } from "polished";
import backgroundImg from "../../../../assets/background.svg";
import styled from "styled-components";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${backgroundImg}) no-repeat center, 
    linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
    )`};
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;
`;