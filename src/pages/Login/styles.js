import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: white;
  max-width: 600px;
  min-height: 400px;
  width: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
`;

export const FormTitle = styled.h1`
  font-size: var(--fs-title);
  font-weight: bold;
  color: var(--font-primary);
  cursor: default;
`;

export const Input = styled.input`
  padding: 8px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  font-size: var(--fs-input);
  &:focus {
    border-color: orange;
    outline: none;
  }
`;

export const ContainerHandler = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonHandler = styled.button`
  width: 20%;
  padding: 8px;
  background-color: ${({ color }) =>
    color ? `var(--color-${color})` : "white"};
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border-radius: 4px;

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 8px 14px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: orange;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Small = styled.small`
  font-size: ${({ size }) => (size ? `${size}px` : "var(--fs-text)")};
  color: var(--font-primary);
  cursor: default;
`;

export const InputGroup = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;
