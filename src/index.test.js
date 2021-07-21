
import { getMonth } from "./index.js";


describe(
  'Test for getMonth function',
  () => {

    it("should operate correctly with valid number 1", () => {
      expect(getMonth(1)).toBe('январь');
    }),

    it("should operate correctly with valid number 6", () => {
      expect(getMonth(6)).toBe('июнь');
    }),

    it("should operate correctly with valid number 7", () => {
      expect(getMonth(7)).toBe('июль');
    }),

    it("should operate correctly with invalid number 0", () => {
      expect(getMonth(0)).toBe('неизвестно');
    });

    // для иллюстрации ошибочного выполнения теста
    it("should operate correctly with valid number 8", () => { 
      expect(getMonth(8)).toBe('сентябрь');
    });

  });

// Ниже приведён результат выполнения команды 'npm test':

// > jest - start@1.0.0 test C:\Users\Леново\Desktop\jest - start
// > jest

// FAIL  src / index.test.js
// Test for getMonth function
// √ should operate correctly with valid number 1(1 ms)
// √ should operate correctly with valid number 6
// √ should operate correctly with valid number 7(1 ms)
// √ should operate correctly with invalid number 0
// × should operate correctly with valid number 8(4 ms)

// ● Test for getMonth function › should operate correctly with valid number 8

// expect(received).toBe(expected) // Object.is equality

// Expected: "сентябрь"
// Received: "август"

//  25 | // для иллюстрации ошибочного выполнения теста
//  26 | it("should operate correctly with valid number 8", () => {
//> 27 |   expect(getMonth(8)).toBe('сентябрь');
//     |                       ^
//  28 |  });
//  29 |
//  30 | });

// at Object.< anonymous > (src / index.test.js: 27: 27)

// Test Suites: 1 failed, 1 total
// Tests: 1 failed, 4 passed, 5 total
// Snapshots: 0 total
// Time: 0.761 s, estimated 1 s
// Ran all test suites.
// npm ERR! Test failed.See above for more details.