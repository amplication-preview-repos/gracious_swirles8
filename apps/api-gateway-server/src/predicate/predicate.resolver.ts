import * as graphql from "@nestjs/graphql";
import { PredicateResolverBase } from "./base/predicate.resolver.base";
import { Predicate } from "./base/Predicate";
import { PredicateService } from "./predicate.service";

@graphql.Resolver(() => Predicate)
export class PredicateResolver extends PredicateResolverBase {
  constructor(protected readonly service: PredicateService) {
    super(service);
  }
}
