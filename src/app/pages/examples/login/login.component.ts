import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/auth-service.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  email: string;
  password: string;
  constructor(
    private auth: AuthServiceService, 
    ) {}

  ngOnInit() {}

  login(): void {
    console.log(this.email)
    console.log(this.password)

    this.auth.login(this.email, this.password);
  }
}
