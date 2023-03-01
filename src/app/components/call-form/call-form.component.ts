import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallDataModel } from './call-data.model';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.css'],
})
export class CallFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<CallDataModel>();
  callDataForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.callDataForm = this.fb.group({
      activity: ['', Validators.required],
      callName: ['', Validators.required],
      description: [''],
      system: [false],
      status: [false],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    }) as FormGroup & CallDataModel;
  }

  onSubmit() {
    const formObj = this.callDataForm.value as CallDataModel;
    this.submitForm.emit(formObj);
  }
}
