/** @format */

import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-post-api",
	imports: [FormsModule],
	templateUrl: "./post-api.component.html",
	styleUrl: "./post-api.component.css",
})
export class PostApiComponent implements OnInit {
	// variables and initialization
	getAllUsers: any[] = [];
	http = inject(HttpClient);
	getUsersUrl = "https://api.freeprojectapi.com/api/GoalTracker/getAllUsers";
	createUserUrl = "https://api.freeprojectapi.com/api/GoalTracker/register";
	userObj = {
		emailId: "",
		password: "",
		fullName: "",
		mobileNo: "",
	};
	// dependency injection
	ngOnInit(): void {
		this.getUsers();
	}

	// API Call methods
	getUsers() {
		this.http.get(this.getUsersUrl).subscribe({
			next: (res: any) => {
				this.getAllUsers = res;
				console.log("Users fetched successfully:", this.getAllUsers);
			},
			error: (err) => {
				console.error("Error fetching users:", err);
			},
		});
	}
	createUser() {
		this.http.post(this.createUserUrl, this.userObj).subscribe({
			next: (res: any) => {
				console.log("User created successfully:", res);
				this.getUsers();
			},
			error: (err) => {
				console.error("Error creating user:", err);
			},
		});
	}

	// Form submission method
	addUser() {
		if (
			this.userObj.emailId &&
			this.userObj.password &&
			this.userObj.fullName &&
			this.userObj.mobileNo
		) {
			this.createUser();
			this.clear();
		} else {
			alert("Please fill all fields before submitting.");
		}
	}

	clear() {
		this.userObj = {
			emailId: "",
			password: "",
			fullName: "",
			mobileNo: "",
		};
	}
}
