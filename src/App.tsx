import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectPhases from './components/ProjectPhases';
import Team from './components/Team';
import Footer from './components/Footer';
import { NavItem } from './types';
import { 
  PROJECT_NAME, 
  PROJECT_TAGLINE, 
  PROJECT_DESCRIPTION, 
  TEAM_NAME, 
  teamMembers, 
  projectPhases 
} from './data/projectData';

// Add your website title here
document.title = `${PROJECT_NAME}`;

const navItems: NavItem[] = [
  { id: 'home', title: 'Home', href: '#hero' },
  { id: 'phases', title: 'Project Phases', href: '#phases' },
  { id: 'team', title: 'Team', href: '#team' },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar projectName={PROJECT_NAME} items={navItems} />
      
      <main>
        <Hero 
          title={PROJECT_NAME}
          tagline={PROJECT_TAGLINE}
          description={PROJECT_DESCRIPTION}
        />
        
        <ProjectPhases phases={projectPhases} />
        
        <Team teamName={TEAM_NAME} members={teamMembers} />
      </main>
      
      <Footer projectName={PROJECT_NAME} teamName={TEAM_NAME} />
    </div>
  );
}

export default App;