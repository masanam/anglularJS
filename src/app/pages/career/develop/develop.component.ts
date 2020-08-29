import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.scss']
})
export class DevelopComponent implements OnInit {
  dataExperience;
  dataTrainee;
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  loading = true;
 
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Background header
    this.apiService.getDataApi('getMenuDetail/development-program').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    //Content
    this.apiService.getDataApi('getDevelopmentProgram').subscribe(response => {
      this.dataExperience = response.data[0];
      this.loading = false;
    });
    this.apiService.getDataApi('getDevelopmentProgram').subscribe(response => {
      this.dataTrainee = response.data[1];
    });
  }

}
