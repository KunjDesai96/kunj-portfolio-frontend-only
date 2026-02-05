export default function Education({ education }) {
    return (
        <section className="section" style={{ marginBottom: "80px" }}>
            {/* Full-width wrapper */}
            <div style={{ width: "100%" }}>

                {/* Title — FULL WIDTH, TOP */}
                <h1 style={{ marginBottom: "40px" }}>
                    Education
                </h1>

                {/* Two-column education content */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "48px",
                        alignItems: "start"
                    }}
                >
                    {education.map((edu, index) => (
                        <div key={index}>
                            {/* Degree */}
                            <h3 style={{ marginBottom: "6px" }}>
                                {edu.degree}
                            </h3>

                            <p className="muted" style={{ marginBottom: "4px" }}>
                                {edu.school} · {edu.location}
                            </p>

                            <p className="muted" style={{ marginBottom: "16px" }}>
                                {edu.year} · GPA {edu.gpa}
                            </p>

                            {/* Projects */}
                            {edu.projects && edu.projects.length > 0 && (
                                <div style={{ marginLeft: "24px", marginTop: "12px" }}>
                                    <h4 style={{ marginBottom: "16px" }}>
                                        Projects
                                    </h4>

                                    {edu.projects.map((project, pIndex) => (
                                        <div
                                            key={pIndex}
                                            style={{
                                                marginBottom: "24px",
                                                paddingLeft: "12px",
                                                borderLeft: "2px solid #2ecc71"
                                            }}
                                        >
                                            <strong
                                                style={{
                                                    display: "block",
                                                    marginBottom: "6px"
                                                }}
                                            >
                                                {project.title}
                                            </strong>

                                            <p
                                                className="muted"
                                                style={{
                                                    fontSize: "0.9rem",
                                                    marginBottom: "6px"
                                                }}
                                            >
                                                Technologies: {project.technologies}
                                            </p>

                                            <p style={{ lineHeight: "1.6" }}>
                                                {project.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
