import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  langFoot;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    this.apiService.langApi.subscribe( value => {
      this.langFoot = value;
    });
    
  }

}
