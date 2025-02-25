import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dotenv from "dotenv" ;
import { FunctionUrlAuthType, HttpMethod } from "aws-cdk-lib/aws-lambda";
import { CfnOutput } from "aws-cdk-lib";

export class Project1Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Load the environment .env file.
        dotenv.config();

        const lambdaFunction = new lambda.Function(this, "LambdaFunction", {
            runtime: lambda.Runtime.PYTHON_3_9,
            code: lambda.Code.fromAsset("lambda"),
            handler: "main.handler",
            environment: {
              VERSION: process.env.VERSION || "0.0"
         },
        });

        const functionUrl = lambdaFunction.addFunctionUrl({
            authType: FunctionUrlAuthType.NONE,
            cors: {
                allowedOrigins: ["*"],
                allowedMethods: [HttpMethod.ALL],
                allowedHeaders: ["*"],
            },
        });

        new CfnOutput(this, "Url", {
            value: functionUrl.url,
        });
    }
}
