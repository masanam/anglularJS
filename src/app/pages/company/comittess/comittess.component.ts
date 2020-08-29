import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-comittess',
  templateUrl: './comittess.component.html',
  styleUrls: ['./comittess.component.scss']
})
export class ComittessComponent implements OnInit {

  loading = true;
  dataAudit = [];
  dataNomination = [];
  dataCorporate = [];
  dataInternal = [];
  allData = [];
  bgImg;
  titlePage;
  langTit;
  apiAsset = environment.API_URL_ASSET;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    // Background header
    this.apiService.getDataApi('getMenuDetail/committees-structure').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getAllDirector').subscribe(response => {
      // if(response.data.category.title)
      response.data.forEach( el => {
        if(el.category.id === 3){
           this.dataAudit.push(el);
        }
        else if (el.category.id === 4){
          this.dataNomination.push(el);
        }
        else if (el.category.id === 5){
          this.dataCorporate.push(el);
        }
        else if (el.category.id === 6){
          this.dataInternal.push(el);
        }
        this.allData.push(el);
        console.log(this.dataAudit);
        this.loading = false;
      });
    });
  }

}
