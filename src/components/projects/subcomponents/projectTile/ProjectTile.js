import './projectTile.css';

const Technology = ({ technology }) => (
  <li className='technologyTile'>{technology}</li>
);

function ProjectTile(props) {
  const { title, description, technologies, live, github, complete } = props;

  const technologyComponents = technologies.map((technology) => (
    <Technology technology={technology} key={technology} />
  ));

  function anchorHandler(event) {
    event.preventDefault();
  }

  return (
    <li className='projectTile'>
      <h2>{title}</h2>
      <ul className='technologyListContainer'>{technologyComponents}</ul>
      <p>{description}</p>
      <div className='projectTileButtonContainer'>
        <a
          onClick={!live ? anchorHandler : undefined}
          className={!live ? 'hiddenLink' : undefined}
          href={live ? live : ''}
          target={live && '_blank'}
          rel='noreferrer'
        >
          live
        </a>
        <a
          onClick={!github ? anchorHandler : undefined}
          className={!github ? 'hiddenLink' : undefined}
          href={github ? github : ''}
          target={github && '_blank'}
          rel='noreferrer'
        >
          code
        </a>
      </div>
    </li>
  );
}

export default ProjectTile;
