pipeline {
    agent any

    stages {
        // Remove or clear the redundant git stage, or just use it for explicit checks
        stage('Install Dependencies') {
            steps {
                // Using --prefer-offline or --no-audit speeds up npm install significantly
                sh 'npm install --prefer-offline --no-audit'
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