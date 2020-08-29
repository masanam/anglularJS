import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { PeopleComponent } from './components/people/people.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoThumbnailComponent } from './components/info-thumbnail/info-thumbnail.component';
import { AboutComponent } from './pages/company/about/about.component';
import { GlanceComponent } from './pages/company/glance/glance.component';
import { GlanceDetailComponent } from './pages/company/glance/glance-detail/glance-detail.component';
import { ListBrandsComponent } from './components/list-brands/list-brands.component';
import { CompanyComponent } from './pages/company/company.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { BrandComponent } from './pages/brands/brand/brand.component';
import { MilestoneComponent } from './pages/company/milestone/milestone.component';
import { BoardDirectorComponent } from './pages/company/board-director/board-director.component';
import { BoardCommissionersComponent } from './pages/company/board-commissioners/board-commissioners.component';
import { ComittessComponent } from './pages/company/comittess/comittess.component';
import { AchievementComponent } from './pages/company/achievement/achievement.component';
import { TableStructureComponent } from './components/table-structure/table-structure.component';
import { ListAchivComponent } from './components/list-achiv/list-achiv.component';
import { DistributionComponent } from './pages/company/distribution/distribution.component';
import { BrandDetailComponent } from './pages/brands/brand-detail/brand-detail.component';
import { FilesComponent } from './components/files/files.component';
import { InvestorComponent } from './pages/investor/investor.component';
import { CorporateInfoComponent } from './pages/investor/corporate-info/corporate-info.component';
import { ShareholdingComponent } from './pages/investor/shareholding/shareholding.component';
import { OrganizationComponent } from './pages/investor/organization/organization.component';
import { ShareInfoComponent } from './pages/investor/share-info/share-info.component';
import { MeetingComponent } from './pages/investor/meeting/meeting.component';
import { ListCoverageComponent } from './components/list-coverage/list-coverage.component';
import { ListReportComponent } from './components/list-report/list-report.component';
import { GovernanceComponent } from './pages/investor/governance/governance.component';
import { ContactComponent } from './pages/investor/contact/contact.component';
import { CoverageDetailComponent } from './pages/investor/coverage-detail/coverage-detail.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsEventComponent } from './pages/news-event/news-event.component';
import { ListComponent as NewsListComponent } from './pages/news-event/list/list.component';
import { DetailComponent as NewsDetailComponent } from './pages/news-event/detail/detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WidgetCareerComponent } from './components/widget-career/widget-career.component';
import { CareerComponent } from './pages/career/career.component';
import { WorkKinoComponent } from './pages/career/work-kino/work-kino.component';
import { JoinUsComponent } from './pages/career/join-us/join-us.component';
import { DevelopComponent } from './pages/career/develop/develop.component';
import { TestimoniComponent } from './pages/career/testimoni/testimoni.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CallComponent } from './components/call/call.component';
import { FinancialComponent } from './pages/investor/financial/financial.component';
import { AnnualComponent } from './pages/investor/annual/annual.component';
import { PropectusComponent } from './pages/investor/propectus/propectus.component';
import { PresentationComponent } from './pages/investor/presentation/presentation.component';
import { ReleaseComponent } from './pages/investor/release/release.component';
import { CoverageComponent } from './pages/investor/coverage/coverage.component';
import { SearchComponent } from './pages/search/search.component';
import { OtherAnnounComponent } from './pages/investor/other-announ/other-announ.component';

/* modules */
import { AppRoutingModule } from './app-routing.module';

/* plugins */
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule as CarouselModuleOwl } from 'ngx-owl-carousel-o';
import { LocalmapComponent } from './components/amchart/localmap/localmap.component';
import { InternationalmapComponent } from './components/amchart/internationalmap/internationalmap.component';
import { CarouselModule as CarouselModuleBootstrap } from 'ngx-bootstrap/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PeopleComponent,
    AchievementComponent,
    PageNotFoundComponent,
    HomeComponent,
    InfoThumbnailComponent,
    AboutComponent,
    GlanceComponent,
    ListBrandsComponent,
    GlanceDetailComponent,
    CompanyComponent,
    BrandsComponent,
    BrandComponent,
    MilestoneComponent,
    LocalmapComponent,
    InternationalmapComponent,
    BoardDirectorComponent,
    ComittessComponent,
    TableStructureComponent,
    ListAchivComponent,
    DistributionComponent,
    BrandDetailComponent,
    BoardCommissionersComponent,
    FilesComponent,
    InvestorComponent,
    CorporateInfoComponent,
    ShareholdingComponent,
    OrganizationComponent,
    ShareInfoComponent,
    ListCoverageComponent,
    MeetingComponent,
    ListReportComponent,
    GovernanceComponent,
    ContactComponent,
    CoverageDetailComponent,
    ListNewsComponent,
    NewsEventComponent,
    NewsListComponent,
    NewsDetailComponent,
    ContactUsComponent,
    WidgetCareerComponent,
    CareerComponent,
    WorkKinoComponent,
    JoinUsComponent,
    DevelopComponent,
    TestimoniComponent,
    TermsComponent,
    CallComponent,
    FinancialComponent,
    AnnualComponent,
    PropectusComponent,
    PresentationComponent,
    ReleaseComponent,
    CoverageComponent,
    SearchComponent,
    OtherAnnounComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModuleBootstrap.forRoot(),
    CarouselModuleOwl,
    NgxPaginationModule,
    HttpClientModule,
    NgxImageZoomModule,
    NgxFileDropModule,
    SocialLoginModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('686723301031-vc6jc2hpv3q4n43gp0fu87de7731l32t.apps.googleusercontent.com'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
