import ClipLoader from "react-spinners/ClipLoader";
import { useQuery } from 'react-query';

import { getUsers } from './api/index';
import Layout from "./layout/layout";
import Container from "./primitives/Container/Container";
import Title from "./components/Title/Title";
import { SearchInput } from './components/SearchInput';
import { UsersList } from './components/UsersList';

function App() {
  const { data, isLoading } = useQuery('users', getUsers);

  return (
    <Layout>
      <Container>
        <Title>Users List</Title>
        <SearchInput placeholder="Search by user name.." />
        <UsersList users={[1,2]} />
        {console.log('query data', data, isLoading)}
        <ClipLoader loading={isLoading}/>
      </Container>
    </Layout>
  );
}

export default App;
