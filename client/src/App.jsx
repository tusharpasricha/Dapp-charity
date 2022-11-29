import { EthProvider } from "./contexts/EthContext";
import User from "./components/User";
import Admin from "./components/Admin"
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom" ;

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">


        <Router>
         
        <Routes>
          {/* <Route path="/admin"><Admin /></Route>
          <Route path="/user"><Demo /></Route> */}
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/user" element={<User/>}/>
        </Routes>
        
        </Router>
        
          
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
