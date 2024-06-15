pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Running build automation'
                sh 'cd mynodeapp && sudo npm i && sudo node index.js'
            }
        }
    }
}