import Ways from "./routes/routes";
import { PrestadoresProvider } from "./providers/prestadoresProvider";
import { SchedulesProdiver } from "./providers/schedules";

function App() {
  return (
    <>
      <PrestadoresProvider>
        <SchedulesProdiver>
          <Ways />
        </SchedulesProdiver>
      </PrestadoresProvider>
    </>
  );
}

export default App;
