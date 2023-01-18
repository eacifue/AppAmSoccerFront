import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginComponent from './componets/Login/Login.js'

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            <Route exact path="/" element={<LoginComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
