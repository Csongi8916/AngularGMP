import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
})
export class SharedModule { }
