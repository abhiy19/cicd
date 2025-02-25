import os
import json  # Import JSON module to format response correctly

def handler(event, context):
    version = os.environ.get("VERSION", "1.0.0")
    response_body = {
        "message": "Hello Abhinav Yadav demo 🌍",  #  a valid Unicode emoji
        "version": version
    }
    
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},  # Ensure correct format
        "body": json.dumps(response_body)  # Convert dict to JSON string
    }
