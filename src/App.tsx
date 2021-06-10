import ClipLoader from "react-spinners/ClipLoader";
import Layout from "./layout/layout";
import Container from "./primitives/Container/Container";
import Title from "./components/Title/Title";
import { SearchInput } from './components/SearchInput';
import { UsersList } from './components/UsersList';

function App() {
  return (
    <Layout>
      <Container>
        <Title>Users List</Title>
        <SearchInput placeholder="Search by user name.." />
        <UsersList users={[1,2]} />
        <ClipLoader />
      </Container>
    </Layout>
  );
}

export default App;
