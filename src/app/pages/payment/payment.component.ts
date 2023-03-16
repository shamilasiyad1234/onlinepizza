import { Component } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';

import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cname:any=''
  
  month:any=''
  year:any=''
  cvv:any=''
  constructor(private fireS:FireService){}
  
    pay(){
    // console.log(this.fname)
    // console.log(this.lname)
    // console.log(this.username)
    // console.log(this.gender)
    // console.log(this.email)
    // console.log(this.pass)
    // console.log(this.cpass)

    this.fireS.signup(this.cname,this.month,this.year,this.cvv)
    
    
}
  message(){
    alert('Your order has successfully placed')
}


}