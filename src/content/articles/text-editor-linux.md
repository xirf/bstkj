---
title: Text Editor Linux
group: Debian
updatedDate: 2024-11-22T22:22:00.000Z
---
Untuk melakukan modifikasi pada suatu file, kita membutuhkan suatu text editor, layaknya sistem operasi Windows yang menggunakan Notepad. Sama halnya dengan Linux, ada beberapa jenis text editor, di antaranya `vi`, `vim`, `pico`, `nano`, dan lainnya. Pada seri Debian ini, text editor yang akan digunakan adalah `nano`.

Contoh penggunaan `nano` sebagai berikut:
```bash
root@bstkj:~# nano /etc/network/interfaces
```

Dalam penggunaan text editor `nano`, akan lebih mudah jika memahami shortcuts-nya agar lebih cepat dalam melakukan modifikasi file dan sebagainya.

Berikut adalah shortcuts penggunaan text editor `nano`.

| Shortcut | Fungsi |
|:----------|:--------|
| Ctrl + X | Keluar dari editor |
| Ctrl + O | Simpan file |
| Ctrl + R | Buka file untuk dibaca |
| Ctrl + W | Cari teks |
| Ctrl + K | Potong baris |
| Ctrl + U | Tempel (paste) baris yang dipotong |
| Ctrl + G | Tampilkan help/bantuan |
| Ctrl + \ | Ganti (replace) teks |
| Ctrl + C | Tampilkan posisi kursor |
| Alt + / | Lengkapi kata |
