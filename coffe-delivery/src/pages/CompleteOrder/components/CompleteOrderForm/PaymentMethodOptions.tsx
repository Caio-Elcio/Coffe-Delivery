import { useFormContext } from "react-hook-form";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { RegularText } from "../../../../components/Typography";
import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodOptionsContainer } from "./styles";

export const paymentMethods = {
    credit: {
        label: "Cartão de crédito",
        icon: <CreditCard size={16} />,
    },
    debit: {
        label: "Cartão de débito",
        icon: <Bank size={16} />,
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} />
    }
}

export function PaymentMethodOptions() {
    const { register, formState: { errors } } = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <PaymentMethodOptionsContainer>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput
                    id={key}
                    key={label}
                    label={label}
                    value={key}
                    icon={icon}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodOptionsContainer>
    );
}