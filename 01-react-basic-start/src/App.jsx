import Header from './components/Header/Header'
import IntroSection from './components/IntroSection'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import TabsSection from './components/TabsSection'
import EffectSection from './components/EffectSection'
import FeedbackSection from './components/FeedbackSection'

import { Fragment, useState } from 'react';

export default function App() {
    const [tab, setTab] = useState('effect')

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
                <IntroSection />
                <TabsSection active={tab} onChange={(carrent) => setTab(carrent)} />
                {tab === 'main' && (
                    <>
                        <Section1 />
                        <Section2 />
                    </>
                )}
                {tab === 'feedback' && <FeedbackSection />}
                {tab === 'effect' && <EffectSection />}
            </main >
        </>
    );
}
