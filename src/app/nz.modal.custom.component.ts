import { Component } from "@angular/core";

@Component({
  selector: "nz-modal-custom-component",
  template: `
    <nz-card style="border: none;" [nzCover]="coverTemplate">
      <nz-card-tab>
        <nz-tabset nzSize="large">
          <nz-tab nzTitle="Tab 1"> </nz-tab>
          <nz-tab nzTitle="Tab 2"> </nz-tab>
        </nz-tabset>
      </nz-card-tab>

      <nz-card-meta nzTitle="Name" nzDescription="Address"> </nz-card-meta>
    </nz-card>
    <ng-template #coverTemplate>
      <nz-carousel nzAutoPlay style="height: 160px; width: 100%;">
        <div nz-carousel-content *ngFor="let index of array">
          <h3>{{ index }}</h3>
        </div>
      </nz-carousel>
    </ng-template>
  `,
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
      }
    `
  ]
})
export class NzModalCustomComponent {
  array = [1, 2, 3, 4];
}
