import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  pageList:number;
  paramsSubscription: Subscription;
  titlePage;
  dataNews
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  loading:boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }


  ngOnInit(): void {

    this.paramsSubscription = this.route.params.subscribe(params => {

      this.loading = true;
      this.pageList = 1;

      // Background header
      this.apiService.getDataApi('getMenuDetail/'+params['slug']).subscribe(response => {
        this.bgImg = response.data[0].picture;
        this.titlePage = response.data[0].title;
      });


      // Content
      if(params['slug'] == 'news'){
        this.apiService.getDataApi('getNews').subscribe(response => {
          this.dataNews = response.data;
          this.loading = false;
        });
      }else if(params['slug'] == 'event'){
        this.apiService.getDataApi('getEvent').subscribe(response => {
          this.dataNews = response.data;
          this.loading = false;
        });
      } else {
        this.apiService.getDataApi('getCSR').subscribe(response => {
          this.dataNews = response.data;
          this.loading = false;
        });
      }

    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
