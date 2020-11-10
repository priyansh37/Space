import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  baseurl ="https://api.spaceXdata.com/v3/launches?limit=100"
  // successurl = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
  // lunchLandurl = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
  // allurl = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014"

  constructor(private http:HttpClient) { }

  getPrograms(query=null){
    var url = this.baseurl;
    debugger
    if(query) url += query;
    return this.http.get(url);
  }

}
