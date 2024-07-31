import { Injectable } from '@nestjs/common';
import ListRepository from './list.repository';

@Injectable()
export default class ListService {
  constructor(private readonly listRepository: ListRepository) {}
}
