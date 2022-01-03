import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioAdministrador extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasenia: string;


  constructor(data?: Partial<UsuarioAdministrador>) {
    super(data);
  }
}

export interface UsuarioAdministradorRelations {
  // describe navigational properties here
}

export type UsuarioAdministradorWithRelations = UsuarioAdministrador & UsuarioAdministradorRelations;
