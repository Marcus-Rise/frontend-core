import {IDictionary} from "@/models/IDictionary";

export abstract class AbstractDTO {
    protected rules: ValidatorDictionary = {};

    public validate(): boolean {
        let status = true;

        for (const key in this.rules) {
            if (this.rules.hasOwnProperty(key)) {
                const result = this.rules[key]();

                if (!result) {
                    status = false;
                }
            }
        }

        return status;
    }

    public serialize(): object {
        return {};
    }
}

export type ValidatorDictionary = IDictionary<ValidatorRule>;

export type ValidationRuleResult = boolean;

type ValidatorRule = () => ValidationRuleResult;
