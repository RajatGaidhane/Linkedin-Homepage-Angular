import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LCommonModule } from 'src/app/common/common.module';
import { LeftPaneComponent } from './components/left-pane/left-pane.component';
import { MiddlePaneComponent } from './components/middle-pane/middle-pane.component';
import { RightPaneComponent } from './components/right-pane/right-pane.component';

@NgModule({
  declarations: [
    HomepageComponent,
    LeftPaneComponent,
    MiddlePaneComponent,
    RightPaneComponent
  ],
  imports: [
    CommonModule,
    LCommonModule
  ]
})
export class HomepageModule { }
