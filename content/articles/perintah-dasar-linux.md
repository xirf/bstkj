---
title: Perintah Dasar Linux
group: Debian
updatedDate: 2024-11-22T22:11:00.000Z
---
Terdapat banyak sekali perintah dasar pada Linux yang bisa kita pelajari untuk memudahkan pekerjaan kita ketika menggunakan sistem operasi Linux. Tetapi, dalam materi ini hanya akan dijelaskan beberapa perintah saja yang mungkin seringkali digunakan.


Berikut adalah beberapa perintah dasar yang seringkali digunakan:


### **1. pwd**
Perintah untuk menunjukkan lokasi direktori yang aktif. Contoh di bawah menampilkan direktori yang aktif berada di `/root`.


```bash
root@bstkj:~# pwd
/root
```

### **2. cd**
Perintah untuk berpindah dari direktori aktif ke direktori lainnya. Contoh berikut berpindah dari direktori aktif yaitu `/root` ke direktori `/home`.


```bash
root@bstkj:~# cd /home
root@bstkj:/home#
```


### **3. ls**
Perintah untuk melihat isi dari sebuah direktori. Contoh berikut menampilkan isi dari direktori `/home`.


```bash
root@bstkj:/home# ls
user1
```

### **4. mkdir**
Perintah untuk membuat sebuah direktori. Contoh berikut membuat direktori `/bukusakutkj` di dalam direktori `/home`.


```bash
root@bstkj:/home# mkdir /home/bukusakutkj
root@bstkj:/home# ls /home
bukusakutkj  user1
```

### **5. rmdir**
Perintah untuk menghapus sebuah direktori. Contoh berikut menghapus direktori `/bukusakutkj` yang berada pada direktori `/home`.


```bash
root@bstkj:/home# rmdir /home/bukusakutkj/
root@bstkj:/home# ls /home
user1
```


### **6. touch**
Perintah untuk membuat sebuah file. Contoh berikut membuat sebuah file `bukusakutkj.txt` di dalam direktori `/home`.


```bash
root@bstkj:/home# touch bukusakutkj.txt
root@bstkj:/home# ls
bukusakutkj.txt  user1
```


### **7. rm**
Perintah untuk menghapus sebuah file. Contoh berikut menghapus file `bukusakutkj.txt` yang berada pada direktori `/home`.


```bash
root@bstkj:/home# rm bukusakutkj.txt
root@bstkj:/home# ls
user1
```


### **8. cp**
Perintah untuk meng-copy file atau folder. Contoh berikut meng-copy file `bukumu.txt` pada direktori `kamu` ke direktori `saya`.


```bash
root@bstkj:/home# mkdir saya kamu
root@bstkj:/home# touch kamu/bukumu.txt
root@bstkj:/home# cp kamu/bukumu.txt saya/
root@bstkj:/home# ls saya/
bukumu.txt
```


Untuk meng-copy direktori beserta isinya, gunakan opsi `-rf`.


```bash
root@bstkj:/home# cp saya/ kamu/ -rf
root@bstkj:/home# ls kamu/
bukumu.txt saya
root@bstkj:/home# ls kamu/saya/
bukumu.txt
```


### **9. mv**
Perintah untuk memindahkan sebuah file atau direktori. Berikut contoh memindahkan file `bukumu.txt` dari direktori `saya` ke `/home`.


```bash
root@bstkj:/home# mv saya/bukumu.txt /home
root@bstkj:/home# ls /home/
bukumu.txt  kamu  saya  user1
```

### **10. man**
Perintah untuk menampilkan manual atau bantuan dari suatu perintah. Berikut contoh menampilkan manual dari perintah `mv`.


```bash
root@bstkj:~# man mv
```


### **11. cat**
Perintah untuk menampilkan isi dari suatu file. Berikut contoh menampilkan isi file `interfaces` yang ada pada direktori `/etc/network`.


```bash
root@bstkj:/home# cat /etc/network/interfaces

# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback


# The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
```

### **12. grep**
Perintah untuk mencari karakter, kata, atau kalimat tertentu dengan suatu kata kunci. Contoh berikut mencari kata `dhcp` dan `lo` pada file `/etc/network/interfaces`.


```bash
root@bstkj:~# cat /etc/network/interfaces | grep dhcp
#iface enp0s3 inet dhcp

root@bstkj:~# cat /etc/network/interfaces | grep lo
# The loopback network interface
auto lo
iface lo inet loopback
#allow-hotplug enp0s3
```

### Referensi:
Ebook *Administrasi Server Jaringan dengan Debian Wheezy* - Ahmad Rosid Komarudin
```
