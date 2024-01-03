import React, { useState } from 'react';
import './index.css';

const Submit_code = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // Handle the submission action here
    console.log('Submitted value:', inputValue);
    // Add the function here!!
  };

  return (
    <div className="submit-code">
      <label htmlFor="textField" className="submit-code__label"> : ادخل كود الاختبار </label>
      <div className="submit-code__input-container">
      <button onClick={handleSubmit} className="submit-code__button"> </button>
        <input
          type="text"
          id="textField"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="submit-code__input"
        />
      </div>
    </div>
  );
};

export default Submit_code;
