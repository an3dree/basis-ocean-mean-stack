import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	url = 'http://localhost:3000/user';

	constructor(private http: HttpClient) { }

	addUser(user) {
		return this.http.post(this.url+'/user/add', user);
	}

	getUser() {
		return this.http.get(this.url+'/user/' );
	}

	editUser(id) {
		return this.http.get(this.url+'/user/edit/'+id);
	}

	updateUser(id, user) {
		return this.http.post(this.url+'/user/update/'+id, user);
	}

	deleteUser(id) {
		return this.http.get(this.url+'/user/delete/'+id);
	}

	alert(mssg, status) {
		swal.fire(mssg, "", status);
	}
}
