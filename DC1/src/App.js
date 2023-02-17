import NavBar from "./components/FuncionalComponents/NavBarComponent/NavBar";
import MenuContainer from "./components/FuncionalComponents/MenuContainer/MenuContainer";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MenuContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
