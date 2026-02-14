import { Test, TestingModule } from '@nestjs/testing';
import { StockTransectionController } from './stock-transection.controller';

describe('StockTransectionController', () => {
  let controller: StockTransectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockTransectionController],
    }).compile();

    controller = module.get<StockTransectionController>(StockTransectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
