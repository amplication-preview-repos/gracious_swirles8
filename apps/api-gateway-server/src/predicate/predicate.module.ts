import { Module } from "@nestjs/common";
import { PredicateModuleBase } from "./base/predicate.module.base";
import { PredicateService } from "./predicate.service";
import { PredicateController } from "./predicate.controller";
import { PredicateResolver } from "./predicate.resolver";

@Module({
  imports: [PredicateModuleBase],
  controllers: [PredicateController],
  providers: [PredicateService, PredicateResolver],
  exports: [PredicateService],
})
export class PredicateModule {}
