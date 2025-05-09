"use client"

import { AccountsTable } from './AccountsTable';
import { columns } from './AccountsColumns';

const MyAccounts = ({ accountsData }: {accountsData: Account[]}) => {

  return (
    <div className='flex flex-col bg-[#1E2233] my-5 py-5 px-4 rounded-2xl w-full border border-[#313B54]'>
      <AccountsTable columns={columns} data={accountsData} />
    </div>
  )
}

export default MyAccounts
