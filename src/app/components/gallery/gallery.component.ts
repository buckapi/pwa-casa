import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ReactiveFormsModule, PhotoGalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    {
      src: 'assets/img1-big.jpg',
      thumb: 'assets/img1-small.jpg',
      caption: 'Image 1'
    },
    {
      src: 'assets/img2-big.jpg',
      thumb: 'assets/img2-small.jpg',
      caption: 'Image 2'
    },
    // más imágenes
  ];
  constructor (
    public global: GlobalService,
    public virtualRouter: virtualRouter
  ){}

}
