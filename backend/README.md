# NestJS App

## Description

Rest API to get git commit history from GitHub API.

## Installation

In the `/backend` directory, you can run:

```bash
$ npm install
```

## Required environment variables [example](./.env.example)

[GitHub REST API Docs](https://docs.github.com/en/rest)

[GitHub - Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```bash
GITHUB_TOKEN=
GITHUB_REPO=
GITHUB_REPO_OWNER=
```

## Running the app

In the `/backend` directory, you can run:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

Open [http://localhost:3030/docs](http://localhost:3030/docs) to view Swagger Docs in your browser.

```bash
# production mode
$ npm run start:prod
```

## Swagger API Docs

Available in `/docs`
