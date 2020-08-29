import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-board-director',
  templateUrl: './board-director.component.html',
  styleUrls: ['./board-director.component.scss']
})
export class BoardDirectorComponent implements OnInit {

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
  loading = true;
  modalImg: string;
  modalDetail: string;
  modalName: string;
  modalPosition: string;
  dataPeople;
  langTit;
  dataCeo;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }

  ngOnInit() {

    // Background header
    this.apiService.getDataApi('getMenuDetail/board-of-director').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getDirector').subscribe(response => {
      this.dataPeople = response.data;
      this.dataCeo = response.data[0];
      this.loading = false;
    });

  }

  showModal(people): void {
    this.isModalShown = true;
    this.modalDetail = people.description;
    this.modalImg = people.picture;
    this.modalPosition = people.position;
    this.modalName = people.fullname;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }

}
