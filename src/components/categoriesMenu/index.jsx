import { CategoriesMenuContainer, CardCategory } from "./styles"
import eletrica from "../../assets/icons/eletrica.png"
import eletronicos from "../../assets/icons/eletronicos.png"
import hidraulica from "../../assets/icons/hidraulica.png"
import reformas from "../../assets/icons/reformas.png"
import saude from "../../assets/icons/saude.png"
import veiculos from "../../assets/icons/veiculos.png"
import todos from "../../assets/icons/todos.png"
import { wilcox } from "../../database/database"

function CategoriesMenu () {

    console.log(wilcox)

    return (
        <CategoriesMenuContainer>
            <CardCategory>
                <img src={eletrica} alt="Elétrica" height={65}/>
                <p>Elétrica</p>
            </CardCategory>
            <CardCategory>
                <img src={eletronicos} alt="Elétrica" height={65}/>
                <p>Eletrônicos</p>
            </CardCategory>
            <CardCategory>
                <img src={hidraulica} alt="Elétrica" height={65}/>
                <p>Hidráulica</p>
            </CardCategory>
            <CardCategory>
                <img src={reformas} alt="Reformas" height={65}/>
                <p>Reformas</p>
            </CardCategory>
            <CardCategory>
                <img src={saude} alt="Saúde" height={65}/>
                <p>Saúde</p>
            </CardCategory>
            <CardCategory>
                <img src={veiculos} alt="Veículos" height={65}/>
                <p>Veículos</p>
            </CardCategory>
            <CardCategory>
                <img src={todos} alt="Ver tudo" height={65}/>
                <p>Ver todos</p>
            </CardCategory>
        </CategoriesMenuContainer>
    )
}

export default CategoriesMenu