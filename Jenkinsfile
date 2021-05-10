pipeline {
    agent any
    tools {
        nodejs 'node' 
    }
    stages {
 
        stage('Preparation') { // for display purposes
        steps {
            git branch: 'main', url: 'https://github.com/elkidarraga/testBackEndServices.git'
        }
 
    }
    stage('Build') {
        steps {
            sh 'npm --version'
            sh 'rm -rf node_modules'
            sh 'npm install'
            echo BRANCH_NAME
        }
    
    }
    stage('test') {
        steps {
            sh 'npm run test'
        
        }
    
    }
    stage("results"){
        steps {
            cucumber fileIncludePattern: 'cucumber.json', sortingMethod: 'ALPHABETICAL' 
        }
    }
    }
}