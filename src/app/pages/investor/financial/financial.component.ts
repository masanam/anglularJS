import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  loading = true;
  dataFinancial;
  pageFinancial:number = 1;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }


  ngOnInit(): void {
    // Background header
    this.apiService.getDataApi('getMenuDetail/financial-statement').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentFinancial').subscribe(response => {
      this.dataFinancial = response.data;
      this.loading = false;
    });

  }
}
