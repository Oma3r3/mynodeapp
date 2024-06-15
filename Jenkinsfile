pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Running build automation'
                sh ' mkdir /var/www/html/mynodeapp &&  cp -r * /var/www/html/mynodeapp &&  cd /var/www/html/mynodeapp &&  npm i && node index.js'
            }
        }
    }
}
