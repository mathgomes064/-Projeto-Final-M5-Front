import Button from "@mui/material/Button";
import { Container } from "./style";

const BasicButtons = ({ text, type }) => {
  return (
    <Container>
      <Button className="button" variant="contained" type={type}>
        {text}
      </Button>
    </Container>
  );
};
export default BasicButtons;
