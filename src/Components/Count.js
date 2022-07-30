import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // dalam menggunakan state kita tidak boleh mengubahnya secara langsung harus
  // menggunakan setState
  increment() {
    this.setState(
      {
        // parameter pertama : value
        count: this.state.count + 1,
      },
      () => {
        // parameter kedua : memanggil kembali value
        console.log("Callback value ", this.state.count);
      }
    );
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Count;
// => fungsi ini untuk mencatat nilai count yang telah di perbarui

// dont do this

// ringkasan materi
// 1. selalu gunakan setState dan jangan di rubah secara langsung
// 2. kode tertentu harus di eksekusi setelah sttae di perbarui tempatkan kode
// dalam callback function yang merupakan argumen kedua ke
// metode keadaan tersebut.
// 3. ketika anda harus memperbarui state berdasarkan state sebelumnya pastikan
// untuk meneruskan function sebagai argumen alih" sebagai objek biasa sehingga
// function tersebut memiliki akses ke state sebelumnya untuk dapat
// digunakan untuk menghitung state baru
