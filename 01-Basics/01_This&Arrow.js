const user={
    username:"abhi",
    price:999,

welcomeMessage : function() {//to refer current context
    console.log(`${this.username } welcome to website`);
    console.log(this)
}
}
user.welcomeMessage()
user.username="sam"//updates context
user.welcomeMessage()
//console.log(this)
//arrow fxn
const addTwo=(n1,n2) => {//arrow function with return :explicid return
    return n1+n2;
}
console.log(addTwo(3,4))
const addTwo1=(n1,n2) =>  (n1+n2)//arrow function without return:implicid return

console.log(addTwo1(3,4))