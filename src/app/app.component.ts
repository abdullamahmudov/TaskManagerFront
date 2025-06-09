import { Component, OnChanges, OnInit} from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { User } from "./models/user"
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    styleUrl: `./app.component.css`,
    template: `<div>
                    <nav class = "navigation">
                        <a routerLink="">HOME</a>
                        @if(!isLogIn)
                        {
                            <a routerLink="/login">LOGIN</a>
                            <a routerLink="/registation">REGISTRATION</a>
                        }
                        @else
                        {
                            <a routerLink="/logout">LOGOUT</a>
                        }
                        <a routerLink="/about">ABOUT</a>
                    </nav>
                    <h1>Приложение Angular</h1>
                    <router-outlet></router-outlet>
               </div>`,
})
export class AppComponent implements OnChanges {
    isLogIn : boolean = false;
    ngOnChanges(): void {
        console.log("onChange");
        let user = localStorage.getItem("user");
        this.isLogIn = user !== undefined;
    }
}