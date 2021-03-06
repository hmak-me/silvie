import path from 'path';
import fs from 'fs';
import Disk from 'src/storage/disk';

const config = process.configs.storage;

export default class Storage {
	static disks: Record<string, Disk>;

	static init() {
		const storagePath = path.resolve(process.rootPath, `.silvie/${config.path}`);

		if (!fs.existsSync(storagePath)) {
			fs.mkdirSync(storagePath, { recursive: true });
		}

		this.disks = Object.keys(config.disks || {}).reduce((group, diskName) => {
			group[diskName] = new Disk(path.resolve(storagePath, config.disks[diskName]));
			return group;
		}, {});
	}
}
