import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";


@Component({
  selector: 'app-annual',
  templateUrl: './annual.component.html',
  styleUrls: ['./annual.component.scss']
})
export class AnnualComponent implements OnInit {
  
  loading = true;
  dataAnnual;
  pageAnnual:number = 1;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }


  ngOnInit(): void {
    
    // Background header
    this.apiService.getDataApi('getMenuDetail/annual-report').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentAnnualReport').subscribe(response => {
      this.dataAnnual = response.data;
      this.loading = false;
    });

  }

}
