import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  userEmail: FormControl = new FormControl('', Validators.required);
  userTexte: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userEmail: this.userEmail,
      userTexte: this.userTexte
    })
  }

}
