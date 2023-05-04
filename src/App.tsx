import { ChangeEvent, useEffect, useState } from "react";

import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { getData } from "./utils/data.utils";

export type User = {
  id: number;
  name: string;
  email: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]); // [value, setValue] = useState(initialValue);
  const [searchKey, setSearchKey] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => response.json())
    // .then((users) => setUsers(users));
    const fetchUsers = async () => {
      const users = await getData<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchKey]);

  const onSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value;
    setSearchKey(searchString);
  };

  const showModal = () => {
    const inputContainer = document.querySelector(
      ".input-container"
    ) as HTMLInputElement;
    const searchBox = document.querySelector(".search-box") as HTMLInputElement;
    searchBox.style.width = "calc(100% - 150px)";
    if (!inputContainer.classList.contains("show-modal"))
      inputContainer.classList.add("show-modal");
  };

  const hideModal = () => {
    const inputContainer = document.querySelector(
      ".input-container"
    ) as HTMLInputElement;
    const searchBox = document.querySelector(".search-box") as HTMLInputElement;
    searchBox.style.width = "";
    if (inputContainer.classList.contains("show-modal"))
      inputContainer.classList.remove("show-modal");
  };

  return (
    <div className="App">
      <h1 className="app-title">R😜dolex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="Find people"
        className="users-search-box"
        hideModal={hideModal}
        showModal={showModal}
      />
      <CardList hideModal={hideModal} users={filteredUsers} />
    </div>
  );
};

export default App;
