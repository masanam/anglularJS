import { Component, OnInit, Input } from '@angular/core';

// env
import { environment } from "src/environments/environment";


@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.scss']
})
export class ListBrandsComponent implements OnInit {
  @Input() dataList: any;
  @Input() color:string = 'black';
  @Input() widthImg:string;
  @Input() uppercase = false;
  @Input() latest = false;
  @Input() lgNow:string;
  @Input() titleCat:string;


  constructor() { }

  apiAsset = environment.API_URL_ASSET;

  ngOnInit(): void {
  }

}
