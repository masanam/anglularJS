import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-testimoni',
  templateUrl: './testimoni.component.html',
  styleUrls: ['./testimoni.component.scss']
})
export class TestimoniComponent implements OnInit {

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
  dataTestimonies;
  pageDirector:number = 1;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;
  loading = true;
  detailModal:string;
  titleModal:string;
  nameModal:string;
  imgModal:string;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Background header
    this.apiService.getDataApi('getMenuDetail/testimonies').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getTestimony').subscribe(response => {
      this.dataTestimonies = response.data;
      this.loading = false;
    });

  }

  showModal(testi): void {
    this.isModalShown = true;
    this.detailModal = testi.content;
    this.titleModal = testi.title;
    this.nameModal = testi.nama;
    this.imgModal = testi.picture;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }

}
