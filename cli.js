#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const REPO_URL = "https://github.com/notamans/node-express-starter.git";

async function createProject(projectName) {
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
    process.chdir(projectPath);

    // Remove the CLI script (cli.js) from the cloned repo
    const cliFilePath = path.join(projectPath, "cli.js");
    if (fs.existsSync(cliFilePath)) {
      fs.unlinkSync(cliFilePath);
    }

    const gitFolderPath = path.join(projectPath, ".git");
    if (fs.existsSync(gitFolderPath)) {
      execSync(`rm -rf ${gitFolderPath}`, { stdio: "inherit" });
    }

    execSync("git init", { stdio: "inherit" });
    execSync("yarn install", { stdio: "inherit" });

    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = require(packageJsonPath);

    packageJson.name = projectName;

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

const projectName = process.argv[2];
if (!projectName) {
  console.error("Please provide a project name.");
  process.exit(1);
}
createProject(projectName);
