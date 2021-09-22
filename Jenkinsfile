pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Clone Git') {
      steps {
        git url: 'https://github.com/vitorbmiranda/dogsapp', branch: 'main'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Run unit tests') {
      steps {
         sh 'npm test'
      }
    }      
  }
}