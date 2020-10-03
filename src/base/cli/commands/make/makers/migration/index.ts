import log from 'base/utils/log';
import { pascalCase, snakeCase } from 'change-case';
import pluralize from 'pluralize';
import path from 'path';
import fs from 'fs';

const template = fs.readFileSync(path.resolve(__dirname, 'template'), { encoding: 'utf8' });

export default (args: { _: string[] }) => {
	const name = args._[2];

	if (name) {
		const pluralName = pluralize(name);
		const filename = snakeCase(pluralName);
		const filepath = path.resolve(process.rootPath, `src/database/migrations/${filename}.ts`);

		if (!fs.existsSync(filepath)) {
			const className = `${pascalCase(pluralName)}TableMigration`;

			const content = template.replace(/CLASS_NAME/g, className).replace(/TABLE_NAME/g, filename);

			fs.writeFileSync(filepath, content);

			log.success('Migration Created', `'${filename}' created successfully.`);
		} else {
			log.error('Migration Exists', `There is already a migration named '${filename}'`);
		}
	} else {
		log.error('No Name', 'You have to specify migration name');
	}
};