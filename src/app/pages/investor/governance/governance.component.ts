import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent implements OnInit {

  dataCharter;
  dataRisk;
  bgImg;
  langTit;
  apiAsset = environment.API_URL_ASSET;
  loading = true;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    
    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/corporate-governance').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    // Content
    this.apiService.getDataApi('getDocumentCharter').subscribe(response => {
      this.dataCharter = response.data;
      this.loading = false;
    });

    this.apiService.getDataApi('getDocumentRiskManagement').subscribe(response => {
      this.dataRisk = response.data;
    });

  }

}
