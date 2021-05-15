import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    
    const PostData = () =>{
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            M.toast({html: "Invalid Email",classes:"#f44336 red"})
            return
        }

        fetch ("/signup",{
            method : "post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
                
            })
        }).then(res=>res.json())
        .then(data=>{
            if (data.error){
                M.toast({html: data.error,classes:"#f44336 red"})
            }
            else{
                M.toast({html:data.massage,classes:"#4db6ac teal lighten-2"})
                history.push('/signin')
            }
        }).catch(err=>{
            console.log(err)
        })

    }

    return (
    <div className = "mycard" >
        <div className="card auth-card input-field">
            <h2> Instagram</h2>
            <input 
            type = "text"
            placeholder = "Name"
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
            />
            <input 
            type = "text"
            placeholder = "email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            />
            <input
            type = "text"
            placeholder = "password"
            value = {password}
            onChange = {(e)=>setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #42a5f5 blue lighten-1" 
            onClick={()=>PostData()}>
                Signup
            </button>
            <h6>
                <Link to = "/signin">Already have an account. Signin</Link>
            </h6>

        </div>
      </div>
    )
}

export default Signup