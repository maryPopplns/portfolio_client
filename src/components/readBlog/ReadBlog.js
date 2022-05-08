import './readBlog.css';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Comments from './subcomponents/comments/Comments';
import BlogParagraph from './subcomponents/BlogParagraph';
import TextSettings from './subcomponents/textSettings/TextSettings';

function ReadBlog() {
  const allPosts = useSelector((state) => state.posts.value);
  const { blogID } = useParams();
  const [date, setDate] = useState();
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#FFFFFF');
  const [lineHeight, setLineHeight] = useState(24);
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const {
    title,
    body,
    date: inputDate,
    comments,
  } = allPosts.filter(({ _id }) => _id === blogID)[0];

  useEffect(() => {
    // show navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.add('show_navbar');
  }, []);

  useEffect(() => {
    const newDate = new Date(inputDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      newDate
    );
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    setDate(`${day} ${month} ${year}`);
  }, [inputDate]);

  useEffect(() => {
    const conversion = (fontSize * 3) / 2;
    setLineHeight(conversion);
    // TODO ensure these values are correct
  }, [fontSize]);

  const bodyParagraphsStyle = {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
  };

  // create paragraph components
  const bodyParagraphs = body
    .split('\n')
    .filter((paragraph) => paragraph !== '');
  const bodyComponents = bodyParagraphs.map((paragraph) => {
    const key = v4();
    return <BlogParagraph text={paragraph} key={key} color={color} />;
  });

  return (
    <div style={{ backgroundColor }} className='readBlog'>
      <TextSettings
        setColor={setColor}
        setFontSize={setFontSize}
        setBackgroundColor={setBackgroundColor}
      />
      <h1 style={{ color }}>{title}</h1>
      <p style={{ color }} className='readBlogDate'>
        - {date} -
      </p>
      <div className='bodyParagraphs' style={bodyParagraphsStyle}>
        {bodyComponents}
      </div>
      <Comments blogID={blogID} comments={comments} color={color} />
    </div>
  );
}

export default ReadBlog;