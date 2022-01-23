<h1 align="center">TrueNews</h1>
<h3 align="center">A simple Blog Project.</h3>
<div align="center">

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)
![node ver](https://img.shields.io/static/v1?label=Node&message=14.18.1&color=blue)
![prs](https://img.shields.io/static/v1?label=PRs&message=welcome&color=green)

</div>

<p align="center">
 <a href="#features">Features</a> •
 <a href="#requirements">Requirements</a> • 
 <a href="#installation-and-run-server">Installation and Run</a> • 
 <a href="#technologies">Technologies</a> •
 <a href="#memo-license">License</a>
</p>

<h4 align="center"> 
	🚧 In Development...  🚧
</h4>

### Features

- [x] Admin

  - [x] Create Admin
  - [x] Edit Admin

- [x] User

  - [x] Create User
  - [x] Edit User

- [x] Auth

  - [x] Admin Auth
  - [x] User Auth

- [ ] Posts

  - [x] Create Post
  - [ ] Edit Post
  - [ ] Create custom Route
  - [x] Like and Dislikes

- [ ] Comments

  - [x] Create Comment
  - [ ] Like and Dislike

- [ ] Front-end
  - [ ] Home Page
  - [ ] Page to posts
  - [ ] Admin Page
  - [ ] User Page

### Requirements

Before Run this project, you need some requirements.

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com)

### Installation and Run server

First clone this repository

```bash
# First clone this repository
$ git clone https://github.com/IgorVini25/TrueNews.git
```

```cmd
# Enter in repository Folder
$ cd TrueNews
```

```node
# Install Dependencies
$ yarn install

# Create Database
$ yarn create-db

# Create Database Tables
$ yarn typeorm migration:run

# Run Server
$ yarn dev

# You Can test The Project At http://localhost:3333
```

### Technologies

The techs used to development of this project are:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [Sqlite](https://www.sqlite.org/index.html)
- [Cryptr](https://www.npmjs.com/package/cryptr)

---

<div align="center">
 <h3>Author</h3>
 <a href="https://github.com/IgorVini25">
  <img style="border-radius: 50%;" src="https://github.com/IgorVini25.png" width="100px;" alt=""/>
  <br />
  <sub><b>Igor Vinicius</b></sub>
 </a>
</div>

---

### :memo: License

This project License is MIT. See [LICENSE](LICENSE) File for more details.

Made with ♥ by IgorVini25
