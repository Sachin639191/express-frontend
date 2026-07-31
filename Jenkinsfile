pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // You will create this name in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YOUR_GITHUB_USERNAME/express-frontend.git'
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
                    pm2 delete express-app || true
                    pm2 start npm --name express-app -- start
                    pm2 save
                '''
            }
        }
    }
}