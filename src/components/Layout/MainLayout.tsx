import React from 'react';
import { SideMenu } from '../Menu/SideMenu';
import { WhiteDeerPersona } from '../Persona/WhiteDeerPersona';

interface MainLayoutProps {
    children: React.ReactNode;
    activeSection: string;
    onSectionChange: (section: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, activeSection, onSectionChange }) => {
    return (
        <div className="relative w-screen h-screen bg-black overflow-hidden flex flex-col md:flex-row">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black -z-10" />

            {/* Diagonal Background Stripe */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 -skew-x-12 transform origin-bottom-right -z-10" />

            {/* Mobile/Desktop Layout */}

            {/* Left Column: Menu */}
            <div className="w-full md:w-1/4 h-auto md:h-full flex items-center justify-center md:justify-end p-4 z-30">
                <SideMenu activeSection={activeSection} onSectionChange={onSectionChange} />
            </div>

            {/* Center: Persona (Integrated with content) */}
            <div className="absolute inset-0 pointer-events-none z-15">
                <WhiteDeerPersona activeSection={activeSection} />
            </div>

            {/* Right Column: Content */}
            <div className={`w-full md:w-3/4 h-full relative z-20 flex items-center p-4 md:pl-4 md:pr-20 transition-all duration-700 ${activeSection === 'about' ? 'md:translate-x-12' : 'translate-x-0'}`}>
                <div className={`relative transition-all duration-700 ease-in-out ${activeSection === 'about' ? 'w-full md:w-5/6 h-full md:h-4/5' : 'w-full md:w-4/5 h-full md:h-2/3'}`}>
                    {/* Content Container with P5 styling */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md border-2 border-white -skew-x-12 transform origin-bottom-left overflow-hidden">
                        <div className="skew-x-12 w-full h-full overflow-y-auto p-8 custom-scrollbar">
                            {children}
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 right-[-17%] w-32 h-8 bg-white -skew-x-12 -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-8 bg-white -skew-x-12 -z-10" />
                </div>
            </div>
        </div>
    );
};
