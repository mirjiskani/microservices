import { Module } from '@nestjs/common';
import { StockDetailController } from './stock-detail.controller';
import { StockDetailService } from './stock-detail.service';

@Module({
  controllers: [StockDetailController],
  providers: [StockDetailService]
})
export class StockDetailModule {}
