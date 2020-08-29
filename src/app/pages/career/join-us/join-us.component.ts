import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

/* plugin */
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit{

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalApply:boolean;
  isModalLogin:boolean;
  pageListJobs:number = 1;
  customClass = "accordion-ver1";
  public files: NgxFileDropEntry[] = [];
  dataCompany;
  dataJobs;
  lang;
  login = false;
  regist = false;
  dataJobCom;
  dataJobPosi;
  user: SocialUser;
  loggedIn: boolean = false;
  bgImg;
  titlePage;
  apiAsset = environment.API_URL_ASSET;
  careerField;
  loading = true;
  supportFile:string;
  fileReceive = false;
  loadForm = true;

  customOptions1: OwlOptions = {
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

  constructor( private apiService: ApiService, private authService: SocialAuthService ) { }

  ngOnInit(): void {
    // Background header
    this.apiService.getDataApi('getMenuDetail/join-us').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });
    
    // Content
    this.apiService.getDataApi('getGroup').subscribe(response => {
      this.dataCompany = response.data;
    });

    this.apiService.getDataApi('getCareer').subscribe(response => {
      this.dataJobs = response.data;
      this.loading = false;
    });

    // Link Lang
    this.apiService.langApi.subscribe( value => {
      this.lang = value;
    });

    // Login
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    
  }

  showModal(position, company): void {
    if(this.loggedIn == true){
      this.isModalApply = true;
      this.dataJobPosi = position;
      this.dataJobCom = company;
    }else{
      this.isModalLogin = true;
    }
  }

 
  hideModal(): void {
    this.autoShownModal.hide();
    this.login = false;
    this.regist = false;
  }

  onBack(){
    this.login = false;
    this.regist = false;
  }

  loginRegist(params){
    if(params == 'login'){
      this.login = true;
    }else if ( params == 'regist' ){
      this.regist = true;
    }
    
  }


  onHidden(): void {
    this.isModalApply = false;
    this.isModalLogin = false;
    this.login = false;
    this.regist = false;
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          if(file.type === "application/pdf" || file.type === "image/jpeg" || file.type === "image/jpg"){
            this.supportFile = '';
            this.fileReceive = true;
          }else{
            this.supportFile = 'Accepted files: PDF, JPG/JPEG'
            this.fileReceive = false;
          }

          this.careerField = file;

          // Here you can access the real file

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  // public fileOver(event){
  //   console.log(event);
  // }

  // public fileLeave(event){
  //   console.log(event);
  // }

  changePagination(num:number){
    this.pageListJobs = num;
    console.log(num);
  }
  
  // Auth Login
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
    this.isModalApply = false;
  }

  onSubmit(careerForm: NgForm){

    this.loadForm = true;

    const formData = new FormData();
    formData.append('firstname', careerForm.value.firstname);
    formData.append('lastname', careerForm.value.lastname);
    formData.append('email', careerForm.value.email);
    formData.append('phone', careerForm.value.phone);
    formData.append('address', careerForm.value.address);
    formData.append('position', careerForm.value.position);
    formData.append('resume', this.careerField, this.careerField.name);
  
    this.apiService.postDataApi('saveCareerRecruitment',  formData).subscribe(
      data => { 
        this.isModalApply = false; 
        careerForm.resetForm(); 
        this.files = [];
        this.loadForm = true;
      },
      error => {
        console.log(error);
        this.loadForm = false;
      }
    ); 

  }

}
