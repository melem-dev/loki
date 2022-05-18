import * as Style from "./styles";
import { useState } from "react";

const initialFields = {
  user: "",
  amount: 1000,
};

export default function () {
  const [fields, setFields] = useState(initialFields);

  const limits = {
    min: 100,
    max: 5000,
  };

  // prettier-ignore
  const handleFields = ({ target: { name, value } }) => setFields((prev) => ({ ...prev, [name]: value }));
  function handleFieldsNumber(amount, some, reset = false) {
    let total = fields.amount;
    if (reset) total = limits.min;
    else if (!some) total -= amount;
    else total += amount;
    if (total > limits.max) total = limits.max;
    setFields((prev) => ({ ...prev, amount: total }));
  }

  return (
    <Style.Container>
      <Style.Form>
        <Style.FormTitle>LOKI</Style.FormTitle>
        <div>
          <Style.InputGroup>
            <Style.Small>Nickname</Style.Small>
            <Style.Input
              type="text"
              value={fields.user}
              name="user"
              onChange={handleFields}
              placeholder="Digite seu nickname"
            />
          </Style.InputGroup>
          <Style.InputGroup>
            <Style.Small>Depósito *</Style.Small>
            <Style.Input
              type="number"
              value={fields.amount}
              name="amount"
              placeholder="Informe sua banca inicial"
              disabled
            />
            <Style.ContainerHandler>
              <Style.ButtonHandler
                type="button"
                color="red"
                onClick={() => handleFieldsNumber(limits.min, false, true)}
                disabled={fields.amount <= limits.min}
              >
                MIN
              </Style.ButtonHandler>
              <Style.ButtonHandler
                type="button"
                color="red70"
                onClick={() => handleFieldsNumber(100, false)}
                disabled={fields.amount <= limits.min}
              >
                - 100
              </Style.ButtonHandler>
              <Style.ButtonHandler
                type="button"
                color="green70"
                onClick={() => handleFieldsNumber(100, true)}
                disabled={fields.amount >= limits.max}
              >
                + 100
              </Style.ButtonHandler>
              <Style.ButtonHandler
                type="button"
                color="green"
                onClick={() => handleFieldsNumber(limits.max, true)}
                disabled={fields.amount >= limits.max}
              >
                MAX
              </Style.ButtonHandler>
            </Style.ContainerHandler>
          </Style.InputGroup>
          <Style.Small size={12}>
            ( * ) O DEPÓSITO É FICTÍCIO, APENAS PARA ENTRETENIMENTO.
          </Style.Small>
        </div>
        <Style.ButtonSubmit>Procurar sala</Style.ButtonSubmit>
      </Style.Form>
    </Style.Container>
  );
}
