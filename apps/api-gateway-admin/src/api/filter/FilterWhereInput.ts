import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FilterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: StringNullableFilter;
};
