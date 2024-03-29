import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import url from '@rollup/plugin-url';
// To handle css files
import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: [".css"],
      }),
      copy({
        targets: [{ src: "src/assets/*", dest: "dist/assets" }],
      }),
      terser(),
      image(),
      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
        limit: Infinity,
        fileName: '[dirname][name][extname]',
      }),
    ],
  },
  {
    input: "src/main.css",
    output: [
      {
        file: "dist/main.css",
      },
    ],
    plugins: [
      postcss({
        minimize: true,
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  },
];
