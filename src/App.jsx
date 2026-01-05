import "./App.css";
import { UserProvider } from "./components-test/UserProvider.jsx";
import { Catalogo } from "./easy-boom/Catalogo.jsx";

function App() {
  return (
    <UserProvider>
      <main className="bg-gray-900 min-h-screen text-pink-200">
        <Catalogo />
      </main>
    </UserProvider>
  );
}

export default App;
