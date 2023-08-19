import { Service } from "typedi";
import { DependencyService } from "./dependencyService";

@Service()
export class TestService {
    constructor(private readonly dependencyService: DependencyService) { }

    public test(): string {
        return this.dependencyService.depedantFunc();
    }
}