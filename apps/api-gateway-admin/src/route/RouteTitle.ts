import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "uri";

export const RouteTitle = (record: TRoute): string => {
  return record.uri?.toString() || String(record.id);
};
