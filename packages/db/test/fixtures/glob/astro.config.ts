import { defineConfig } from 'astro/config';
import db, { defineCollection, field } from '@astrojs/db';
import { asJson, glob } from './utils';

const Quote = defineCollection({
	fields: {
		author: field.text(),
		body: field.text(),
		file: field.text({ unique: true }),
	},
	data: glob('quotes/*.json', asJson),
});

export default defineConfig({
	db: {
		collections: { Quote },
	},
	integrations: [db()],
});