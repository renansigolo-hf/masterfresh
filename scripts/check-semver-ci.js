const fs = require('fs');
const path = require('path');
const semver = require('semver');

const dsPackageJsonPath = path.resolve(__dirname, '..', 'package.json');
const dsPackageJson = JSON.parse(fs.readFileSync(dsPackageJsonPath));

(async () => {
    try {
        // Check for a valid semver
        const nextVersion = process.argv[2];
        if (!semver.valid(nextVersion) || !nextVersion)
            throw new Error(`❌ Looks like this is not a valid semver`);

        // Return a message to the console
        console.info(`
            ✅ The update from ${dsPackageJson.version} to ${nextVersion} is valid!
            Proceding with the release...
        `);
    } catch (error) {
        setImmediate(() => {
            throw error;
        });
    }
})();
