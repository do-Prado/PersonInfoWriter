const fileSystem = require("fs");
const Person = require('./person');

const obj = new Person('Felipe', '1995-04-18', 180);

class Operations {
  writeOnFile() {
    const objString = JSON.stringify(obj);
    fileSystem.writeFile("./log.txt", objString, (err) => {
      try {
        console.log("Successfully Written to File.");
      } catch (err) {
        console.log('Catch block. ERROR: ', err);
      }
    });
  }
  
  readFile(){
    fileSystem.readFile("./log.txt", (err, buff) => {
      console.log(buff.toString());
    });
  }
}

const personOperations = new Operations();
personOperations.writeOnFile();
personOperations.readFile();