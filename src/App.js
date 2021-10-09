
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index.js'

function App() {
  const state = useSelector((state)=> state.account)
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
        <h1>Hello Redux</h1>
        <h2>{state}</h2>
        <button onClick={()=> depositMoney(10)}>Deposit</button>
        <button onClick={()=> withdrawMoney(12)}>Withdraw</button>
    </div>
  );
}

export default App;
