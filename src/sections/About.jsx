export default function About({ summary }) {
    return (
        <div className="about">
            <div className="about-wrapper">
                <div className="about-card">
                    <p className="about-text">{summary}</p>
                </div>
            </div>
        </div>
    )
}
