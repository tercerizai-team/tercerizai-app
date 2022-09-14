import Ways from "./routes/routes";
import { PrestadoresProvider } from "./providers/prestadoresProvider";
import { SchedulesProdiver } from "./providers/schedules";
import { AddressesProvider } from "./providers/userAddresses.provider";

function App() {
  return (
    <>
      <PrestadoresProvider>
        <SchedulesProdiver>
          <AddressesProvider>
            <Ways />
          </AddressesProvider>
        </SchedulesProdiver>
      </PrestadoresProvider>
    </>
  );
}

export default App;
