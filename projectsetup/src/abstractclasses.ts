// function identityone(val:number|  string):number|string{
//     return val;
// }
// function identitytwo(val:any):any{
//     return val;
// }
// function identitythree<Type>(val:Type):Type{
//     return val;
// }

// interface Bootle{
//     brand:string,
//     type:number
// }

// identityfour<Bootle>({})
// function getSearchProducts<T>(products:T[]):T{
//     const myIndexx =3
//     return products[myIndexx]
// }
//generic classes
class Sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}
  function printAll(strs:string| string[]|null){
    if(strs){
        if(typeof strs==="object"){
      for(const s of strs){
        console.log(s);
      }
        }else if(typeof strs=== "string"){
            console.log("s");
        }
    }
  }