export default function Experience({ jobs }) {
    return (
        <section className="section">
            <div style={{ maxWidth: 900 }}>
                {jobs.map((job, index) => (
                    <div key={index}>
                        <h1>{job.company}</h1>

                        <h3>{job.role}</h3>
                        <p className="muted">
                            {job.location} · {job.period}
                        </p>

                        <ul style={{ marginTop: 24 }}>
                            {job.highlights.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        {/* Divider between experiences */}
                        {index !== jobs.length - 1 && (
                            <hr style={{ margin: '48px 0', opacity: 0.15 }} />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
