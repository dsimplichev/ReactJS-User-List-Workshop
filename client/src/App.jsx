import Footer from './components/Footer';
import Header from './components/Header';
import UserList from './components/UserList';
import UserListTable from './components/UserListTable';
import './styles.css';

function App() {


  return (
    <div>
      <Header />
      <main className="main">
          <UserList />

          <UserListTable />
      </main>

      <Footer />
    </div>
  );
}

export default App
