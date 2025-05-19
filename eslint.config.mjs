import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 👇 أضفنا هذا القسم لتعطيل القاعدة
  {

    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];

export default eslintConfig;
