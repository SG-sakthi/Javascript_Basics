class  Person{
    constructor(fn,ln,dob){
        this.fn=fn,
        this.ln=ln,
        this.dob=new Date(dob)

    }
    getBirthyear(){
        return this.dob.getFullYear();
    }
}

const person1 = new Person('sakthi','ganesh','05-06-2003');

console.log(person1.getBirthyear());