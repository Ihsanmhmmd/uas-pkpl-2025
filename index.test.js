// Ganti nilainya agar sama persis dengan yang ada di file index.js Anda
const NIM = "2406153";

test('NIM harus berupa string yang hanya berisi angka', () => {
  // Tes pertama: memastikan tipe datanya adalah string
  expect(typeof NIM).toBe('string');

  // Tes kedua: memastikan isinya hanya terdiri dari karakter angka 0-9
  expect(NIM).toMatch(/^[0-9]+$/);
});