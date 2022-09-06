import * as React from "react";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container, Form, Button } from "./styles";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 0,
};

export default function ModalPerfil() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Button onClick={handleOpen}>Editar Perfil</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <div className="headerModal">
              <h3 className="h3EditPerfil">Editar Perfil</h3>
              <p onClick={handleClose}>X</p>
            </div>
            <div>
              <Form onSubmit={handleSubmit()}>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Insira seu novo nome"
                  {...register("nome")}
                />
                <label>Contato</label>
                <input
                  type="text"
                  placeholder="Insira seu novo contato"
                  {...register("contact")}
                />
                <label>Bio</label>
                <input
                  type="text"
                  placeholder="Insira sua nova bio"
                  {...register("bio")}
                />
                <label>Imagem</label>
                <input
                  type="url"
                  placeholder="Insira sua nova imagem"
                  {...register("img")}
                />
                <button type="submit">Salvar</button>
              </Form>
            </div>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
