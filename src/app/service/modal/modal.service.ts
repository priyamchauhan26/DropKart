import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) {}

  openModal(data: any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data
    });
  }
}
