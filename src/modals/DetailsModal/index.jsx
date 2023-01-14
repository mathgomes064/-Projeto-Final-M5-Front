import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { DetailsStyle } from "./style";
import HireModal from "../HireModal";

const style = {
  position: "absolute",
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  width: 250,
  boxShadow: 20,
};

export default function TransitionsModal({ service }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <DetailsStyle>
        <Button className="detailsButton" onClick={handleOpen}>
          detalhes
        </Button>
      </DetailsStyle>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <DetailsStyle>
              <div className="serviceModal">
                <div className="category">{service.category.name}</div>
                <div className="otherInfos">
                  <img src={`img/${service.category.name}.jpg`}></img>
                  <div className="nameAndValue">
                    <p>{service.user.username}</p>
                    <p>R$ {service.description.service_value}</p>
                  </div>
                </div>
                <p className="description">{service.description.service_description}</p>
                <HireModal setOpenDetailsModal={setOpen} service={service}></HireModal>
              </div>
            </DetailsStyle>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
