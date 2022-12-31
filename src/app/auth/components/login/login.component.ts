import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { UserLogin } from '../../user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  user: UserLogin={email:'',password:''};
  wating:boolean=false;
  
  constructor(private authService: AuthServiceService, private router: Router) {}
  
  onSubmit_Sign_In() {
    
    this.wating=true
    
    if (this.user.email.length > 0 && this.user.password.length > 0) {
      
      this.authService.login(this.user).subscribe(r => {
        this.router.navigate(["/"])
        console.log(r)
        this.wating=false
      }, error => {
  
        alert("The email or password is incorrect")
  
        this.wating=false
      })
    } else {
      this.wating=false
      alert("Complate username and password")
    }
  

}
}
