import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Inmueble} from './inmueble.model';

@model({
  settings: {
    foreignKeys: {
      fk_inmueble_id: {
        name: 'fk_inmueble_id',
        entity: 'inmueble',
        entityKey: 'id',
        foreignKey: 'inmuebleId',
      },
    },
  },
})
export class Imagen extends Entity {
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
  nombre: string;

  @belongsTo(() => Inmueble)
  inmuebleId: number;

  constructor(data?: Partial<Imagen>) {
    super(data);
  }
}

export interface ImagenRelations {
  // describe navigational properties here
}

export type ImagenWithRelations = Imagen & ImagenRelations;
