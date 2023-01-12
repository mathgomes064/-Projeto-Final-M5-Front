import LoadingButton from '@mui/lab/LoadingButton';
import { Container } from "./style";

const BasicButtons = ({ children, type, loading }) => {
  return (
    <Container>
      <LoadingButton loading={loading} loadingindicator="Loading..." className="button" variant="contained" type={type}>
        {children}
      </LoadingButton>
    </Container>
  );
};
export default BasicButtons;
