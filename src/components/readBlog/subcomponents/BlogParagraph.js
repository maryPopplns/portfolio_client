import './blogParagraph.css';

function BlogParagraph({ text, color }) {
  return (
    <p style={{ color }} className='blogPostParagraph'>
      {text}
    </p>
  );
}

export default BlogParagraph;
