
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setUsersInfo} from './redux/actions/users'
function App( props) {
  console.log(props)

  const handeClick = (type) => {
    if(type === 'name'){
      props.setUsersInfo({name: 'Jordan'})
    }else if(type === 'age'){
      props.setUsersInfo({age: 21})
    }else{
      props.setUsersInfo({gender: 'Male'})
    }
  }
  return (
    <div className="App">
        <h1>Hello Redux</h1>
        <button onClick={()=> handeClick('name')}> Add Name</button>
        <button onClick={()=> handeClick('age')}> Add Age</button>
        <button onClick={()=> handeClick('gender')}> Add Gender</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUsersInfo
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
