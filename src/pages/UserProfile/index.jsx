import HeaderUserProfile from "../../components/HeaderUserProfile";

const UserProfile = () => {
  return (
    <>
      <HeaderUserProfile />
      <section>
        <h1>Meus Serviços</h1>
        <div>
          <button>Cadastrados</button>
          <button>Contratados</button>
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
};

export default UserProfile;
