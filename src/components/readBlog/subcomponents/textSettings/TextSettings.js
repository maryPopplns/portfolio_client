import { useState } from 'react';
import './textSettings.css';

function TextSettings({ setFontSize }) {
  const [currentFontSize, setCurrentFontSize] = useState('24');

  function fontSizeHandler({ target }) {
    setCurrentFontSize(target.value);
    setFontSize(target.value);
  }

  return (
    <ul className='settingsContainer'>
      <li className='setting'>
        <label htmlFor='textSize'>text-size</label>
        <input
          type='range'
          id='textSize'
          min='24'
          max='32'
          name='textSize'
          value={currentFontSize}
          onChange={fontSizeHandler}
          data-testid='text_size'
        ></input>
      </li>
    </ul>
  );
}

export default TextSettings;
