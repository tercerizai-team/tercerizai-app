import Ways from "./routes/routes";
import { PrestadoresProvider } from "./providers/prestadoresProvider";

function App() {
  return (
    <>
      <PrestadoresProvider>
        <Ways />
      </PrestadoresProvider>
    </>
  );
}

export default App;
