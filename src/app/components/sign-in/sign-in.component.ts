import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';
import { ActivatedRoute } from '@angular/router/';
import { AuthCaller } from '../../caller/auth.caller';
import { AuthStore } from '../../store/auth.store';
import { NotificationHelper } from '../../helper/notification.helper';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  isVisible = false;
  username: string;
  password: string;
  constructor(
    public authCaller: AuthCaller,
    public authStore: AuthStore,
    public notificationHelper: NotificationHelper,

    public router: Router
  ) {

   }

  ngOnInit() {
  }


  login() {
    this.authCaller.login(this.username, this.password)
    .then((data)=>{
      this.authStore.auth = JSON.parse(JSON.stringify(data));
      console.log(this.authStore);
      localStorage.token = this.authStore.auth.token;
      this.router.navigateByUrl('/dashboard')
    })
    .catch((error)=>{
      this.notificationHelper.errorMessage("Can not login.", "Something went worng")
    })
  }











  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }



}
