//Library land
const uid = Symbol('uid');//Using symbol allows the developer to know and use the id property but not the user.
console.log(uid);//above you don't have to add the identifier but you can.

const user = {
     //id: 'p1',
     [uid]: 'p1',
     name: 'Thomas',
     age: 49
};
//Developer can change this symbol
user[uid] = 'p99'
//app land => Using the library 
user.id = 'p2';//This should not be possible
console.log(user[Symbol('uid')]);//Shows undefined 
console.log(Symbol('uid') === Symbol('uid'));//Shows false
console.log(user);//Shows the user object