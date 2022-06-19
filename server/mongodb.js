const { MongoClient } = require("mongodb");
// mongodb+srv://Afroozeh:mWiNeeySy1hiyrXs@afroozeh9728173.o9s9nzv.mongodb.net/?retryWrites=true&w=majority
const client = new MongoClient("mongodb://127.0.0.1:27017/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, res) => {
  if (err) console.log(err);
  console.log("connect");
});

const insert = async (document) => {
    const result = await client.db().collection("Users").insertOne(document);
    return result;
  };
  
const read = async () => {
    const result = await client.db().collection("Users").find().toArray();
    console.log(result)
    return result;
  };

  const getDataQuery = async (search) => {
    const result = await client.db().collection("Users").find({
      $or:[
        {firstName:search},
        {lastName:search},
        {weight:search},
        {condition:search}
      ]
    }).toArray();
    console.log(result)
    return result;
  };

module.exports = {client, insert, read, getDataQuery};
