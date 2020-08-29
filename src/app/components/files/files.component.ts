import { Component, OnInit , Input} from '@angular/core';

// env
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  @Input() dataFiles;

  apiAsset = environment.API_URL_ASSET;
  
  constructor() { }

  ngOnInit(): void {
  }

}
