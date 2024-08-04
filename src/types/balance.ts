export interface Brc20BalanceResult {
    overall_balance: string;
    available_balance: string;
    block_height: number;
    tick: string;
}

export interface Brc20BalanceResponse {
    error: null | string;
    result: Brc20BalanceResult[];
}