import { Controller,Post,Body,Get,Param,Patch,HttpStatus } from '@nestjs/common';

import { AccountsService } from './accounts.service';
import { Account } from './account.model';

@Controller('accounts')
export class AccountsController {

    constructor(private readonly accountsService: AccountsService) { }

    @Post()
    async addAccount(
        @Body('account_name') account_name: string,
        @Body('category') category: string,
        @Body('tag') tag: string,
        @Body('balance') balance: number,
        @Body('available_balance') available_balance: number,
    ) {
        const account = await this.accountsService.insertAccount(
            account_name, category, tag, balance, available_balance
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'Account added successfully',
            data: account,
        };
    }

    @Get()
    async getAllAccounts() {
        const account = await this.accountsService.getAccounts();
        return account;
    }

    @Get(':id')
    getAccount(@Param('id') accountId: string) {
        return this.accountsService.getSingleAccount(accountId);
    }

    @Patch(':id')
    async updateAccount(
        @Param('id') accountId: string,
        @Body('account') accountProps: Account,
    ) {
        const account = await this.accountsService.updateAccount(
            accountId,
            accountProps
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'account updated successfully',
            account: account,
        };
    }
}
