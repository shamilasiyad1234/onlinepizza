import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class FireService {
  constructor(private auth:Auth,private router:Router,private fireS:Firestore){}
   //login method
login(name:string,pass:string,email:string){
  signInWithEmailAndPassword(this.auth,email,pass).then(res=>{
    alert("login succesfully")
    this.router.navigate(['/home'])
  }).catch(err => {
    alert(err)
  })
  }
  // signup
  signup(user:any,email:any,pass:any,cpass:any)
  {
  createUserWithEmailAndPassword(this.auth,email,pass).then(res=>{
    alert("signup succesfully")
    this.router.navigate(['/home'])
  }).catch(err => {
    alert(err)
  })

}
  // constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
    contact(data:any){
      const contactcollection=collection(this.fireS,'contactdetails') 
        addDoc(contactcollection,data).then(res=>{
          alert("data added succesfully")
          
        }).catch(err => {
          alert(err)
        })
      }
      //getcontact method
    getContact(){
      const contactcollection=collection(this.fireS,'contactdetails')
      return collectionData(contactcollection)
    
  }
}





