import { ChangeDetectorRef, Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allRecords = [];
  constructor(
    private _modalService: NzModalService,
    private _cdr: ChangeDetectorRef
  ) {}

  addNewProject(edit?: boolean, editData?) {
    const modal = this._modalService.create({
      nzTitle: 'Create New Project',
      nzContent: AddNewProjectComponent,
      nzFooter: null,
      nzComponentParams: edit ? { editData } : null,
    });

    modal.afterClose.subscribe((response) => {
      if (response.message === 'added') {
        console.log(response, '>>>>');
        this.allRecords.push(response.data);
        this.allRecords = [...this.allRecords];
      } else if (response.message === 'edited') {
        this.allRecords[response.originalData.index] = response.data;
        this.allRecords = [...this.allRecords];
      }
      this._cdr.detectChanges();
    });
  }

  deleteChanges(event) {
    console.log(event);
    this.allRecords = this.allRecords.filter((x, i) => i !== event.index);
  }

  editChanges(event) {
    console.log(event);
    this.addNewProject(true, event);
  }
}
