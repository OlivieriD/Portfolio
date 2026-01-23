import React from 'react';
import ExperienceView from './ExperienceView';
import EducationView from './EducationView';
import SkillView from './SkillView';
import ProjectView from './ProjectView';
import ContactView from './ContactView';

const HomeView = () => {
    return (
        <div className="home-container">
            <header className="hero"><h1>My Portfolio</h1></header>

            <section id="projects"><h2>Projects</h2><ProjectView /></section>
            <section id="skills"><h2>Skills</h2><SkillView /></section>
            <section id="experience"><h2>Experience</h2><ExperienceView /></section>
            <section id="education"><h2>Education</h2><EducationView /></section>
            <section id="contact"><h2>Contact</h2><ContactView /></section>
        </div>
    );
};

export default HomeView;