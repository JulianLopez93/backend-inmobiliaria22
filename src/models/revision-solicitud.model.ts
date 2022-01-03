import {Entity, model, property} from '@loopback/repository';

@model()
export class RevisionSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
  })
  comentario?: string;


  constructor(data?: Partial<RevisionSolicitud>) {
    super(data);
  }
}

export interface RevisionSolicitudRelations {
  // describe navigational properties here
}

export type RevisionSolicitudWithRelations = RevisionSolicitud & RevisionSolicitudRelations;
