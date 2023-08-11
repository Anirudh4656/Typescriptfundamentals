//  function add(num:number ){
//     return num+5;
//  }

//  add(5);
//  function add(num:number ):number{
//     return num+5;
//  }

//  add(5);
// function consoleError(errmsg:string):void{
//     console.log(errmsg);
// }
//Never( )

// function fail(msg:string):never{
//     throw new Error(msg);
// }
// function price():{name:string, price:number}{
//     return {name:"reactjs",price:399};
// }
// type User ={
//     name:string;
//     email:string;
// }
// type cardNumber={
//     cardnumber:string;
// }
// type cardDate ={
//     cardDate:string;
// }
// type cardDetails= cardNumber & cardDate &{
//     cvv:number;
// }
//array

// const superHeros:string[] =[]
// superHeros.push("spiderman");

// type User = {
//     name: string
//     isActive: boolean

// }
// const allUsers:  User[] = []
// allUsers.push({name:"", isActive:true});
//Union
// let score:number | string =33
// score=44
// type User ={
//     name:string
//     id : number

// }
// type Admin ={
//     username:string
//     id:number
// }
// let hitesh: User | Admin ={ name:"a",id:88}
// hitesh={username:"ff",id:55}

//Array
// const data: number[]=[1,2,3];
// const data1: (string| number)[]=[1,2,"d"];

//tuples
// let rgb:[number, number]=[87,8,];
// type User=[number,string];

// const newUser:User =[112,"eee"];

//enums
// enum SeatChoice{
//     AISLE="aisle",
//     MIDDLE="middle"
// }
// const hcSeat = SeatChoice.AISLE

interface User{
    email:string,
    userId:number,
    // startTrial:()=>string
    startTrial():string
    getCoupon(couponname:string,value:number):number
}
interface User{
    githubToken:string
}
interface Admin extends User{
    role: "admin"|"ta"| "learner"
}

// const hitesh:User ={email:"g@com",userId:222,
// startTrial:()=>{
//     return "trailn n"
// },
// githubToken:"github",
// getCoupon:(name:"hitesh",off:10)=>{
//     return 25
// }
// }
 export{}