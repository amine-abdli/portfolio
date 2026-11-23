import { projects } from './data/projects'

const skills = [
  {
    title: 'Front-end',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'UI/UX Design']
  },
  {
    title: 'Back-end & API',
    items: ['PHP', 'Laravel', 'Node.js', 'REST API', 'Python']
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'MongoDB', 'SQL']
  },
  {
    title: 'Outils',
    items: ['Git', 'GitHub', 'Linux', 'Figma']
  }
]

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#home">Amine Abdli</a>
          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#about">À propos</a>
            <a href="#skills">Compétences</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow fade-up delay-1">Développeur Web Full Stack</p>
              <h1 className="fade-up delay-2">Amine Abdli</h1>
              <p className="lead fade-up delay-3">
                Je conçois et développe des applications web modernes et performantes avec React et Laravel,
                en accordant une attention particulière à la qualité, aux performances et à l'expérience utilisateur.
              </p>
              <div className="actions fade-up delay-4">
                <a className="button primary" href="#projects">Voir les projets</a>
                <a className="button" href="https://github.com/amine-abdli" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <div className="hero-card" aria-label="Informations rapides">
              <div className="stat">
                <span className="stat-label">Spécialité</span>
                <strong>Développement web full stack</strong>
              </div>
              <div className="stat">
                <span className="stat-label">Technologies clés</span>
                <strong>React.js · Laravel · MySQL</strong>
              </div>
              <div className="stat">
                <span className="stat-label">Localisation</span>
                <strong>Maroc</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">À propos</p>
              <h2>Développeur passionné par les solutions web modernes</h2>
            </div>
            <div className="panel about-panel">
              <img src="/profile.jpeg" alt="Photo d'Amine Abdli" className="about-photo" />
              <div className="about-text">
                <p>
                  Je suis développeur web Full Stack, diplômé en Développement Digital (Bac+2) de la
                  Cité des Métiers et des Compétences de Béni Mellal-Khénifra (OFPPT). Je maîtrise
                  le développement d'applications web avec React.js, Laravel, PHP, JavaScript, MySQL et MongoDB.
                </p>
                <p>
                  Passionné par les nouvelles technologies, je transforme les idées en produits numériques
                  utiles et intuitifs. Je cherche à continuer à progresser, à participer à des projets innovants
                  et à contribuer à la création de solutions web performantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Compétences</p>
              <h2>Technologies et outils</h2>
            </div>
            <div className="grid skills-grid">
              {skills.map((group) => (
                <article key={group.title} className="card animated-card">
                  <h3>{group.title}</h3>
                  <ul className="tags" aria-label={group.title}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Projets</p>
              <h2>Projets sélectionnés depuis GitHub</h2>
              <p className="muted">
                Une sélection de projets publics qui illustrent mon expérience en développement web,
                interfaces utilisateur et solutions applicatives.
              </p>
            </div>
            <div className="grid projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="card project-card animated-card">
                  <div className="project-top">
                    <span className="badge">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <ul className="tags compact" aria-label={`Technologies ${project.title}`}>
                      {project.tech.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                      Voir sur GitHub ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Contact</p>
              <h2>Entrer en contact</h2>
            </div>
            <div className="panel contact-panel">
              <p>
                N'hésitez pas à me contacter pour une opportunité, une collaboration ou pour échanger
                autour d'un projet.
              </p>
              <div className="contact-links">
                <a href="mailto:amine06abdli@email.com">amine06abdli@email.com</a>
                <a href="https://github.com/amine-abdli" target="_blank" rel="noreferrer">github.com/amine-abdli</a>
                <a href="https://www.linkedin.com/in/mohaned-amine-abdli-57950a334/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Amine Abdli. Tous droits réservés.</p>
          <a href="#home">Retour en haut</a>
        </div>
      </footer>
    </div>
  )
}

export default App