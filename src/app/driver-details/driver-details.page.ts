import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
} from "@angular/core";

import { Options } from "ng5-slider";
import TrimbleMaps from "@trimblemaps/trimblemaps-js";
// added local json. remove while using api service
// remove json typings file while removing data.json file. Path to remove : src/app/json-typings.d.ts

import sampleData from "../models/data.json";

@Component({
  selector: "app-driver-details",
  templateUrl: "./driver-details.page.html",
  styleUrls: ["./driver-details.page.scss"],
})
export class DriverDetailsPage implements AfterViewInit {
  map: any;

  mapmarkers: any = sampleData;

  // activeTab = 'driverscoring';
  value = 4.3;
  value2 = 3.0;
  value3 = 2.3;
  value4 = 5.0;

  options: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1,
  };

  settings = {
    columns: {
      TaskDate: {
        title: "TaskDate",
      },
      Over_Speed: {
        title: "Over_Speed ",
      },
      Posted_Speed: {
        title: "Posted_Speed",
      },
      email: {
        title: "Duration",
      },
      Start_Time: {
        title: "Start_Time",
      },
      End_Time: {
        title: "End_Time",
      },
    },
  };
  data = [
    {
      TaskDate: "05/01/2020",
      Over_Speed: "10 KMPH",
      Posted_Speed: "30 KMPH",
      Duration: "4 mins",
      Start_Time: "5:15 AM",
      End_Time: "5:19 AM",
    },
    {
      TaskDate: "07/01/2020",
      Over_Speed: "20 KMPH",
      Posted_Speed: "16 KMPH",
      Duration: "6 mins",
      Start_Time: "3:15 AM",
      End_Time: "6:19 AM",
    },
    {
      TaskDate: "04/01/2020",
      Over_Speed: "13 KMPH",
      Posted_Speed: "0 KMPH",
      Duration: "2 mins",
      Start_Time: "5:15 AM",
      End_Time: "7:19 AM",
    },
    {
      TaskDate: "05/01/2020",
      Over_Speed: "10 KMPH",
      Posted_Speed: "30 KMPH",
      Duration: "4 mins",
      Start_Time: "5:15 AM",
      End_Time: "5:19 AM",
    },
    {
      TaskDate: "07/01/2020",
      Over_Speed: "20 KMPH",
      Posted_Speed: "16 KMPH",
      Duration: "6 mins",
      Start_Time: "3:15 AM",
      End_Time: "6:19 AM",
    },
    {
      TaskDate: "04/01/2020",
      Over_Speed: "13 KMPH",
      Posted_Speed: "0 KMPH",
      Duration: "2 mins",
      Start_Time: "5:15 AM",
      End_Time: "7:19 AM",
    },
    {
      TaskDate: "05/01/2020",
      Over_Speed: "10 KMPH",
      Posted_Speed: "30 KMPH",
      Duration: "4 mins",
      Start_Time: "5:15 AM",
      End_Time: "5:19 AM",
    },
    {
      TaskDate: "07/01/2020",
      Over_Speed: "20 KMPH",
      Posted_Speed: "16 KMPH",
      Duration: "6 mins",
      Start_Time: "3:15 AM",
      End_Time: "6:19 AM",
    },
    {
      TaskDate: "04/01/2020",
      Over_Speed: "13 KMPH",
      Posted_Speed: "0 KMPH",
      Duration: "2 mins",
      Start_Time: "5:15 AM",
      End_Time: "7:19 AM",
    },
    {
      TaskDate: "05/01/2020",
      Over_Speed: "10 KMPH",
      Posted_Speed: "30 KMPH",
      Duration: "4 mins",
      Start_Time: "5:15 AM",
      End_Time: "5:19 AM",
    },
    {
      TaskDate: "07/01/2020",
      Over_Speed: "20 KMPH",
      Posted_Speed: "16 KMPH",
      Duration: "6 mins",
      Start_Time: "3:15 AM",
      End_Time: "6:19 AM",
    },
    {
      TaskDate: "04/01/2020",
      Over_Speed: "13 KMPH",
      Posted_Speed: "0 KMPH",
      Duration: "2 mins",
      Start_Time: "5:15 AM",
      End_Time: "7:19 AM",
    },
  ];

  @ViewChild("map", { static: false }) mapElement: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    TrimbleMaps.APIKey = "C0830AD82BBDDE439A21D756B8BEAFB2";
    this.map = new TrimbleMaps.Map({
      container: this.mapElement.nativeElement,
      center: new TrimbleMaps.LngLat(-82.442618, 27.959847),
      zoom: 10,
      style: TrimbleMaps.Common.Style.TRANSPORTATION,
      hash: true,
    });

    // Add navigation control(Zoom In Zoom Out) on map.
    let nav = new TrimbleMaps.NavigationControl({
      showCompass: false,
    });
    this.map.addControl(nav, "bottom-right");

    // calling function to add marker in map
    this.addMarker(this.map);
  }
  // create custom marker and add marker to map.
  addMarker(mapObj: any) {
    for (const temp of this.mapmarkers) {
      const svg1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      // set width and height
      svg1.setAttribute("width", "27");
      svg1.setAttribute("height", "41");
      svg1.setAttribute("viewBox", "0 0 27 41");
      const graphicEl1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );
      graphicEl1.setAttribute("fill-rule", "nonzero");
      const graphicEl2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );
      graphicEl2.setAttribute("translate", "8.0, 8.0");
      graphicEl1.appendChild(graphicEl2);

      var circlex = 5.5;
      var circley = 5.5;
      var circler = 5;

      var circlechangex;
      var circlechangey;
      var circlechanger;

      // size of the marker changed as per the values.
      // tslint:disable-next-line: triple-equals
      if (temp.Magnitude == 2) {
        circlechangex = (circlex + 1).toString();
        circlechangey = (circley + 1).toString();
        circlechanger = (circler + 1).toString();
      } else if (temp.Magnitude == 4) {
        circlechangex = (circlex + 2).toString();
        circlechangey = (circley + 2).toString();
        circlechanger = (circler + 2).toString();
      } else if (temp.Magnitude == 6) {
        circlechangex = (circlex + 3).toString();
        circlechangey = (circley + 3).toString();
        circlechanger = (circler + 3).toString();
      } else if (temp.Magnitude == 8) {
        circlechangex = (circlex + 4).toString();
        circlechangey = (circley + 4).toString();
        circlechanger = (circler + 4).toString();
      } else {
        circlechangex = circlex.toString();
        circlechangey = circley.toString();
        circlechanger = circler.toString();
      }

      // create a circle
      const cir1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      cir1.setAttribute("cx", circlechangex);
      cir1.setAttribute("cy", circlechangey);
      cir1.setAttribute("r", circlechanger);
      cir1.setAttribute("fill", "#0000FF");
      graphicEl2.appendChild(cir1);
      // attach it to the container
      svg1.appendChild(graphicEl1);

      // Create a popup.
      const markerHeight = 25,
        markerRadius = 10,
        linearOffset = 30;
      const popupOffsets = {
        top: [0, 0],
        "top-left": [0, 0],
        "top-right": [0, 0],
        bottom: [-9, -markerHeight],
        "bottom-left": [
          linearOffset,
          (markerHeight - markerRadius + linearOffset) * -1,
        ],
        "bottom-right": [
          -linearOffset,
          (markerHeight - markerRadius + linearOffset) * -1,
        ],
        left: [markerRadius, (markerHeight - markerRadius) * -1],
        right: [-markerRadius, (markerHeight - markerRadius) * -1],
      };
      let popup = new TrimbleMaps.Popup({ offset: popupOffsets })
        .setLngLat([temp.longitude, temp.latitude])
        .setHTML(
          "<div><span> Bus#:" +
            temp.Bus +
            "</span>&nbsp&nbsp&nbsp;<span>Date:" +
            temp.Date +
            "</span></div><div> >ps </div><div>startTime: " +
            temp.startTime +
            "  </div><div>Duration: " +
            temp.Duration +
            "</div><div>Location: " +
            temp.Location +
            "</div>"
        );

      const marker = new TrimbleMaps.Marker({
        element: svg1,
      })
        .setLngLat([temp.longitude, temp.latitude])
        .setPopup(popup)
        .addTo(mapObj);
    }
  }
}
