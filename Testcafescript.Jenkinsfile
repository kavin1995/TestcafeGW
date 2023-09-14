
pipeline {

    agent any

    options {

        // Set a custom workspace directory

        ws("C:/Users/VDI022/Testcafe_guidewire")

    }

    stages {
        stage('Policy Center') {

            steps {

                // Your build steps

                bat 'npm run test:Policycenter'

            }

        }

        stage('Billing Center') {

            steps {

                // Your deployment steps

                bat 'npm run test:Billingcenter'

            }

        }


    }

}
