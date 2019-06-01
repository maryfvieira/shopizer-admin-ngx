import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from '../tables/tables-routing.module';
import { SmartTableComponent } from '../tables/smart-table/smart-table.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesComponent } from '../tables/tables.component';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { OrderListComponent } from '../orders/order-list/order-list.component';
import { NbSpinnerModule } from '@nebular/theme';


@NgModule({
  declarations: [
    TablesComponent,
    SmartTableComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,

    TablesRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    NbSpinnerModule
  ],
  exports: [
    TablesRoutingModule,
    Ng2SmartTableModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    OrderListComponent,
    NbSpinnerModule
  ]
})
export class SharedModule { }