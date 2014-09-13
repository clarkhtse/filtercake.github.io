# Tooling

## Sublime Packages

- [GitGutter](https://sublime.wbond.net/packages/GitGutter)
- [SideBarEnhancements](https://sublime.wbond.net/packages/SideBarEnhancements)
- [SyncedSideBar](https://sublime.wbond.net/packages/SyncedSideBar)
- [WordCount](https://sublime.wbond.net/packages/WordCount)
- [Better CoffeeScript](https://sublime.wbond.net/packages/Better%20CoffeeScript)
- [MarkdownEditing](https://sublime.wbond.net/packages/MarkdownEditing)
- [Colorsublime](http://colorsublime.com/) and the [Colorsublime](https://sublime.wbond.net/packages/Colorsublime)
- [Theme - Flatland](https://sublime.wbond.net/packages/Theme%20-%20Flatland)

### Sublime Settings

## Terminal

### Useful Gxit aliases (in `~/.gitconfig`)

Better status:

    s = !echo '' && git branch -v --color && echo '' && git status -s && echo '' && git diff --stat --color -r

Interactive adding of changes. see the `-p` parameter in the [git-add docs](http://git-scm.com/docs/git-add#_options):

    a = add -p 

Better log:

    lg = !echo '' && git log -n 15 --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %C(bold blue)(%an)%Creset' --abbrev-commit --date=relative # a very nice readable log. copied from the web but lost source



