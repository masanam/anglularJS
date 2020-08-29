import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  loading = true;
  dataPresentation;
  pagePersentation:number = 1;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }


  ngOnInit(): void {
    
    // Background header
    this.apiService.getDataApi('getMenuDetail/company-presentation').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentCompanyPresentation').subscribe(response => {
      this.dataPresentation = response.data;
      this.loading = false;
    });

  }

}
