import DashboardAnimation from "../animations/dashboardAnimation"
import { Container } from "./styles";

export default function Animation() {
    return(
        <Container>
            <div className="innerDiv">
                <div className="information">
                    <h1>Cadastre e contrate seus serviços informais aqui</h1>   
                </div>
                <DashboardAnimation />
            </div>
        </Container>
    )
}