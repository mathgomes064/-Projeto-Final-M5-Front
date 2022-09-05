import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatório"),
});

export default schema;
