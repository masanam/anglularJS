import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-share-info',
  templateUrl: './share-info.component.html',
  styleUrls: ['./share-info.component.scss']
})
export class ShareInfoComponent implements OnInit {
  
  comData = [];
  url:any;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;
  dataGraphic;
  btnLoad = true;
  loading = true;
  langTit;
  textLoad = 'See More';

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
  
    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/share-information').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDocumentShareInfo').subscribe(response => {
      this.dataGraphic = this.apiAsset + response.data[0].preview;
      this.loading = false;
    });

    this.apiService.getDataApi('getShareInfo?page=1').subscribe(response => {
      response.data.data.forEach(el => {
        this.comData.push(el);
      });
      this.url = response.data.next_page_url;
      if(this.url === null){
        this.btnLoad = false;
      }
    })

  }

  getMore(){
    this.textLoad = 'Loading...';
    if(this.url) {
      this.apiService.getNextPage(this.url).subscribe(response => {
        response.data.data.forEach(el => {
          this.comData.push(el);
          this.textLoad = 'See More';
        });
        this.url = response.data.next_page_url;
        if(this.url === null){
          this.btnLoad = false;
        }
      });
    }
  }

}
