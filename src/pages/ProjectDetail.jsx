import { useParams, Link } from 'react-router-dom';
import '../pages/Projects.css';

const ProjectDetail = () => {
  const { id } = useParams();

  // tijdelijke data (later kun je dit vervangen met echte projectinfo)
//   const projectInfo = {
//     'rocket-boost': {
//       title: 'Rocket Boost',
//       desc: 'Een game waarin je een raket bestuurt en obstakels ontwijkt.'
//     },
//     'portfolio': {
//       title: 'Portfolio Website',
//       desc: 'Mijn persoonlijke portfolio gebouwd met React en animaties.'
//     },
//     'weerapp': {
//       title: 'WeerApp',
//       desc: 'Een webapp die het actuele weer toont via een externe API.'
//     },
//     'ai-chatbot': {
//       title: 'AI Chatbot',
//       desc: 'Een chatbot die vragen beantwoordt met de OpenAI API.'
//     },
//     'task-manager': {
//       title: 'Task Manager',
//       desc: 'Een app om taken te plannen en deadlines te beheren.'
//     },
//     'ecommerce': {
//       title: 'E-commerce Platform',
//       desc: 'Een webshop met login, productbeheer en betalingssysteem.'
//     },
//   };

  const project = projectInfo[id];

  if (!project) {
    return (
      <main className="projects-page">
        <h2>Project niet gevonden</h2>
        <Link to="./projecten" className="details-btn">Terug naar projecten</Link>
      </main>
    );
  }

  return (
    <main className="projects-page">
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <Link to="./projecten" className="details-btn">← Terug naar projecten</Link>
    </main>
  );
};

export default ProjectDetail;
