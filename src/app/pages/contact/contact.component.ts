// import { Component, OnInit } from '@angular/core';
// import { collectionData } from '@angular/fire/firestore';
// import { FireService } from '../fire.service';
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
// email:string=''
// name:string=''
// phonenumber:string=''
// message:string=''
// details:any
//   constructor(private fireS:FireService) { }

//   ngOnInit() {
//     this.fireS.getContact().subscribe(info =>{
//       this.details=info
//   })

// }
// contact(){
//   let info={
//     fullname:this.name,
//     emailaddress:this.email,
//     phonenumber:this.phonenumber,
//     message:this.message
//   }
//   this.fireS.contact(info)
//   this.name=''
//   this.email=''
//   this.phonenumber=''
//   this.message=''
// }
// }




import { Component } from '@angular/core';
  import { collectionData } from '@angular/fire/firestore';

import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
email:string=''
name:string=''
phonenumber:string=''
message:string=''
details:any

constructor(private fireS:FireService){}
ngOnInit(): void{
  this.fireS.getContact().subscribe(data =>{
    this.details=data
  })

}
contact(){
  let data={
    fullname:this.name,
    emailaddress:this.email,
    phonenumber:this.phonenumber,
    message:this.message
  }
  this.fireS.contact(data)
  this.name=''
  this.email=''
  this.phonenumber=''
  this.message=''
}
}




// export class ViewUsersComponent implements OnInit { 
//   userId: any = '';
//   activatedRoute: any = '';

// constructor(private userService: userService, private activatedRouted: ActivatedRoute) { } 

// ngOnInit(): void {

//     this.activatedRoute.params.subscribe((data: { id: any; }) => {
//       this.userId = data.id; 
//     });
    
//     this.userService.viewuser(this.userId).subscribe((data: any) => {
//       console.log(data);
//     });
    
//   }

// }