import { Component, OnInit, Input} from '@angular/core';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.scss']
})
export class ListReportComponent implements OnInit {
  @Input() dataReport: any;
  
  apiAsset = environment.API_URL_ASSET;

  constructor() { }

  ngOnInit(): void {
  }

}
