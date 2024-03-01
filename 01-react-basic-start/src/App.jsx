import Header from './components/Header'
import Button from './components/Button'
import { WebDevelopers } from './data'

function WebDeveloper(props) {
    return (
        <li><strong>{props.title}</strong><p>{props.description}</p></li>
    )
}

export default function App() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>WEB-РАЗРАБОТЧИК</h3>
                    <ul>
                        {WebDevelopers.map(el => (
                            <WebDeveloper title={el.title} description={el.description} />
                        ))}
                    </ul>
                    <Button />
                </section>
            </main>
        </div>
    );
}
