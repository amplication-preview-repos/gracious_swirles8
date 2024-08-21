import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PredicateService } from "./predicate.service";
import { PredicateControllerBase } from "./base/predicate.controller.base";

@swagger.ApiTags("predicates")
@common.Controller("predicates")
export class PredicateController extends PredicateControllerBase {
  constructor(protected readonly service: PredicateService) {
    super(service);
  }
}
