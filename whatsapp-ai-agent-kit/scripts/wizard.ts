import "./env-loader.js";
import chalk from "chalk";
import boxen from "boxen";
import { execSync, spawn } from "child_process";
import fs from "fs";
import path from "path";

const { prompt } = await import("enquirer");

console.log(
  boxen(
    chalk.bold("WhatsApp AI Agent Kit") + "\n" + chalk.gray("Asistente de configuración"),
    { padding: 1, borderStyle: "round", borderColor: "green" }
  )
);

// Phase A: validation
console.log(chalk.yellow("\n─── Fase A: Validando sistema ───"));
const [nodeMajor] = process.versions.node.split(".").map(Number);
if (nodeMajor < 20) {
  console.error(chalk.red(`✗ Node ${process.versions.node} — necesitas Node 20+`));
  process.exit(1);
}
console.log(chalk.green(`✓ Node ${process.versions.node}`));

const platform = process.platform;
if (!["darwin", "linux", "win32"].includes(platform)) {
  console.error(chalk.red(`✗ Plataforma no soportada: ${platform}`));
  process.exit(1);
}
console.log(chalk.green(`✓ SO: ${platform}`));

// Phase B: install
console.log(chalk.yellow("\n─── Fase B: Dependencias ───"));
if (!fs.existsSync(path.resolve(process.cwd(), "node_modules"))) {
  console.log("Instalando dependencias (puede tardar ~60s)...");
  execSync("npm install", { stdio: "inherit" });
} else {
  console.log(chalk.green("✓ node_modules ya instalado"));
}

// Phase C: OpenRouter API key
console.log(chalk.yellow("\n─── Fase C: OpenRouter ───"));
const envPath = path.resolve(process.cwd(), ".env.local");
if (!fs.existsSync(envPath)) {
  const example = path.resolve(process.cwd(), ".env.example");
  fs.copyFileSync(example, envPath);
  console.log("Creado .env.local desde .env.example");
}

const existingKey = process.env.OPENROUTER_API_KEY?.trim() ?? "";
if (existingKey) {
  console.log(chalk.green(`✓ OPENROUTER_API_KEY ya configurada: ${existingKey.slice(0, 12)}...`));
} else {
  console.log(
    "Necesitas una API key de OpenRouter.\nCrea una en: https://openrouter.ai/keys\n"
  );
  const res = await prompt<{ key: string }>({
    type: "password",
    name: "key",
    message: "Pega tu API key (sk-or-v1-...):",
    validate: (v: string) => v.startsWith("sk-or-") ? true : "La key debe empezar con sk-or-",
  });

  const key = res.key.trim();
  let envContent = fs.readFileSync(envPath, "utf-8");
  const lineRegex = new RegExp("^OPENROUTER_API_KEY=.*$", "m");
  if (lineRegex.test(envContent)) {
    envContent = envContent.replace(lineRegex, `OPENROUTER_API_KEY=${key}`);
  } else {
    envContent += `\nOPENROUTER_API_KEY=${key}\n`;
  }
  fs.writeFileSync(envPath, envContent);
  process.env.OPENROUTER_API_KEY = key;
  console.log(chalk.green("✓ API key guardada"));
}

// Phase D: start
console.log(chalk.yellow("\n─── Fase D: Arrancando el agente ───"));
console.log("Iniciando bot + panel web...\n");

const npmCmd = platform === "win32" ? "npm.cmd" : "npm";
const child = spawn(npmCmd, ["run", "start:all"], { stdio: "inherit" });
child.on("error", (err) => {
  console.error(chalk.red(`Error al iniciar: ${err.message}`));
  process.exit(1);
});
