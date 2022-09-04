import { forwardRef } from "react";
import { Container } from "./style";
const Input = forwardRef(({ label, id, placeholder, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} id={id} {...rest} ref={ref} />
    </Container>
  );
});
export default Input;
