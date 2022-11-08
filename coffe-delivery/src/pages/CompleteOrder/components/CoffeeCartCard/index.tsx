import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styles";
import logo from "../../assets/logo.svg";
import { RegularText } from "../../../../components/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
    return (
        <CoffeCartCardContainer>
            <div>
                {/* <img src={logo} alt="" /> */}
                <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size="16" />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ 9,90</p>
        </CoffeCartCardContainer>
    );
}