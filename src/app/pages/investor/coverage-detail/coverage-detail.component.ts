import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-coverage-detail',
  templateUrl: './coverage-detail.component.html',
  styleUrls: ['./coverage-detail.component.scss']
})
export class CoverageDetailComponent implements OnInit {

  dataCoverage;
  loading = true;

  apiAsset = environment.API_URL_ASSET;
  
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');

    // Content
    this.apiService.getDataApi('getMediaCoverage/'+slug).subscribe(response => {
      this.dataCoverage = response.data[0];
      this.loading = false;
    });
  }

}
