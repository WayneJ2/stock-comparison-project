from flask import Flask, jsonify



# Flask Setup
app = Flask(__name__)


# Flask Render

@app.route("/")
def welcome():
    
    return render_template("index.html")
       

if __name__ == '__main__':
    app.run(debug=True)