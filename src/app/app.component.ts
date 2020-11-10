import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Space';
  selectedYear = null;
  launchStatus = null;
  landStatus = null;

  constructor(private router: ActivatedRoute, private list: SpaceXService) {}

  collection: any;
  yearDetails: any;
  ngOnInit(): void {
    this.getData();
    this.year();
  }

  getData() {
    var query = '';
    debugger
    if (this.selectedYear) {
      query += '&launch_year=' + this.selectedYear;
    }
    if (this.launchStatus) {
      query += '&launch_success=' + this.launchStatus;
    }
    if (this.landStatus) {
      query += '&land_success=' + this.landStatus;
    }

    this.list.getPrograms(query).subscribe((re) => {
      re;
      this.collection = re;
      console.warn(this.collection);
    });
  }

  year() {
    var x: Number[] = [];
    for (let year = 2006; year <= new Date().getFullYear(); year++) {
      x.push(year);
    }
    this.yearDetails = x;
  }
}

//{{candidate id : C962049}}
