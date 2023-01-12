import BodyDashboard from "../../components/BodyDashboard";
import { Footer } from "../../components/Footer";
import HeaderDashboard from "../../components/HeaderDashboard/header.index";
import MenuCategory from "../../components/CategoryHeader";

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <MenuCategory />
      <BodyDashboard />
      <Footer />
    </>
  );
};
export default Dashboard;
