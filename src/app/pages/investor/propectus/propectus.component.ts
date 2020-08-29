import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-propectus',
  templateUrl: './propectus.component.html',
  styleUrls: ['./propectus.component.scss']
})
export class PropectusComponent implements OnInit {

  loading = true;
  dataProspectus;
  pageProspectus:number = 1;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }


  ngOnInit(): void {
    // Background header
    this.apiService.getDataApi('getMenuDetail/prospectus').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentProspectus').subscribe(response => {
      this.dataProspectus = response.data;
      this.loading = false;
    });
  }

}
