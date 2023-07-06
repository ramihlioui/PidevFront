import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  

  constructor(private auth:AuthServiceService,private route:ActivatedRoute) { }

  focus2;
  password:string
  token = this.route.snapshot.queryParamMap.get('token')

  
  ngOnInit(): void {
  }

  resetPassword(): void {

    console.log(this.password)

    this.auth.resetPassword(this.password,this.token);
  }

}
