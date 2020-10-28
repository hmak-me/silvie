import IValidationRule, { rule } from 'src/validator/rule';
import Validator from 'src/validator';
import checkExistence from 'src/validator/helpers/checkExistence';

@rule('requiredWithout')
export default class RequiredWithoutRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, path: string): boolean {
		const results = Validator.findData(validator.data, path.split('.'));

		if (results.length === 0) {
			return checkExistence(value) || null;
		}

		for (let index = 0; index < results.length; index++) {
			const { value: matchingValue } = results[index];

			if (checkExistence(matchingValue)) {
				return checkExistence(value) || undefined;
			}
		}

		return checkExistence(value) || null;
	}
}
