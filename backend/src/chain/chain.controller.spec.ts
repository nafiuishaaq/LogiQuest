/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ChainController } from './chain.controller';

describe('ChainController', () => {
  let controller: ChainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChainController],
    }).compile();

    controller = module.get<ChainController>(ChainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
