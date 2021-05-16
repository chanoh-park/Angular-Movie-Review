import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { MovieComponent } from './movie.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    LayoutModule,
    MatIconModule,
    MatRippleModule,
  ],
})
export class MovieModule {}
