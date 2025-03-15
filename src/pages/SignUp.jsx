import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(props) {
    const users = props.users
    const setUsers = props.setUsers
    const [eUsername, setEusername] = useState()
    const [ePassword, setEpassword] = useState()
    const [cPassword, setCPassword] = useState()
    const[passCheck,setPCheck] = useState(true)
    const navigate = useNavigate()
   


    function handleUInput(event) {
        setEusername(event.target.value)
    }
    function handlePInput(event) {
        setEpassword(event.target.value)
    }
    function handleCPInput(event){
        setCPassword(event.target.value)
    }
  
    function addUsers() {
        if (!eUsername || !ePassword || !cPassword) {
            alert("Please fill in all the fields.");
            return; 
        }
    
        if (ePassword !== cPassword) {
            setPCheck(false);
            return;
        }
    
       
        setUsers([...users, { username: eUsername, password: ePassword }]);
        navigate('/'); 
    }
    
  

        return (
            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <h1 className="text-3xl font-medium">Hey HI...!</h1>
                    <p className="m-2">SignUp Here :)</p>
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

                        <input
                            type="text"
                            className="w-52 border border-black p-1 bg-transparent rounded-md"
                            placeholder="Confirm Password"
                            onChange={handleCPInput} />
                        {passCheck?"":<p className="text-red-700">Please Enter the Conform Password Same as the Password...! </p>}
                        <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUsers}>Sign Up</button>
                        <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
                    </div>
                </div>
            </div>
        )
    }


export default SignUp