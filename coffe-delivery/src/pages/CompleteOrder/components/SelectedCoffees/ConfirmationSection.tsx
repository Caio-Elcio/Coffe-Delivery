import { RegularText } from "../../../../components/Typography";
import { Button } from "../../../../components/Button";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
    const { cartItemsTotal, cartQuantity } = useCart();

    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formatMoney(cartItemsTotal);

    const formattedCartTotal = formatMoney(cartTotal);

    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>

            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>

            <div>
                <RegularText size="l" weight="700" color="subtitle">Total</RegularText>
                <RegularText>{formattedCartTotal}</RegularText>
            </div>

            <Button type="submit" text="Confirmar pedido" disabled={cartQuantity <= 0} />
        </ConfirmationSectionContainer>
    );
}