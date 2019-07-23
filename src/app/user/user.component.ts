import { Component, OnInit } from '@angular/core';
import { Users } from './Users';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  userModel : Users={
    id:'',
    fname:'Thilini',
    lname:'Wathsala',
    position:'',
    image:''

  }

onSave(){
  this.userService.storeServers(this.userModel).
  subscribe(
    (response)=>console.log(response),
    (error)=>console.log(error)
  );
}

}
