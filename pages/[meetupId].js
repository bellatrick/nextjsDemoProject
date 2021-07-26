import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetails(props) {
  return (
    <>
    <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description}></meta>
    </Head>
      <MeetupDetail
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Bellatrix:Damilola1996@cluster0.7r2zj.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections
    .find(
      {},
      {
        _id: 1,
      }
    )
    .toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client =await MongoClient.connect('mongodb+srv://Bellatrix:Damilola1996@cluster0.7r2zj.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollections = db.collection('meetups')
  const meetups=await meetupsCollections.findOne({_id: ObjectId( meetupId)})
  client.close()
  return {
    props: {
      meetupData: {
          id:meetups._id.toString(),
          title:meetups.title,
          address:meetups.address,
          image:meetups.image,
          description:meetups.description
      },
    },
  };
}

export default MeetupDetails;
