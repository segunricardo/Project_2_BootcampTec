from flask import Flask, render_template, redirect, send_file
import os
from Orbits_Graph import grafica

app = Flask(__name__)

@app.route("/get_image/<int:year>")
def get_image(year):
    print(year)
    grafica(year)
    return send_file("image.png")

if __name__ == "__main__":
    app.run(debug=True)
