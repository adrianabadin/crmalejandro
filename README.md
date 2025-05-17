# CRM Code Base 

## Dependencies
* Next JS 15
* Material Tailwind 3.0 
* Tanstack Query
* Zod
* React Hook Form

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```
## Dockerized Instances 
```bash 
docker compose -f docker-compose-dev.yml up

docker compose -f docker-compose-dev.yml up --build
```

## Implementation
The implementation for the Form States Should be througth React Hook Form Library. But Before its mandatory to create the validation Scheme for zod that is going to handle the form validation and the Type Safety of the Frontend.

## Routing
Next Page Router is enabled, so you should build a directory structure and inside it place page.tsx files for each route in the site. 

## Components Folder
Any Components that do not belong to a route are placed in individual folders upon this location 

## Services Folder
All the implementations that access any service are in this folder. 
The Fetching.ts File handle by explicit export every fetch you need to your backend. Taking the backend round from .env file 

## Errors Folder
Here you build every error message by extending the error class using a uniform codification for them

## Entities Folder
In here we must define types, classes and validation Schemas to be handled in the rest of the code base 