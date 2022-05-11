import './projectTile.css';

const Technology = ({ technology }) => (
  <li className='technologyTile'>{technology}</li>
);

function ProjectTile(props) {
  const { title, description, technologies, live, github, complete } = props;

  const technologyComponents = technologies.map((technology) => (
    <Technology technology={technology} key={technology} />
  ));

  return (
    <li className='projectTile'>
      <h2>{title}</h2>
      <ul className='technologyListContainer'>{technologyComponents}</ul>
      <p>{description}</p>
      <div className='projectTileButtonContainer'>
        <a href={live} target='_blank' rel='noreferrer'>
          live
        </a>
        <a href={github} target='_blank' rel='noreferrer'>
          code
        </a>
      </div>
    </li>
  );
}

export default ProjectTile;
