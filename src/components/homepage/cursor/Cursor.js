import { useEffect } from 'react';
import './cursor.css';

function Cursor() {
  useEffect(() => {
    var cursor = document.getElementById('cursor');
    document.body.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }, []);
  return <div id='cursor'></div>;
}

export default Cursor;
