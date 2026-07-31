pipeline {
    agent any

    /* 
       Option A: Use if NodeJS is configured in Manage Jenkins -> Tools
       tools {
           nodejs 'NodeJS'
       }
    */

    stages {
        stage('Checkout') {
            steps {
                // Update URL to match your repo (e.g. https://github.com/Sachin639191/flask-backend.git)
                git branch: 'main', url: 'https://github.com/Sachin639191/flask-backend.git'
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