import { Controller } from '@nestjs/common';
import AdoptService from './adopt.service';

@Controller()
export default class AdoptController {
  constructor(private readonly adoptService: AdoptService) {}
}
