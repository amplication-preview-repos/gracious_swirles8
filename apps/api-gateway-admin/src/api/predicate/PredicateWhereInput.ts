import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PredicateWhereInput = {
  id?: StringFilter;
  path?: StringNullableFilter;
};
