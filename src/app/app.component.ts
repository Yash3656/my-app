import { Component } from '@angular/core';
import { PracticeServiceService } from './practice-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  todaydate:any;
   constructor(private myservice: PracticeServiceService) {}
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
}
}
