import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";

export function Header() {
    const { cartQuantity } = useCart();

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        São Paulo, SP
                    </HeaderButton>

                    <NavLink to="/completeOrder">
                        <HeaderButton variant="yellow">
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}