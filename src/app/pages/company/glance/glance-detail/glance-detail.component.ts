import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-glance-detail',
  templateUrl: './glance-detail.component.html',
  styleUrls: ['./glance-detail.component.scss']
})
export class GlanceDetailComponent implements OnInit {

  title;
  loading = true;
  dataGlance;
  apiAsset = environment.API_URL_ASSET;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
  
    this.apiService.getDataApi('getGroupDetail/'+slug).subscribe(response => {
      this.dataGlance = response.data[0];
      this.loading = false;
    });
    
  }
  
}
