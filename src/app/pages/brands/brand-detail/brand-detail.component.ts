import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

// Service
import { ApiService } from 'src/app/shared/service/api.service';
import { SeoService } from 'src/app/shared/service/seo.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent implements OnInit, OnDestroy {

  paramsSubscription: Subscription;
  dataBrandDetail;
  varietyImg:string;
  varietyDetail:string;
  varietyName:string;
  bgImg;
  langTit;
  apiAsset = environment.API_URL_ASSET;
  loading:boolean;

  constructor(
    private route : ActivatedRoute, 
    private apiService: ApiService,
    private _seoService: SeoService
  ) { }
  
  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      this.loading = true;

      // lang
      this.apiService.langApi.subscribe( value => {
        this.langTit = value;
      });

      // Background
      this.apiService.getDataApi('getMenuDetail/'+params['product']).subscribe(response => {
         this.bgImg = `url(${this.apiAsset + response.data[0].picture})`;
      });
     
      // Content
      this.dataBrandDetail = this.apiService.getDataApi('getTypes').subscribe(response => {
          
        response.data.forEach((brand, i) => {
    
          if(brand.slug == params['slug']){
            brand.brand.forEach((p, i) =>{
              if(p.seotitle == params['product']){
                this.dataBrandDetail = p;
                p.product.forEach((v, i) => {
                  if(v.seotitle == params['variety']) {
                    this.varietyImg = v.picture;
                    this.varietyDetail = v.content;
                    this.varietyName = v.title;
                  }
                  
                  if(!params['variety']){
                    this.varietyImg = p.product[0].picture;
                    this.varietyDetail = p.product[0].content;
                    this.varietyName = p.product[0].title;
                  }
                })
                this.loading = false;
              }
            });
          } 

        });

      });
      
    });
  }

  changeVariety(variety){
    this.varietyImg = variety.picture;
    this.varietyDetail = variety.content;
    this.varietyName = variety.title;
  }
  
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
