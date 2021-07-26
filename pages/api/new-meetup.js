import {MongoClient} from 'mongodb'

async function handler(req,res){
 if(req.method ==='POST'){
     const data = req.body
     //const {title,image,address,description} = data
     const client =await MongoClient.connect('mongodb+srv://Bellatrix:Damilola1996@cluster0.7r2zj.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollections = db.collection('meetups')
     const result = await  meetupsCollections.insertOne(data)
console.log(result);
client.close()
res.status(201).json({message:'Meetup inserted'})
}
}

export default handler