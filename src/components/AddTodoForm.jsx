import { useState } from "react"

function AddTodoForm(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    const [newActivity,setNewActivity] = useState("")

    function handleChange(event){
        setNewActivity(event.target.value)
    }

    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newActivity} onChange={handleChange} className="border border-black bg-transparent p-1" type="text" placeholder="Next Activity...?" />
                <button onClick={addActivity} className="bg-black p-1 border border-black text-white">Add</button>
            </div>
        </div>
    )
}
export default AddTodoForm