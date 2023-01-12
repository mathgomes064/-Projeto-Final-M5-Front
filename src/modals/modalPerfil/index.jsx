import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { UserContext } from "../../context/User";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineCloseSquare } from "react-icons/ai";

import { Container, Form, Button } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
};

export default function ModalPerfil() {
  const { editUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm();

  const handleEdit = ({ username, fone, bio, image }) => {
    const userId = localStorage.getItem("@Nice-jobs:id");

    let data = {};

    if (username) {
      data = { ...data, username };
    }
    if (fone) {
      data = { ...data, fone };
    }
    if (bio) {
      data = { ...data, bio };
    }
    if (image) {
      data = { ...data, image };
    }

    editUser(data, userId);
    handleClose();
  };

  return (
    <div>
      <Button onMouseDown={handleOpen}>Editar Perfil</Button>
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
            </div>
            <div>
              <Form onSubmit={handleSubmit(handleEdit)}>
                <label>Nome</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Nome"
                  {...register("username")}
                />
                <label>Contato</label>
                <input
                  autoComplete="off"
                  className="contact"
                  type="number"
                  placeholder="Contato"
                  {...register("fone")}
                />
                <label>Bio</label>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Biografia"
                  {...register("bio")}
                />
                <label>Imagem</label>
                <input autoComplete="off" type="url" placeholder="Imagem" {...register("image")} />
                <button type="submit">Salvar</button>
              </Form>
            </div>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
