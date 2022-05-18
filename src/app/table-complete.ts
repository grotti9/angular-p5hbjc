import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Client} from './client';
import {ClientService} from './client.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';


@Component(
    {selector: 'ngbd-table-complete', templateUrl: './table-complete.html', providers: [ClientService, DecimalPipe]})
export class NgbdTableComplete {
  clients$: Observable<Client[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ClientService) {
    this.clients$ = service.clients$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
