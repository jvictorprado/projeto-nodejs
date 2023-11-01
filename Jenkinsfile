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
                script {
                    def serverProcess = sh(script: 'node app.js', returnStatus: true)
                    try {
                        sleep(time: 60, unit: 'SECONDS') // Aguarde 30 segundos (ou o tempo necessário)
                    } finally {
                        sh(script: 'pkill -f "node app.js" || true', returnStatus: true)
                    }
                }
	    }
    	}
    }
}

