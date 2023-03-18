import {useSelector,useDispatch} from 'react-redux'
import './crud.css'
import { addUser, deleteUser,updateUsername } from '../../features/Users'
import {useState} from 'react'
function Crud(){
    const dispatch = useDispatch();
    const userList = useSelector((state)=>state.users.value)

    const [name,setName] = useState("")
    const [userName,setUsername] = useState("")
    const [newuserName,setNewusername] = useState("")


    return (
        <>
        <div className='form'>
            <input placeholder="name" onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <input placeholder="username" onChange={(event)=>{
                setUsername(event.target.value)
            }}/>
            <button onClick={()=>{
                dispatch(addUser({id:userList[userList.length-1]?.id+1,name,username:userName}))
            }}>Submit</button>
        </div>
        <div className='displayUsers'>


            {
                userList.map((user)=>{
                   return <div className='oneuser'>
                        <div className='name' >{user.name}</div>
                        <div className='username' >{user.username}</div>
                        <button onClick={()=>{
                            dispatch(deleteUser({id:user.id}))
                        }}>Delete user</button>
                        <input placeholder='change username' onChange={(event)=>{
                            setNewusername(event.target.value)
                        }}/>
                        <button onClick={()=>{
                            dispatch(updateUsername({id:user.id,username:newuserName}))
                        }}>Update username</button>
                    </div>
                })
            }


        </div>
        </>
    )
}

export default Crud