import {Entity, model, property} from '@loopback/repository';

@model()
export class Compra extends Entity {
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

  @property({
    type: 'any',
  })
  docContrato?: any;


  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
