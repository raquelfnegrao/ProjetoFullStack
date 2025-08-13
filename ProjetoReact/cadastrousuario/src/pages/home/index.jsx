import { useState, useEffect, useRef } from "react";
import './style.css'
import Lixo from './../../assets/trash.png'
import api from './../../services/api'

function App() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function GetUsers(){
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
  }

  async function CreateUser(){
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    GetUsers()
  }

  async function deleteUser(id){
    await api.delete(`/usuarios/${id}`)

    GetUsers()
  }

  useEffect(() => {
    GetUsers ()
  }, [])

  return (
    <>
      <div className='container'>
        <form>
          <h1>CADASTRO</h1>
          <input type="text" name="Nome" id="name" placeholder='Nome' ref={inputName}/>
          <input type="number" name="Idade" id="age" placeholder='Idade' ref={inputAge}/>
          <input type="email" name="Email" id="email" placeholder='Email' ref={inputEmail}/>
          <button type="button" onClick={CreateUser}>CADASTRAR</button>
        </form>

        {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Lixo}/>
          </button>
        </div>
      ))}
        
      </div>
      
    </>
  )
}

export default App
