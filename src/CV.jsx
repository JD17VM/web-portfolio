import React, { useEffect, useState, useRef } from 'react';
import './assets/styles/estilos_generales.css'
import './assets/styles/estilos_pagina_cv.scss';

import imageHelper from './utils/imageHelper';

const Dato = ({image, children}) => {
    return (
        <div className='dato'>
            <img src={image} alt="" />
            <p>{children}</p>
        </div>
    );
}

const Seccion_Izquierda = ({titulo,contenido}) => {
    return (
        <div className="seccion_izquierda">
            <div>
                <h2>{titulo}</h2>
                <span></span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: contenido }}></p>
        </div>
    )
}

const Title = ({children}) => {
    return (
        <h2 className='titulo_derecha'>{children}</h2>
    )
}

const Cabecera = ({children, derecha_superior,derecha_inferior}) => {
    return (
        <div className="cabecera">
            <div className="texto">{children}</div>
            <div className="derecha_s">
                <div>{derecha_superior}</div>
                {derecha_inferior}
            </div>
        </div>
    )
}

const Experiencia = ({titulo,descripcion,fecha_inicio,fecha_fin,pais, herramientas}) => {
    return(
        <div className='experiencia'>
            <Cabecera derecha_superior={<><p>{fecha_inicio}</p><p>{fecha_fin}</p></>}  derecha_inferior={pais}>
                <h3>{titulo}</h3>
            </Cabecera>
            <div className="descripcion">
                {Array.isArray(descripcion) ? (
                    <ul>
                        {descripcion.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{descripcion}</p>
                )}
            </div>
            
            <div className="herramientas">
                <p>Herramientas:</p>
                <p>{herramientas}</p>
            </div>
        </div>
    )
}

const CV = () => {
    return (
        <div className='body-cv'>
            <div className="izquierda">
                <h1>Juan Diego <br/> Valdivia Mendoza</h1>
                <h2>Full-Stack Developer</h2>
                <div className="contenedor_datos">
                    <Dato image={imageHelper.calendar_icon}>17 de Abril 2002</Dato>
                    <Dato image={imageHelper.map_icon}>Peru</Dato>
                    <Dato image={imageHelper.github_icon}>github.com/JD17VM</Dato>
                    <Dato image={imageHelper.email_icon}>jdiegodiego4@gmail.com</Dato>
                </div>
                <Seccion_Izquierda 
                titulo='SOBRE MÍ'
                contenido='Desde muy joven, la programación ha sido mi pasión. He tenido la oportunidad de sumergirme en el desarrollo de software y enseñar programación. Me especializo tanto en el desarrollo web backend como frontend, trabajando con una variedad de tecnologías y adaptándome rápidamente a nuevas herramientas.
                <br/><br/>
                Mi versatilidad me permite resolver desafíos complejos y entregar soluciones de alta calidad. Me impulsa la constante evolución del mundo de la tecnología, siempre ansioso por aprender e implementar innovaciones. Ya sea colaborando con equipos o trabajando de forma independiente, mi objetivo es crecer tanto técnica como profesionalmente, a la vez que contribuyo a proyectos significativos.'
                />

                <Seccion_Izquierda 
                titulo='INTERESES'
                contenido='Busco unirme a una empresa que me desafíe con nuevas oportunidades, ya que tengo la capacidad de abordarlas eficazmente.  Estoy comprometido con el aprendizaje y el desarrollo continuo, asegurando así que me mantenga adaptable en un entorno de trabajo dinámico y que entregue consistentemente soluciones innovadoras.'
                />
            </div>
            <div className="derecha">
                <Title>Experiencia</Title>
                <div className="cont_agrupado">
                    <Experiencia 
                    titulo = 'JPAWAJ SAC(Trabajo a tiempo completo y modalidad de trabajo híbrida) - Programador Full-stack'
                    descripcion = {['Diseño e implementación de interfaces de usuario interactivas y responsivas utilizando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y eficiente.','Diseño de la interfaz de usuario y la experiencia de usuario (UI/UX).','Desarrollo y mantenimiento de la funcionalidad del backend utilizando PHP con el framework Laravel, manejando la lógica del lado del servidor y la integración de la base de datos.','Diseño e implementación de la base de datos, optimizando las consultas.']}
                    fecha_inicio = 'Feb-21'
                    fecha_fin = 'Abr-23'
                    pais = 'Peru'
                    herramientas = 'JavaScript, PHP, Laravel, MySQL, CSS, HTML'
                    />

                    <Experiencia 
                    titulo = 'JPAWAJ SAC(Trabajo a tiempo completo y modalidad de trabajo híbrida) - Programador Full-stack'
                    descripcion = {['Diseño e implementación de interfaces de usuario interactivas y responsivas utilizando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y eficiente.','Diseño de la interfaz de usuario y la experiencia de usuario (UI/UX).','Desarrollo y mantenimiento de la funcionalidad del backend utilizando PHP con el framework Laravel, manejando la lógica del lado del servidor y la integración de la base de datos.','Diseño e implementación de la base de datos, optimizando las consultas.']}
                    fecha_inicio = 'Feb-21'
                    fecha_fin = 'Abr-23'
                    pais = 'Peru'
                    herramientas = 'JavaScript, PHP, Laravel, MySQL, CSS, HTML'
                    />

                    <Experiencia 
                    titulo = 'JPAWAJ SAC(Trabajo a tiempo completo y modalidad de trabajo híbrida) - Programador Full-stack'
                    descripcion = {['Diseño e implementación de interfaces de usuario interactivas y responsivas utilizando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y eficiente.','Diseño de la interfaz de usuario y la experiencia de usuario (UI/UX).','Desarrollo y mantenimiento de la funcionalidad del backend utilizando PHP con el framework Laravel, manejando la lógica del lado del servidor y la integración de la base de datos.','Diseño e implementación de la base de datos, optimizando las consultas.']}
                    fecha_inicio = 'Feb-21'
                    fecha_fin = 'Abr-23'
                    pais = 'Peru'
                    herramientas = 'JavaScript, PHP, Laravel, MySQL, CSS, HTML'
                    />
                </div>

                <Title>Educación</Title>
                <div className="cont_agrupado">
                    <Cabecera derecha_superior='quinto año'>
                        <p>Ciencia de la Computación</p>
                        <strong>Universidad Nacional de San Agustín</strong>
                    </Cabecera>
                </div>

                <Title>Cursos</Title>

                <div className="cont_agrupado">
                    <Cabecera derecha_superior='quinto año'>
                        <p>Aplicaciónes en Inteligencia Artifical AI</p>
                        <strong>Universidad Continental</strong>
                    </Cabecera>

                    <Cabecera derecha_superior='quinto año'>
                        <p>Cambridge English Entry Level Certificate in ESOL</p>
                        <strong>International - University of Cambridge</strong>
                    </Cabecera>
                </div>
                
                <Title>Lenguajes</Title>
                <div className="cont_agrupado">
                    <Cabecera>
                        <p>- <strong>Español: </strong>Nativo</p>
                        <p>- <strong>Inglés: </strong>Dominio</p>
                        <p>- <strong>Portugués: </strong>Intermedio</p>
                    </Cabecera>
                </div>
            </div>
        </div>
    );
}

export default CV;