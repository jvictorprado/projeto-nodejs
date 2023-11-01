pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Este estágio verifica o código-fonte do repositório Git
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Este estágio instala as dependências e executa a construção do projeto
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Run') {
            steps {
                // Este estágio inicia o servidor da aplicação
                sh 'node app.js'
	    }
    	}
}

