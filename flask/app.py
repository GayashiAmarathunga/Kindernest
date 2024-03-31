from flask import Flask, request, render_template, jsonify
import os
from groq import Groq
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferWindowMemory
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def main():
    story = ''
    groq_api_key = os.environ['GROQ_API_KEY']
    model = 'mixtral-8x7b-32768'
    conversational_memory_length = 5

    memory = ConversationBufferWindowMemory(k=conversational_memory_length)
    groq_chat = ChatGroq(groq_api_key=groq_api_key, model_name=model)
    conversation = ConversationChain(llm=groq_chat, memory=memory)

    if request.method == 'POST':
        keyword = request.form['keyword']
        if keyword:
            user_question = f"i'm a 5 years old child, give me a fairy tale about {keyword}, only give me the tale"
            response = conversation(user_question)
            story = response['response']

    return jsonify({'story': story})

if __name__ == '__main__':
    app.run(debug=True)