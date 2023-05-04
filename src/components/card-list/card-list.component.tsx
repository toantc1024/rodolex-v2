import { User } from "../../App";
import Card from "../card/card.component";

import "./card-list.styles.css";

type CardListProps = {
  users: User[];
  hideModal: () => void;
};

const CardList = ({ users, hideModal }: CardListProps) => {
  return (
    <div className="card-list">
      {users.map((user) => {
        return <Card user={user} hideModal={hideModal} />;
      })}
    </div>
  );
};

export default CardList;
