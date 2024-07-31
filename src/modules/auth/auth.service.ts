import { Injectable } from '@nestjs/common';
import AuthRepository from './auth.repository';

@Injectable()
export default class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
}
