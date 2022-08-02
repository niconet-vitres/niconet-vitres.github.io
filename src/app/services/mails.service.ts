import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private http: HttpClient) { }

  sendMails = (userMail: string, message: string): Observable<any>  => {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post("https://formspree.io/f/xpznalyy",
        {
          email: userMail,
          _replyto: 'persan27190@gmail.com',
          message: message
        },
        {
          'headers' : headers
        }
    );
}
}
