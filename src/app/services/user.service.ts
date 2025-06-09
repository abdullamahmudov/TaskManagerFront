import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from './../../configs/environment';
import {User} from "./../models/user";
import {RegistrationUser} from "./../models/registrationUser";
import {LogInUser} from "./../models/logInUser";
     
@Injectable()
export class UserService{
     
    private urlRegistration = environment.apiUrl + "usermanagement/registration";
    private urlLogIn = environment.apiUrl + "usermanagement/login";
    constructor(private http: HttpClient){ }

    registationUser(user: RegistrationUser){
        const myHeaders = new HttpHeaders()
        .set("Content-Type", "application/json")
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return this.http.put(this.urlRegistration, JSON.stringify({ data: user }), {headers: myHeaders});
    }

    logIn(user: LogInUser){
        const myHeaders = new HttpHeaders()
        .set("Content-Type", "application/json")
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return this.http.post(this.urlLogIn, JSON.stringify({ data: user }), {headers: myHeaders});
    }
        
    // getUsers(){
    //     return this.http.get<Array<User>>(this.url);
    // }
    
    // createUser(user: User){
    //     const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    //     return this.http.post<User>(this.url, JSON.stringify(user), {headers: myHeaders}); 
    // }
    // updateUser(user: User) {
    //     const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
    //     return this.http.put<User>(this.url, JSON.stringify(user), {headers:myHeaders});
    // }
    // deleteUser(id: string){
     
    //     return this.http.delete<User>(this.url + "/" + id);
    // }
}