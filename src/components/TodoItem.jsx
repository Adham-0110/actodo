

function TodoItem(props){
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    function handleDelete(deleteId){
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteId)
            {
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(temparr)
    }

 
    return(
        <div className="flex justify-between">
        <p>{props.index}.{props.activity}</p>
        <button className="text-red-700" onClick={()=>{handleDelete(props.id)}}>delete</button>
        </div>
    )
}

export default TodoItem