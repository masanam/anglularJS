import { Component, NgZone, Input, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// amchart
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-internationalmap',
  templateUrl: './internationalmap.component.html',
  styleUrls: ['./internationalmap.component.scss']
})
export class InternationalmapComponent implements AfterViewInit, OnDestroy {
  @ViewChild("mapInternational", { static: true })
  private chartDom: ElementRef;

  constructor(private zone: NgZone, private apiService: ApiService) {}

  private chart: am4maps.MapChart;

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // let chart = am4core.create("chartdiv", am4charts.XYChart);
      let chart = am4core.create(this.chartDom.nativeElement, am4maps.MapChart);
      
      // Set map definition
      chart.geodata = am4geodata_worldLow;

      chart.zoomControl = new am4maps.ZoomControl();
      chart.zoomControl.align = "left";
      chart.zoomControl.valign = "top";

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antartica
      polygonSeries.exclude = ["AQ"];

      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      // polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#02579d");


      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = chart.colors.getIndex(1);

      // Add image series
      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      imageSeries.mapImages.template.tooltipText = "{description}";
      imageSeries.mapImages.template.propertyFields.url = "url";
      
      let homeButton = new am4core.Button();
      homeButton.events.on("hit", function(){
        chart.goHome();
      });
      
      homeButton.icon = new am4core.Sprite();
      homeButton.padding(7, 5, 7, 5);
      homeButton.width = 30;
      homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
      homeButton.marginBottom = 10;
      homeButton.parent = chart.zoomControl;
      homeButton.insertBefore(chart.zoomControl.plusButton);
      
      let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 3;
      circle.propertyFields.fill = "color";

      let colorSet = am4core.color("#ff7f00");

      this.apiService.getDataApi('getDistributionInternational').subscribe(response => {
        imageSeries.data = response.data;
      });

      this.chart = chart;
      
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
