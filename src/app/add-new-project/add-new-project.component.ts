import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css'],
})
export class AddNewProjectComponent implements OnInit {
  validateForm: FormGroup;
  @Input() editData;
  constructor(private _fb: FormBuilder, private modal: NzModalRef) {}

  ngOnInit() {
    this.validateForm = this._fb.group({
      projName: [null, Validators.required],
      dateRange: [null, Validators.required],
    });

    if(this.editData){
      console.log(this.editData, "editData");
      this.validateForm.setValue(this.editData.data);
    }
  }

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value, '<<<<<');

    this.modal.close(
      {
        message: this.editData ? 'edited' : 'added',
        originalData: this.editData, 
        data: this.validateForm.value
      }
      );
  }

  dismissModal() {
    this.modal.destroy();
  }
}
