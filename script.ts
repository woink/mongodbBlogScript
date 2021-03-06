import { faker } from 'https://deno.land/x/deno_faker@v1.0.3/mod.ts';
import { MongoClient } from 'https://deno.land/x/mongo@v0.21.0/mod.ts';

const client = new MongoClient();
await client.connect("mongodb://localhost:27017")

interface PeopleSchema {
  _id: { $oid: string };
  name: string;
  age: number;
}

const db = client.database('lookup');
const people = db.collection<PeopleSchema>('people');

for (let i = 0; i < 1000000; i++) {
  const firstName = faker.name.firstName();
  const age = faker.random.number(80);

	await people.insertOne({
    name: firstName,
    age: age,
  });
}
