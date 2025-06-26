/** @format */

import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [FormsModule, RouterLink, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "demo";
}
