import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactComponent],
  entryComponents: [ContactComponent]
})
export class ContactModule { }
