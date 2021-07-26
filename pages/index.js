import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head'
import { MongoClient } from "mongodb";
  
function HomePage(props) {
  
  return  ( 
  <>
  <Head>
    <title>React meetups</title>
  </Head>
  <MeetupList meetups={props.meetups} />
  </>);
}
export async function getStaticProps(){
    //fetch data from an API
    const client =await MongoClient.connect('mongodb+srv://Bellatrix:Damilola1996@cluster0.7r2zj.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollections = db.collection('meetups')
    const meetups=await meetupsCollections.find().toArray()
    client.close()
 return {

     props:{
         meetups:meetups.map(meetup=>({
           title:meetup.title,
           address:meetup.address,
           image: meetup.image,
           id: meetup._id.toString()
         }))
},

 
 }
}
export default HomePage;
