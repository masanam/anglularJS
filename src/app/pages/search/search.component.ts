import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  dataBrand = [];
  dataProduct = [];
  dataGroup = [];
  dataType = [];
  dataContent = [];
  dataCareer = [];
  dataTestimony = [];
  dataAll = [];
  dataNotFound = 'Sorry, We Didnt Find Anything Match';
  lang;
  searchSubscription: Subscription;
  loading:boolean;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router : Router) { }
 
  ngOnInit(): void {

    this.searchSubscription = this.route.queryParams.subscribe(params => {

        this.loading = true;

        if (params['key'] === '' || params['key'] === null){
          this.dataBrand = [];
          this.dataProduct = [];
          this.dataGroup = [];
          this.dataType = [];
          this.dataContent = [];
          this.dataCareer = [];
          this.dataTestimony = [];
          this.dataAll = [];
          this.loading = false;
        } else {
          this.apiService.getDataApi('search?key='+params['key'] ).subscribe(response => {
            console.log(response);
            this.dataBrand = [];
            this.dataProduct = [];
            this.dataGroup = [];
            this.dataType = [];
            this.dataContent = [];
            this.dataCareer = [];
            this.dataTestimony = [];
            this.dataAll = [];
            response.type.forEach(el => {
                this.dataType.push(el);
            });
            response.group.forEach(el => {
              this.dataGroup.push(el);
            });
            response.brand.forEach(el => {
              this.dataBrand.push(el);
            });
            response.product.forEach(el => {
              this.dataProduct.push(el);
            });
            response.content.forEach(el => {
              this.dataContent.push(el);
            });
            response.career.forEach(el => {
              this.dataCareer.push(el);
            });
            response.testimony.forEach(el => {
              this.dataTestimony.push(el);
            });
            // response.data.forEach(el => {
            //   this.dataAll.push(el);
            // });
            this.loading = false;
          });
          this.apiService.langApi.subscribe( value => {
            this.lang = value;
          });
        }
    });
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
