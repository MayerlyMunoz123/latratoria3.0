import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authservice } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ambiente } from '../interface/ambiente.interface';



@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css'],
})
export class FormularioPagoComponent implements OnInit {
  formulario: FormGroup;
  selectAmbiente: Ambiente[] = [];
  constructor(
    private http: HttpClient,
    private authService: Authservice,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      numero_telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      cantidad: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      ambiente: ['', [Validators.required]],
      fechaExpiracion: ['', [Validators.required, this.formatoFechaValido()]],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      numeroTarjeta: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/)],
      ],
      dia: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      mes: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      anio: ['', [Validators.required, Validators.min(2023), Validators.pattern(/^[0-9]+$/)]],
      hora: ['', [Validators.required, this.validarHora]],
    });
  }

  ngOnInit() {
    this.obtenerPagos();
  }

  obtenerPagos() {
    this.http.get<Ambiente[]>('app/ver/pagos').subscribe(
      (data) => {
        this.selectAmbiente = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  realizarPago() {
    const data = {
      nombre: this.formulario.get('nombre')?.value,
      apellido: this.formulario.get('apellido')?.value,
      cedula: this.formulario.get('cedula')?.value,
      correo: this.formulario.get('correo')?.value,
      cantidad: this.formulario.get('cantidad')?.value,
      numero_telefono: this.formulario.get('numero_telefono')?.value,
      ambiente:this.formulario.get('ambiente')?.value,
      fecha_Expiracion: this.formulario.get('fechaExpiracion')?.value,
      dia: this.formulario.get('dia')?.value,
      mes: this.formulario.get('mes')?.value,
      anio: this.formulario.get('anio')?.value,
    };

    this.authService.realizarPago(data)?.subscribe({
      next: (value: Object) => {
        console.log('Reserva exitosa', value);
      },
      error: (error: any) => {
        console.error('Error al realizar la reserva de una', error);
      },
    });
  }

  validarHora(control: { value: string }) {
    const horaRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (am|pm)$/i;

    if (control.value && !horaRegex.test(control.value)) {
      return { formatoInvalido: true };
    }

    return null;
  }

  formatoFechaValido() {
    return (control: { value: string }) => {
      const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const esValido = regex.test(control.value);
      return esValido ? null : { formatoFechaInvalido: true };
    };
  }

  obtenerpagos(): void {
    this.authService.obtenerPagos().subscribe((data) => {
      console.log(data);
    });
  }
}
