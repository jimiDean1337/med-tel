import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParallaxModule } from 'ngx-parallax';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';
import { NgxAnimatedGradientModule } from 'ngx-animated-gradient';
import { CarouselComponent } from './carousel/carousel.component';
import { TabberComponent } from './tabber/tabber.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { ModalComponent } from './modal/modal.component';
import { DividerComponent } from './divider/divider.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LoaderComponent } from './loader/loader.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { BrandButtonComponent } from './brand-button/brand-button.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { UserCartComponent } from './user-cart/user-cart.component';
@NgModule({
  declarations: [
    CarouselComponent,
    TabberComponent,
    ContactComponent,
    PricingComponent,
    ModalComponent,
    DividerComponent,
    ThankYouComponent,
    LoaderComponent,
    ParallaxDirective,
    BrandButtonComponent,
    PaymentMethodsComponent,
    SafeHtmlPipe,
    UserCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    CarouselModule,
    NgxPayPalModule,
    NgxNewstickerAlbeModule,
    NgxAnimatedGradientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    NgxAnimatedGradientModule,
    CarouselModule,
    ParallaxModule,
    NgxPayPalModule,
    NgxNewstickerAlbeModule,
    CarouselComponent,
    TabberComponent,
    ContactComponent,
    PricingComponent,
    ModalComponent,
    DividerComponent,
    ThankYouComponent,
    LoaderComponent,
    ParallaxDirective,
    BrandButtonComponent,
    PaymentMethodsComponent,
    SafeHtmlPipe,
    UserCartComponent,
  ],
  entryComponents: [
    CarouselComponent,
    TabberComponent,
    ContactComponent,
    PricingComponent,
    ModalComponent,
    DividerComponent,
    ThankYouComponent,
    LoaderComponent,
    BrandButtonComponent,
    UserCartComponent,
  ],
})
export class SharedModule {}
