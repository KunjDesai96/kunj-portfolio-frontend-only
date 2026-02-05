import avatar from '../assets/avatar.png'
import './hero.css'

export default function Hero({ profile, children = null }) {
    if (!profile) return null

    return (
        <div className="hero">
            <div className="hero-left">
                <p className="hero-intro">Hey 👋, I’m</p>
                <h1>{profile.name}</h1>
                <h2>{profile.title}</h2>

                <div className="hero-contact">
                    <p>📧 {profile.email}</p>
                    <p>📞 {profile.phone}</p>
                </div>

                <div className="hero-links">
                    {profile.linkedin && (
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    )}
                    <span className="link-separator">|</span>
                    {profile.gitHub && (
                        <a href={profile.gitHub} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}
                </div>

                {children}
            </div>

            <div className="hero-right">
                <img src={avatar} className="hero-avatar" />
            </div>
        </div>
    )
}
