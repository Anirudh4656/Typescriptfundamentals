console.log("typescript is here"); 
//tsc --watch match mode

// class User{
//     email:string
//     name:string
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
// class User{
//     // email:string
//     // name:string
//     private _coursecount=1;
//     constructor(
//         public email :string,
//         public name :string,
//         ){
//     }
//     get getApple():string{
//         return `apple${this.email}`;

//     }
//     get courcse():number{
//         return this._coursecount
//     }
//     set course(courseNum) {
//         if(courseNum<=1){
//             throw new Error("course count shold be more than 1")
//         }
//         this._coursecount =courseNum;
//     }
// }
 
// const anirudh= new User("ff","ff");
interface Takephoto{
    cameraMode:string
    filter:string
    burst:number
}
interface Story{
    createStory():void
}
class Youtube implements Takephoto,Story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
    createStory(): void {
        console.log("Story was created");
    }
}