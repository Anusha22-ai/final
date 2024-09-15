
const express = require("express") 
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
var uri = "mongodb+srv://borrabhavya:<password>@mamaearth.unaier3.mongodb.net/?retryWrites=true&w=majority&appName=mamaearth";
const cors = require('cors');
const encodedpassword = encodeURIComponent("Bhavya@Borra")
const newurl = uri.replace("<password>",encodedpassword)
app.use(cors());
app.listen(3009,()=>{

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version

  const client = new MongoClient(newurl, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function ConnectDatabase() {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      const database = client.db('mamaearth');
  }

 ConnectDatabase()

 app.get("/signup",(req,res)=>{
  const signup=async()=>{
    await client.connect();
    await client.db("admin").command({ ping: 1});
    const database=client.db("datab")
    const collections=database.collection("newUser");
    /*const phone1=await collections.findOne({phone:req.query.phone,password:req.query.password});
    const p=await collections.findOne({phone:"6789"})
    if(p){
      res.send({data:p})
    }
    if(phone1){
      res.send({status:"error",data:phone1,alerting:"Already this phone number existed"})  
    }*/
      const phone2=await collections.insertOne(req.query);
      console.log(phone2)  
      if(phone2){
       res.send({status:"success",data:phone2})
      }
      else{
        res.send({status:"error"})
      }
    }
    signup()
  })

  app.get("/login1",(req,res)=>{

    const Login=async()=>{
    await client.connect();
    await client.db("admin").command({ ping: 1});
    const database = client.db("datab");
    const result = await database.collection("newUser").findOne({phone:req.query.phone,password:req.query.password});
    //const collect=await database.collection("Detail").findOne({phone:"6789"})
    /*if(collect){
      res.send({data:collect})
      console.log(collect)
    }*/
    console.log(result)
    if(result){   
    const  output ={status:"success",data:result}
     res.send(output);
    }
    else{
      res.send({status:"error"})
    }   
    }
    Login()    
    })  
     



   /* const encodedPassword = encodeURIComponent("Bhavya@Borra");
    const newUrl = uri.replace("<password>", encodedPassword);
   let dbClient;
    MongoClient.connect(newUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(client => {
        dbClient = client;
        console.log('Connected to MongoDB successfully');
      })
      .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process if connection fails
      });
    
    // API endpoint to get all baby products
    app.get('/api/baby', async (req, res) => {
      try {
        if (!dbClient) {
          throw new Error('Database connection not established');
        }
        
        const db = dbClient.db('mamaearth');
        const babyCollection = db.collection('baby');
        const babyProducts = await babyCollection.find().toArray(); // Fetch all baby products
    
        console.log("Fetched products:", babyProducts); // Log the fetched products
    
        if (babyProducts.length === 0) {
          console.log("No products found in the database.");
        }
    
        res.json(babyProducts); // Return the products as JSON
      } catch (err) {
        console.error("Error fetching baby products:", err);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    
    
  app.get("/home", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("datab");
    const babyCollection = database.collection("baby");

    const products = await babyCollection.find({}).toArray(); // Retrieve all baby products
    res.json(products); // Send the data to the front-end as JSON
  } catch (error) {
    console.error("Error fetching baby care products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});*/

  app.get("/",(req,res)=>{
    const data = req.query
    console.log(data)
    })
    
//end of server app

})