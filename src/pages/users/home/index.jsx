import ActionMenu from "../../../components/actionMenu";
import CardContainer from "../../../components/cardsContainer";
import CategoriesMenu from "../../../components/categoriesMenu";
import Header from "../../../components/header";


function Home () {

    return (
        <>
            <Header />
            <ActionMenu />
            <CategoriesMenu />
            <CardContainer />
        </>
    )
}

export default Home