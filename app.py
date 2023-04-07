import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")
print(openai.api_key)

from flask import Flask, render_template, request
app = Flask(__name__)

