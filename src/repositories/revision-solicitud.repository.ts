import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqlDataSource} from '../datasources';
import {RevisionSolicitud, RevisionSolicitudRelations} from '../models';

export class RevisionSolicitudRepository extends DefaultCrudRepository<
  RevisionSolicitud,
  typeof RevisionSolicitud.prototype.id,
  RevisionSolicitudRelations
> {
  constructor(
    @inject('datasources.postgresql') dataSource: PostgresqlDataSource,
  ) {
    super(RevisionSolicitud, dataSource);
  }
}
