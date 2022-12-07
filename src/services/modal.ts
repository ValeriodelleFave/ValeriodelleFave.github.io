import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DetailComponent } from "src/components/detail/detail.component";

export class ModalService {
  private dialogRef: MatDialogRef<any, any>;

  constructor(
    public dialog: MatDialog
  ) { }

  openModal() {
    this.dialogRef = this.dialog.open(DetailComponent, {
      autoFocus: false,
      width: "80%"
    })
  }

  closeModal() {
    if (this.dialogRef)
      this.dialogRef.close();
  }

}
