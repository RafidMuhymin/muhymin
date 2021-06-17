/* eslint-disable import/no-anonymous-default-export */
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}@cluster0.avzmu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default function (req, res) {
  client.connect((err) => {
    const collection = client
      .db(`${process.env.DB_NAME}`)
      .collection(`${process.env.DB_COL_3}`);
    if (req.method !== "POST") {
      throw new Error("Only POST method is allowed");
    } else {
      collection
        .insertOne(JSON.parse(req.body))
        .then((res) => {
          console.log("successfully inserted", res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    err ? console.log(err) : console.log("no err");
  });
}
