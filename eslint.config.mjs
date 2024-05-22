import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node,
      //  require: "off"
    },
  },
  pluginJs.configs.recommended,
];
