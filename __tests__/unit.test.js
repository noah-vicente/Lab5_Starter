// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//phone numbers
test('checks a valid phone number with parenthesis area code', () => {
  expect(isPhoneNumber('(012) 345-6789')).toBe(true);
});

test('checks a valid phone number with dashed area code', () => {
  expect(isPhoneNumber('012-345-6789')).toBe(true);
});

test('checks invalid phone number with wrong number of digits', () => {
  expect(isPhoneNumber('(012) 345-678')).toBe(false);
});

test('checks invalid edge cases of inputs', () => {
  expect(isPhoneNumber('')).toBe(false);
  expect(isPhoneNumber(' ')).toBe(false);
  expect(isPhoneNumber('012-34$-6789')).toBe(false);
  expect(isPhoneNumber(123-456-7890)).toBe(false);
  expect(isPhoneNumber('012/345/6789')).toBe(false);
});

//emails
test('checks valid email with standard formats', () => {
  expect(isEmail('hi@ucsd.edu')).toBe(true);
  expect(isEmail('hi@gmail.com')).toBe(true);
  expect(isEmail('He1lo@yahoo.net')).toBe(true);
});

test('checks valid email with short username and domain', () => {
  expect(isEmail('a@b.co')).toBe(true);
  expect(isEmail('x@y.org')).toBe(true);
});

test('checks invalid email missing @ symbol', () => {
  expect(isEmail('notanemail')).toBe(false);
  expect(isEmail('missingatsign.com')).toBe(false);
});

test('checks invalid email edge cases', () => {
  expect(isEmail('@gmail.com')).toBe(false);
  expect(isEmail('test@gmail.toolongextension')).toBe(false);
  expect(isEmail('')).toBe(false);
  expect(isEmail(' ')).toBe(false);
});

//passwords
test('checks valid strong password with letters, numbers, underscores', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
  expect(isStrongPassword('aValid_Pass1234')).toBe(true);
});

test('checks a valid strong password at minimum length edge case', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

test('checks invalid strong password starting with a number', () => {
  expect(isStrongPassword('12345abc_')).toBe(false);
});

test('checks invalid strong password edge cases', () => {
  expect(isStrongPassword('ab')).toBe(false);
  expect(isStrongPassword('longpasswordsentence')).toBe(false);
  expect(isStrongPassword('')).toBe(false);
  expect(isStrongPassword(' ')).toBe(false);
  expect(isStrongPassword('abc123$')).toBe(false);
});

//dates
test('checks valid date with standard format', () => {
  expect(isDate('12/25/2026')).toBe(true);
  expect(isDate('01/01/2026')).toBe(true);
});

test('checks valid date edge cases', () => {
  expect(isDate('1/10/2026')).toBe(true);
  expect(isDate('1/1/0000')).toBe(true);
  expect(isDate('90/90/9000')).toBe(true);
});

test('checks invalid date with wrong separator character', () => {
  expect(isDate('12-25-2026')).toBe(false);
  expect(isDate('12.25.2026')).toBe(false);
});

test('checks invalid date edge cases', () => {
  expect(isDate('12/25/26')).toBe(false);
  expect(isDate('123/25/2026')).toBe(false);
  expect(isDate('')).toBe(false);
  expect(isDate(' ')).toBe(false);
  expect(isDate('12/25/20260')).toBe(false);

});

//colors
test('checks valid hex color with standard format', () => {
  expect(isHexColor('#ffffff')).toBe(true);
  expect(isHexColor('A1B2C3')).toBe(true);
  expect(isHexColor('#111111')).toBe(true);
});

test('checks valid hex color edge case with 3 character shorthand', () => {
  expect(isHexColor('#fff')).toBe(true);
  expect(isHexColor('fff')).toBe(true);
});

test('checks invalid hex color with non hex characters', () => {
  expect(isHexColor('#gg1111')).toBe(false);
  expect(isHexColor('#22222z')).toBe(false);
});

test('checks invalid hex color edge cases with wrong length', () => {
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('#1234567')).toBe(false);
});

