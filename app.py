from flask import Flask, render_template, url_for

app = Flask(__name__)
@app.route("/")#exibir wellcome
def wellcome():
    return render_template("wellcome.html")

@app.route("/home")#exibir page
def home():
    return render_template("home.html")

#colocar o site no ar
if __name__=="__main__":
    app.run(debug=True)