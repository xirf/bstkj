---
title: Manajemen User dan Group
group: Debian
updatedDate: 2024-11-22T22:12:00.000Z
---
Sistem operasi Linux merupakan sistem operasi multiuser. Dikatakan multiuser karena bisa menangani lebih dari satu user dalam waktu bersamaan.


Secara garis besar, dalam sistem operasi Linux user dibagi menjadi 2 jenis yaitu user root dan user biasa. Dimana user root memiliki simbol (#) dan user biasa dengan simbol ($). Keduanya memiliki perbedaan dalam hak akses. User root bisa melakukan apa saja dalam sistem operasi sedangkan user biasa biasanya hanya bisa melakukan modifikasi file atau direktori home miliknya saja.


Fungsi dari group di Linux adalah untuk memudahkan pemberian hak akses ke sejumlah user. Dengan adanya group maka ketika kita memiliki 5 user dan kita ingin memberikan hak akses yang sama kepada 5 user tersebut. Tentunya akan sangat merepotkan jika kita harus memberikan hak akses kepada masing-masing user satu per satu.


Berikut adalah beberapa perintah dasar untuk melakukan manajemen user dan group.


### **1. useradd**
```bash
root@bstkj:~# useradd siswa1
root@bstkj:~# passwd siswa1
New password:
Retype new password:
passwd: password updated successfully
```
Perintah `useradd` di atas digunakan untuk membuat user dengan nama `siswa1`. Kemudian diikuti perintah `passwd` untuk memberikan password pada user `siswa1`.


### **2. adduser**
```bash
root@bstkj:~# adduser siswa2
Adding user `siswa2' ...
Adding new group `siswa2' (1003) ...
Adding new user `siswa2' (1003) with group `siswa2' ...
Creating home directory `/home/siswa2' ...
Copying files from `/etc/skel' ...
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for siswa2
Enter the new value, or press ENTER for the default
 Full Name []: Siswa 2
 Room Number []:
 Work Phone []:
 Home Phone []: 12345
 Other []:
Is the information correct? [Y/n] y
root@bstkj:~# ls /home
siswa2 user1
```
Perintah `adduser` juga digunakan untuk membuat sebuah user seperti `useradd`. Perbedaannya adalah `adduser` akan meminta detail user yang dibuat dan dibuatkan sebuah home direktori di `/home/namauser`.


### **3. su**
```bash
root@bstkj:~# su siswa2
siswa2@bukusakutkj:/root$ su
Password:
root@bstkj:~#
```
Perintah `su` digunakan untuk login ke user lain. Tampilan di atas menunjukkan perintah untuk login ke user `siswa2` yang merupakan user biasa sehingga tandanya berubah menjadi ($). Kemudian menggunakan perintah `su` saja tanpa nama user untuk login ke user root maka tandanya akan berubah menjadi (#).


### **4. userdel**
```bash
root@bstkj:~# userdel siswa2 -rf
userdel: user siswa2 is currently used by process 607
userdel: siswa2 mail spool (/var/mail/siswa2) not found
root@bstkj:~# su siswa2
su: user siswa2 does not exist
root@bstkj:~# ls /home/
user1
```
Perintah `userdel` di atas digunakan untuk menghapus user `siswa2` dan perintah opsi setelahnya `-rf` berfungsi untuk menghapus user `siswa2` meskipun masih dalam keadaan login. `-f` artinya *force* (hapus paksa) dan `-r` artinya hapus home direktori user `siswa2`.


### **5. groupadd**
```bash
root@bstkj:~# groupadd sakutkj
```
Perintah `groupadd` di atas digunakan untuk membuat sebuah group dengan nama `sakutkj`.


### **6. groupdel**
```bash
root@bstkj:~# groupdel sakutkj
```
Perintah `groupdel` di atas digunakan untuk menghapus sebuah group dengan nama `sakutkj`.


### **7. groups**
```bash
root@bstkj:~# groups siswa1
siswa1 : siswa1
```
Perintah `groups` di atas digunakan untuk melihat keanggotaan user `siswa1` terhadap group.


### **8. adduser & groups**
```bash
root@bstkj:~# adduser siswa1 sakutkj
Adding user `siswa1' to group `sakutkj' ...
Adding user siswa1 to group sakutkj
Done.
root@bstkj:~# groups siswa1
siswa1 : siswa1 sakutkj
```
Perintah `adduser` di atas akan memasukkan user `siswa1` ke group `sakutkj`. Bisa dilihat di atas bahwa `siswa1` merupakan anggota dari group `siswa1` (dirinya sendiri) dan grup `sakutkj`.


**Referensi:**
Ebook *Administrasi Server Jaringan dengan Debian Wheezy* - Ahmad Rosid Komarudin
