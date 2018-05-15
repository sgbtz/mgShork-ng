import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule,
				MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatCardModule,
				MatDividerModule, MatTabsModule, MatTableModule, MatExpansionModule, MatGridListModule,
        MatSnackBarModule } from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatCardModule,
    MatDividerModule, MatTabsModule, MatTableModule, MatExpansionModule, MatGridListModule, MatSnackBarModule
  ],
  exports: [
  	MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule,
  	MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatCardModule,
  	MatDividerModule, MatTabsModule, MatTableModule, MatExpansionModule, MatGridListModule, MatSnackBarModule
  ]
})
export class MaterialModule { }