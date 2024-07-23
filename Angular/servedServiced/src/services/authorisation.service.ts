import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
    private isAuthorized:boolean = false;

    private savedPassword:string = "pass";
    private savedLogin:string = "help";

    public login(login:string, password:string):boolean
    {
        debugger;
        if(password == this.savedPassword && login == this.savedLogin)
        {
            
            this.isAuthorized = true;
            return true;
        }

        
        return false;
    }

    public register(login:string, password:string)
    {
        this.savedLogin = login;
        this.savedPassword = password;
    }

    public logout():void
    {
        this.isAuthorized = false;
        
    }

    public getAuthStatus():boolean{
        return this.isAuthorized;
    }

  constructor() { }
}
