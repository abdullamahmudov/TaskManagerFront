import { provideRouter, Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
 
// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./not-found.component";
import {TestComponent} from "./test.component";
import {LogInComponent} from "./components/user/login.component";
import {RegistationComponent} from "./components/user/registration.component";
import {LogOutComponent} from "./components/user/logout.component";
 
// определение маршрутов
const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "about", component: AboutComponent},
    { path: "test", component: TestComponent},
    { path: "login", component: LogInComponent },
    { path: "registation", component: RegistationComponent },
    { path: "logout", component: LogOutComponent },
    { path: "**", component: NotFoundComponent }
];
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    ]
};