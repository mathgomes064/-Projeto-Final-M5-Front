import { forwardRef } from "react";
import { Container } from "./style";
const Input = forwardRef(({ label, id, placeholder, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <div>
        <input placeholder={placeholder} id={id} {...rest} ref={ref} />
      </div>
    </Container>
  );
});
export default Input;
