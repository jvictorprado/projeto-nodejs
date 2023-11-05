pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                // Check Git repository source code
                checkout scm
            }
        }

        stage('version-check') {
            steps {
                sh 'node --version'
            }
        }
        
        stage('Run') {
            steps {
                sh 'node app.js'
	        }
    	}

    }
}
