import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Home from "./components/screens/Home";
import Signin from "./components/screens/SignIn";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/CreatePost";
import UserProfile from "./components/screens/UserProfile";

import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext(initialState);

const Routing = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch({ type: "USER", payload: user });
      history.push("/");
    } else {
      history.push("/signin");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

// import React, {useEffect,useReducer, createContext,useContext } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route,Switch,useHistory} from "react-router-dom";
// import "./App.css"
// import NavBar from './components/navbar'
// import Home from './components/home'
// import Signin from './components/signin'
// import Signup from './components/signup'
// import Profile from './components/profile'
// import CreatePost from './components/screens/CreatePost'
// import {reducer,initialState} from './reducer/appReducer'
// import TodosList from "./components/todolist"
// import Edit from "./components/edit";
// import complete from "./components/comp";

// class App extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <h3>mern</h3>
//                     </div>
//                     {/* <Switch> */}
//                     <Route path="/"  exact component={TodosList} />
//                     <Route path="/to/:id"  component={Edit} />
//                     <Route path="/co" component={complete} />
//                     {/* </Switch> */}
//             </Router>
//         );
//     }
// }

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={TodosList}/>
//         <Route path="/about" component={Edit}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );
// export const UserContext = createContext()
// const Routing =()=>{
//     const History = useHistory()
//     const {state,dispatch} = useContext(UserContext)
//     useEffect(()=>{
//         const user = JSON.parse(localStorage.getItem('user'))
//         if (user){
//             dispatch({type:'USER',payload:user})
//             return History.push('/profile')
//         }
//         else{
//             return History.push('/signin')
//         }
//     },[])
//     return (
//         <Switch>
//             <Route path='/home'><Home></Home></Route>
//             <Route path='/signin'><Signin></Signin></Route>
//             <Route path='/signup'><Signup></Signup></Route>
//             <Route path='/profile'><Profile></Profile></Route>
//             <Route path='/createPost'><CreatePost></CreatePost></Route>
//         </Switch>
//     )
// }

// function App(){
//     const [state,dispatch] = useReducer(reducer,initialState)
//     return (
//         <UserContext.Provider value={{state,dispatch}}>
//         <Router>
//             <Route path='/'><NavBar></NavBar></Route>
//             <Routing></Routing>
//         </Router>
//         </UserContext.Provider>
//     );
// }
// export default App;
