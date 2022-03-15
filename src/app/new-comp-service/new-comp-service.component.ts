import { Component, OnInit } from '@angular/core';
import { PracticeServiceService } from '../practice-service.service';

@Component({
  selector: 'app-new-comp-service',
  templateUrl: './new-comp-service.component.html',
  styleUrls: ['./new-comp-service.component.css']
})
export class NewCompServiceComponent implements OnInit {

   todaydate:any;
   newcomp = "Today's Date:--";
   constructor(private myservice: PracticeServiceService) {}

   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
   }

}
