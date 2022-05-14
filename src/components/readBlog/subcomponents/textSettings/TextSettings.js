import { useEffect, useState } from 'react';
import './textSettings.css';

function TextSettings({ setBackgroundColor, setFontSize, setColor }) {
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState('#000000');
  const [currentFontSize, setCurrentFontSize] = useState('16');
  const [currentColor, setCurrentColor] = useState('#000000');

  function backgroundColorHandler({ target }) {
    setCurrentBackgroundColor(target.value);
    setBackgroundColor(target.value);
  }
  function colorHandler({ target }) {
    setColor(target.value);
    setCurrentColor(target.value);
  }
  function fontSizeHandler({ target }) {
    setCurrentFontSize(target.value);
    setFontSize(target.value);
  }

  return (
    <ul className='settingsContainer'>
      <li className='setting'>
        <label style={{ color: currentColor }} htmlFor='backgroundColor'>
          background-color
        </label>
        <input
          type='color'
          id='backgroundColor'
          name='backgroundColor'
          value={currentBackgroundColor}
          onChange={backgroundColorHandler}
          data-testid='background_color'
        ></input>
      </li>
      <li className='setting'>
        <label style={{ color: currentColor }} htmlFor='color'>
          text-color
        </label>
        <input
          type='color'
          id='color'
          name='color'
          value={currentColor}
          onChange={colorHandler}
          data-testid='color'
        ></input>
      </li>
      <li className='setting'>
        <label style={{ color: currentColor }} htmlFor='textSize'>
          text-size
        </label>
        <input
          type='range'
          id='textSize'
          min='16'
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
