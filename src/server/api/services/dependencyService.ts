import { Service } from "typedi";

@Service()
export class DependencyService {
    
    public depedantFunc(): string {
        return 'init succeeded'
    }
}