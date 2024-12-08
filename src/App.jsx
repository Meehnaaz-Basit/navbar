import { Nav } from "./component/navbarOne/Nav";
import { NavTwo } from "./component/navbarTwo/NavTwo";

function App() {
  return (
    <>
      <Nav />
      <div className="mt-20">
        <NavTwo />
      </div>
    </>
  );
}

export default App;
