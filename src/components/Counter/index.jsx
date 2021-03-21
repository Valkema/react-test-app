import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';


function Counter(props)  {
 const {step} = props;
 const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count+step);
  };

  const decrement = () => {
    setCount(count-step);
    };
  
  return (
    <div>
      <button onClick={increment}> Add step </button>
      <button onClick={decrement}> Sub step </button>
      <p>Value: {count} </p>
    </div>
    );
    
  }

  Counter.propTypes = {
    step: PropTypes.number,
  };

  Counter.defaultProps = {
    step: 1,
  };

export default Counter;
