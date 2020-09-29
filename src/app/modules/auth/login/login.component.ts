import { Component } from "@angular/core";
import { Page } from "@nativescript/core";

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}
