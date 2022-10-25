import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={logo} alt="" />

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        São Paulo, SP
                    </HeaderButton>

                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}