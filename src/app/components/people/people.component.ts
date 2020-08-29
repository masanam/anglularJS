import { Component, OnInit, Input} from '@angular/core';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input() dataPeople:any;
  apiAsset = environment.API_URL_ASSET;
  
  constructor() { }

  ngOnInit(): void {
  }

}
