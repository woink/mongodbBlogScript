import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts"
import { MongoClient, Bson } from "https://deno.land/x/mongo@v0.21.0/mod.ts";

const client = new MongoClient()
await client.connect("mongodb://127.0.0.1:27017")

const db = client.database("lookup")
const peopleCollection = db.collection("people")

const firstName = faker.name.firstName()
const age = faker.random.number(80)

for (let i = 0; i < 50; i++) {
  peopleCollection.insertOne({
    name: firstName,
    age: age
  })
}
