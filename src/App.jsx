import { useEffect, useState} from "react"

 export const  App = () => {
 const [name, setName] = useState('')
 const [mail, setMail] = useState('')
 const [password, setPassword] = useState('')

 const nameInp = (e) =>{
    setName(e.target.value)
 }
  const emailInp = (e) =>{
    setMail(e.target.value)
 }

  const passwordInp = (e) =>{
    setPassword(e.target.value)
 }
const formBtn =(e) => {
e.preventDefault()
console.log({name,mail,password})
 }


 
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
<>
<form>
    <input 
    onInput={nameInp}
     type="text" className="name" placeholder="Введите имя"/>
    <br /><br />
     <input
     onInput={emailInp}
      type="text" className="mail" placeholder="Введите e-mail"/>
     <br /><br />
     
      <input 
      onInput={passwordInp}
      type="password" className="password" placeholder="Введите пароль"/>
      <br /><br />
      <button onClick={formBtn}
      className="btn">Зарегестрироваться</button>
      </form>
       <div>
      <p>Время на экране: {seconds} секунд</p>
    </div>
      

</>
  )}
