import Container from "typedi";
import { TestService } from "./testService";
import { DependencyService } from "./dependencyService";

export function initServices() {
    return {
        dependencyService: Container.get(DependencyService),
        testService: Container.get(TestService),
    };
}