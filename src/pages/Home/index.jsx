import { useRef } from 'react'
import api from '../../services/api'
import { Title, Container, Containerinputs, Form, InputLabel, Input } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/Background'
import { useNavigate } from 'react-router-dom'

function Home() {
  const inputName = useRef() 
  const inputAge = useRef() 
  const inputEmail = useRef() 

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/Rota', {
      email: inputEmail.current.value,
      age:  parseInt(inputAge.current.value),
      name: inputName.current.value
    })

  }
  return (
    <Container>
      <TopBackground>
        
      </TopBackground>
      <Form>
        <Title>Ok react!!</Title>
        <Containerinputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
          </div>
        </Containerinputs>

        <div style={{width: '100%'}}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail do usuário'ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>

      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
    </Container >
  )
}

export default Home
