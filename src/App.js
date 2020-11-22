import { Divider } from 'antd';

import './app.css'
import Gender from './components/gender/Gender.jsx'
import Num from './components/num/Num.jsx'
import Username from './components/username/Username.jsx'

function App() {
  return (
    <div className="App">
      <Gender></Gender>
      <Divider></Divider>
      <Username></Username>
      <Divider></Divider>
      <Num></Num>
    </div>
  );
}

export default App;
