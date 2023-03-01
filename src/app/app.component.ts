import { Component } from '@angular/core';
import { CallDataModel } from 'src/app/components/call-form/call-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCallDataReceived: boolean;
  callDataList: any = [];
  onSubmit(formData: CallDataModel) {
    this.isCallDataReceived = true;
    this.callDataList.push(formData);
  }

  callDataHandler(data: any) {
    if (data) {
      this.isCallDataReceived = false;
    }
  }
}
