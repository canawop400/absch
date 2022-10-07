import sqlite3


connection = sqlite3.connect('database.db')

cursor = connection.cursor()
cursor.execute("INSERT INTO news (title, content) VALUES ('Noticia test', 'ejemplo de noticia')")


connection.commit()
connection.close()