/**
 * Menghitung jumlah semua elemen dalam array numerik.
 * Mengembalikan 0 jika array kosong.
 * @param {number[]} nums - Array angka yang akan dijumlahkan.
 * @returns {number} Jumlah semua elemen dalam array.
 * @example
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(sum(numbers)); // Outputs: 31
 */
export function sum(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Menghitung rata-rata semua elemen dalam array numerik.
 * @param {number[]} nums - Array angka.
 * @returns {number} Nilai rata-rata elemen dalam array.
 * @throws {ErrorInvalidArgument} - Melempar kesalahan jika array kosong.
 * @example
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(average(numbers)); // Outputs: 6.2
 */
export function average(nums) {
    return sum(nums) / nums.length;
}

/**
 * Menghitung median dari array numerik.
 * @param {number[]} nums - Array angka.
 * @returns {number} Nilai median dari array.
 * @example
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(median(numbers)); // Outputs: 4
 */
export function median(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const midIndex = Math.floor(sorted.length / 2);

    return isEven(sorted.length) ?
        (sorted[midIndex - 1] + sorted[midIndex]) / 2 :
        sorted[midIndex];
}

/**
 * Memeriksa apakah sebuah angka genap.
 * @param {number} n - Angka yang akan diperiksa.
 * @returns {boolean} True jika angka genap, false jika tidak.
 * @example
 * console.log(isEven(4)); // Outputs: true
 * console.log(isEven(5)); // Outputs: false
 */
export function isEven(n) {
    return n % 2 === 0;
}

const numbers = [1, 2, 4, 8, 16];
console.log(median(numbers));