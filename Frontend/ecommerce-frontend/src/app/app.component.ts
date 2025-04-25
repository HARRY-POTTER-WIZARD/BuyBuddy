import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  template: `<app-product></app-product>`,
  standalone: true, // Indicate that this is a standalone component
  imports: [CommonModule, ProductComponent] // Add CommonModule and ProductComponent here
})
export class AppComponent {}