import { formatMoney } from "../../../../utils/formatMoney";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { Trash } from "phosphor-react";
import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase");
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease");
    }

    function handleRemove() {
        removeCartItem(coffee.id);
    }

    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);

    return (
        <CoffeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} alt="" />
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput
                            size="small"
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={coffee.quantity}
                        />

                        <RemoveButton onClick={handleRemove}>
                            <Trash size="16" />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CoffeCartCardContainer>
    );
}