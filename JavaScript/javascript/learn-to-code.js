//var name = "Berin";
//var age = 33;
//            
//var message = "Hi, my name is " + name + " and I am " + age + " years old!";

//var firstName = "Berin";
//var lastName = "KeçelerliDirican";
//var dateOfBirth = "04-05-88";
//var age = 33;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//            
//console.log(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * ((5 + 3) -4);
//
//console.log(result);


//var students = ["Timmy", "Janessa", "Arun"];
//
//var naughtyList = [];
//
//naughtyList.push(students[0]);
//
//var index = naughtyList.indexOf("Timmy");
//console.log(naughtyList);
//
//if (index > -1) {
//    naughtyList.splice(index, 1);
//}
//
//console.log(naughtyList);

//var total = 10;
//for (var x = 0; x < total; x++) {
//    console.log(x);
//}

//var student0 = {
//    firstName: "Jayne",
//    lastName: "Looo",
//    age: 8, 
//};
//
//console.log(student0.greeting());

//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;

var students = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."; 
    }; 
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

//var s1 = new Student("Jenny", "Laga", 5);
//console.log(s1);
//console.log(s1.greeting());


//students.push(student0);
//students.push(student1);
//students.push(student2);

for (var index = 0; index < students.length; index++){
    var student = students[index];
    console.log(student.greeting());
}



//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);




//function area(length, width) {
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10, 15));
//rectanglesAreas.push(area(14, 2));
//rectanglesAreas.push(area(4, 5));
//
//console.log(rectanglesAreas);
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//};
//
//var printCustomerName = function(first,last){
//    console.log("First Name: " + first + "Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//    
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);









































