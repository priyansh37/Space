import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SpaceXService } from '../space-x.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private list:SpaceXService) { }

  @Input() collection: any;
  ngOnInit(): void {

  }

}
///{{candidate id : C962049}}
