import { useState } from 'react'
import Button from './Button/Button'


export default function FeedbackSection() {
    const [name, setName] = useState()
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help')

    function heandelChangeName(event) {

        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form action="">
                <label htmlFor="namr">Имя</label>
                <input className="control" id="name" type="text" placeholder="напишите имя" value={name}
                    style={{ border: hasError ? '1px solid red' : null }} onChange={heandelChangeName} />

                <label htmlFor="reason">Причина обращения</label>
                <select id="reason" className="control" value={reason} onChange={(event) => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button>Отправить</Button>
            </form>
            <pre>
                name: {name}
                reason: {reason}
            </pre>
        </section>

    )
}