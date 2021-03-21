import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Clock from './components/Clock';
import { Component } from 'react';
import UserList from './components/UserList';
import Calendar from './components/Calendar';

/* import LoginForm from './components/LoginForm';  */
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'React',
      isGreetingMode: true,
    };
  }
  switchModeGreeting = () => {
    const { isGreetingMode } = this.state;
    this.setState({
      isGreetingMode: !isGreetingMode,
    });
  };
  render() {
    const { username, isGreetingMode } = this.state;
    return (
      <>
        <button onClick={this.switchModeGreeting}> change mode </button>
        <Greeting name={username} isGreeting={isGreetingMode} />
      </>
    );
  }
}

function App() {
  return (<Counter step={1}/>);
}
*/

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default App;