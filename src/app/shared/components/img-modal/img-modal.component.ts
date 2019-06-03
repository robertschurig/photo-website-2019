import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModalImage } from './img-modal.models';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: [ './img-modal.component.scss' ]
})
export class ImgModalComponent implements OnInit, OnChanges {
  private selectedImageIndex: number;
  private showImage = true;

  @Input() images: ModalImage[];
  @Input() selectedImage: ModalImage;
  @Input() isOpen: boolean;

  @Output() closed = new EventEmitter();

  @HostListener('document:keydown.escape', [ '$event' ]) onKeydownHandler() {
    if (this.isOpen) {
      this.onClosed();
    }
  }

  @HostListener('document:keydown.arrowleft', [ '$event' ]) onKeyLeftHandler() {
    if (this.isOpen) {
      this.prevImage();
    }
  }

  @HostListener('document:keydown.arrowright', [ '$event' ]) onKeyRightHandler() {
    if (this.isOpen) {
      this.nextImage();
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const selectedImageChange = changes.selectedImage && changes.selectedImage.currentValue ? changes.selectedImage.currentValue : null;

    if (selectedImageChange) {
      this.selectedImageIndex = this.images.findIndex((img) => selectedImageChange.source === img.source);
    }
  }

  public onClosed() {
    this.closed.emit();
  }

  private prevImage() {
    const nextIndex = this.selectedImageIndex - 1;
    this.selectedImageIndex = (nextIndex < 0) ? this.images.length - 1 : nextIndex;

    this.showImage = false;
    this.selectedImage = this.images[ this.selectedImageIndex ];
    window.setTimeout(() => {
      this.showImage = true;
    }, 1);
  }

  private nextImage() {
    const nextIndex = this.selectedImageIndex + 1;
    this.selectedImageIndex = (nextIndex === this.images.length) ? 0 : nextIndex;

    this.showImage = false;
    this.selectedImage = this.images[ this.selectedImageIndex ];
    window.setTimeout(() => {
      this.showImage = true;
    }, 1);
  }
}
