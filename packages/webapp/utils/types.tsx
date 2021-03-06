export type NewContractForm = {
    followedAddr: string;
    strategyName: string;
};

export type CopyTradingContract = {
    address: string;
    observedAddress: string;
    created: string;
};

export type TransactionRow = {
    txHash: string;
    baseTxHash: string;
};

export enum PoolType {
    OPERATIONS,
    RELAY,
}

export type AssetRow = {
    asset: string;
    assetAddress: string;
    balance: number;
    poolType: PoolType;
};

export type AssetAction = {
    actionName: string;
    ar: AssetRow;
};

export type StrategyEntity = {
    address: string;
    description?: string;
    name?: string;
};
