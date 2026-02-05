import { useEffect, useRef, useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Projects from './sections/Projects'
import SystemSpine from './components/SystemSpine'
import './App.css'

function App() {
    const [portfolio, setPortfolio] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // store refs for each full-page section
    const sectionRefs = useRef([])

    useEffect(() => {
        fetch('/data/portfolio.json')
            .then(res => res.json())
            .then(setPortfolio)
            .catch(err => console.error('Failed to load portfolio', err))
    }, [])

    useEffect(() => {
        if (!sectionRefs.current.length) return

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index)
                        setActiveIndex(index)
                        entry.target.classList.add('visible')
                    }

                })
            },
            {
                threshold: 0.6
            }
        )

        sectionRefs.current.forEach(section => {
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [portfolio])

    if (!portfolio) return null

    const {
        profile,
        experience,
        skills,
        education,
        projects
    } = portfolio

    const experiencePages = Math.ceil(experience.length / 2)
    // total sections (dynamic)
    const totalSections =
        1 + // hero + about
        experiencePages +
        1 + // skills
        1 + // education
        (projects ? 1 : 0)

    return (
        <>
            {/* Persistent system visualization */}
            <SystemSpine
                sections={Array.from({ length: totalSections })}
                activeIndex={activeIndex}
            />

            <main className="snap-container">
                {/* Hero + About (one page) */}
                <section
                    className="section"
                    ref={el => (sectionRefs.current[0] = el)}
                    data-index={0}
                >
                    <Hero profile={profile}>
                        <About summary={profile.summary} />
                    </Hero>
                </section>

                {/* Experience (two jobs per page) */}
                {Array.from({ length: Math.ceil(experience.length / 2) }).map((_, i) => {
                    const index = 1 + i
                    const jobsForPage = experience.slice(i * 2, i * 2 + 2)

                    return (
                        <section
                            key={i}
                            ref={el => (sectionRefs.current[index] = el)}
                            data-index={index}
                        >
                            <Experience jobs={jobsForPage} />
                        </section>
                    )
                })}


                {/* Skills */}
                <section
                    ref={el =>
                        (sectionRefs.current[1 + Math.ceil(experience.length / 2)] = el)
                    }
                    data-index={1 + Math.ceil(experience.length / 2)}
                >
                    <Skills skills={skills} />
                </section>

                {/* Education */}
                <section
                    ref={el =>
                        (sectionRefs.current[2 + Math.ceil(experience.length / 2)] = el)
                    }
                    data-index={2 + Math.ceil(experience.length / 2)}
                >
                    <Education education={education} />
                </section>

                {/* Projects (optional) */}
                {projects && (
                    <section
                        ref={el =>
                            (sectionRefs.current[3 + Math.ceil(experience.length / 2)] = el)
                        }
                        data-index={3 + Math.ceil(experience.length / 2)}
                    >
                        <Projects projects={projects} />
                    </section>
                )}
            </main>
        </>
    )
}

export default App
