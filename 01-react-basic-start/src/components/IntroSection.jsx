import React from 'react'

export default function IntroSection() {
    return React.createElement('section', null, [
        React.createElement('h1', { className: 'text-center', key: 1 }, 'НУЖЕН САЙТ?'),
        React.createElement('h3', { className: 'text-center', style: { color: '#666' }, key: 2 }, 'ЗАКАЖИ')
    ])
}

/* export default function IntroSection() {
    return (
        <section>
            <h1 className="text-center" style={{ color: '#666' }}>НУЖЕН САЙТ?</h1>
            <h3 className="text-center">ЗАКАЖИ</h3>
        </section>

    )
} */