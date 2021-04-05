import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class DadoService {
	url = 'http://localhost:3000/dado';

	constructor(private http: HttpClient) { }

	addDado(dado) {
		return this.http.post(this.url+'/dado/add', dado);
	}

	getDado() {
		return this.http.get(this.url+'/dado/');
	}

	editDado(id) {
		return this.http.get(this.url+'/dado/edit/'+id);
	}

	updateDado(id, dado) {
		return this.http.post(this.url+'/dado/update/'+id, dado);
	}

	deleteDado(id) {
		return this.http.get(this.url+'/dado/delete/'+id);
	}

	alert(mssg, status) {
		swal.fire(mssg, "", status);
	}
}
