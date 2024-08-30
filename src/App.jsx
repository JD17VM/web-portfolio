import React, { useEffect, useState, useRef } from 'react';
import styles from './assets/styles/estilos_pagina_inicio.module.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { JobCard, ProjectCard } from './widgets/JobCard';

import pageData from "./data/data"

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  // Referencias a las secciones
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  // Función throttle para mejorar el rendimiento
  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Verificar en qué sección está el usuario
      if (scrollPosition < section2Ref.current.offsetTop - 100) {
        setActiveSection('section1');
      } else if (scrollPosition < section3Ref.current.offsetTop - 100) {
        setActiveSection('section2');
      } else if (scrollPosition < section4Ref.current.offsetTop - 100) {
        setActiveSection('section3');
      } else {
        setActiveSection('section4');
      }
    };

    // Añadir throttle al evento scroll
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    let section;

    // Obtener la referencia correcta según el sectionId
    switch (sectionId) {
      case 'section1':
        section = section1Ref.current;
        break;
      case 'section2':
        section = section2Ref.current;
        break;
      case 'section3':
        section = section3Ref.current;
        break;
      case 'section4':
        section = section4Ref.current;
        break;
      default:
        section = section1Ref.current;
    }

    // Desplazamiento suave
    window.scrollTo({
      top: section.offsetTop - 50,
      behavior: 'smooth'
    });

    setActiveSection(sectionId);
  };

  return (
    <div className={styles['container-total']}>
      <div className={styles['container-scroll-info-block']}>
        <div className={styles['info-block']}>
          <h1>Juan Diego Valdivia Mendoza</h1>
          <p>Full-Stack Developer</p>
          <p>I build accessible, pixel-perfect digital experiences for the web.</p>

          <nav>
            <ul>
              <li>
                <a
                  href="#section1"
                  onClick={(e) => handleNavClick(e, 'section1')}
                  className={activeSection === 'section1' ? styles.active : ''}
                >
                  ABOUT ME
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  onClick={(e) => handleNavClick(e, 'section2')}
                  className={activeSection === 'section2' ? styles.active : ''}
                >
                  INTERESTS
                </a>
              </li>
              <li>
                <a
                  href="#section3"
                  onClick={(e) => handleNavClick(e, 'section3')}
                  className={activeSection === 'section3' ? styles.active : ''}
                >
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a
                  href="#section4"
                  onClick={(e) => handleNavClick(e, 'section4')}
                  className={activeSection === 'section4' ? styles.active : ''}
                >
                  PROJECTS
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles['social-links']}>
            <a href=""><FaGithub /></a>
            <a href=""><MdEmail /></a>
            <a href=""><FaLinkedin /></a>
          </div>

          <div className={styles['container-languages']}>
            <h2>LANGUAGES</h2>
            <ul>
              <li><p>Spanish:</p> <p>Native</p></li>
              <li><p>English:</p> <p>Proficient</p></li>
              <li><p>Portuguese:</p> <p>Intermediate</p></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles['container-text-title']}>
        <div className={styles['text-title']} ref={section1Ref} id="section1">
          <h2>ABOUT</h2>
          <p>{pageData.about}</p>
        </div>

        <div className={styles['text-title']} ref={section2Ref} id="section2">
          <h2>INTERESTS</h2>
          <p>{pageData.interests}</p>
        </div>
      </div>

      <div className={styles['container-experience']} ref={section3Ref} id="section3">
        <h2>EXPERIENCE</h2>
        <div>
          {pageData.experience.map((job, index) => (
            <JobCard 
              key = {index} 
              dateToDate = {job.dateToDate} 
              roleCompany = {job.roleCompany} 
              description = {job.description} 
              skills ={job.skills} 
            />
          ))}
        </div>
      </div>

      <div className={styles['container-projects']} ref={section4Ref} id="section4">
        <h2>PROJECTS</h2>
        <div>
          {pageData.projects.map((project, index) => (
            <ProjectCard
              key = {index}
              img = {project.img}
              date = {project.date}
              description = {project.description}
              skills = {project.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;