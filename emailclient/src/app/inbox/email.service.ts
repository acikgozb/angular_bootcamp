import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Email} from "./email";


interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}



@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private rootURL = "https://api.angular-email.com";

  constructor(
    private http: HttpClient
  ) {}

  getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.rootURL}/emails`);
  }

  getEmail(id: string): Observable<Email> {
    return this.http.get<Email>(`${this.rootURL}/emails/${id}`);
  }
}
