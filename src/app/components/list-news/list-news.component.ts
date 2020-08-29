import { Component, OnInit, Input} from '@angular/core';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  apiAsset = environment.API_URL_ASSET;

  ngOnInit(): void {
  }

}
