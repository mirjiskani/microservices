import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductStockModule } from './product-stock/product-stock.module';

@Module({
  imports: [UsersModule, OrdersModule, ProductStockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
