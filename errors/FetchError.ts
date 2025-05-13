export class FetchError extends Error{
public error:string
public name:string
    constructor(message:string,code:string,name:string){
     super(message);   
     this.name=name
     this.error=name+" " +message

    }
}
