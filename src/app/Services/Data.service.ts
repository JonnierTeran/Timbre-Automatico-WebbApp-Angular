import { UserModel } from "../Models/user.models";
import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core'

@Injectable()
export class DataService{
    user:UserModel;

    constructor(private _HttpClient: HttpClient){
        this.user= new UserModel(0,'','','','')
     }

    public GetUser():UserModel{
        this._HttpClient.get<UserModel[]>('https://nancy-server.onrender.com/api/users')
        .subscribe(
            (Response:UserModel[]) =>  {
                 
            } , 
            Error => console.log(Error))
            
      
         return this.user;
    }

}