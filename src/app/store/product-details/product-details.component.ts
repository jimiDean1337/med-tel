import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  SlidesOutputData,
  CarouselComponent as Owl,
  CarouselSlideDirective,
} from 'ngx-owl-carousel-o';
import { Product, ProductImage } from '../../core/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  imageList: ProductImage[];
  imageListDefault: ProductImage;
  collapseSections = {
    description: true,
    info: true,
    reviews: true,
  };

  carouselOptions: Owl['options'] = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
    nav: true,
  };

  activeSlides: SlidesOutputData;

  slidesStore: any[];
  constructor() {}

  toggleCollapsed(section: string) {
    this.collapseSections[section] = !this.collapseSections[section];
  }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    // console.log(this.activeSlides);
  }

  getMockImageList(product) {
    const list = [];
    const image = {
      src: product.imgUrl,
      caption: product.caption,
      title: product.productName,
      alt: product.productName,
      size: { height: 200, width: 200 },
      keywords: product.productName.split(', '),
    };
    for (let i = 0, len = 2; i < len; i++) {
      list.push(image);
    }
    return list;
  }

  ngOnInit() {
    this.imageListDefault = {
      src: this.product.imgUrl,
      caption: this.product.caption,
      title: this.product.productName,
      alt: this.product.productName,
      size: { height: 200, width: 200 },
      keywords: this.product.productName.split(', '),
    };
    this.imageList = this.getMockImageList(this.product);
  }
}
