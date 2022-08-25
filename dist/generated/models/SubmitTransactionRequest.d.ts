import type { Address } from './Address';
import type { TransactionPayload } from './TransactionPayload';
import type { TransactionSignature } from './TransactionSignature';
import type { U64 } from './U64';
export declare type SubmitTransactionRequest = {
    sender: Address;
    sequence_number: U64;
    max_gas_amount: U64;
    gas_unit_price: U64;
    expiration_timestamp_secs: U64;
    payload: TransactionPayload;
    signature: TransactionSignature;
};
//# sourceMappingURL=SubmitTransactionRequest.d.ts.map