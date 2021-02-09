#! /bin/bash
# Deploy script to DO server
gatsby build

FOLDER="../var/www/eugenecross.co/html"

sshpass -p $PERSONAL_SITE sftp root@$SITEIP << !
cd $FOLDER
put -r public/* .
!
echo 'Gatsby deployment complete!'