import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")
#print(openai.api_key)

from flask import Flask, render_template, request
app = Flask(__name__, static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.form["user_input"]
    
    # Call ChatGPT API
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        #model="text-davinci-003",
        messages = [
                {"role": "user", "content": '''You are an AI personal assistant. 
                                                Answer like a normal verbal conversation. Be very casual like you are another human.
                                                Keep responses to the point and brief unless specified otherwise.'''},
                {"role": "user", "content": 'You are my personal assistant. I will ask you anything I want to know.'},
                {"role": "user", "content": user_input}
            ]
    )

    # Extract and return the chatbot's response
    result = ''
    for choice in response.choices:
        result += choice.message.content
    return result
