interface IAccount {
    name: string,
    password: string
}

export const userAccounts: IAccount[] = [
    { name: 'Rob', password: '123' },
    { name: 'Tobias', password: '123' }
]