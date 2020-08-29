import { Component, OnInit, Input } from '@angular/core';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-list-achiv',
  templateUrl: './list-achiv.component.html',
  styleUrls: ['./list-achiv.component.scss']
})
export class ListAchivComponent implements OnInit {
  @Input() dataAchiv:any;

  apiAsset = environment.API_URL_ASSET;
  
  constructor() { }

  ngOnInit(): void {
  }

}
