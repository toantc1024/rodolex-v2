import './card.styles.css';

const Card = ({user}) => {
    const {name, id, email, hideModal} = user;
    
    return (
        <div onClick={hideModal} key={id} className='card-container'>
            <img className="card-image" alt={`user ${name}`} src={`https://i.pravatar.cc/250?u=${id+10}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;