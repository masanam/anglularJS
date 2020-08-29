import { Component, OnInit, ViewEncapsulation } from '@angular/core';


// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  dataVision;
  dataMission;
  dataMotto;
  dataCulture;
  dataAbout;
  bgImg;
  langTit;
  loading = true;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }
  
  ngOnInit() {

    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/about-kino').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    // Content
    this.apiService.getDataApi('getAboutKino').subscribe(response => {
      this.dataAbout = response.data[0];
    });

    this.apiService.getDataApi('getOurValue').subscribe(response => {
      this.dataVision = response.data[0];
      this.dataMission = response.data[1];
      this.dataCulture = response.data[2];
      this.dataMotto = response.data[3];
      this.loading = false;
    });

  }

}
