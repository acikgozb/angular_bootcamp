import {EmailService} from "./../email.service";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emails: any[] = [];

  constructor(
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.emailService.getEmails()
      .subscribe((emails) => {
        this.emails = emails;
      })
  }

}
