import "./App.css";
import { Catalogo } from "./fastLift/Catalogo.jsx";
import { Navbar } from "./fastLift/Navbar.jsx";

function App() {
  return (
    <main className="bg-gray-900 min-h-screen text-pink-200">
      <Navbar />
      <Catalogo />
    </main>
  );
}

export default App;
