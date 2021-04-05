import { Component, OnInit } from '@angular/core';
import { DadoService } from '../dado.service';
import Dado from '../Dado';

@Component({
	selector: 'app-get',
	templateUrl: './get.component.html',
	styleUrls: ['./get.component.css']
})
export class GetDadoComponent implements OnInit {
	dados: Dado[];
	response : any = {};
	responseDelete : any = {};
	constructor(private us: DadoService) { }

	ngOnInit() {
		this.getDados();
	}

	getDados() {
		this.us.getDado().subscribe((res) => {
			this.response = res;
			if (this.response.status == 'success'){
				this.dados = this.response.dados;
			} else {
			}
		});
	}

	deleteDado(id) {
		this.us.deleteDado(id).subscribe(res => {
			this.responseDelete = res;
			if (this.responseDelete.status == 'success'){
				this.us.alert('Dado deletado com sucesso!','success');
				this.getDados();
			} else {
				this.us.alert('Erro deletando dado!','error');
			}
		});
	}
}
