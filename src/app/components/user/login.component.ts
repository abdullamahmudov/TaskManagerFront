import { Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PasswordInputComponent } from "../common/passwordInput.component";
import { UserService } from "./../../services/user.service";
import { LogInUser } from "../../models/logInUser";
import { RouterOutlet, RouterLink, Router} from "@angular/router";
import { User } from "../../models/user";
 
@Component({
    selector: "login",
    standalone: true,
    imports: [FormsModule, PasswordInputComponent],
    templateUrl: `./login.component.html`,
    providers: [UserService]
})
export class LogInComponent {
    login: string = "";
    password: string = "";

    constructor(private userService: UserService, private router: Router){}

    tryLogIn($event : any)
    {
        console.log("tryRegistration");
        if(this.login === "" || this.password === "")
        {
            return;
        }
        this.userService.logIn(new LogInUser(this.login, this.password)).subscribe({
                    next:(data: any) => { 
                        let id = data.id as string;
                        let name = data.name as string;
                        let authKey = data.authKey as string;
                        let user = new User(id, name, authKey);
                        localStorage.setItem("user", JSON.stringify(user));
                        this.router.navigate([""]);
                     },
                    error: error => console.log(error)
                });;
    }
}