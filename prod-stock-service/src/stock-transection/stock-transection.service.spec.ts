import { Test, TestingModule } from '@nestjs/testing';
import { StockTransectionService } from './stock-transection.service';

describe('StockTransectionService', () => {
  let service: StockTransectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockTransectionService],
    }).compile();

    service = module.get<StockTransectionService>(StockTransectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
