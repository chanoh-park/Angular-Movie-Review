import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule, LayoutModule],
})
export class MovieModule {}
