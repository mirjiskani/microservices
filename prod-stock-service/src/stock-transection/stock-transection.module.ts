import { Module } from '@nestjs/common';
import { StockTransectionService } from './stock-transection.service';
import { StockTransectionController } from './stock-transection.controller';

@Module({
  providers: [StockTransectionService],
  controllers: [StockTransectionController]
})
export class StockTransectionModule {}
