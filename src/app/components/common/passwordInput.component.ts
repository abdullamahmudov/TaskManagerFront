import { Component, ViewChild, ElementRef, Output, Input, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RegistrationUser } from "../../models/registrationUser";
 
@Component({
    selector: "passwordInput",
    standalone: true,
    imports: [FormsModule],
    templateUrl: `./passwordInput.component.html`,
})
export class PasswordInputComponent {
    @ViewChild("passwordInputElement", {static: false})
    passwordInputElement: ElementRef|undefined;
    
    @Input() password: string = "";
    @Output() passwordChange = new EventEmitter<string>();
    isShowPassword: boolean = false;

    onPasswordChange(password: string){
        this.password = password;
        this.passwordChange.emit(password);
    }
    
    showHidePassword($event: any)
    {
        this.isShowPassword = !this.isShowPassword;
        if(this.passwordInputElement !== undefined)
        {
            this.passwordInputElement.nativeElement.type = this.isShowPassword ? "text" : "password";
        }
    }
}