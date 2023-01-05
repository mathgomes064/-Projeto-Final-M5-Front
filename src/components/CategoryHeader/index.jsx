import { useContext } from "react";
import { CategoriesList } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { ServicesContext } from "../../context/Services";


export default function MenuCategory() {

  const { filterCategory } = useContext(ServicesContext);

  return (
    <div>
  <CategoriesList>
      <MenuItem
          onClick={() => {
            filterCategory("Todos");
          }}
        >
          Todos
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterCategory("Construção civil");
          }}
        >
          Construção Civil
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterCategory("Manutenção de Eletronicos");
          }}
        >
          Manutenção de Eletronicos
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterCategory("Frete");
          }}
        >
          Frete
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterCategory("Serviços Domésticos");
          }}
        >
          Serviços Domésticos
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterCategory("Outros");
          }}
        >
          Outros
        </MenuItem>
    </CategoriesList>
    </div>
  );
}
