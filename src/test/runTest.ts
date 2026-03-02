import * as path from 'path';
import { runTests } from '@vscode/test-electron';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to the extension test runner script
		// Passed to `--extensionTestsPath`
		const extensionTestsPath = path.resolve(__dirname, './index.js');

		// Download VS Code, unzip it and run the integration test
		await runTests({ extensionDevelopmentPath, extensionTestsPath });
	} catch (err: any) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
