import React, { useState } from "react";
import "./calc.css";

const Calculator = () => {
  const [answer, setAnswer] = useState("");
  const data = (e) => {
    const prev = answer.slice(-1);
    const cur = e.target.getAttribute("name");

    const check = (char) => {
      if (char === "+" || char === "-" || char === "*" || char === "/") {
        return 1;
      } else return 0;
    };

    if (answer === "Infinity" || answer === "Invalid!") {
      if (check(cur) === 0) setAnswer(cur);
    } else if (check(prev)) {
      if (check(cur)) {
        setAnswer(answer);
      } else {
        setAnswer(answer.concat(cur));
      }
    } else setAnswer(answer.concat(cur));
  };

  const clear = () => {
    setAnswer("");
  };

  const backspace = () => {
    if (answer === "Infinity" || answer === "Invalid!") setAnswer("");
    else setAnswer(answer.slice(0, answer.length - 1));
  };

  const equal = (e) => {
    try {
      setAnswer(eval(answer).toString());
    } catch {
      if (answer.length === 0) {
        setAnswer("");
      } else {
        setAnswer("Invalid!");
      }
    }
  };

  return (
    <>
      <div className="box">
        <div className="display">
          <input type="text" name="displayCalc" value={answer} readOnly />
        </div>
        <div className="keypad">
          <button onClick={clear} name="clear" id="clear">
            AC
          </button>
          <button onClick={data} name="/" id="sign">
            &divide;
          </button>
          <button onClick={data} name="*" id="sign">
            &times;
          </button>
          <button onClick={backspace} name="backspace" id="backspace">
            C
          </button>
          <button onClick={data} name="7">
            7
          </button>
          <button onClick={data} name="8">
            8
          </button>
          <button onClick={data} name="9">
            9
          </button>
          <button onClick={data} name="-" id="sign">
            &minus;
          </button>
          <button onClick={data} name="4">
            4
          </button>
          <button onClick={data} name="5">
            5
          </button>
          <button onClick={data} name="6">
            6
          </button>
          <button onClick={data} name="+" id="sign">
            +
          </button>
          <button onClick={data} name="1">
            1
          </button>
          <button onClick={data} name="2">
            2
          </button>
          <button onClick={data} name="3">
            3
          </button>
          <button onClick={equal} name="=" id="equal">
            =
          </button>
          <button onClick={data} name="0" id="zero">
            0
          </button>
          <button onClick={data} name="." id="decimal">
            .
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
