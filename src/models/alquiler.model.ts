import {Entity, model, property} from '@loopback/repository';

@model()
export class Alquiler extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idContrato?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;


  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
