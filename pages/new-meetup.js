import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'
  function NewMeetupPage(){
     const router = useRouter()
    const addMeetupHandler=async(enteredMeetupData)=>{
     const response = await fetch('/api/new-meetup', {method:'POST', body:JSON.stringify( enteredMeetupData), headers:{
         'Content-type':'application/json'
     }})
     const data = await response.json()
     console.log(data);  
     router.push('/')
    }
return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
export default NewMeetupPage