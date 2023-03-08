import Card from '../card/card.component.jsx';

import './card-list.styles.css';

const CardList = ({users, hideModal}) => {
    return (
        <div className="card-list">
            {users.map((user) => {
                return (<Card user={user} hideModal={hideModal}/>)
            })}
        </div>
    )
}

export default CardList;