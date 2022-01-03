import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioAsesor extends Entity {
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


  constructor(data?: Partial<UsuarioAsesor>) {
    super(data);
  }
}

export interface UsuarioAsesorRelations {
  // describe navigational properties here
}

export type UsuarioAsesorWithRelations = UsuarioAsesor & UsuarioAsesorRelations;
