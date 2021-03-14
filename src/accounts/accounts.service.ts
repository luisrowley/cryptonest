import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './account.model';

@Injectable()
export class AccountsService {

    constructor(@InjectModel('Account') private readonly AccountModel: Model<Account>) {}

}
