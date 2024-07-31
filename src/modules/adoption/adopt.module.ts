import { Module } from '@nestjs/common';
import AdoptController from './adopt.controller';
import AdoptService from './adopt.service';
import AdoptRepository from './adopt.repository';

@Module({
  imports: [],
  controllers: [AdoptController],
  providers: [AdoptService, AdoptRepository],
})
export class AdoptModule {}
