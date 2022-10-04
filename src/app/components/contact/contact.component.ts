import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MailsService} from '../../services/mails.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  userEmail: FormControl = new FormControl('',[Validators.required, Validators.email]);
  userTexte: FormControl = new FormControl('', Validators.required);
  messageFeedback: string = '';

  constructor(private fb: FormBuilder, private sendMailService: MailsService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userEmail: this.userEmail,
      userTexte: this.userTexte
    })
  }

  send(): void {
    this.sendMailService.sendMails(this.userEmail.getRawValue(), this.userTexte.getRawValue()).subscribe({
      next: feedback => {
        if(feedback.ok) {
          this.myForm.reset();
          this.userTexte.reset();
          this.userEmail.reset();
          this.messageFeedback = "Votre message a bien été envoyé!";
        }
      }
    })
  }

}
