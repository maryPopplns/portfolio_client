import './projectTile.css';

function ProjectTile({ title, description }) {
  return (
    <li className='projectTile'>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default ProjectTile;
