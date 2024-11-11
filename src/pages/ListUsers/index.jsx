import TopBackground from '../../components/Background'
import Button from '../../components/Button'
import api from '../../services/api'
import { useEffect, useState,} from 'react'
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from './styles'
import Trash from '../../assets/trash.svg'
import { useNavigate  } from 'react-router-dom'

function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/Rota')
            setUsers(data)
        }
        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/Rota/${id}`)

        const updateUsers = users.filter(user => user.id !== id)

        setUsers(updateUsers)
    }

    return (
        <Container>
            <TopBackground></TopBackground>

            <Title> Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                    <div >
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.age}</p>
                    </div>
                    <TrashIcon src={Trash} onClick={()=>deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={()=> navigate('/')}>Voltar</Button>
        </Container>


    )


}


export default ListUsers