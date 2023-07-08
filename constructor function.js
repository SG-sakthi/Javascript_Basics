//constructor

function Person(fn,ln,dob){
    this.fn=fn;
    this.ln=ln;
    this.dob=new Date(dob);
    this.getbirthyear =function(){
        return this.dob.getFullYear();
    }

}
//without using this keyword we must use prototype instead of this 

Person.prototype.getyear =function(){
    return this.dob.getFullYear();
}
// Instantiate object

const person1= new Person('sakthi','ganesh','04-05-2003');
console.log(person1.getyear());