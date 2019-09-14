import { NgModule } from '@angular/core';
import { ProdutoDetailPage } from './produto-detail';
import { IonicPageModule } from 'ionic-angular/module';

@NgModule({
  declarations: [
    ProdutoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoDetailPage),
  ],
})
export class ProdutoDetailPageModule {}