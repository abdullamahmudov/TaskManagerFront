import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PasswordInputComponent } from "../common/passwordInput.component";
import { UserService } from "./../../services/user.service";
import { RegistrationUser } from "../../models/registrationUser";
 
@Component({
    selector: "logout",
    standalone: true,
    imports: [FormsModule],
    templateUrl: `./logout.component.html`,
    providers: [UserService]
})
export class LogOutComponent { }