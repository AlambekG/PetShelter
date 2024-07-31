import { Injectable } from '@nestjs/common';
import AdoptRepository from './adopt.repository';

@Injectable()
export default class AdoptService {
  constructor(private readonly adoptRepository: AdoptRepository) {}
}
