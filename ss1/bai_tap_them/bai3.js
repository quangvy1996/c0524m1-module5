const displayInfo = ({firstName = "Quân", degree = "NA"}) => {
    console.log(`firstName: ${firstName}`);
    console.log(`degree: ${degree}`);
}
const person1 = { firstName: "An", degree: "Bachelor" };
const person2 = { firstName: "Bình" };
const person3 = {};

displayInfo(person1);
displayInfo(person2);
displayInfo(person3);