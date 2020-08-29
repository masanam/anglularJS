import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit {
  customClass = 'list-sidebar';
  customClass2 = 'accr-brands2';
  loadmenu = true;

  // Menu
  dataMenus;  

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    let currentPage = this.router.url.split("/", 3);

    this.apiService.getDataApi('getMenu').subscribe(response => {
      response.data.forEach((data, i) => {
        if(data.link == currentPage[2]){
          this.dataMenus = data;
          this.loadmenu = false;
        }
      });
    });
  }
}
