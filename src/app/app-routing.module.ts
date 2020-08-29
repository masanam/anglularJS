import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// Component Pages
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/company/about/about.component';
import { GlanceComponent } from './pages/company/glance/glance.component';
import { GlanceDetailComponent } from './pages/company/glance/glance-detail/glance-detail.component';
import { MilestoneComponent } from './pages/company/milestone/milestone.component';
import { CompanyComponent } from './pages/company/company.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { BrandComponent } from './pages/brands/brand/brand.component';
import { BoardDirectorComponent } from './pages/company/board-director/board-director.component';
import { ComittessComponent } from './pages/company/comittess/comittess.component';
import { AchievementComponent } from './pages/company/achievement/achievement.component';
import { DistributionComponent } from './pages/company/distribution/distribution.component';
import { BrandDetailComponent } from './pages/brands/brand-detail/brand-detail.component';
import { BoardCommissionersComponent } from './pages/company/board-commissioners/board-commissioners.component';
import { InvestorComponent } from './pages/investor/investor.component';
import { CorporateInfoComponent } from './pages/investor/corporate-info/corporate-info.component';
import { ShareholdingComponent } from './pages/investor/shareholding/shareholding.component';
import { OrganizationComponent } from './pages/investor/organization/organization.component';
import { ShareInfoComponent } from './pages/investor/share-info/share-info.component';
import { ReleaseComponent } from './pages/investor/release/release.component';
import { CoverageComponent } from './pages/investor/coverage/coverage.component';
import { MeetingComponent } from './pages/investor/meeting/meeting.component'; 
import { GovernanceComponent } from './pages/investor/governance/governance.component';
import { ContactComponent } from './pages/investor/contact/contact.component';
import { CoverageDetailComponent } from './pages/investor/coverage-detail/coverage-detail.component';
import { NewsEventComponent } from './pages/news-event/news-event.component';
import { ListComponent as NewsListComponent } from './pages/news-event/list/list.component';
import { DetailComponent as NewsDetailComponent } from './pages/news-event/detail/detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CareerComponent } from './pages/career/career.component';
import { WorkKinoComponent } from './pages/career/work-kino/work-kino.component';
import { JoinUsComponent } from './pages/career/join-us/join-us.component';
import { DevelopComponent } from './pages/career/develop/develop.component';
import { TestimoniComponent } from './pages/career/testimoni/testimoni.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FinancialComponent } from './pages/investor/financial/financial.component';
import { AnnualComponent } from './pages/investor/annual/annual.component';
import { PropectusComponent } from './pages/investor/propectus/propectus.component';
import { PresentationComponent } from './pages/investor/presentation/presentation.component';
import { SearchComponent } from './pages/search/search.component';
import { OtherAnnounComponent } from './pages/investor/other-announ/other-announ.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

const appRoutes: Routes = [
    // { path: '', redirectTo: '/id', pathMatch: 'full'},
    { path: ':lang', 
      children: [
        { path: '', 
          component: HomeComponent,
          data: {
            title: 'Home',
            description:'',
            ogUrl: '',
            keyword: ''
          }
        },
        { path: 'company', 
          component: CompanyComponent,
          children: [
            { path: 'about-kino', 
              component: AboutComponent,
              data: {
                title: 'About',
                description:'',
                ogUrl: '',
                keyword: ''
              } 
            },
            { path: 'kino-at-a-glance', 
              component: GlanceComponent, 
              data: {
                title: 'Kino At A Glance',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'kino-at-a-glance/:slug', 
              component: GlanceDetailComponent,
              data: {
                title: 'Kino At A Glance',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'milestone', 
              component: MilestoneComponent,
              data: {
                title: 'Milestone',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'board-of-director', 
              component: BoardDirectorComponent,
              data: {
                title: 'Board Of Director',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'board-of-commissioner', 
              component: BoardCommissionersComponent,
              data: {
                title: 'Board Of Commissioner',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'committees-structure', 
              component: ComittessComponent,
              data: {
                title: 'Committees Structure',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'achievement-certification', 
              component: AchievementComponent,
              data: {
                title: 'Achievement & Certification',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'distribution', 
              component: DistributionComponent,
              data: {
                title: 'Distribution',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
          ]
        },
        { path: 'brands', 
          component:  BrandsComponent,
          children: [
            { path: ':slug', 
              component: BrandComponent,
              data: {
                title: 'Brands',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: ':slug/:product', 
              component: BrandDetailComponent,
              data: {
                title: 'Brands',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: ':slug/:product/:variety', 
              component: BrandDetailComponent,
              data: {
                title: 'Brands',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            }
          ]
        },
        { path: 'investor', 
          component:  InvestorComponent,
          children: [
            { path: 'corporate-information', 
              component: CorporateInfoComponent,
              data: {
                title: 'Corporate Information',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'shareholding-structure', 
              component:  ShareholdingComponent,
              data: {
                title: 'Shareholding Structure',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'organization-structure', 
              component:  OrganizationComponent,
              data: {
                title: 'Organization Structure',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'share-information', 
              component:  ShareInfoComponent,
              data: {
                title: 'Share Information',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'press-release', 
              component: ReleaseComponent,
              data: {
                title: 'Press Release',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'media-coverage', 
              component: CoverageComponent,
              data: {
                title: 'Media Coverage',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'others', 
              component: OtherAnnounComponent,
              data: {
                title: 'Others',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'announcement/:slug', 
              component: CoverageDetailComponent,
              data: {
                title: 'Announcement',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'general-meeting-of-shareholders', 
              component:  MeetingComponent,
              data: {
                title: 'General Meeting Of Shareholders',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'corporate-governance', 
              component: GovernanceComponent,
              data: {
                title: 'Corporate Governance',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'financial-statement', 
              component: FinancialComponent,
              data: {
                title: 'Financial Statement',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'annual-report', 
              component: AnnualComponent,
              data: {
                title: 'Annual Report',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'prospectus', 
              component: PropectusComponent,
              data: {
                title: 'Prospectus',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'company-presentation', 
              component: PresentationComponent,
              data: {
                title: 'Company Presentation',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'investor-contact', 
              component: ContactComponent,
              data: {
                title: 'Investor Contact',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            }
          ]
        },
        { path: 'news-n-events', 
          component: NewsEventComponent,
          children: [
            { path: ':slug', 
              component: NewsListComponent,
              data: {
                title: 'News & Event',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: ':slug/:title', 
              component: NewsDetailComponent,
              data: {
                title: 'News & Event',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            }
          ]
        },
        { path: 'careers', 
          component: CareerComponent,
          children: [
            { path: 'work-at-kino', 
              component: WorkKinoComponent,
              data: {
                title: 'Work At Kino',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'join-us', 
              component: JoinUsComponent,
              data: {
                title: 'Join Us',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'development-program', 
              component: DevelopComponent,
              data: {
                title: 'Development Program',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            },
            { path: 'testimonies', 
              component: TestimoniComponent,
              data: {
                title: 'Testimonies',
                description:'',
                ogUrl: '',
                keyword: ''
              }
            }
          ] 
        },
        { path: 'search', 
          component: SearchComponent,
          data: {
            title: 'Search',
            description:'',
            ogUrl: '',
            keyword: ''
          }
        },
        { path: 'privacy', 
          component: TermsComponent,
          data: {
            title: 'Privacy',
            description:'',
            ogUrl: '',
            keyword: ''
          }
        },
        { path: 'terms-n-condition', 
          component: TermsComponent,
          data: {
            title: 'Terms Condition',
            description:'',
            ogUrl: '',
            keyword: ''
          }
        },
        { path: 'contact-us', 
          component: ContactUsComponent,
          data: {
            title: 'Contact Us',
            description:'',
            ogUrl: '',
            keyword: ''
          }
        },
        { path: 'not-found', 
          component: PageNotFoundComponent, 
          data: {
            title: 'Not Found',
            description: 'not-found',
            ogUrl: '',
            keyword: '',
            message: '| 404 NOT FOUND'
          } 
        },
        { path: '**', redirectTo: '/id/not-found' }
      ]
    }
];
  
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes, routerOptions)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}