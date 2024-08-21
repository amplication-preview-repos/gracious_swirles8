import { Predicate as TPredicate } from "../api/predicate/Predicate";

export const PREDICATE_TITLE_FIELD = "path";

export const PredicateTitle = (record: TPredicate): string => {
  return record.path?.toString() || String(record.id);
};
