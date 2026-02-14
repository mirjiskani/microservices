import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { StockDetailModule } from './stock-detail/stock-detail.module';
import { StockTransectionModule } from './stock-transection/stock-transection.module';

@Module({
  imports: [ProductModule, StockDetailModule, StockTransectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
