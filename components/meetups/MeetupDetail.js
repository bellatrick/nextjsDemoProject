import Image from 'next/image'
import classes from './MeetuDetail.module.css'
const MeetupDetail = (props) => {
    return (
        <section className={classes.detail}>
    <Image src={props.img}/>
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p> 
        </section>
    )
}


export default MeetupDetail
