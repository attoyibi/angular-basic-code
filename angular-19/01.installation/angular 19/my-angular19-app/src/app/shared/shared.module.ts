import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { FormatDescriptionPipe } from './pipes/format-description.pipe';

@NgModule({
  declarations: [
    ImageUploadComponent,
    DragAndDropDirective,
    FormatDescriptionPipe,
  ],
  imports: [CommonModule],
  exports: [
    ImageUploadComponent,
    DragAndDropDirective,
    FormatDescriptionPipe,
  ],
})
export class SharedModule { }
