import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
    return (
        <AddressFormContainer>
            <Input type="number" className="cep" placeholder="CEP" />
            <Input type="text" className="street" placeholder="Rua" />
            <Input type="number" placeholder="Número" />
            <Input type="text" className="complement" placeholder="Complemento" />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
        </AddressFormContainer>
    );
}