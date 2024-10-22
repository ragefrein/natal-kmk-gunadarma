import os
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from werkzeug.utils import secure_filename
import mysql.connector

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, origins=["http://localhost:5173"])


def get_db_connection():
    return mysql.connector.connect(
        host="localhost", 
        user="root",
        password="",
        database="natal_kmk"
    )

@app.route('/upload', methods=['POST', 'GET'])
def upload_file():
    try:
        # Log all received form data
        print("Received form data:", request.form)

        # Get form data
        name = request.json.get('nama')
        npm = request.json.get('npm')
        nomor = request.json.get('nomor')
        jurusan = request.json.get('jurusan')
        angkatan = request.json.get('angkatan')
        region = request.json.get('region')
        divisi1 = request.json.get('divisi1')
        divisi2 = request.json.get('divisi2')
        bersedia_pindah = request.json.get('pindah_divisi') in [True, 'true', '1', 'on']


        print(f"Processed data: {name}, {npm}, {nomor}, {jurusan}, {angkatan}, {region}, {divisi1}, {divisi2}, {bersedia_pindah}")

        # Store data in the database
        conn = get_db_connection()
        cursor = conn.cursor()
        sql = """
        INSERT INTO form (nama, npm, nomor, jurusan, angkatan, region, divisi1, divisi2, bersedia_pindah)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(sql, (name, npm, nomor, jurusan, angkatan, region, divisi1, divisi2, bersedia_pindah))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Form and file uploaded successfully"}), 200
    except Exception as e:
        print(f"Error: {e}")  # Log the error
        return jsonify({"error": str(e)}), 500  # Return the error in the response



if __name__ == '__main__':
    app.run(debug=True)
