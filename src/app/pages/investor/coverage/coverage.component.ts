import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  dataCoverage;
  pageMedia:number = 1;
  lang;
  titlePage;
  loading = true;
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  
  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    // Background header
    this.apiService.getDataApi('getMenuDetail/media-coverage').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getMediaCoverage').subscribe(response => {
      this.dataCoverage = response.data;
      this.loading = false;
    });

    this.apiService.langApi.subscribe( value => {
      this.lang = value;
    });

  }

}
