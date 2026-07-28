//! git -vcs(version control system or distributed version control system)
//! github used for collabration or code sharing

//* Repository [code + .git]
//? Local Reop =>

// used once when downloading git
//* github commands
//*  git config --global --list
//* git config --global init.defaultbranch main
//* git config --global pull.rebase false

// ? working Directry
// working dorectry   -> staging area   -> local repo(version)
// change                ready state       commit/version

// used after every project
// git Init

//git status
// git add <file>
// git commit -m"commit message"
// git log
// git log --oneline // to bring git log message in one line
// git log main..array
// git branch

//git remote -v checks to whcih it is connected

//* for gitpush
// git push  origin main

//* git branch
// git branch <branch_name>
// git switch branch name

//! merge
// git merge branch
//? Merge conflcit

//* diff
//* git diff array..main
// git diff --name-only Array.apply.main



//todo: stash,revert,reset
//todo:rebase,cherry-pick

//*Git Stash
// git stash -u
// git stash pop

//* Reset and revert
// git reset --hard HEAD~1
//git revert <commit messgaes index>

//* rebase
// git rebase main
