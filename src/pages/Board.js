import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardComponent from '../componets/Board/component.Board'

function Board() {
    return (
      <div className="App">
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<BoardComponent />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      </div>
    );
  }
  
  export default Board;