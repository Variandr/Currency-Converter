import { Component, OnInit } from "@angular/core";
import { ApiComponent } from "./api/api.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    constructor(private api: ApiComponent) {}

    ngOnInit() {
        this.api.getCurrenciesValues();
    }
}
