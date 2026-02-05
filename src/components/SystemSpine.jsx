import { useEffect, useState } from 'react'

export default function SystemSpine({ sections, activeIndex }) {
    const [pulseIndex, setPulseIndex] = useState(null)

    useEffect(() => {
        setPulseIndex(activeIndex)
        const timeout = setTimeout(() => setPulseIndex(null), 600)
        return () => clearTimeout(timeout)
    }, [activeIndex])

    return (
        <div className="system-spine">
            {sections.map((_, index) => (
                <div
                    key={index}
                    className={`system-node
                        ${index === activeIndex ? 'active' : ''}
                        ${index < activeIndex ? 'completed' : ''}
                        ${index === pulseIndex ? 'pulse' : ''}
                    `}
                />
            ))}
        </div>
    )
}
