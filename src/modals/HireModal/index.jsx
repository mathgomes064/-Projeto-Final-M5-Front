import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { HireStyle, ButtonWhats } from "./style";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";

import { ServiceScheduleModal } from "../serviceScheduleModal";

// import ReactWhatsapp from "react-whatsapp";

const style = {
  position: "absolute",
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  width: 250,
  boxShadow: 20,
};

export default function HireModal({ setOpenDetailsModal, service }) {
  const [openContact, setOpenContact] = React.useState(false);

  return (
    <div>
      <HireStyle>
        <Button className="hireButton" onClick={() => setOpenContact(true)}>
          Contratar
        </Button>
      </HireStyle>
      <Modal
        keepMounted={false}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openContact}
        onClose={() => setOpenContact(false)}
        closeAfterTransitions
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openContact}>
          <Box sx={style}>
            <HireStyle>
              <div className="hireModal">
                <div className="contacts">
                  <p>Entre em contato com {service.user.name}</p>
                </div>
                <div className="otherInfos">
                  <ButtonWhats number={service.user.fone}>
                    <div className="infos">
                      <BsWhatsapp className="icon" />
                      <p>{service.user.fone}</p>
                    </div>
                  </ButtonWhats>
                  <div className="infos">
                    <FiMail className="icon" />
                    <p>{service.user.email}</p>
                  </div>
                  <div className="infos">
                    <BsFillChatDotsFill className="icon" />
                    <p>NiceChat</p>
                    <FaCrown className="crown" />
                  </div>
                </div>
                <section className="checkSchedule">
                  <ServiceScheduleModal
                    setOpenContact={setOpenContact}
                    setOpenDetailsModal={setOpenDetailsModal}
                    service={service}
                  />
                </section>
              </div>
            </HireStyle>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
