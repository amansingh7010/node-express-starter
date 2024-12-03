import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const REPO_URL = "https://github.com/notamans/node-express-starter.git";

export default async function (projectName) {
  try {
    console.log(`Creating a new Node.js Express app in ${projectName}...`);

    const projectPath = path.resolve(process.cwd(), projectName);
    if (fs.existsSync(projectPath)) {
      console.log(
        `Directory ${projectName} already exists. Please choose a different name.`,
      );
      return;
    }

    fs.mkdirSync(projectPath);

    execSync(`git clone ${REPO_URL} ${projectPath}`, { stdio: "inherit" });
    execSync("rm cli.js", { stdio: "inherit" });

    process.chdir(projectPath);
    const gitFolderPath = path.join(projectPath, ".git");
    if (fs.existsSync(gitFolderPath)) {
      execSync(`rm -rf ${gitFolderPath}`, { stdio: "inherit" });
    }

    execSync("git init", { stdio: "inherit" });
    execSync("yarn install", { stdio: "inherit" });

    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = import(packageJsonPath);

    // Check if the bin property exists and remove it
    if (packageJson.bin) {
      delete packageJson.bin;

      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2),
        "utf-8",
      );
    }

    console.log("Project created successfully!");
  } catch (error) {
    console.error("Error creating the project:", error);
  }
}
