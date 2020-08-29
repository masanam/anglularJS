import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Service
import { ApiService } from 'src/app/shared/service/api.service';
import { SeoService } from 'src/app/shared/service/seo.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit, OnDestroy {
  
  loading:boolean;
  paramsSubscription: Subscription;
  dataPage;
  titlePage;
  lang;
  bgImg;
  apiAsset = environment.API_URL_ASSET;

  constructor(
    private route: ActivatedRoute, 
    private apiService: ApiService,
    private _seoService: SeoService
  ) { }
  
  ngOnInit(): void { 
    this.paramsSubscription = this.route.params.subscribe(params => {
      
      this.loading = true;

      // Background header
      this.apiService.getDataApi('getMenuDetail/'+params['slug']).subscribe(response => {
        this.bgImg = response.data[0].picture;
        this.titlePage = response.data[0].title;
      });

      // Content
      if(params['slug'] == 'latest-innovations'){
        this.dataPage = this.apiService.getDataApi('getInnovations').subscribe(response => {
          this.dataPage = response;
          this.loading = false;
        });
      } else {
        this.dataPage = this.apiService.getDataApi('getTypes').subscribe(response => {
          response.data.forEach((brand, i) => {
            if(brand.slug == params['slug']) {
              this.dataPage = brand;
              this.loading = false;
            }
          });
        });
      }
      
    });

    // lang 
    this.apiService.langApi.subscribe( value => {
      this.lang = value;
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
