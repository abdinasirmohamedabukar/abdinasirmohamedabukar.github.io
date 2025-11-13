const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");


async function insertStudents() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("university");
    const students = db.collection("students");

    const result = await students.insertMany([
{ name: "Abdinasir Abukar", age: 23, department: "Machine Learning" },
{ name: "Abdirahman Noor", age: 25, department: "Information Security" },
{ name: "Hodan Muse", age: 22, department: "Web Development" },
{ name: "Mahad Ibrahim", age: 24, department: "Computer Networks" },
{ name: "Ayaan Abdullahi", age: 26, department: "Data Science" },
{ name: "Fatima Osman", age: 21, department: "Robotics Engineering" },
{ name: "Aliyah Farah", age: 27, department: "Internet of Things (IoT)" }




     
    ]);

    console.log(`Inserted ${result.insertedCount} students into the collection.`);
  } catch (err) {
    console.error(" Error inserting students:", err);
  } finally {
    await client.close();
    console.log(" Connection closed");
  }
}


async function readStudents() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("university");
    const students = db.collection("students");

    const allStudents = await students.find().toArray();
    console.log("All Students:");
    console.log(allStudents);

  } catch (err) {
    console.error("Error reading students:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}


async function deleteStudents() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("university");
    const students = db.collection("students");

    const result = await students.deleteMany({
      name: { $in: [ "Fatima Osman","Ayaan Abdullahi","Mahad Ibrahim"] } 
    });

    console.log(` Deleted ${result.deletedCount} students.`);

  } catch (err) {
    console.error(" Error deleting students:", err);
  } finally {
    await client.close();
    console.log(" Connection closed");
  }
}

async function updateStudents() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("university");
    const students = db.collection("students");

   
    const result = await students.updateMany(
      {}, 
      { $set: { status: "active" } } 
    );
    console.log(` Updated ${result.modifiedCount} students (status set to active)`);

  } catch (err) {
    console.error(" Error updating students:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}




// insertStudents();
// readStudents();
// deleteStudents();
updateStudents();
