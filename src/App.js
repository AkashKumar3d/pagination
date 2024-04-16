// import logo from './logo.svg';
import './App.css';
import Table from './component/Table';
import users from "./api/users"
function App() {
  console.log(users,"dinalusers")
  return (
    <>
    <Table users={users}/>
    </>
  );
}

export default App;
