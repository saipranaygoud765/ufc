import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
constructor(private http: HttpClient, private router: Router){}

signup(fullname: string ,email1: string, phone: number, password: string ) {
    return this.http.post('',{
        fullname: fullname,
        email: email1,
        phone: phone,
        password: password
    });
}

login(email: string, password: string){
    return this.http.get('');
}

forgot(email: string){
    return this.http.get('');
}

}