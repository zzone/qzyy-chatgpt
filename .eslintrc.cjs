const path = require('path');
module.exports = {
    "root":true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        "eslint:recommended",
        "plugin:vue/vue3-essential",
    ],
    "overrides": [
    ],
    "parser": 'vue-eslint-parser',
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "settings": {
        'import/resolver': {
            "typescript": {
                "project": path.resolve(__dirname, './tsconfig.json'),
            },
        },
    },
    "rules": {
        //"prettier/prettier": 1,
        'linebreak-style':[0,'error','window'],
        "indent":["off",2],
        // Vue: Recommended rules to be closed or modify
        'vue/require-default-prop': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/max-attributes-per-line': 0,
        // Vue: Add extra rules
        'vue/custom-event-name-casing': [2, 'camelCase'],
        'vue/no-v-text': 1,
        'vue/padding-line-between-blocks': 1,
        'vue/require-direct-export': 1,
        'vue/multi-word-component-names': 0,
        // Allow @ts-ignore comment
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/no-explicit-any': 0,
        'import/extensions': [
            2,
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-param-reassign': 0,
        'prefer-regex-literals': 0,
        'import/no-extraneous-dependencies': 0,
    }
}
