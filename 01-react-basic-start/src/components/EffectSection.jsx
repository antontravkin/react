import { useCallback, useEffect, useState } from "react"
import Button from "./Button/Button"
import Modal from './Modal/Modal'
import useImput from "../hooks/useImput"

export default function EffectSection() {
    const input = useImput()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)

    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effect</h3>
            <Button style={{ marginBottom: '1rem' }} onClick={() => setIsOpenModal(true)}>Открыть информацию</Button>
            <Modal open={isOpenModal}>
                <h3>Modal</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium optio vel inventore quibusdam eveniet dolorum atque sit nobis. Ullam consequuntur neque, commodi saepe cum vel cumque et omnis dolorem.</p>
                <Button onClick={() => setIsOpenModal(false)}>Закрыть</Button>
            </Modal>

            {loading && <p>loading...</p>}
            {!loading && <ul>
                <input type="text" className="control" {...input} />
                <div style={{ marginBottom: '1rem' }}>{input.value}</div>
                {users.filter(user => user.name.toLowerCase().includes(input.value)).map(user => <li key={user.id}>{user.name} <p>{user.email}</p></li>)}

            </ul>}

        </section>

    )
}