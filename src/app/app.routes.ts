/** @format */

import { Routes } from "@angular/router";
import { GetApiComponent } from "./get-api/get-api.component";
import { PostApiComponent } from "./post-api/post-api.component";
import { ReativeUserComponent } from "./reative-user/reative-user.component";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "home",
	},
	{
		path: "get-api",
		component: GetApiComponent,
	},
	{
		path: "post-api",
		component: PostApiComponent,
	},
	{
		path: "reactive-user",
		component: ReativeUserComponent,
	},
];
