import { Controller,Post,Body,Get,Param,Patch,HttpStatus } from '@nestjs/common';

import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {

    constructor(private readonly accountsService: AccountsService) { }

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
        @Body('title') accountTitle: string,
        @Body('description') accountDesc: string,
        @Body('price') accountPrice: number,
    ) {
        const account = await this.accountsService.updateAccount(
            accountId,
            accountTitle,
            accountDesc,
            accountPrice,
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'account updated successfully',
            account: account,
        };
    }
}
