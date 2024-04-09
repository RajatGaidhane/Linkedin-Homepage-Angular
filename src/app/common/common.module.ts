import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PostModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    PostModalComponent
  ]
})
export class LCommonModule { }
