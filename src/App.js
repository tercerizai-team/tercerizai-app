import Ways from "./routes/routes";
import { PrestadoresProvider } from "./providers/prestadoresProvider";
import { SchedulesProdiver } from "./providers/schedules";
import { AddressesProvider } from "./providers/userAddresses.provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <PrestadoresProvider>
        <SchedulesProdiver>
          <AddressesProvider>
            <Ways />
            <ToastContainer />
          </AddressesProvider>
        </SchedulesProdiver>
      </PrestadoresProvider>
    </>
  );
}

export default App;
