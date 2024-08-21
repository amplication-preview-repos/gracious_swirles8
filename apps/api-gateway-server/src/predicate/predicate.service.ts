import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PredicateServiceBase } from "./base/predicate.service.base";

@Injectable()
export class PredicateService extends PredicateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
