from flask import Flask, json, jsonify, render_template, current_app
import os


# Flask Setup
app = Flask(__name__)


# Flask Render

@app.route("/")
def welcome():
    filename1 = os.path.join(current_app.static_folder, "data", "amazonSD.json")
    with open(filename1) as file:
        data1 = json.load(file)

    filename2 = os.path.join(current_app.static_folder, "data", "googleSD.json")
    with open(filename2) as file:
        data2 = json.load(file)

    return render_template("index.html", j_data1 = data1, j_data2 = data2)
       

if __name__ == '__main__':
    app.run(debug=True)