import * as React from "react";
import { useForm } from "react-hook-form";

import Modal from "@mui/material/Modal";
import { Backdrop } from "@mui/material";
import { Button, Box } from "@mui/material";

import { ScheduleModal } from "./style";
import api from "../../services/api";

import { toast } from "react-toastify";

export const ServiceScheduleModal = ({ setOpenDetailsModal, setOpenContact, service }) => {
  const style = {
    position: "absolute",
    top: "50vh",
    left: "50vw",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    boxShadow: 20,
  };

  const [openSchedule, setOpenSchedule] = React.useState(false);

  const { register, handleSubmit } = useForm();

  const date = new Date();
  const now = date
    .toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const toSchedule = async (data) => {
    data.service_id = service.id;
    console.log(data);
    try {
      await api.post("/schedules/", data);

      toast.success("Serviço editado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
      });

      setOpenSchedule(false);
      setOpenDetailsModal(false);
      setOpenContact(false);
    } catch (err) {
      toast.error("Algo deu errado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
      });
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setOpenSchedule(true);
        }}
      >
        Agendar
      </Button>
      <Modal
        open={openSchedule}
        onClose={() => setOpenSchedule(false)}
        slots={Backdrop}
        slotProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <ScheduleModal>
            <div className="wrapper">
              <header className="header">
                <h2>Agende um serviço com {service.user.name}</h2>
              </header>
              <div className="modalBody">
                <section className="modalDescription">
                  <p>
                    Selecione uma data e verifique sua disponibilidade para fazer um agendamento.
                  </p>
                </section>
                <form onSubmit={handleSubmit(toSchedule)} className="scheduleData">
                  <label htmlFor="data">Data</label>
                  <input type="date" id="data" {...register("date")} min={now} />
                  <label htmlFor="hora">Hora</label>
                  <input type="time" id="hora" {...register("hour")} min="8:00" max="18:00" />
                  <section className="confirmDate">
                    <button type="submit" className="scheduleBtn">
                      Agendar
                    </button>
                  </section>
                </form>
              </div>
              <div></div>
            </div>
          </ScheduleModal>
        </Box>
      </Modal>
    </>
  );
};
