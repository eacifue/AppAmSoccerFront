import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from '../../componets/Login/Login'

function Login() {
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
  
  export default Login;
  