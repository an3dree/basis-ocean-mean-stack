import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DadoService } from '../dado.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditDadoComponent implements OnInit {
	dado: any = {};
	angForm: FormGroup;
	response: any = {};
	constructor(private route: ActivatedRoute, 
		private fb: FormBuilder,
		private router: Router, 
		private us: DadoService) {
		this.angForm = this.fb.group({
			nome: ['', Validators.required ],
			fonte: ['', Validators.required ],
			tipo: ['', Validators.required ],
			natureza: ['', Validators.required ],
			dia: ['', Validators.required ],
			descricao: ['', Validators.required ],
			local: ['', Validators.required ]
		});
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.us.editDado(params['id']).subscribe(res => {
				this.dado = res;
				this.dado = this.dado.dado;
			});
		});
	}

	updateDado() {
		this.route.params.subscribe(params => {
			this.us.updateDado(params['id'], this.angForm.value).subscribe(res => {
				this.response = res;
				if (this.response.status == 'success'){
					this.us.alert('Dado atualizado com sucesso!','success');
					this.router.navigate(['dado']);
				} else {
					this.us.alert('Erro atualizando dado!','error');
				}
			});
		});
	}
}
