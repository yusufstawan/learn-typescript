// public : dapat digunakan di kelas manapun
// protected : bisa untuk kelas dan turunannya
// private : hanya untuk kelas itu sendiri

class Hewan7 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {}
}

class Katak7 extends Hewan7 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
  }
}

const katak7 = new Katak7("ijo", 2, false);
katak7.nama = "test";
console.log(katak7);
