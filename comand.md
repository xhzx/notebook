## npm and yarn:
-rimraf node_modules   删除node_modules 
-yarn cache clean      清除yarn全局缓存

-设置yarn的缓存目录
-yarn config set cache-folder <path>

-yarn cache ls
-列出当前缓存的包列表。

-yarn cache dir
-显示缓存数据的目录。

-yarn cache clean
-清除所有缓存数据。
 
## git:
-git remote update origin --prune 本地分支与远端分支同步
-git branch -m 原分支名 现分支名  修改本地分支名称 如果是修改当前分支的名称，则原分支名省略