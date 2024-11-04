# node-api-daip
Simple Node API Overview

This API will serve as the main backend application for the architectures we will design for the DAI "DevOps Architectures Implementation Project."

Current Status:

- Initial structure defined (config, controllers, models, scripts, tests, middlewares);
- Sequelize implemented to create the initial database;
- Docker Compose set up for PostgreSQL database;
- Endpoints for users : 
  - getAll
  - createUser
  - getById
  - deleteUser

- Implemented tests for :
  - getAll
  - createUser
  - getById
  - deleteUser
  
 Next Steps:
 
  - patch endpoint.



Infra : 
Done:
  Pipeline (We can already build/test/and publish to dockerRepository) we must now add automatic versioning to the images, we are sending lastest hardcoded for now.
- Dockerfile done
- Jenkinsfile 50% done

NextSteps:
- Image versioning;
- Implement CD;
- Implement Sonar.