import { useNavigate } from "react-router-dom";
import defaultUserProfilePic from "../../assets/Amongus 3.png";
import logo from "../../assets/logo 2.png";
import { Container } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/User";

const HeaderUserProfile = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext)

  return (
    <Container>
      <div className="divUm">
        <img className="logo" src={logo} alt="logo" />
        <button onClick={() => navigate("/dashboard")}>Voltar</button>
      </div>
      <div className="divDois">
        <img src={defaultUserProfilePic} alt="user" />
        <div>
          <h1>{user?.username}</h1>
        </div>
      </div>
    </Container>
  );
};

export default HeaderUserProfile;
