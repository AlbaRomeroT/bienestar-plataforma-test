pipeline {
    agent any
    tools {
        nodejs 'node' 
    }
    stages {
 
        stage('Preparation') { // for display purposes
        steps {
            git branch: 'Dreamcode', url: 'https://github.com/segurosbolivar/bol-automation-bienestar-mobile-test.git'
        }
 
    }
    stage('Build') {
             steps {
                 sh 'npm --version'
                 sh 'rm -rf node_modules'
                 sh 'npm install appium'
                 sh 'npm install yarn '
                 sh 'npm install'
                 echo BRANCH_NAME
            }
            
        }
        stage('test') {
             steps {
                  sh 'npm run android.appBS --verbose'
             }
            
        }
    }
}