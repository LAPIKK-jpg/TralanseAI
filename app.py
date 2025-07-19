
from flask import Flask, render_template, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text = data.get('text')
    lang = data.get('lang', 'uz')
    dest_lang = 'en' if lang == 'uz' else 'uz'

    try:
        result = translator.translate(text, dest=dest_lang).text
        return jsonify({'translated': result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
