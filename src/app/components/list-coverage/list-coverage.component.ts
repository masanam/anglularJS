import { Component, OnInit, Input } from '@angular/core';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-list-coverage',
  templateUrl: './list-coverage.component.html',
  styleUrls: ['./list-coverage.component.scss']
})
export class ListCoverageComponent implements OnInit {
  @Input() dataList: any;
  @Input() langNow:any;
  constructor() { }

  apiAsset = environment.API_URL_ASSET;

  ngOnInit(): void {
  }

}
