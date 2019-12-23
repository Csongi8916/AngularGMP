import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    LoadingBlockComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    ConfirmModalComponent,
    LoadingBlockComponent
  ],
})
export class SharedModule { }
