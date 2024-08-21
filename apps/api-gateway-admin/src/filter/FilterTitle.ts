import { Filter as TFilter } from "../api/filter/Filter";

export const FILTER_TITLE_FIELD = "name";

export const FilterTitle = (record: TFilter): string => {
  return record.name?.toString() || String(record.id);
};
