import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../App.css";

const Result = () => {
  const location = useLocation();
  const { attempted, correct, wrong } = location.state || {};

  return (
    <div id='resultcontainer'>
      <div className='container-3'>
        <h1 id='result'>Result</h1>
        <div className="seconddiv">
          <h2>You need more practice!</h2>
          <h1>Your score is {Math.floor((correct/15)*100)} %</h1>
          <div className="lineflex">Total number of questions<p>15</p></div>
          <div className="lineflex">Number Of attempted questions<p>{attempted}</p></div>
          <div className="lineflex">Number of correct answers<p>{correct}</p></div>
          <div className="lineflex">Number Of wrong answers<p>{wrong}</p></div>
        </div>
        <div className="buttons">
          <button><Link to="/">Play again</Link></button>
          <button>Back to home</button>
        </div>
      </div>
    </div>
  );
};

export default Result;