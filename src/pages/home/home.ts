import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any=[];
  constructor(public navCtrl: NavController) {
    this.data=[
      {id: 1, name:"Amit Kumar ", title:"Ionic developer", userImage:"https://static.thenounproject.com/png/17241-200.png", content:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."},
      {id: 2, name:"Neeraj ", title:"PHP developer", userImage:"https://thumbs.dreamstime.com/z/male-hipster-cartoon-character-male-hipster-cartoon-character-icon-flat-style-emotion-young-beard-men-avatar-colorful-vector-101094512.jpg", content:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."},
      {id: 3, name:"SanJay Pradhan ", title:"PHP developer",userImage:"http://www.derby-business.co.uk/i/companies/1394169560cartoon-headset.png", content:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."},
      {id: 4, name:"Udit ", title:"Ionic developer", userImage:"https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png", content:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."},
      {id: 5, name:"Kriti ", title:"Ionic developer",userImage:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6b4a6027034133.5635f29cbb728.png", content:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."},
      {id: 6, name:"kailash ", title:"PHP developer",userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjpkvX92AbKFC3uWSwBKjGPxTJMR8fkX4ZMyLjy-UbtmUZksa", content:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."}
    ]
  }

}
