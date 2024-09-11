import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import * as esbuild from 'esbuild'

export const writeFileTo = async (content, path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
}

await esbuild.build({
    entryPoints: ['scripts/svg.js'],
    bundle: false,
    minify: true,
    sourcemap: true,
    splitting: false,
    treeShaking: false,
    format: "esm",
    target: "esnext",
    outfile: 'esm.js'
})

// await esbuild.build({
//     stdin: {
//         contents: 'import a from "./scripts/svg.js";module.exports = a;',
//         resolveDir: '.'
//     },
//     bundle: true,
//     minify: true,
//     sourcemap: false,
//     format: "iife",
//     target: "esnext",
//     globalName: "svgjs",
//     outfile: 'iife.js'
// })