import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useQuery } from 'react-query';

import { fetchUsers } from '@components/UsersList/usersList.api';
import Layout from '@layout/layout';
import Container from '@primitives/Container/Container';
import Title from '@components/Title/Title';
import { SearchInput } from '@components/SearchInput';
import { UsersList } from '@components/UsersList';

let changeInputValue;

function App() {
  const { data, isLoading } = useQuery('users', fetchUsers);
  const [inputValue, setInputValue] = useState('');
  changeInputValue = setInputValue;

  return (
    <Layout>
      <Container>
        <Title>Users List</Title>
        <SearchInput placeholder='Search by user name..' value={inputValue} handleChange={setInputValue} />
        <UsersList users={data} filterBy={inputValue} />
        <ClipLoader loading={isLoading}/>
      </Container>
    </Layout>
  );
}

export { changeInputValue };

export default App;
