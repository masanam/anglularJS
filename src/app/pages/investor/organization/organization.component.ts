import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  dataOrganization;
  dataGraphic;
  pageOrganization:number = 1;
  bgImg;
  titlePage;
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
    this.apiService.getDataApi('getMenuDetail/organization-structure').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getAllDirector').subscribe(response => {
      this.dataOrganization = response.data;
      this.loading = false;
    });

    this.apiService.getDataApi('getOrganizationStructure').subscribe(response => {
      this.dataGraphic = this.apiAsset + response.data[0].preview;;
    });

  }

}
