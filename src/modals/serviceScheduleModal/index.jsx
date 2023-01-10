import * as React from "react"

import Modal from "@mui/material/Modal"
import { Backdrop } from "@mui/material"
import { Button, Box } from "@mui/material"

import { ScheduleModal } from "./style"

export const ServiceScheduleModal = ({service}) => {

    const style = {
        position: "absolute",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 500,
        boxShadow: 20,
      };

    const [openSchedule, setOpenSchedule] = React.useState(false)

    return (
        <>
        <Button onClick={() => {setOpenSchedule(true)}}>Agendar</Button>
            <Modal
            open={openSchedule}
            onClose={() => setOpenSchedule(false)}
            slots={Backdrop}
            slotProps={{
                timeout: 500,
            }}
            >
                <Box sx ={style}>
                <ScheduleModal>
                <div className="wrapper">
                    <header className="header">
                        <h2>Agende um serviço com {service.user.name}</h2>
                    </header>
                    <div className="modalBody">
                        <section className="modalDescription">
                        <p>Selecione uma data e verifique sua disponibilidade para fazer um agendamento.</p>
                        </section>
                        <form className="scheduleData">
                            <label htmlFor="data">Data</label>
                            <input type="date" id="data" name="data" min="2023-01-08" max="2023-01-11" />
                            <label htmlFor="hora">Hora</label>
                            <input type="time" id="hora" name="hora" min="10:00" max="15:00" />
                        </form>
                        <section className="confirmDate">
                            <button className="scheduleBtn">Agendar</button>
                        </section>
                    </div>
                    <div>
                    </div>
                </div>
        </ScheduleModal>
                </Box>
            </Modal>
        </>
    )
}