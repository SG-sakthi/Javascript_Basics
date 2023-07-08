const todos=[{
    id:1,
    text:'sakthi',
    iscompleted:true,
},
{
    id:2,
    text:'ganesh',
    iscompleted:false,
},
{
    id:3,
    text:'kumar',
    iscompleted:true,
}]
//for loops
for(let i=0;i<10;i++){
console.log(i);
}

//while 
let i =2;
while( i < 10)
{
    console.log("sk");
    i++;
}
//foreach,map,filter

todos.forEach(function(todo){
console.log(todo.text);
});

const todoText =todos.map(function(todo){
    return todo.text;
});

const todoCompleted=todos.filter(function(todo){
    return todo.iscompleted ==true;
});

console.log(todoCompleted);