import { Component } from '@angular/core';
 import { FireService } from 'src/app/fire.service';
import { collectionData } from '@angular/fire/firestore';

//  import { NgModule } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  
  user:string=''
  
  email:string=''
  pass:string=''
  cpass:string=''
  constructor(private fireS:FireService){}
  signup(){
    // console.log(this.fname)
    // console.log(this.lname)
    // console.log(this.username)
    // console.log(this.gender)
    // console.log(this.email)
    // console.log(this.pass)
    // console.log(this.cpass)

    this.fireS.signup(this.user,this.email,this.pass,this.cpass)
    
    
}
}
