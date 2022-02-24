const fs = require("fs");
const path = require("path");
const semver = require("semver");

const dsPackageJsonPath = path.resolve(__dirname, "..", "package.json");
const dsPackageJson = JSON.parse(fs.readFileSync(dsPackageJsonPath));

const oldVersion = dsPackageJson.version;
const nextVersion = process.argv[2];

(async () => {
  try {
    // Check for a valid semver
    if (!nextVersion || !semver.valid(nextVersion))
      throw new Error("❌ Looks like this is not a valid semver");

    if (semver.compareIdentifiers(nextVersion, oldVersion) !== 1)
      throw new Error(
        "❌ The new version must be higher than the current version"
      );

    // Return a message to the console
    console.info(
      `✅ The update from v${oldVersion} to v${nextVersion} is valid!`
    );
  } catch (error) {
    setImmediate(() => {
      throw error;
    });
  }
})();
