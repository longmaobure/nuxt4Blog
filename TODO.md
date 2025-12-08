[x] 集成ESLint
[x] 集成Prettier
[x] 集成Husky

- 用途: git提交勾子, 预检查等

1. `npm install -D husky`
2. `npx husky install`
3. 去`.husky`里找到对应的钩子文件, 将命令粘贴进去

   ```
      // pre-commit
      #!/usr/bin/env sh
      . "$(dirname "$0")/h"

      npx eslint .
      npx prettier --check .
   ```

[x] lint-staged

- 用途: 配合husky使用, 只匹配暂存的文件

1. `npm install -D lint-staged`
2. 配置`package.json`

```json
{
  "lint-staged": {
    "*.{js,ts,vue}": ["eslint --fix", "prettier --write"]
  }
}
```

- \*.{js,ts,vue} → 匹配暂存的文件

- "eslint --fix" → 自动修复 ESLint 规则

- "prettier --write" → 自动修复 Prettier 格式

3. 配合 `Husky`, 在pre-commit中写入下面代码

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged

```

[x] Pinia

[ ] 日记页

- 时间轴
- 筛选功能
- 日记详情页(就不需要toc了)

[ ] 游戏页面(稍复杂)

- 列表排版
- 筛选功能(包含英雄)
- 视频详情页(需要考虑如何加载大资源视频文件)
