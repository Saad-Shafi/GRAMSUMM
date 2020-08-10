from flask import Flask, render_template, request
from gensim.summarization import summarize

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/summ', methods=["GET", "POST"])
def summary():
    if request.method == "POST":
        text = request.form["area"]
        per = request.form["ratio"]
        r = int(per)/100
        text_summ = summarize(text, r)
        return render_template('Summary.html', summary=text_summ, act_text=text)
    else:
        return render_template('Summary.html')


# will run the app
if __name__ == "__main__":
    app.run(debug=True)


