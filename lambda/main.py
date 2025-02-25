def handler(event, context):
    response_body = {"message": "Hello Abhinav", "version": "1.0.0"}
    return {"statusCode": 200, "body": response_body}
