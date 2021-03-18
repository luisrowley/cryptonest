import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './account.model';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
