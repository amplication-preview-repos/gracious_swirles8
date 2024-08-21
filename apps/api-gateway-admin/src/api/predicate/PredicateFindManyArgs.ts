import { PredicateWhereInput } from "./PredicateWhereInput";
import { PredicateOrderByInput } from "./PredicateOrderByInput";

export type PredicateFindManyArgs = {
  where?: PredicateWhereInput;
  orderBy?: Array<PredicateOrderByInput>;
  skip?: number;
  take?: number;
};
