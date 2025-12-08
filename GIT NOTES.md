# **GIT NOTES – BRANCH CREATION, MERGE, MERGE CONFLICT, SQUASH**







# **CREATE A NEW BRANCH AND PUSH IT**



**git checkout -b tanish**

**git add .**

**git commit -m ""**

**git push origin tanish**







# **MERGE YOUR BRANCH INTO MAIN**



**git fetch origin**



**update local main**



**git checkout main**

**git pull origin main**



**switch back to your feature branch and merge**



**git checkout feature/add-greeting**

**git merge main**



**after resolving conflicts if any**



**git add <files>**

**git commit**







# **MERGE CONFLICT NOTES**



**What is a merge conflict?**

**A merge conflict happens when two branches change the same part of a file and git cannot decide which change to keep.**



**When merge conflicts occur:**



**During git merge**



**During git rebase**



**During git pull (because pull does a merge internally)**



**How git shows conflict:**

**CONFLICT (content): Merge conflict in <filename>**

**Automatic merge failed; fix conflicts and commit the result.**



**How the file looks during conflict:**



**<<<<<<< HEAD**

**Your current branch changes**



**Incoming branch changes**



**branch-name**



**Steps to resolve merge conflict:**



**Open the file containing conflict markers.**



**Keep your changes, or incoming changes, or combine both.**



**Remove the conflict markers (<<<<<<<, =======, >>>>>>>).**



**Stage the resolved file:**

**git add <filename>**



**Commit the merge resolution:**

**git commit**



**To abort a merge:**

**git merge --abort**







# **GIT SQUASH NOTES**



**What is squash?**

**Squashing means combining multiple commits into a single clean commit to keep the history tidy.**



**When to use squash:**



**When you have many small commits like "fix", "update", "typo"**



**Before merging feature branch into main**



**To clean messy commit history**



**Squash using interactive rebase:**



**Step 1: Start rebase**

**git rebase -i HEAD~<number\_of\_commits>**



**Example: squash last 4 commits**

**git rebase -i HEAD~4**



**Step 2: In the editor change "pick" to "squash"**

**Example:**



**pick 7ac9f12 add feature A**

**pick a1b3df0 fix error**

**pick 1d4fe22 update text**

**pick 9b3ac20 final fixes**



**Change to:**



**pick 7ac9f12 add feature A**

**squash a1b3df0 fix error**

**squash 1d4fe22 update text**

**squash 9b3ac20 final fixes**



**Meaning:**



**Keep first commit**



**Merge the remaining commits into it**



**Step 3: Git will ask for final commit message. Write your clean message and save.**



**Step 4: Force push the cleaned history (only for your own feature branch)**

**git push origin branch-name --force-with-lease**



# 

# **GIT CHERRY-PICK (SHORT NOTES)**



**Meaning:**

**git cherry-pick copies a specific commit from one branch to another.**



**Command:**

**git cherry-pick <commit-hash>**



**When to use:**

**When you want only one commit, not the whole branch.**



**Steps:**

**git checkout <target-branch>**

**git cherry-pick <commit-hash>**



**Real example:**

**You fixed a bug on feature branch.**

**Bug fix commit = abc1234**

**You want that fix on main without merging whole feature branch.**



**Commands:**

**git checkout main**

**git cherry-pick abc1234**



**Important:**

**Cherry-pick creates a new commit with a new hash.**







# **GIT REBASE (SHORT NOTES)**



**Meaning:**

**git rebase moves your commits on top of another branch.**

**It creates a clean and linear commit history.**



**Command:**

**git checkout <your-branch>**

**git rebase main**



**When to use:**



**To update your branch with latest main changes**



**To keep history clean (no merge commits)**



**Before merging a feature branch into main**



**How it works:**

**Rebase removes your commits temporarily,**

**updates your branch to the latest main,**

**then reapplies your commits on top.**



**Real example:**

**Your branch is behind main.**

**To update it:**



**git checkout feature/login**

**git rebase main**



**Conflict handling:**

**Fix the file**

**git add <file>**

**git rebase --continue**



**To cancel:**

**git rebase --abort**



**Important:**

**Rebase rewrites commit history (new commit hashes).**

**Do not rebase a branch that others are also using.**







# **GIT RESET, REVERT, STASH NOTES**



**Git Reset**



**Moves branch pointer to previous commit, can also unstage or delete changes.**



**Modes:**

**--soft → keeps changes staged**

**--mixed → keeps changes unstaged (default)**

**--hard → deletes changes completely**



**Real use: Undo last wrong commit (not pushed yet)**

**Commands:**



**git log --oneline**

**git reset --soft HEAD~1     # undo last commit, keep staged**

**git reset HEAD~1            # undo last commit, unstage changes**

**git reset --hard HEAD~1     # undo last commit and delete changes**





**Git Revert**



**Creates a new commit that undoes a previous commit.**



**Safe for shared branches, does not rewrite history.**



**Real use: Undo a bad commit already pushed to main**

**Commands:**



**git log --oneline**

**git revert <commit-hash>   # create a new commit that undoes it**

**git push origin main**





**Git Stash**



**Temporarily saves uncommitted changes to switch tasks/branches.**



**Real use: Switch to main to fix bug, come back to feature branch later**

**Commands:**



**git stash                  # save changes**

**git checkout main**

**# fix bug**

**git add .**

**git commit -m "Fix bug"**

**git push origin main**

**git checkout feature/login**

**git stash pop              # restore changes**





**Quick Difference Table**



**Command	History Change	Safe for shared branch?	Deletes changes?**

**git reset	Yes	No	Depends on mode**

**git revert	No	Yes	No**

**git stash	No	Yes	No (temporary)**

