import { Fragment, ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps {
  placeholder?: string; // ? means optional
  className: string;
}

interface ISearchBoxProps {
  showModal: () => void;
  hideModal: () => void;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  showModal,
  hideModal,
  onSearchChange,
  placeholder,
  className,
}: ISearchBoxProps) => {
  return (
    <Fragment>
      <input
        onClick={showModal}
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />

      <div className="input-container" onClick={hideModal}></div>
    </Fragment>
  );
};

export default SearchBox;
