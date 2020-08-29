import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-other-announ',
  templateUrl: './other-announ.component.html',
  styleUrls: ['./other-announ.component.scss']
})
export class OtherAnnounComponent implements OnInit {

  loading = true;
  pageOthers:number = 1;
  dataOthers;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
  
    // Background header
    this.apiService.getDataApi('getMenuDetail/others').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentOthers').subscribe(response => {
      this.dataOthers = response.data;
      this.loading = false;
    });

  }

}
