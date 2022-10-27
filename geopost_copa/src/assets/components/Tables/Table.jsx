import './Table.css'
import CardsGroups from '../Cards/CardsGroups';
function Table() {
    return (
        <div>
            <h1>Tabela de Grupos</h1>
            <div id="groups">
                <CardsGroups />
                <CardsGroups />
                <CardsGroups />
                <CardsGroups />

                <CardsGroups />
                <CardsGroups />
                <CardsGroups />
                <CardsGroups />
            </div>
        </div>
    )
}

export default Table;