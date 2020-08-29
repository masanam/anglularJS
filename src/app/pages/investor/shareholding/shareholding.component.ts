import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-shareholding',
  templateUrl: './shareholding.component.html',
  styleUrls: ['./shareholding.component.scss']
})
export class ShareholdingComponent implements OnInit {

  dataGraphic;
  dataOwner;
  dataComposion;
  dataDewan;
  titlePage;
  loading = true;
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  langTit;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/shareholding-structure').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getShareHoldingStructure').subscribe(response => {
      this.dataGraphic = this.apiAsset + response.data[0].preview;
    });

    this.apiService.getDataApi('getSharebyOwnership').subscribe(response => {
      this.dataOwner = response.data;
    });

    this.apiService.getDataApi('getSharebyComposition').subscribe(response => {
      this.dataComposion = response.data;
    });

    this.apiService.getDataApi('getSharebyPosition').subscribe(response => {
      this.dataDewan = response.data;
      this.loading = false;
    });

  }

}
