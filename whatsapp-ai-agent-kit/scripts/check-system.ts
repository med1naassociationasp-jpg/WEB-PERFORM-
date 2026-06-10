import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Does NOT import env-loader
const checks: { name: string; ok: boolean; message: string }[] = [];

function check(name: string, fn: () => string) {
  try {
    const msg = fn();
    checks.push({ name, ok: true, message: msg });
  } catch (e) {
    checks.push({ name, ok: false, message: String(e) });
  }
}

// 1. Node version
check("Node >= 20", () => {
  const [major] = process.versions.node.split(".").map(Number);
  if (major < 20) throw new Error(`Node ${process.versions.node} — necesitas Node 20+`);
  return `Node ${process.versions.node}`;
});

// 2. Supported OS
check("SO soportado", () => {
  const p = process.platform;
  if (!["darwin", "linux", "win32"].includes(p)) throw new Error(`Plataforma no soportada: ${p}`);
  return p;
});

// 3. npm present
check("npm presente", () => {
  const out = execSync("npm --version", { encoding: "utf-8" }).trim();
  return `npm ${out}`;
});

// 4. Disk space >= 500MB
check("Espacio en disco >= 500MB", () => {
  const stat = fs.statfsSync(process.cwd());
  const freeMb = (stat.bavail * stat.bsize) / (1024 * 1024);
  if (freeMb < 500) throw new Error(`Solo ${Math.round(freeMb)}MB libres`);
  return `${Math.round(freeMb)}MB libres`;
});

// 5. Kit structure
check("Estructura del kit", () => {
  const required = ["package.json", "src/lib/db.ts", "scripts/start-bot.ts"];
  for (const f of required) {
    if (!fs.existsSync(path.resolve(process.cwd(), f))) throw new Error(`Falta ${f}`);
  }
  return "OK";
});

// 6. .env.local
check(".env.local", () => {
  if (!fs.existsSync(path.resolve(process.cwd(), ".env.local"))) {
    throw new Error("No existe .env.local — copia .env.example a .env.local y rellena los valores");
  }
  return "Existe";
});

// 7. node_modules
check("node_modules", () => {
  if (!fs.existsSync(path.resolve(process.cwd(), "node_modules"))) {
    throw new Error("Falta node_modules — ejecuta npm install");
  }
  return "Instalado";
});

// Report
let failed = 0;
for (const c of checks) {
  const icon = c.ok ? "✓" : "✗";
  const prefix = c.ok ? "\x1b[32m" : "\x1b[31m";
  console.log(`${prefix}${icon}\x1b[0m  ${c.name}: ${c.message}`);
  if (!c.ok) failed++;
}

if (failed > 0) {
  console.log(`\n\x1b[31m${failed} check(s) fallaron.\x1b[0m`);
  process.exit(1);
} else {
  console.log(`\n\x1b[32mTodo correcto.\x1b[0m`);
}
