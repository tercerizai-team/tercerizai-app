import Header from "../../../components/header";
import ActionMenuPrest from "../../../components/prestadores/actionMenuPrest";
import DataGridDemo from "../../../components/prestadores/dashboard";
import { DataGridContainer } from "./styles";


function Dashboard () {


    return (
        <>
            <Header />
            <ActionMenuPrest />
            <DataGridContainer>
                <DataGridDemo />
            </DataGridContainer>
            
        </>
    )
}

export default Dashboard