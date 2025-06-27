/** @format */

import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-reative-user",
	imports: [ReactiveFormsModule],
	templateUrl: "./reative-user.component.html",
	styleUrl: "./reative-user.component.css",
})
export class ReativeUserComponent implements OnInit {
	// http injection
	http = inject(HttpClient);

	// urls for API calls
	getUsersUrl = "https://api.freeprojectapi.com/api/GoalTracker/getAllUsers";
	saveUserUrl = "https://api.freeprojectapi.com/api/GoalTracker/register";

	// Variable to hold user data
	getAllUsers: any[] = [];

	// FormGroup for user form
	userForm: FormGroup = new FormGroup({
		userId: new FormControl(0),
		emailId: new FormControl(""),
		password: new FormControl(""),
		fullName: new FormControl(""),
		mobileNo: new FormControl(""),
	});

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

	saveUser() {
		const userData = this.userForm.value;
		this.http.post(this.saveUserUrl, userData).subscribe({
			next: (res: any) => {
				console.log("User saved successfully:", res);
				this.getUsers();
				this.userForm.reset();
			},
			error: (err) => {
				console.error("Error saving user:", err);
			},
		});
	}
}
