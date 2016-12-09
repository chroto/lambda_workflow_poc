# Easier Lambda management -- Proof Of Concept


## Getting Started

    # Builds an output.yaml from the Serverless CloudFormation plugin
    aws cloudformation package \
        --template-file template.yaml \
        --s3-bucket craftsy-lambda-artifacts \
        --output-template-file output.yaml

    # Deploy the sucker
    aws cloudformation deploy \
        --template-file output.yaml \
        --stack-name ProtoHelloWorld \
        --capabilities CAPABILITY_IAM

