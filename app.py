import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")
#print(openai.api_key)

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_input = request.form["user_input"]

    # Call ChatGPT API
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=user_input,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.5,
    )

    # Extract and return the chatbot's response
    chatbot_response = response.choices[0].text.strip()
    return chatbot_response
