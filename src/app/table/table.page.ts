import { Component, OnInit } from "@angular/core";
import { TableService } from "../api/table.service";
@Component({
  selector: "app-table",
  templateUrl: "./table.page.html",
  styleUrls: ["./table.page.scss"],
})
export class TablePage implements OnInit {
  tabledata: any = [];
  tabledatafull: any = [];

  expanded = false;
  sort = "Descsortedoverspeed";
  constructor(public TableService: TableService) {}

  ngOnInit() {
    this.getTableDataOnLoad();
  }

  tableDataSort() {
    this.TableService.getTableData().subscribe((data) => {
      var anyData = <any>data;
      switch (this.sort) {
        case "Ascsortedoverspeed":
          this.tabledata = anyData.sort(this.compare);
          break;
        case "Descsortedoverspeed":
          this.tabledata = anyData.sort(this.compare).reverse();
          break;
        case "DescsortedTask":
          this.tabledata = anyData.sort(this.compareDate).reverse();
          break;
        case "AscsortedTask":
          this.tabledata = anyData.sort(this.compareDate);
          break;
        case "AscsortedPostedspeed":
          this.tabledata = anyData.sort(this.comparePostedSpeed);
          break;
        case "DescsortedPostedspeed":
          this.tabledata = anyData.sort(this.comparePostedSpeed).reverse();
          break;
        case "AscsortedDuration":
          this.tabledata = anyData.sort(this.compareDuration);
          break;
        case "DescsortedDuration":
          this.tabledata = anyData.sort(this.compareDuration).reverse();
          break;
        case "AscsortedStartTime":
          this.tabledata = anyData.sort(this.compareStartTime);
          break;
        case "DescsortedStartTime":
          this.tabledata = anyData.sort(this.compareStartTime).reverse();
          break;
        case "AscsortedEndTime":
          this.tabledata = anyData.sort(this.compareEndTime);
          break;
        case "DescsortedEndTime":
          this.tabledata = anyData.sort(this.compareEndTime).reverse();
          break;

        default:
          this.tabledata = anyData;
      }
    });
  }

  tableDataSortCollpase() {
    this.tabledata = this.tabledata.slice(0, 9);
  }

  getTableDataOnLoad() {
    this.expanded = false;
    this.TableService.getTableData().subscribe((data) => {
      var anyData = <any>data;
      this.tabledata = anyData.slice(0, 9).sort(this.compare).reverse();
      this.tabledatafull = anyData;
      console.log("in get table data");
    });
  }

  compareStartTime = (a, b) => {
    console.log("^&", this.convertTime12to24("4:00 PM"));
    var aStarttime = this.convertTime12to24(a.start_time);
    var bStarttime = this.convertTime12to24(b.start_time);

    const dataA = aStarttime;
    const dataB = bStarttime;

    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return comparison;
  };

  compareEndTime = (a, b) => {
    console.log("^&", this.convertTime12to24("4:00 PM"));
    var dataA = this.convertTime12to24(a.end_time);
    var dataB = this.convertTime12to24(b.end_time);

    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return comparison;
  };

  convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");
    let minutesInDec = parseFloat(minutes) / 60;
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return parseFloat(hours) + minutesInDec;
  }

  compare(a, b) {
    const dataA = parseInt(a.Over_speed.replace("MPH", ""));
    const dataB = parseInt(b.Over_speed.replace("MPH", ""));

    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return comparison;
  }
  compareDate(a, b) {
    const dataA = Date.parse(a.task_date);
    const dataB = Date.parse(b.task_date);
    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    console.log("opp", comparison);

    return comparison;
  }

  comparePostedSpeed(a, b) {
    const dataA = parseInt(a.posted_speed.replace("MPH", ""));
    const dataB = parseInt(b.posted_speed.replace("MPH", ""));

    let comparisonP = 0;
    if (dataA > dataB) {
      comparisonP = 1;
    } else if (dataA < dataB) {
      comparisonP = -1;
    }
    return comparisonP;
  }
  compareDuration(a, b) {
    const dataA = parseInt(a.Duration.replace("Min", ""));
    const dataB = parseInt(b.Duration.replace("Min", ""));

    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    console.log("opp", comparison);

    return comparison;
  }

  onClickupTask() {
    this.sort = "AscsortedTask";
    this.tabledata.sort(this.compareDate);
  }

  onClickDownTask() {
    this.sort = "DescsortedTask";
    this.tabledata.sort(this.compareDate).reverse();
  }

  onClickupOverSpeed() {
    this.sort = "Ascsortedoverspeed";
    this.tabledata.sort(this.compare);
  }

  onClickDownOverSpeed() {
    this.sort = "Descsortedoverspeed";
    this.tabledata.sort(this.compare).reverse();
  }

  onClickupPostedSpeed() {
    this.sort = "AscsortedPostedspeed";
    this.tabledata.sort(this.comparePostedSpeed);
  }
  onClickDownPostedSpeed() {
    this.sort = "DessortedPostedspeed";
    this.tabledata.sort(this.comparePostedSpeed).reverse();
  }

  onClickupDuration() {
    this.sort = "AscsortedDuration";
    this.tabledata.sort(this.compareDuration);
  }
  onClickDownDuration() {
    this.sort = "DescsortedDuration";
    this.tabledata.sort(this.compareDuration).reverse();
  }

  onClickupStartTime() {
    this.sort = "AscsortedStartTime";
    this.tabledata.sort(this.compareStartTime);
  }
  onClickDownStartTime() {
    this.sort = "DescsortedStartTime";
    this.tabledata.sort(this.compareStartTime).reverse();
  }
  onClickupEndTime() {
    this.sort = "AscsortedEndTime";
    this.tabledata.sort(this.compareEndTime);
  }
  onClickDownEndTime() {
    this.sort = "DescsortedEndTime";
    this.tabledata.sort(this.compareEndTime).reverse();
  }
  onClickupResult() {
    this.sort = "AscsortedResult";
    alert("TBD");
  }
  onClickDownResult() {
    this.sort = "DescsortedResult";

    alert("TBD");
  }

  onClickExpand() {
    this.expanded = true;
    this.tableDataSort();
  }

  onClickCollapse() {
    this.expanded = false;
    this.tableDataSortCollpase();
  }
}
