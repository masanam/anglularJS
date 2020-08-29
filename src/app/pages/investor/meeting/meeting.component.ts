import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  loading = true;
  dataShareholder;
  dataDividen;
  bgImg;
  langTit;
  apiAsset = environment.API_URL_ASSET;
  pageShareholder: number = 1;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    // lang
     this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/general-meeting-of-shareholders').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    // Content
    this.apiService.getDataApi('getDividen').subscribe(response => {
      this.dataDividen = response.data;
    });

    this.apiService.getDataApi('getDocumentShareholder').subscribe(response => {
      this.dataShareholder = response.data;
      this.loading = false;
    });

  }

}
