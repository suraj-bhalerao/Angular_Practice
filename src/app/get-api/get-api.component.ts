/** @format */

import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";

@Component({
	selector: "app-get-api",
	templateUrl: "./get-api.component.html",
	styleUrls: ["./get-api.component.css"],
})
export class GetApiComponent implements OnInit {
	htttp = inject(HttpClient);

	UsersList: any[] = [];

	user: any = {
		emailId: "",
		password: "",
		fullName: "",
		mobileNo: "",
	};

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.htttp.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe({
			next: (response: any) => {
				this.UsersList = response;
			},
			error: (error) => {
				console.error("Error fetching users:", error);
			},
		});
	}
}
