import { useState, useRef } from 'react'
import Button from './Button/Button'


export default function FeedbackSection() {

    function StateVsRef() {
        const input = useRef()
        const [show, setShow] = useState(false)

        function handleKeyDown(e) {
            if (e.key === 'Enter') {
                setShow(true)
            }
        }
        //console.log(input)
        //debugger отладка
        return (
            <div>
                {/* <h2>{input.current?.value}</h2> */}

                <h3>Input value: {show && input.current.value}</h3>
                <input ref={input} onKeyDown={handleKeyDown} type="text" />
            </div>

        )
    }
    /* onChange={(e) => setValue(e.target.value)} */
    /* const [name, setName] = useState()
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help') */

    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })

    function heandelChangeName(event) {
        setForm((pref) => ({
            ...pref,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    /* function toggleError() {
        setForm({
            hasError: (prev) => !prev
        })
        setForm.hasError((prev) => !prev) меняет текущее состояние
    } */

    return (
        <section>
            <h3>Обратная связь</h3>
            {/* <Button onClick={toggleError}> toggleError</Button> */}
            <form action="">
                <label htmlFor="name">Имя</label>
                <input className="control" id="name" type="text" placeholder="напишите имя" value={form.name}
                    style={{ border: form.hasError ? '1px solid red' : null }} onChange={heandelChangeName} />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={form.reason} onChange={(event) => setForm((pref) => ({ ...pref, reason: event.target.value }))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button style={{ marginBottom: '1rem' }} disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
            <pre>
                name: {form.name}
                reason: {form.reason}
            </pre>
            <hr />
            <StateVsRef />
        </section>

    )
}