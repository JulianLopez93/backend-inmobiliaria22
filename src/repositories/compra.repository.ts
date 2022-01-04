import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {Compra, CompraRelations} from '../models';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.idContrato,
  CompraRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(Compra, dataSource);
  }
}
