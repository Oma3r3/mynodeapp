pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Running build automation'
                sh 'sudo rm -rf /var/www/html/mynodeapp && sudo mkdir /var/www/html/mynodeapp && sudo cp -r * /var/www/html/mynodeapp && sudo cd /var/www/html/mynodeapp && sudo npm i && sudo pm2 start index.js'
            }
        }
    }
}
