import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { ModalDirective } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  // isModalShown = false;
  // logoModal: string;
  // detailModal: string;
  // slugModal: string;
  // titleModal: string;
  loading = true;
  dataSlider;
  dataCompany;
  dataBrands;
  dataPress;
  dataNews;
  dataCSR;
  dataEvent;
  dataTeam;
  lang;
  apiAsset = environment.API_URL_ASSET;
 
  customOptionsLogo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="icon ion-ios-arrow-back"></i>', '<i class="icon ion-ios-arrow-forward"></i>' ],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptionsBrands: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="icon ion-ios-arrow-back"></i>', '<i class="icon ion-ios-arrow-forward"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    // Content

    this.apiService.getDataApi('getSlider').subscribe(response => {
      this.dataSlider = response.data;
    });

    this.apiService.getDataApi('getGroup').subscribe(response => {
      this.dataCompany = response.data;
    });

    this.apiService.getDataApi('getTypes').subscribe(response => {
      this.dataBrands = response.data;
      this.loading = false;
    });

    this.apiService.getDataApi('getDocumentPressRelease').subscribe(response => {
      this.dataPress = response.data;
    });

    this.apiService.getDataApi('getNews').subscribe(response => {
      this.dataNews = response.data[0];
    });

    this.apiService.getDataApi('getCSR').subscribe(response => {
      this.dataCSR = response.data[0];
    });

    this.apiService.getDataApi('getEvent').subscribe(response => {
      this.dataEvent = response.data[0];
    });

    this.apiService.getDataApi('getLatestCareer').subscribe(response => {
      this.dataTeam = response.data[0];
    });

    // Lang
  
    this.apiService.langApi.subscribe( value => {
      this.lang = value;
    });

  }
 
  // showModal(company): void {
  //   this.isModalShown = true;
  //   this.logoModal = company.picture;
  //   this.detailModal = company.summary;
  //   this.slugModal = company.seotitle;
  //   this.titleModal = company.title;
  // }
 
  // hideModal(): void {
  //   this.autoShownModal.hide();
  // }
 
  // onHidden(): void {
  //   this.isModalShown = false;
  // }


}
