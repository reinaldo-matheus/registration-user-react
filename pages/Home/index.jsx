
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '',
      name: '',
      age: '',
      email: '',
    }
  ]

  return (
    <>
      <div className='container'>
        <form action="">
          <h1>Cadastro de usuários</h1>
          <input placeholder='nome ...' name='nome' type="text" />
          <input placeholder='idade ...' name='idade' type="number" />
          <input placeholder='e-mail ...' name='email' type="email" />
          <button type='button'>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade:<span>{user.age}</span></p>
              <p>Email:<span>{user.email}</span></p>
            </div>
            <button type="button">
              <img src={Trash} alt="" />
            </button>
          </div>
        ))}

      </div>

    </>
  )
}

export default Home
