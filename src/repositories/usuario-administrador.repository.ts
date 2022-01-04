import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {UsuarioAdministrador, UsuarioAdministradorRelations} from '../models';

export class UsuarioAdministradorRepository extends DefaultCrudRepository<
  UsuarioAdministrador,
  typeof UsuarioAdministrador.prototype.id,
  UsuarioAdministradorRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(UsuarioAdministrador, dataSource);
  }
}
