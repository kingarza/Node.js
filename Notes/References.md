

# GIT

## PUSH and PULL

https://www.datacamp.com/community/tutorials/git-push-pull

## Clone a repository

git clone https://github.com/4tomik/JSTodoList.git

## Delete branch locally

git branch -d localBranchName

## Delete branch remotely

git push origin --delete remoteBranchName


# Node js

Instalar servidor:
```bash
npm i -g serve
```

Ejecutamos servidor en puerto 3000
```
serve -l 3000
```

## NPM

### Nodemon

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```bash
sudo npm install -g nodemon
```

## Creating a package.json file

We can add a package.json file to our package to make it easy for others to manage and install. Packages published to the registry must contain a package.json file.

A package.json file:

- lists the packages your project depends on
- specifies versions of a package that your project can use using semantic versioning rules
- makes your build reproducible, and therefore easier to share with other developers

commands
```bash
npm init
```

Reference: 

https://docs.npmjs.com/creating-a-package-json-file
https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/
