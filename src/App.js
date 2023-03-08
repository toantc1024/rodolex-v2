
import { useEffect, useState } from 'react';

import SearchBox from './components/search-box/search-box.component.jsx';
import CardList from './components/card-list/card-list.component.jsx';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]); // [value, setValue] = useState(initialValue);
  const [searchKey, setSearchKey] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([users]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchKey.toLowerCase());
    })
    setFilteredUsers(newFilteredUsers);
  }, [users, searchKey]);

  const onSearchChange = async (e) => {
    const searchString = e.target.value;
    setSearchKey(searchString);
  }
 
  
  const showModal = () => {
    const inputContainer = document.querySelector('.input-container');
    const searchBox = document.querySelector('.search-box');
    searchBox.style.width = 'calc(100% - 150px)';
    if(!inputContainer.classList.contains('show-modal'))
        inputContainer.classList.add('show-modal');
  }

  const hideModal = () => {
      const inputContainer = document.querySelector('.input-container');
      const searchBox = document.querySelector('.search-box');
      searchBox.style.width = '';
      if(inputContainer.classList.contains('show-modal'))
          inputContainer.classList.remove('show-modal');
  }

  return (
    <div className="App">
      <h1 className="app-title">R😜dolex</h1>
      <SearchBox 
        onSearchChange={onSearchChange} 
        placeholder="Find people" 
        className='users-search-box'
        hideModal={hideModal}
        showModal={showModal}
      />
      <CardList 
        className="card-list" 
        hideModal={hideModal} 
        users={filteredUsers} 
      />
    </div>
  );
}

export default App;
