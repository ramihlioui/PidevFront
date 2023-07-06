import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "src/app/services/auth-service.service";

@Component({
  selector: "app-lock",
  templateUrl: "lock.component.html"
})
export class LockComponent implements OnInit {
  focus2;
  email:string;
  constructor(private auth : AuthServiceService) {}

  ngOnInit() {}
  
  forgotPassword(): void {
    console.log(this.email)


    this.auth.forgotPassword(this.email)
  }
}
