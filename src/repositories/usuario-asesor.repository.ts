import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {UsuarioAsesor, UsuarioAsesorRelations} from '../models';

export class UsuarioAsesorRepository extends DefaultCrudRepository<
  UsuarioAsesor,
  typeof UsuarioAsesor.prototype.id,
  UsuarioAsesorRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(UsuarioAsesor, dataSource);
  }
}
