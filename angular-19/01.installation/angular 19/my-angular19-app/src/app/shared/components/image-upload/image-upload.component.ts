import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-image-upload',
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {
  title = "data binding"
  imageUrl = 'https://via.placeholder.com/150'
  message = "Uploading..."
  name = ""
  onClick(): void {
    this.message = 'tombol klik'
  }

}
