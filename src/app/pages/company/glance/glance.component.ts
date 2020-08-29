import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-glance',
  templateUrl: './glance.component.html',
  styleUrls: ['./glance.component.scss']
})
export class GlanceComponent implements OnInit {

  dataGroups;
  dataGraphic;
  bgImg;
  titlePage;
  langTit;
  apiAsset = environment.API_URL_ASSET;
  loading = true;
  
  constructor( private apiService: ApiService ) { }

  ngOnInit() {

    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/kino-at-a-glance').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getGroup').subscribe(response => {
      this.dataGroups = response.data;
      this.loading = false;
    });

    this.apiService.getDataApi('getKoperasiStructure').subscribe(response => {
      this.dataGraphic = this.apiAsset + response.data[0].preview;;
    });

  }
  

}
