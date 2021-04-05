import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DadoService } from '../dado.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddDadoComponent implements OnInit {
  response : any = {};
  angForm : FormGroup;
  constructor(private fb : FormBuilder, private us: DadoService) { 
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
  }

  addDado() {
    this.us.addDado(this.angForm.value).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success'){
        this.us.alert('Dado adicionado com sucesso!','success');
        this.angForm.reset();
      } else {
        this.us.alert('Erro adicionando dado!','error');
      }
    })
  }
}
