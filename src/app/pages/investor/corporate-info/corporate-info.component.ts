import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-corporate-info',
  templateUrl: './corporate-info.component.html',
  styleUrls: ['./corporate-info.component.scss']
})
export class CorporateInfoComponent implements OnInit {

  customClass = "accordion-ver1";
  dataAdvisor;
  dataArticles;
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  loading = true;
  langTit;
  
  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/corporate-information').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    // Content
    this.apiService.getDataApi('getAdvisor').subscribe(response => {
      this.dataAdvisor = response.data;
    });

    this.apiService.getDataApi('getDocumentArticles').subscribe(response => {
      this.dataArticles = response.data;
      this.loading = false;
    });
  }

}
