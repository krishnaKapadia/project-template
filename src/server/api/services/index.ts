import { TestService } from "./testService";

export function initServices() {
    const testService = new TestService();

    return {
        testService
    };
}