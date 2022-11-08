import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import store from "./Store";

function App() {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => {
    return state.value;
  });

  const toggleState = useSelector((state) => state.showCounter);

  const increase = () => {
    dispatch({ type: "increase", payload: { num: 3 } });
  };
  const decrease = () => {
    dispatch({ type: "decrease", payload: { num: 5 } });
  };
  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  };
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-10 offset-1 text-center">
          <div className="App">
            <h1 className="fw-bold display-4">Hello, Redux !</h1>
            {toggleState && (
              <>
                <div className="counter fs-3 fw-bold">GO : {counterState}</div>
                <div>
                  <button
                    className="btn btn-primary m-2 rounded-5"
                    onClick={increase}
                  >
                    Increase
                  </button>
                  <button
                    className="btn btn-success m-2 rounded-5"
                    onClick={decrease}
                  >
                    Decrease
                  </button>
                </div>
              </>
            )}

            <div>
              <button
                className="btn btn-danger m-2 rounded-5"
                onClick={toggleCounter}
              >
                Hide/Show Counter Number
              </button>
              <h1 className="here fixed-bottom">Mohamed El-Mesery</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
