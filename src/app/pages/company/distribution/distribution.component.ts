import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {

  map: boolean = true;
  langTit;
  loading = true;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    // lang
     this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/distribution').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
      this.loading = false;
    });

  }

}
