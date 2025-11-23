import { useState } from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { ExperienceSection } from './components/Sections/ExperienceSection';
import { EducationSection } from './components/Sections/EducationSection';
import { ProjectsSection } from './components/Sections/ProjectsSection';
import { AboutSection } from './components/Sections/AboutSection';

function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [showMobileContent, setShowMobileContent] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setShowMobileContent(true); // Show content on mobile when section is selected
  };

  const handleBackToMenu = () => {
    setShowMobileContent(false); // Return to menu on mobile
  };

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
    <MainLayout
      activeSection={activeSection}
      onSectionChange={handleSectionChange}
      showMobileContent={showMobileContent}
      onBackToMenu={handleBackToMenu}
    >
      {renderSection()}
    </MainLayout>
  );
}

export default App;
