pipeline {
    agent any

    stages {
        
        stage('Checkout') {
            steps {
                // Este estágio verifica o código-fonte do repositório Git
                checkout scm
            }
        }
        
        stage('Run') {
            steps {
                // Este estágio inicia o servidor da aplicação
                sh 'node app.js'
	    }
    	}
    }
}
