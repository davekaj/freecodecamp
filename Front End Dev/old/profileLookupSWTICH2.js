
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
 var noContact = "No such contact";
 var noProp = "No Such property";
 var result = "";
 var answer = "";

switch(firstName) {
case "Akira":
    answer = 0;
    break;
case "Harry":
    answer = 1;
    break;
case "Sherlock":
    answer = 2;
    break;
case "Kristian":
    answer = 3;
    break;
default:
    console.log(noContact);
    return noContact;
}

    switch(prop) {
    case "firstName":
        result = contacts[answer]["firstName"];
        console.log(result);
        break;
    case "lastName":
        result = contacts[answer]["lastName"];
        console.log(result);
        break;
    case "number":
        result = contacts[answer]["number"];
        console.log(result);
        break;
    case "likes":
        result = contacts[answer]["likes"];
        console.log(result);
        break;
    default:
        console.log(noProp);
        return noProp;
    }


/*
for (var numberOfProfiles = 0;  numberOfProfiles < contacts.length; numberOfProfiles++){
    var xyz = contacts[numberOfProfiles]["firstName"];
  if (firstName == xyz) {
    /*for (var properties = 0;  properties < 4; properties++){
        var y = contacts[numberOfProfiles]["number"];
        var x = contacts[numberOfProfiles][properties];
      if (prop == x) {         // should this be a switch case?
        console.log(contacts[numberOfProfiles][properties]);
        return contacts[numberOfProfiles][properties];
      }*/

  //  } else {
  //      console.log(noContact);
  //    return noContact;
  //  }
//}
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "Address");