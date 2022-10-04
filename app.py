from flask import Flask, render_template



app = Flask(__name__)


@app.route("/")
def index():
	return render_template("index.html")

@app.route("/tramites/")
def procedures():
	return render_template("procedures.html")

@app.route("/noticias/")
def news():
	return render_template("news.html")

@app.route("/contacto/")
def contact():
	return render_template("contact.html")