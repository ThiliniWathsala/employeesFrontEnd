import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Users} from './Users';


@Injectable()
export class UserService{

constructor(private http:Http){}
    storeServers(userModel:Users){
      return this.http.post('https://users-c7eac.firebaseio.com/data.json',userModel);  
    }

}