import './App.css';
import Banner from './components/banner';
import Header from './components/header';

function App() {
  let menu = ["Our story", "Membership", "Write", "Sign in",];


  return (
    <div>
      <Header menu1={menu} ></Header>
      <Banner></Banner>
    </div>

  );
}

export default App;
