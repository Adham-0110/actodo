import { useState } from "react"
import { Link } from "react-router-dom" 
import { useNavigate } from "react-router-dom"

function Login(props){
    const [eUsername,setEusername] = useState()
    const [ePassword,setEpassword] = useState()
    const users = props.users
    const [ruser,setRuser] = useState(true)
    const navigate = useNavigate()


    function handleUInput(event){
        setEusername(event.target.value)
    }
    function handlePInput(event){
        setEpassword(event.target.value)
    }
    function checkUser(){
        
        var userfound = false

       users.forEach(function(item){
        if(item.username === eUsername && item.password === ePassword){
            console.log("Login Successfully...!")
            userfound = true
            navigate('/Landing',{state:{user:eUsername}})
        }
       
       })

       if (userfound===false){
        console.log("Login Failed...!")
        setRuser(false)
       }
    }
 
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey HI...!</h1>
                {ruser?<p className="m-2">I help you manage your activities after you Login :)</p>:<p className="text-red-700 m-2">Please Sign up before you Login...!</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Username"
                        onChange={handleUInput} />

                    <input
                        type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Password"
                        onChange={handlePInput} />

                
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={'/SignUp'} className="underline">SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login