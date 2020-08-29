import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {

  dataRelease;
  pagePress:number = 1;
  loading = true;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
  
    // Background header
    this.apiService.getDataApi('getMenuDetail/press-release').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentPressRelease').subscribe(response => {
      this.dataRelease = response.data;
      this.loading = false;
    });

  }

}
