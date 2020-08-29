import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// service
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  
  title;
  detail;
  loading:boolean;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    let link = this.router.url.split("/", 3);
    this.loading = true;
    if(link[2] == 'privacy'){
      this.apiService.getDataApi('getPrivacy').subscribe(response => {
        this.detail = response.data[0].content;
        this.title = response.data[0].title
        this.loading = false;
      }); 
    }
    if(link[2] == 'terms-n-condition'){
      this.apiService.getDataApi('getTermCondition').subscribe(response => {
        this.detail = response.data[0].content;
        this.title = response.data[0].title;
        this.loading = false;
      }); 
    }
  }

}


