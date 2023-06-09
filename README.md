# Personal Assistant AI

Welcome to the **Personal Assistant AI** repository! This AI chatbot is powered by OpenAI's GPT-3.5, allowing you to have engaging and fun conversations just by speaking to it. This chatbot will not only listen to your queries but also speak back to you! Built with Python 3 and Flask, it's a powerful and entertaining assistant that's easy to set up and use.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features
- Engaging and fun AI chatbot powered by OpenAI's GPT-3.5
- Voice input and output for a more interactive experience
- Easy setup and installation
- Flask web application for a lightweight and user-friendly interface

## Prerequisites
- Python 3.6 or higher
- Git
- A code editor or IDE (e.g., VSCode, PyCharm, etc.)

## Installation
1. Clone the repository:

`git clone https://github.com/brandonsurh/personal-assistant-ai.git`

2. Navigate to the cloned repository folder with cmd:

`cd personal-assistant-ai`

3. Install Python 3 if you haven't already. You can download the latest version of Python [here](https://www.python.org/downloads/).

4. Install the required packages:
`pip install flask`
`pip install openai`


5. Obtain and set up your OpenAI API Key:

- If you don't have an OpenAI account, sign up at [OpenAI](https://beta.openai.com/signup).
- Once you have an account, go to the [API Keys section](https://beta.openai.com/account/api-keys) in your OpenAI Dashboard.
- Click on "Create API Key" and copy the generated key.

**Important:** Make sure to keep your API key private, as it grants access to your OpenAI account and should not be shared publicly.

- To set the API key as an environment variable on your local machine, follow the steps for your operating system:

  - **Windows:**
    ```
    setx OPENAI_API_KEY "your_api_key_here"
    ```

  - **macOS/Linux:**
    ```
    echo 'export OPENAI_API_KEY="your_api_key_here"' >> ~/.bashrc
    source ~/.bashrc
    ```
    For other shell environments, such as `zsh`, add the export line to the appropriate configuration file, like `~/.zshrc`.

Now your API key is set as an environment variable and can be accessed in the code using `os.environ["OPENAI_API_KEY"]`. This ensures the key remains private and is not included in the public GitHub repository.



## Running the Application
1. Open a terminal and navigate to the repository folder.
2. If you haven't activated the virtual environment, do so now (see the installation instructions above).
3. Run the Flask application:

`flask run`

4. Open your web browser and navigate to the designated IP address (by default, it's `http://127.0.0.1:5000/`).
5. Start chatting with your new AI chatbot!

## Contributing
We welcome contributions from the community! If you'd like to improve the Personal Assistant AI, feel free to fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.
