import { Controller } from '@nestjs/common';
import ListService from './list.service';

@Controller()
export default class ListController {
  constructor(private readonly listService: ListService) {}
}
