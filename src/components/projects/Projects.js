import './projects.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProjectTile from './subcomponents/projectTile/ProjectTile';
import { setCurrentPage } from '../../store/slices/currentPage';

import projects from './projects.json';

function Projects() {
  const dispatch = useDispatch();
  useEffect(() => {
    // set page
    dispatch(setCurrentPage('projects'));
  }, [dispatch]);

  const projectTiles = projects.map(({ title }) => (
    <ProjectTile title={title} />
  ));

  return (
    <main className='projects'>
      <h1 className='projectsHeading'>projects</h1>
      <ul>{projectTiles}</ul>
    </main>
  );
}

export default Projects;
