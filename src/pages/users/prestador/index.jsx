import ActionMenu from "../../../components/actionMenu";
import CategoriesMenu from "../../../components/categoriesMenu";
import Header from "../../../components/header";
import ProviderPage from "../../../components/providerPage";
import { useParams } from "react-router-dom"

function Prestadores () {

    const idSeller = useParams()
    
    return (
        <>
            <Header />
            <ActionMenu />
            <CategoriesMenu />
            <ProviderPage idSeller={idSeller}/>
        </>
    )
}

export default Prestadores