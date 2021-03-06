import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';

const components = [HeaderComponent, ContentComponent, FooterComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, MatIconModule],
  exports: [...components],
})
export class LayoutModule {}
