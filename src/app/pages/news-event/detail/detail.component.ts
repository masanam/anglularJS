import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dataNewsDetail; 
  dataBreadCrumb;
  loading = true;
  apiAsset = environment.API_URL_ASSET;
  
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getDataApi('getNewsDetail/'+params['title']).subscribe(response => {
        this.dataNewsDetail = response.data[0];
        this.loading = false;
      });
    });
  }

}
