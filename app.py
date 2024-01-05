from flask import Flask, render_template, request

import requests, json


# 	https://api.adviceslip.com/advice

app = Flask(__name__, 
            template_folder=r"C:\Users\Administrator\Desktop\coding\repos\advice-generator\templates",
            static_folder=r"C:\Users\Administrator\Desktop\coding\repos\advice-generator\static")

@app.route("/", methods=['GET'])
def get_advice():
    req = requests.get("https://api.adviceslip.com/advice")
    data = json.loads(req.content)
    return render_template("extension.html", data=data["slip"])



# TODO: Last two things and we are done; connect the button to the backend.
# TODO: And add a smooth animation to the transition between advices.