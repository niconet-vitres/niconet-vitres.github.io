import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  starsControl: UntypedFormControl;
  textEvalControl: UntypedFormControl;
  evaluationFormGroup: UntypedFormGroup;
  userEmailControl: UntypedFormControl;
  feedDate: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.feedDate = new Date().toISOString();
    this.userEmailControl = new FormControl('', [Validators.required, Validators.email]);
    this.starsControl = new UntypedFormControl([Validators.required]);
    this.textEvalControl = new UntypedFormControl('', [Validators.required]);
    this.evaluationFormGroup = this.fb.group({
      user: this.userEmailControl,
      stars: this.starsControl,
      texte: this.textEvalControl,
    });
  }

  startSelected(selectedNumber: number): void {
    this.starsControl.patchValue(selectedNumber);
  }

  isFormValid(): boolean {
    return this.evaluationFormGroup.status === 'VALID';
  }

  getStarColor(starNumber: number): boolean {
    return starNumber <= this.starsControl.value;
  }
}
