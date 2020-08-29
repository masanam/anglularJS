import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";
import { valueToRelative } from '@amcharts/amcharts4/.internal/core/utils/Utils';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
  fullHeight = false;
  textRead = 'READ MORE';
  modalImg: string;
  modalDetail: string;
  modalTitle: string;
  pageCorporate: number = 1;
  pageBrand: number = 1;
  dataAchivCorporate;
  dataAchivBrand;
  dataCertification;
  detailCorporate;
  detailBrand;
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  loading = true;
  langTit;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    // lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/achievement-certification').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    // Content
    this.apiService.getDataApi('getAchievementCorporate').subscribe(response => {
      this.dataAchivCorporate = response.data;
      this.detailCorporate = response.prolog[0];
    });

    this.apiService.getDataApi('getAchievementBrand').subscribe(response => {
      this.dataAchivBrand = response.data;
      this.detailBrand = response.prolog[0];
      this.loading = false;
    });
    
    this.apiService.getDataApi('getCertification').subscribe(response => {
      this.dataCertification = response.data;
    });

  }


  showModal(archiv): void {
    this.isModalShown = true;
    this.modalDetail = archiv.content;
    this.modalImg = archiv.picture;
    this.modalTitle = archiv.title;
    this.fullHeight = false;
    this.textRead = 'READ MORE';
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }

  fullRead(){
    this.fullHeight = !this.fullHeight;
    if(this.fullHeight === true){
      this.textRead = 'SHOW LESS';
    }else{
      this.textRead = 'READ MORE';
    }
  }

}
