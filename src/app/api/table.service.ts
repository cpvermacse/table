import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class TableService {
  constructor(public http: HttpClient) {}
  getTableData() {
    console.log(
      "service fired",
      this.http.get("http://localhost:3000/table-data")
    );
    return this.http.get("http://localhost:3000/table-data");
  }
}
