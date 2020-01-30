SOFTSPIDERS

# lerna-react-lib-starter

Minimalistic starter of [React](https://reactjs.org/) application with library in [Lerna](https://lerna.js.org/) monorepo

UNDER DEVELOPMENT

---

## Feature tags

- lerna
- lib
- react
- starter

---

## Authors

[Alexander Lapygin](https://github.com/AlexanderLapygin)

## Inspired by

[Antony Budianto](https://github.com/antonybudianto)'s [react-lib-starter](https://github.com/antonybudianto/react-lib-starter)


---

## Direct ancestors

[Minimalistic starter for Lerna monorepo](https://github.com/softspiders/lerna)

---

```
npm install --global lerna
```
---

## Install

Being at the root, execute

```
npm run bootstrap
```

---

## Run

Run simplest *some-command* which was previously defined in *scripts* field of *package.json* files.

```
lerna run some-command
```

See the result:

```
lerna notice cli v3.20.1
lerna info Executing command in 2 packages: "npm run some-command"
lerna info run Ran npm script 'some-command' in 'package-1' in 0.7s:

> package-1@0.1.0 some-command D:\tmp\200102\lerna\packages\package-1
> echo some-command for package-1

some-command for package-1
lerna info run Ran npm script 'some-command' in 'package-2' in 0.7s:

> package-2@0.1.0 some-command D:\tmp\200102\lerna\packages\package-2
> echo some-command for package-2

some-command for package-2
lerna success run Ran npm script 'some-command' in 2 packages in 0.7s:
lerna success - package-1
lerna success - package-2

```

## How to create such repositories

At first a repository created for Git, then - in the same directory for - Lerna.

### Git repository creation

```
git init lerna-repo && cd lerna-repo
```

### Lerna repository creation

```
lerna init
```

#### Create internal repositories

Under */packages* directory create arbitrary number of packages: */packages/package-1*, */packages/package-2* and so
on, each of them - with correspondent *package.json* description file.

---

### License

Licensed under the [MIT license](./LICENSE). 

