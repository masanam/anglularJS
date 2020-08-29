import { Component, OnInit } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  openCall = false;
  langCall

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      // lang 
      this.apiService.langApi.subscribe( value => {
        this.langCall = value;
      });
  }
}
