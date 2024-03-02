import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import { Fragment } from 'react';

export default function App() {


    /* let tabContent = null
    if (contentType){
        tabContent = <p>{differences[contentType]}</p>
    }
    else{
        tabContent = <p>Click btn</p>
    } */

    return (
        <>
            <Header />
            <main>
                <Section1 />
                <Section2 />

            </main>
        </>
    );
}
