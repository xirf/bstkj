---
title: Struktur Direktori Linux
group: Debian
updatedDate: 2024-11-22T20:57:00.000Z
---
Struktur direktori linux berbeda dengan Windows dan MS-DOS. Dalam sistem operasi Linux terutama Debian, struktur direktorinya menggunakan konsep heirartki. Dengan direktori root sebagai dasar dari seluruh direktori yang ada di linux.


berikut adalah gambaran dari struktur direktori linux pada umumnya:


![Hirarki folder linux](https://box.andka.my.id/linux_folder_hierarchy.png)


Setiap folder memiliki fungsinya masing-masing, berikut adalah penjelasannya:


### 1. / (Root)


Ini adalah direktori utama dari seluruh direktori linux


### 2. /bin (User Binaries)


Direktori ini berisi file-file yang dapat dieksekusi/dijalankan oleh pengguna, ini mirip folder "Program Files" di Windows


### 3. /sbin (System Binaries)


Direktori ini berisi file-file yang dapat dieksekusi seperti folder /bin namun folder ini biasanya hanya berisi perintah/program untuk administrator sistem


### 4. Boot (Boot Loader Files)


Direktori ini berisi file untuk kebutuhan booting sistem operasi seperti kernel dan bootloader


### 5. /dev (Device Files)


Direktori ini berisi file device (perangkat) pada komputer seperti disk (`sda`), terminal (`tty`) dan null (pembuangan output)


### 6. /etc (Configuration File)


Direktori ini berisi file-file konfigirasi yang dibutuhkan oleh program yang ada. sebagai contoh ada file `/etc/resolv.conf` untuk konfigurasi DNS


### 7. /home (Home Directory)


Di direktori ini kamu akan menemukan file-file pribadi kamu dan user lain yang terdaftar sebagai contoh `/home/ani` berisi file pribadi milik user "ani"


### 8. /lib (System Libraries)


Berisi file pustaka (*libraries*) yang diperlukan oleh program di `/bin` dan `/sbin`, seperti `libc.so.6` untuk fungsi standar C.


### 9. /media (Mount Points for Removable Media)


Direktori ini digunakan untuk me-*mount* perangkat seperti USB, CD/DVD, atau hard drive eksternal secara otomatis.


### 10. /mnt (Temporary Mount Points)


Direktori ini digunakan untuk me-*mount* sistem file tambahan secara manual. Biasanya digunakan oleh administrator sistem.


### 11. /proc (Process Information)


Sistem file virtual yang berisi informasi tentang proses yang sedang berjalan. Contoh: `/proc/cpuinfo` untuk informasi CPU, dan `/proc/meminfo` untuk informasi memori.


### 12. /tmp (Temporary Files)


Direktori ini digunakan untuk menyimpan file sementara yang dihapus secara otomatis saat sistem dimatikan.


### 13. /usr (User Utilities and Applications)


Berisi aplikasi, pustaka, dan utilitas untuk pengguna. Contohnya:
- `/usr/bin`: Program untuk semua pengguna.
- `/usr/sbin`: Program untuk administrator.
- `/usr/lib`: Pustaka untuk aplikasi.


### 14. /var (Variable Data)


Berisi data yang berubah selama sistem berjalan, seperti log, file email, dan cache aplikasi. Contoh:
- `/var/log`: Log sistem.
- `/var/spool`: File yang menunggu untuk diproses (seperti antrian cetak).


### 15. /opt (Optional Packages)


Direktori untuk aplikasi tambahan atau opsional yang tidak berasal dari repositori resmi. Contoh: aplikasi pihak ketiga.


### 16. /root (Root User Home Directory)


Direktori rumah untuk pengguna `root` (superuser). Berbeda dengan `/home`, direktori ini hanya digunakan oleh administrator.


### 17. /srv (Service Data)


Berisi data yang disediakan oleh layanan server, seperti file untuk HTTP atau FTP. Sebagai contoh, `/srv/http` untuk server web.


### 18. /lost+found


Direktori khusus pada partisi dengan sistem file `ext` untuk menyimpan file yang rusak atau hilang akibat kesalahan sistem.



#### Referensi
1. https://belajarpc.com/sistem-operasi/linux/mengenal-struktur-direktori-pada--linux.html
2. Ebook Administrasi Server Jaringan dengan Debian Wheezy - Ahmad Rosid Komarudin
