function loginName(username){
if(!username){
    console.log("please evnter a valid user name");
    return;
}
return `${username} just logged in`
}
console.log(loginName("Abhi"))