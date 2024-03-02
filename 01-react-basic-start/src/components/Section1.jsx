import WebDeveloper from './WebDeveloper'
import { WebDevelopers } from '../data'

export default function Section1() {
    return (
        <section>
            <h3>WEB-РАЗРАБОТЧИК</h3>
            <ul>
                {WebDevelopers.map(el =>
                    <WebDeveloper key={el.title} {...el} />)}
            </ul>
        </section>
    )
}