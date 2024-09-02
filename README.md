### How to Update and Integrate the Configuration in the Spark Frontend

> [!NOTE]
> Latest version - 1.0.0

To update the configuration for the Spark Frontend, follow these steps:

1. **Update the Configuration Repository**:

   - Navigate to the configuration repository: [Spark Frontend Config](https://github.com/compolabs/spark-frontend-config).
   - Make the necessary changes to the configuration files.
   - After making changes, update the version number in the `package.json` file to reflect the new version of the config.
   - Build the new version of the configuration by running the following command:
     ```bash
     pnpm run build
     ```
   - Once the build is complete, commit and push the changes to the repository.

2. **Update the Frontend Project**:

   - Go to the frontend repository: [Spark Frontend](https://github.com/compolabs/spark-frontend).
   - Delete the existing `config.json` file located in the `src` directory.
   - Start the frontend project. The project is configured to automatically pull the latest version of the configuration from the configuration repository.

3. **Verify and Commit**:
   - After the project pulls the new configuration, thoroughly test the application to ensure that the new configuration works as expected.
   - Once verified, commit the changes to the frontend repository and push them to the remote repository.
