import { Component, OnInit, VERSION } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private dbService: NgxIndexedDBService) {}
  name = 'Angular ' + VERSION.major;
  ngOnInit(): void {
    console.log('testing IndexDB');
    this.dbService
      .add('cascadingFilters', {
        profileCode: `TULH`,
        recordCreated: `date`,
        recordDeletion: `date`,
        retailerCode: `TRTH`,
        filerResponse: `{}`,
      })
      .subscribe((key) => {
        console.log('key: ', key);
      });
  }
}
