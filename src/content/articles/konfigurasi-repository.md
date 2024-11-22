---
title: Konfigurasi Repository
group: Debian
updatedDate: 2024-11-22T22:45:00.000Z
---
Ketika kita ingin menginstall sebuah aplikasi, kita membutuhkan file installer dari aplikasi yang akan kita install yang biasanya berekstensi .exe. Pada sistem operasi Linux juga demikian, namun menggunakan repository, yang merupakan alamat yang menunjukkan lokasi penyimpanan file-file installer saat kita akan menginstall sebuah aplikasi.

Repository pada Linux perlu dikonfigurasi agar ketika kita akan melakukan instalasi sebuah aplikasi, sistem operasi akan membaca file konfigurasi repository dan langsung mengakses lokasi repository yang ditunjukkan dalam konfigurasi tersebut.

Berikut cara konfigurasi repository pada Debian:

1. **Menggunakan DVD**  
Untuk menggunakan cara ini, diperlukan file ISO Debian Binary 1 sampai 3 yang bisa diunduh melalui situs www.debian.org.

```bash
root@sakutkj:/# nano /etc/apt/sources.list
```

Pertama, beri tanda `#` atau komentar pada file `/etc/apt/sources.list`. 


![Repo](https://box.andka.my.id/repositori0.png)

Kemudian masukkan DVD Debian Binary 1 dan ketikkan perintah berikut. 
```bash
apt-cdrom add
```

![repo1](https://box.andka.my.id/repositori.png)

Selanjutnya, masukkan DVD Debian Binary 2 dan 3, kemudian ketikkan perintah di atas. Setelah itu, Anda bisa langsung menginstall aplikasi-aplikasi yang dibutuhkan menggunakan perintah `apt-install nama-paket`.

2. **Menggunakan repository online**  
Di sini dicontohkan konfigurasi repository Debian 10. Untuk menggunakan repository online, kita memerlukan koneksi internet dan list repository lokal.

Berikut adalah list repository lokal Debian 10:

**Repository Default Debian 10**  
```bash
deb http://deb.debian.org/debian buster main contrib
```

**Kambing - UI**  
```bash
deb http://kambing.ui.ac.id/debian/ buster main contrib non-free
deb http://kambing.ui.ac.id/debian-security/ buster/updates main contrib non-free
```

**Repo - UGM**  
```bash
deb http://repo.ugm.ac.id/debian/ buster main contrib non-free
deb http://repo.ugm.ac.id/debian-security/ buster/updates main contrib non-free
```

**Kartolo - Datautama**  
```bash
deb http://kartolo.sby.datautama.net.id/debian/ buster main contrib non-free
deb http://kartolo.sby.datautama.net.id/debian-security/ buster/updates main contrib non-free
```

**Mirror - UNEJ**  
```bash
deb http://mirror.unej.ac.id/debian/ buster main contrib non-free
deb http://mirror.unej.ac.id/debian-security/ buster/updates main contrib non-free
```

**Mirror - LABKOM**  
```bash
deb http://mirror.labkom.id/debian/ buster main contrib non-free
deb http://mirror.labkom.id/debian-security/ buster/updates main contrib non-free
```

**Suro - UBAYA**  
```bash
deb http://suro.ubaya.ac.id/debian/ buster main contrib non-free
deb http://suro.ubaya.ac.id/debian-security/ buster/updates main contrib non-free
```

Lalu, cara konfigurasinya sangat mudah. Anda tinggal memasukkan salah satu list repository di atas pada file `/etc/apt/sources.list` seperti berikut ini.

```bash
root@sakutkj:/# nano /etc/apt/sources.list
```

Berikan tanda `#` atau komentar pada baris perintah yang tidak dibutuhkan. Kemudian, tambahkan list repository, misalnya menggunakan repo Kambing UI.

![repo3](https://box.andka.my.id/list-repo.png)

Selanjutnya, pastikan komputer server terkoneksi dengan internet, lalu ketikkan perintah berikut:

```bash
root@sakutkj:~# apt-get update
```

Setelah itu, Anda bisa langsung menginstall aplikasi-aplikasi yang dibutuhkan menggunakan perintah `apt-install nama-paket` tanpa menggunakan DVD, melainkan melalui koneksi internet.

**Referensi:**  
[https://zonabiner.com/tutorial/debian/cara-konfigurasi-repository-pada-debian-10-untuk-instalasi-paket](https://zonabiner.com/tutorial/debian/cara-konfigurasi-repository-pada-debian-10-untuk-instalasi-paket)
