import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true, // Indicate that this is a standalone component
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule here
})
export class ProductComponent {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', description: '', price: 0, imageUrl: '' };
  editProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.productService.createProduct(this.newProduct).subscribe((product: Product) => {
      this.products.push(product);
      this.newProduct = { id: 0, name: '', description: '', price: 0, imageUrl: '' }; // Reset form
    });
  }

  startEdit(product: Product): void {
    this.editProduct = { ...product }; // Create a copy for editing
   
  }

  updateProduct(): void {
    if (this.editProduct) {
      this.productService.updateProduct(this.editProduct.id, this.editProduct).subscribe(
        (updatedProduct: Product) => {
          const index = this.products.findIndex(p => p.id === updatedProduct.id);
          if (index !== -1) {
            this.products[index] = updatedProduct; // Update the product in the list
          }
          this.editProduct = null; // Reset edit mode
        },
        error => {
          console.error('Error updating product:', error);
          // Optionally show a user-friendly message
        }
      );
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id); // Remove from the list
    });
  }
}