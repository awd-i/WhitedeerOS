import { useState } from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { ExperienceSection } from './components/Sections/ExperienceSection';
import { EducationSection } from './components/Sections/EducationSection';
import { ProjectsSection } from './components/Sections/ProjectsSection';
import { AboutSection } from './components/Sections/AboutSection';

function App() {
  const [activeSection, setActiveSection] = useState('experience');

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      default:
        return <ExperienceSection />;
    }
  };

  return (
    <MainLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
    </MainLayout>
  );
}

export default App;
