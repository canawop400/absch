from flask import Flask, render_template, request
import sqlite3



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

@app.route("/noticias/crear/")
def create_new():
	return render_template("create_new.html")

# Database

def get_db():
	conn = sqlite3.connect("database.db")
	conn.row_factory = sqlite3.Row

	return conn


# API

@app.get("/api/news/")
def get_news():
	conn = get_db()
	rows = conn.execute("SELECT * FROM news").fetchall()
	conn.close()

	news = {
		"news": []
	}

	for item in rows:
		news["news"].append({"title": item["title"], "content": item["content"]})

	return news


@app.post("/api/news/")
def post_news():

	title = request.form["title"]
	content = request.form["content"]

	if title == "" or content == "":
		return ("Error: Ninguno de los campos puede estar vacio", 400)
	
	return f"Title: {request.form['title']}, Content: {request.form['content']}"