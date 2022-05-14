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
  const [fontSize, setFontSize] = useState(24);
  const [lineHeight, setLineHeight] = useState(29);
  const {
    title,
    body,
    date: inputDate,
    comments,
  } = allPosts.filter(({ _id }) => _id === blogID)[0];

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
    const conversion = (fontSize * 6) / 5;
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
    return <BlogParagraph text={paragraph} key={key} />;
  });

  return (
    <div className='readBlog'>
      <TextSettings setFontSize={setFontSize} />
      <h1>{title}</h1>
      <p className='readBlogDate'>- {date} -</p>
      <div className='bodyParagraphs' style={bodyParagraphsStyle}>
        {bodyComponents}
      </div>
      <Comments blogID={blogID} comments={comments} />
    </div>
  );
}

export default ReadBlog;
