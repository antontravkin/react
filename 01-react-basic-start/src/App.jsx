import Header from './components/Header'
import WebDeveloper from './components/WebDeveloper'
import Button from './components/Button/Button'

import { WebDevelopers } from './data'


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
