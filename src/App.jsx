import styles from './assets/styles/estilos_pagina_inicio.module.scss'
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import { JobCard, ProjectCard } from './widgets/JobCard'

function App() {

  return (
    <div className={styles['container-total']}>
      <div className={styles['container-scroll-info-block']}>
        <div className={styles['info-block']}>
          <h1>Juan Diego Valdivia Mendoza</h1>
          <p>Full-Stack Developer</p>
          <p>I build accessible, pixel-perfect digital experiences for the web.</p>

          <nav>
            <ul>
              <li>ABOUT</li>
              <li>EXPERIENCE</li>
              <li>PROJECTS</li>
            </ul>
          </nav>

          <div className={styles['social-links']}>
            <a href=""><FaGithub /></a>
            <a href=""><MdEmail /></a>
            <a href=""><FaLinkedin /></a>
          </div>

          <div className={styles['container-languages']}>
            <h2>LANGUAJES</h2>
            <ul>
              <li><p>Spanish:</p> <p>Native</p></li>
              <li><p>English:</p> <p>Proficient</p></li>
              <li><p>Portugues:</p> <p>Intermediate</p></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles['container-text-title']}>
        <div className={styles['text-title']}>
          <h2>ABOUT</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae hic excepturi eos illo ex ut vero ipsam ad? Obcaecati et doloribus, incidunt distinctio facilis atque velit. In eligendi corporis asperiores rerum aperiam? Exercitationem ipsa similique dolores accusamus. Nemo dolor, quisquam vero laboriosam ex in cupiditate et amet eligendi autem, ipsa hic suscipit, tempore mollitia debitis nisi at! Corporis quam hic fuga, at voluptas cum dolorum assumenda blanditiis consequuntur? Velit molestiae saepe, labore illo minima facere aliquam doloremque. Culpa, itaque?</p>
        </div>

        <div className={styles['text-title']}>
          <h2>ABOUT</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae hic excepturi eos illo ex ut vero ipsam ad? Obcaecati et doloribus, incidunt distinctio facilis atque velit. In eligendi corporis asperiores rerum aperiam? Exercitationem ipsa similique dolores accusamus. Nemo dolor, quisquam vero laboriosam ex in cupiditate et amet eligendi autem, ipsa hic suscipit, tempore mollitia debitis nisi at! Corporis quam hic fuga, at voluptas cum dolorum assumenda blanditiis consequuntur? Velit molestiae saepe, labore illo minima facere aliquam doloremque. Culpa, itaque?</p>
        </div>
      </div>
      
      <div className={styles['container-experience']}>
        <h2>EXPERIENCE</h2>
        <div>
          <JobCard skills={["Javascript", "Node.js", "Python", "Java", "C++", "Laravel", "PHP"]}/>
          <JobCard/>
          <JobCard/>
        </div>
      </div>

      <div className={styles['container-projects']}>
        <h2>PROJECTS</h2>
        <div>
          <ProjectCard skills={["Javascript", "Node.js", "Python", "Java", "C++"]}/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default App
