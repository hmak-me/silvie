import IValidationRule, { rule } from 'src/validator/rule';
import Validator from 'src/validator';
import { isRFC3339 } from 'validator';

@rule('rfc3339')
export default class RFC3339Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isRFC3339(value);
	}
}
