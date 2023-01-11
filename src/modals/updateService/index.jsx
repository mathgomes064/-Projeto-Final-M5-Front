import { useContext, useState } from "react";
import * as yup from "yup";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Container, ModalButton } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicesContext } from "../../context/Services";
import { AiOutlineCloseSquare } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const AddServiceModal = ({ service_id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    service_name: yup.string().required("Nome do serviço obrigatório"),
    service_value: yup.string().required("Preço obrigatório"),
    service_description: yup.string().required("Descrição do serviço obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { editService } = useContext(ServicesContext);

  const handleAdd = (data) => {
    editService(data, service_id);
    handleClose();
  };

  return (
    <div>
      <ModalButton onMouseDown={handleOpen}>Editar</ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <div className="title">
                <h3>Atualizar serviço</h3>
              </div>
              <div className="body">
                <form onSubmit={handleSubmit(handleAdd)}>
                  <Input
                    label="Nome do serviço"
                    placeholder="Frete"
                    {...register("service_name")}
                  />
                  <span className="error">{errors.service_name?.message}</span>
                  <Input label="Preço" placeholder="R$100" {...register("service_value")} />
                  <span className="error">{errors.service_value?.message}</span>

                  <Input
                    label="Detalhes"
                    placeholder="Descreva seu serviço"
                    {...register("service_description")}
                  />
                  <span className="error">{errors.service_description?.message}</span>
                  <div>
                    <label name="select">Categoria</label>
                    <select label="Categoria" title="select" id="select" {...register("category")}>
                      <option value="Construção civil">Construção Civil</option>
                      <option value="Manutenção de Eletrônicos">Manutenção de Eletronicos</option>
                      <option value="Frete">Frete</option>
                      <option value="Serviços Domésticos">Serviços Domésticos</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  <Button type="submit">Atualizar</Button>
                </form>
              </div>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default AddServiceModal;
