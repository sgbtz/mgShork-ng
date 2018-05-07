import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule,
				MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatCardModule,
				MatDividerModule, MatTabsModule, MatTableModule, MatExpansionModule, MatGridListModule } from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatCardModule,
    MatDividerModule, MatTabsModule, MatTableModule, MatExpansionModule, MatGridListModule
  ],
  exports: [
  	MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule,
  	MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatCardModule,
  	MatDividerModule, MatTabsModule, MatTableModule, MatExpansionModule, MatGridListModule
  ]
})
export class MaterialModule { }