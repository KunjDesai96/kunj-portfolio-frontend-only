export default function Projects({ projects }) {
    return (
        <section className="section">
            <div style={{ maxWidth: 1000 }}>
                <h1>Projects</h1>

                {projects.map((project, index) => (
                    <div key={index} style={{ marginTop: 32 }}>
                        <h3>{project.title}</h3>
                        <p className="muted">{project.technologies}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
