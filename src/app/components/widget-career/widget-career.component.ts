import { Component, OnInit , Input} from '@angular/core';

// env
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-widget-career',
  templateUrl: './widget-career.component.html',
  styleUrls: ['./widget-career.component.scss']
})
export class WidgetCareerComponent implements OnInit {
  @Input() dataWidget: any;
  apiAsset = environment.API_URL_ASSET;
  
  constructor() { }

  ngOnInit(): void {
  }

}
