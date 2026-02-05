export default function Skills({ skills }) {
    return (
        <section className="section">
            <div style={{ maxWidth: 1000 }}>
                <h1>Skills</h1>

                {skills.map((group, index) => (
                    <div key={index} style={{ marginTop: 32 }}>
                        <h3 className="muted">{group.category}</h3>

                        <div className="skill-grid">
                            {group.skills.map((skill, i) => (
                                <span key={skill} className="skill-pill">
                                    {skill}
                                    {i < group.skills.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
