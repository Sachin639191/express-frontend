pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sachin639191/express-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo -u ubuntu pm2 restart express-frontend || sudo -u ubuntu pm2 start server.js --name "express-frontend"
                '''
            }
        }
    }

    post {
        success {
            echo 'Express app deployed successfully!'
        }
        failure {
            echo 'Express deployment failed!'
        }
    }
}
