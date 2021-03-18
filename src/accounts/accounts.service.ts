import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './account.model';

@Injectable()
export class AccountsService {

    constructor(@InjectModel('Account') private readonly accountModel: Model<Account>) {}

    async getAccounts()
    {
        const accounts = await this.accountModel.find().exec();
        return accounts.map(account => ({
            id: account.id,
            account_name: account.account_name,
            category: account.category,
            tag: account.tag,
            balance: account.balance,
            available_balance: account.available_balance
        }));
    }

    async getSingleAccount(accountId: string)
    {
        const account = await this.findAccount(accountId);
    }

    async insertAccount(account_name, category, tag, balance, available_balance) 
    {
        const newAccount = new this.accountModel({
            account_name,
            category,
            tag,
            balance,
            available_balance
        });
        const result = await newAccount.save();
        return result;
      }

    /**
     * Helper method for finding account by ID.
     * @param id 
     */
    private async findAccount(id: string): Promise<Account> {
        let account;
        try {
          account = await this.accountModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find account.');
        }
        if (!account) {
          throw new NotFoundException('Could not find account.');
        }
        return account;
      }

      /**
       * 
       * @param id 
       * @param accountProps 
       */
      async updateAccount( id: string, accountProps: Account ) 
      {
        const updatedAccount = await this.findAccount(accountProps.id);

        if (accountProps.account_name) {
            updatedAccount.account_name = accountProps.account_name;
        }
        if (accountProps.category) {
            updatedAccount.category = accountProps.category;
        }
        if (accountProps.account_name) {
            updatedAccount.account_name = accountProps.account_name;
        }
        updatedAccount.save();
        return updatedAccount;
      }
}
