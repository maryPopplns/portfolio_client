import './readBlog.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ReadBlog() {
  const allPosts = useSelector((state) => state.posts.value);
  const { blogID } = useParams();
  const { title, body, comments } = allPosts.filter(
    ({ _id }) => _id === blogID
  )[0];
  const bodyParagraphs = body
    .split('\n')
    .filter((paragraph) => paragraph !== '');
  console.log(bodyParagraphs);
  // render the header
  // render the

  useEffect(() => {
    // show navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.add('show_navbar');
  }, []);

  return (
    <div className='readBlog'>
      <h1>{title}</h1>
    </div>
  );
}

export default ReadBlog;
