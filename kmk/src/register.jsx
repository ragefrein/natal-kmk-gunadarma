import React, { useState } from 'react';
import axios from "axios"

function Reg() {
    const Register = () => {
        const [nama, setNama] = useState('');
        const [npm, setNpm] = useState('');
        const [nomor, setNomor] = useState('');
        const [jurusan, setJurusan] = useState('');
        const [angkatan, setAngkatan] = useState('');
        const [region, setRegion] = useState('');
        const [divisi1, setDivisi1] = useState('');
        const [divisi2, setDivisi2] = useState('');
        const [bersedia, setBersedia] = useState('');
        const [message, setMessage] = useState('');
        const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/upload', {
                nama,
                npm,
                nomor,
                jurusan,
                angkatan,
                region,
                divisi1,
                divisi2,
            });
            setMessage('User registered successfully');
            setError('');
        } catch (err) {
            setError('Registration failed');
            setMessage('');
        }
    };
    return (

                    <div class="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
  <h2 class="text-2xl font-semibold text-center text-gray-700 mb-6 font-body">LENGKAPI FORM</h2>
  
  <form onSubmit={handleSubmit} action="/upload" method="POST" enctype="multipart/form-data" class="space-y-6 font-body">

    <div>
      <label for="nama" class="block text-sm font-medium text-gray-700">Nama</label>
      <input onChange={(e) => setNama(e.target.value)} type="text" id="nama" name="nama" required 
             class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
    </div>
    <div>
      <label for="npm" class="block text-sm font-medium text-gray-700">NPM</label>
      <input onChange={(e) => setNpm(e.target.value)} type="text" id="npm" name="npm" required 
             class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
    </div>
    <div>
      <label for="nomor" class="block text-sm font-medium text-gray-700">Nomor HP</label>
      <input onChange={(e) => setNomor(e.target.value)} type="nomor" id="nomor" name="nomor" required 
             class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
    </div>
    <div>
      <label for="jurusan" class="block text-sm font-medium text-gray-700">Jurusan</label>
      <input onChange={(e) => setJurusan(e.target.value)} type="text" id="name" name="name" required 
             class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
    </div>

    <div>
      <label for="angkatan" class="block text-sm font-medium text-gray-700">Angkatan</label>
      <select onChange={(e) => setAngkatan(e.target.value)} id="angkatan" name="angkatan" required 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="" disabled selected>Pilih angkatan</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
    <div>
      <label for="region" class="block text-sm font-medium text-gray-700">Region</label>
      <select onChange={(e) => setRegion(e.target.value)} id="region" name="region" required 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="" disabled selected>Pilih Region</option>
        <option value="Depok">Depok</option>
        <option value="Karawaci">Karawaci</option>
        <option value="Kalimalang">Kalimalang</option>
        <option value="Salemba">Salemba</option>
      </select>
    </div>

    <div>
      <label for="divisi" class="block text-sm font-medium text-gray-700">Divisi 1</label>
      <select onChange={(e) => setDivisi1(e.target.value)} id="divisi" name="region" required 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm">
        <option value="" disabled selected>Pilih Divisi</option>
        <option value="Acara">ACARA</option>
        <option value="MDK">MDK</option>
        <option value="PEKAT">PEKAT</option>
        <option value="HPDD">HPDD</option>
      </select>
      
    </div>
    <div>
      <label for="divisi" class="block text-sm font-medium text-gray-700">Divisi 2</label>
      <select onChange={(e) => setDivisi2(e.target.value)} id="divisi" name="region" required 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm">
        <option value="" disabled selected>Pilih Divisi</option>
        <option value="Acara">ACARA</option>
        <option value="MDK">MDK</option>
        <option value="PEKAT">PEKAT</option>
        <option value="HPDD">HPDD</option>
      </select>
    </div>
    <div>
      <label for="pindah_divisi" class="block text-sm font-medium text-gray-700">Bersedia Pindah Divisi Lain?</label>
      <div class="flex items-center mt-2">
        <input onChange={(e) => setBersedia(e.target.value)} id="pindah_divisi" name="pindah_divisi" type="checkbox" class="w-6 h-6 text-indigo-600 border-gray-300 rounded focus:ring-emerald-600 transition duration-200 checked:bg-emerald-600 checked:border-emerald-600 focus:ring-opacity-50"/>
        <label for="pindah_divisi" class="ml-3 text-gray-700">Saya bersedia</label>
      </div>
    </div>
    <div>
      <button type="submit" 
              class="w-full px-4 py-2 text-white bg-emerald-600 rounded-md shadow-sm hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50">
        Kirim
      </button>
    </div>
  </form>
</div>


        
    );
}}

export default Reg;