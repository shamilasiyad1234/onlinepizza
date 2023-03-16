import { Component } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';

import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name:string=''
  pass:string=''

  email:string=''
  constructor(private fireS:FireService){}
  login(){
   this.fireS.login(this.name,this.pass,this.email) 
  }

}
