pipeline {
    agent any

    environment {
        SERVER_HOST = '192.168.200.16'
        SERVER_USER = 'pankaj'
        REMOTE_DIRECTORY = '/var/www/html/dtdc.1hour.in/dtdc-project-frontend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: 'gitlab-creds-front', url: 'https://git.orangemantra.org/helpdesk/dtdc-project-frontend.git'
            }
        }

        stage('Build React App') {
            steps {
                sh '''
                echo "Cleaning previous dependencies..."
                rm -rf node_modules package-lock.json || true

                echo "Clearing npm cache..."
                npm cache clean --force

                echo "Installing dependencies..."
                npm install react@18 react-dom@18
                npm install --save-dev @babel/plugin-proposal-private-property-in-object
                npm install ajv@latest
                npm install --legacy-peer-deps

                echo "Building React App..."
                CI=false npm run build
                tar -czf build.tar.gz build
                '''
            }
        }

        stage('Deploy to Server') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'ssh-credentials', usernameVariable: 'SSH_USER', passwordVariable: 'SSH_PASS')]) {
                    sh '''
                    echo "Uploading build archive to remote server..."
                    sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no build.tar.gz $SSH_USER@${SERVER_HOST}:${REMOTE_DIRECTORY}/

                    echo "Checking if 'build' folder exists on remote server..."
                    sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no $SSH_USER@${SERVER_HOST} "
                        if [ -d '${REMOTE_DIRECTORY}/build' ]; then 
                            rm -rf ${REMOTE_DIRECTORY}/build_old;
                            mv ${REMOTE_DIRECTORY}/build ${REMOTE_DIRECTORY}/build_old;
                        fi
                        tar -xzf ${REMOTE_DIRECTORY}/build.tar.gz -C ${REMOTE_DIRECTORY}/
                        rm -rf ${REMOTE_DIRECTORY}/build.tar.gz
                    "
                    '''
                }
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Frontend Deployment Report: ${currentBuild.currentResult} - Build #${BUILD_NUMBER}",
                body: """Hi Team,

Frontend Deployment Status: ${currentBuild.currentResult}
Build Number: ${BUILD_NUMBER}
Check logs: ${BUILD_URL}

Thanks,
Jenkins
""",
                to: "negi.pankaj@orangemantra.in"
            )
        }
    }
}


