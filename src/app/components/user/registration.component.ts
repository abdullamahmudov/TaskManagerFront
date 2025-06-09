import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PasswordInputComponent } from "../common/passwordInput.component";
import { UserService } from "./../../services/user.service";
import { RegistrationUser } from "../../models/registrationUser";
import { RouterOutlet, RouterLink, Router} from "@angular/router";
import { User } from "../../models/user";
 
@Component({
    selector: "registation",
    standalone: true,
    imports: [FormsModule, PasswordInputComponent],
    templateUrl: `./registation.component.html`,
    providers: [UserService]
})
export class RegistationComponent {
    login: string = "";
    name: string = "";
    password: string = "";

    constructor(private userService: UserService, private router: Router){}

    tryRegistration($event : any)
    {
        console.log("tryRegistration");
        if(this.login === "" || this.name === "" || this.password === "")
        {
            return;
        }
        this.userService.registationUser(new RegistrationUser(this.login, this.name, this.password)).subscribe({
                    next:(data: any) => { },
                    error: error => console.log(error)
                });;
    }
}