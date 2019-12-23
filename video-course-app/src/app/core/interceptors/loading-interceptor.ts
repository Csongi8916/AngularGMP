import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { LoadingBlockComponent } from '../../shared/components/loading-block/loading-block.component';
import { CourseService } from 'src/app/course/services/course.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private dialogRef;
  private openCount;
  private closeCount;

  constructor(private courseService: CourseService, public dialog: MatDialog) {
    this.openCount = 0;
    this.closeCount = 0;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (this.dialog.openDialogs.length === 0) {
      this.courseService.pendingState.next(true);
      this.courseService.pendingState.subscribe(state => {
        if (state && this.openCount === 0) {
          this.dialogRef = this.dialog.open(LoadingBlockComponent);
          this.openCount++;
        } else if (!state && this.closeCount === 0) {
          this.dialog.closeAll();
          this.dialogRef.close();
          this.closeCount++;
        }
      })
    }

    this.openCount = 0;
    this.closeCount = 0;
    return next.handle(req);
  }
}