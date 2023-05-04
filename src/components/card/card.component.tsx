import { User } from "../../App";
import "./card.styles.css";

type CardProps = {
  user: User;
  hideModal: () => void;
};

const Card = ({ user, hideModal }: CardProps) => {
  const { name, id, email } = user;

  return (
    <div onClick={hideModal} key={id} className="card-container">
      <img
        className="card-image"
        alt={`user ${name}`}
        src={`https://i.pravatar.cc/250?u=${id + 10}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
