import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { LoadingBlockComponent } from '../../shared/components/loading-block/loading-block.component';
import { CourseService } from 'src/app/course/services/course.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private dialogRef;

  constructor(private courseService: CourseService, public dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (this.dialog.openDialogs.length === 0) {
      this.courseService.pendingState.next(true);
      this.courseService.pendingState.subscribe(state => {
        if (state) {
          this.dialogRef = this.dialog.open(LoadingBlockComponent);
        } else {
          debugger;
          this.dialog.closeAll();
          this.dialogRef.close();
          if (this.dialogRef) {
            this.dialogRef.afterAllClosed().subscribe(result => {
              this.courseService.pendingState.unsubscribe();
            });
          }
        }
      })
    }

    return next.handle(req);
  }
}