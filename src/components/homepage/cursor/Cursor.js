import { useEffect } from 'react';
import './cursor.css';

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    function cursorHandler(event) {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    }
    document.body.addEventListener('mousemove', cursorHandler);
  }, []);
  return <div id='cursor'></div>;
}

export default Cursor;
