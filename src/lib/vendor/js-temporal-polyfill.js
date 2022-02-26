/*!
 * @js-temporal/polyfill
 * https://github.com/js-temporal/temporal-polyfill
 *
 * Copyright 2017, 2018, 2019, 2020 ECMA International
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var BigInteger = {exports: {}};

(function (module) {
  var bigInt = function (undefined$1) {

    var BASE = 1e7,
        LOG_BASE = 7,
        MAX_INT = 9007199254740992,
        MAX_INT_ARR = smallToArray(MAX_INT),
        DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
    var supportsNativeBigInt = typeof BigInt === "function";

    function Integer(v, radix, alphabet, caseSensitive) {
      if (typeof v === "undefined") return Integer[0];
      if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
      return parseValue(v);
    }

    function BigInteger(value, sign) {
      this.value = value;
      this.sign = sign;
      this.isSmall = false;
    }

    BigInteger.prototype = Object.create(Integer.prototype);

    function SmallInteger(value) {
      this.value = value;
      this.sign = value < 0;
      this.isSmall = true;
    }

    SmallInteger.prototype = Object.create(Integer.prototype);

    function NativeBigInt(value) {
      this.value = value;
    }

    NativeBigInt.prototype = Object.create(Integer.prototype);

    function isPrecise(n) {
      return -MAX_INT < n && n < MAX_INT;
    }

    function smallToArray(n) {
      // For performance reasons doesn't reference BASE, need to change this function if BASE changes
      if (n < 1e7) return [n];
      if (n < 1e14) return [n % 1e7, Math.floor(n / 1e7)];
      return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
    }

    function arrayToSmall(arr) {
      // If BASE changes this function may need to change
      trim(arr);
      var length = arr.length;

      if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
        switch (length) {
          case 0:
            return 0;

          case 1:
            return arr[0];

          case 2:
            return arr[0] + arr[1] * BASE;

          default:
            return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
        }
      }

      return arr;
    }

    function trim(v) {
      var i = v.length;

      while (v[--i] === 0) {
      }

      v.length = i + 1;
    }

    function createArray(length) {
      // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
      var x = new Array(length);
      var i = -1;

      while (++i < length) {
        x[i] = 0;
      }

      return x;
    }

    function truncate(n) {
      if (n > 0) return Math.floor(n);
      return Math.ceil(n);
    }

    function add(a, b) {
      // assumes a and b are arrays with a.length >= b.length
      var l_a = a.length,
          l_b = b.length,
          r = new Array(l_a),
          carry = 0,
          base = BASE,
          sum,
          i;

      for (i = 0; i < l_b; i++) {
        sum = a[i] + b[i] + carry;
        carry = sum >= base ? 1 : 0;
        r[i] = sum - carry * base;
      }

      while (i < l_a) {
        sum = a[i] + carry;
        carry = sum === base ? 1 : 0;
        r[i++] = sum - carry * base;
      }

      if (carry > 0) r.push(carry);
      return r;
    }

    function addAny(a, b) {
      if (a.length >= b.length) return add(a, b);
      return add(b, a);
    }

    function addSmall(a, carry) {
      // assumes a is array, carry is number with 0 <= carry < MAX_INT
      var l = a.length,
          r = new Array(l),
          base = BASE,
          sum,
          i;

      for (i = 0; i < l; i++) {
        sum = a[i] - base + carry;
        carry = Math.floor(sum / base);
        r[i] = sum - carry * base;
        carry += 1;
      }

      while (carry > 0) {
        r[i++] = carry % base;
        carry = Math.floor(carry / base);
      }

      return r;
    }

    BigInteger.prototype.add = function (v) {
      var n = parseValue(v);

      if (this.sign !== n.sign) {
        return this.subtract(n.negate());
      }

      var a = this.value,
          b = n.value;

      if (n.isSmall) {
        return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
      }

      return new BigInteger(addAny(a, b), this.sign);
    };

    BigInteger.prototype.plus = BigInteger.prototype.add;

    SmallInteger.prototype.add = function (v) {
      var n = parseValue(v);
      var a = this.value;

      if (a < 0 !== n.sign) {
        return this.subtract(n.negate());
      }

      var b = n.value;

      if (n.isSmall) {
        if (isPrecise(a + b)) return new SmallInteger(a + b);
        b = smallToArray(Math.abs(b));
      }

      return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
    };

    SmallInteger.prototype.plus = SmallInteger.prototype.add;

    NativeBigInt.prototype.add = function (v) {
      return new NativeBigInt(this.value + parseValue(v).value);
    };

    NativeBigInt.prototype.plus = NativeBigInt.prototype.add;

    function subtract(a, b) {
      // assumes a and b are arrays with a >= b
      var a_l = a.length,
          b_l = b.length,
          r = new Array(a_l),
          borrow = 0,
          base = BASE,
          i,
          difference;

      for (i = 0; i < b_l; i++) {
        difference = a[i] - borrow - b[i];

        if (difference < 0) {
          difference += base;
          borrow = 1;
        } else borrow = 0;

        r[i] = difference;
      }

      for (i = b_l; i < a_l; i++) {
        difference = a[i] - borrow;
        if (difference < 0) difference += base;else {
          r[i++] = difference;
          break;
        }
        r[i] = difference;
      }

      for (; i < a_l; i++) {
        r[i] = a[i];
      }

      trim(r);
      return r;
    }

    function subtractAny(a, b, sign) {
      var value;

      if (compareAbs(a, b) >= 0) {
        value = subtract(a, b);
      } else {
        value = subtract(b, a);
        sign = !sign;
      }

      value = arrayToSmall(value);

      if (typeof value === "number") {
        if (sign) value = -value;
        return new SmallInteger(value);
      }

      return new BigInteger(value, sign);
    }

    function subtractSmall(a, b, sign) {
      // assumes a is array, b is number with 0 <= b < MAX_INT
      var l = a.length,
          r = new Array(l),
          carry = -b,
          base = BASE,
          i,
          difference;

      for (i = 0; i < l; i++) {
        difference = a[i] + carry;
        carry = Math.floor(difference / base);
        difference %= base;
        r[i] = difference < 0 ? difference + base : difference;
      }

      r = arrayToSmall(r);

      if (typeof r === "number") {
        if (sign) r = -r;
        return new SmallInteger(r);
      }

      return new BigInteger(r, sign);
    }

    BigInteger.prototype.subtract = function (v) {
      var n = parseValue(v);

      if (this.sign !== n.sign) {
        return this.add(n.negate());
      }

      var a = this.value,
          b = n.value;
      if (n.isSmall) return subtractSmall(a, Math.abs(b), this.sign);
      return subtractAny(a, b, this.sign);
    };

    BigInteger.prototype.minus = BigInteger.prototype.subtract;

    SmallInteger.prototype.subtract = function (v) {
      var n = parseValue(v);
      var a = this.value;

      if (a < 0 !== n.sign) {
        return this.add(n.negate());
      }

      var b = n.value;

      if (n.isSmall) {
        return new SmallInteger(a - b);
      }

      return subtractSmall(b, Math.abs(a), a >= 0);
    };

    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

    NativeBigInt.prototype.subtract = function (v) {
      return new NativeBigInt(this.value - parseValue(v).value);
    };

    NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;

    BigInteger.prototype.negate = function () {
      return new BigInteger(this.value, !this.sign);
    };

    SmallInteger.prototype.negate = function () {
      var sign = this.sign;
      var small = new SmallInteger(-this.value);
      small.sign = !sign;
      return small;
    };

    NativeBigInt.prototype.negate = function () {
      return new NativeBigInt(-this.value);
    };

    BigInteger.prototype.abs = function () {
      return new BigInteger(this.value, false);
    };

    SmallInteger.prototype.abs = function () {
      return new SmallInteger(Math.abs(this.value));
    };

    NativeBigInt.prototype.abs = function () {
      return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
    };

    function multiplyLong(a, b) {
      var a_l = a.length,
          b_l = b.length,
          l = a_l + b_l,
          r = createArray(l),
          base = BASE,
          product,
          carry,
          i,
          a_i,
          b_j;

      for (i = 0; i < a_l; ++i) {
        a_i = a[i];

        for (var j = 0; j < b_l; ++j) {
          b_j = b[j];
          product = a_i * b_j + r[i + j];
          carry = Math.floor(product / base);
          r[i + j] = product - carry * base;
          r[i + j + 1] += carry;
        }
      }

      trim(r);
      return r;
    }

    function multiplySmall(a, b) {
      // assumes a is array, b is number with |b| < BASE
      var l = a.length,
          r = new Array(l),
          base = BASE,
          carry = 0,
          product,
          i;

      for (i = 0; i < l; i++) {
        product = a[i] * b + carry;
        carry = Math.floor(product / base);
        r[i] = product - carry * base;
      }

      while (carry > 0) {
        r[i++] = carry % base;
        carry = Math.floor(carry / base);
      }

      return r;
    }

    function shiftLeft(x, n) {
      var r = [];

      while (n-- > 0) {
        r.push(0);
      }

      return r.concat(x);
    }

    function multiplyKaratsuba(x, y) {
      var n = Math.max(x.length, y.length);
      if (n <= 30) return multiplyLong(x, y);
      n = Math.ceil(n / 2);
      var b = x.slice(n),
          a = x.slice(0, n),
          d = y.slice(n),
          c = y.slice(0, n);
      var ac = multiplyKaratsuba(a, c),
          bd = multiplyKaratsuba(b, d),
          abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
      var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
      trim(product);
      return product;
    } // The following function is derived from a surface fit of a graph plotting the performance difference
    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.


    function useKaratsuba(l1, l2) {
      return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
    }

    BigInteger.prototype.multiply = function (v) {
      var n = parseValue(v),
          a = this.value,
          b = n.value,
          sign = this.sign !== n.sign,
          abs;

      if (n.isSmall) {
        if (b === 0) return Integer[0];
        if (b === 1) return this;
        if (b === -1) return this.negate();
        abs = Math.abs(b);

        if (abs < BASE) {
          return new BigInteger(multiplySmall(a, abs), sign);
        }

        b = smallToArray(abs);
      }

      if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
        return new BigInteger(multiplyKaratsuba(a, b), sign);
      return new BigInteger(multiplyLong(a, b), sign);
    };

    BigInteger.prototype.times = BigInteger.prototype.multiply;

    function multiplySmallAndArray(a, b, sign) {
      // a >= 0
      if (a < BASE) {
        return new BigInteger(multiplySmall(b, a), sign);
      }

      return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
    }

    SmallInteger.prototype._multiplyBySmall = function (a) {
      if (isPrecise(a.value * this.value)) {
        return new SmallInteger(a.value * this.value);
      }

      return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
    };

    BigInteger.prototype._multiplyBySmall = function (a) {
      if (a.value === 0) return Integer[0];
      if (a.value === 1) return this;
      if (a.value === -1) return this.negate();
      return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
    };

    SmallInteger.prototype.multiply = function (v) {
      return parseValue(v)._multiplyBySmall(this);
    };

    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

    NativeBigInt.prototype.multiply = function (v) {
      return new NativeBigInt(this.value * parseValue(v).value);
    };

    NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;

    function square(a) {
      //console.assert(2 * BASE * BASE < MAX_INT);
      var l = a.length,
          r = createArray(l + l),
          base = BASE,
          product,
          carry,
          i,
          a_i,
          a_j;

      for (i = 0; i < l; i++) {
        a_i = a[i];
        carry = 0 - a_i * a_i;

        for (var j = i; j < l; j++) {
          a_j = a[j];
          product = 2 * (a_i * a_j) + r[i + j] + carry;
          carry = Math.floor(product / base);
          r[i + j] = product - carry * base;
        }

        r[i + l] = carry;
      }

      trim(r);
      return r;
    }

    BigInteger.prototype.square = function () {
      return new BigInteger(square(this.value), false);
    };

    SmallInteger.prototype.square = function () {
      var value = this.value * this.value;
      if (isPrecise(value)) return new SmallInteger(value);
      return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
    };

    NativeBigInt.prototype.square = function (v) {
      return new NativeBigInt(this.value * this.value);
    };

    function divMod1(a, b) {
      // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
      var a_l = a.length,
          b_l = b.length,
          base = BASE,
          result = createArray(b.length),
          divisorMostSignificantDigit = b[b_l - 1],
          // normalization
      lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
          remainder = multiplySmall(a, lambda),
          divisor = multiplySmall(b, lambda),
          quotientDigit,
          shift,
          carry,
          borrow,
          i,
          l,
          q;
      if (remainder.length <= a_l) remainder.push(0);
      divisor.push(0);
      divisorMostSignificantDigit = divisor[b_l - 1];

      for (shift = a_l - b_l; shift >= 0; shift--) {
        quotientDigit = base - 1;

        if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
          quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
        } // quotientDigit <= base - 1


        carry = 0;
        borrow = 0;
        l = divisor.length;

        for (i = 0; i < l; i++) {
          carry += quotientDigit * divisor[i];
          q = Math.floor(carry / base);
          borrow += remainder[shift + i] - (carry - q * base);
          carry = q;

          if (borrow < 0) {
            remainder[shift + i] = borrow + base;
            borrow = -1;
          } else {
            remainder[shift + i] = borrow;
            borrow = 0;
          }
        }

        while (borrow !== 0) {
          quotientDigit -= 1;
          carry = 0;

          for (i = 0; i < l; i++) {
            carry += remainder[shift + i] - base + divisor[i];

            if (carry < 0) {
              remainder[shift + i] = carry + base;
              carry = 0;
            } else {
              remainder[shift + i] = carry;
              carry = 1;
            }
          }

          borrow += carry;
        }

        result[shift] = quotientDigit;
      } // denormalization


      remainder = divModSmall(remainder, lambda)[0];
      return [arrayToSmall(result), arrayToSmall(remainder)];
    }

    function divMod2(a, b) {
      // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
      // Performs faster than divMod1 on larger input sizes.
      var a_l = a.length,
          b_l = b.length,
          result = [],
          part = [],
          base = BASE,
          guess,
          xlen,
          highx,
          highy,
          check;

      while (a_l) {
        part.unshift(a[--a_l]);
        trim(part);

        if (compareAbs(part, b) < 0) {
          result.push(0);
          continue;
        }

        xlen = part.length;
        highx = part[xlen - 1] * base + part[xlen - 2];
        highy = b[b_l - 1] * base + b[b_l - 2];

        if (xlen > b_l) {
          highx = (highx + 1) * base;
        }

        guess = Math.ceil(highx / highy);

        do {
          check = multiplySmall(b, guess);
          if (compareAbs(check, part) <= 0) break;
          guess--;
        } while (guess);

        result.push(guess);
        part = subtract(part, check);
      }

      result.reverse();
      return [arrayToSmall(result), arrayToSmall(part)];
    }

    function divModSmall(value, lambda) {
      var length = value.length,
          quotient = createArray(length),
          base = BASE,
          i,
          q,
          remainder,
          divisor;
      remainder = 0;

      for (i = length - 1; i >= 0; --i) {
        divisor = remainder * base + value[i];
        q = truncate(divisor / lambda);
        remainder = divisor - q * lambda;
        quotient[i] = q | 0;
      }

      return [quotient, remainder | 0];
    }

    function divModAny(self, v) {
      var value,
          n = parseValue(v);

      if (supportsNativeBigInt) {
        return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
      }

      var a = self.value,
          b = n.value;
      var quotient;
      if (b === 0) throw new Error("Cannot divide by zero");

      if (self.isSmall) {
        if (n.isSmall) {
          return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
        }

        return [Integer[0], self];
      }

      if (n.isSmall) {
        if (b === 1) return [self, Integer[0]];
        if (b == -1) return [self.negate(), Integer[0]];
        var abs = Math.abs(b);

        if (abs < BASE) {
          value = divModSmall(a, abs);
          quotient = arrayToSmall(value[0]);
          var remainder = value[1];
          if (self.sign) remainder = -remainder;

          if (typeof quotient === "number") {
            if (self.sign !== n.sign) quotient = -quotient;
            return [new SmallInteger(quotient), new SmallInteger(remainder)];
          }

          return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
        }

        b = smallToArray(abs);
      }

      var comparison = compareAbs(a, b);
      if (comparison === -1) return [Integer[0], self];
      if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]]; // divMod1 is faster on smaller input sizes

      if (a.length + b.length <= 200) value = divMod1(a, b);else value = divMod2(a, b);
      quotient = value[0];
      var qSign = self.sign !== n.sign,
          mod = value[1],
          mSign = self.sign;

      if (typeof quotient === "number") {
        if (qSign) quotient = -quotient;
        quotient = new SmallInteger(quotient);
      } else quotient = new BigInteger(quotient, qSign);

      if (typeof mod === "number") {
        if (mSign) mod = -mod;
        mod = new SmallInteger(mod);
      } else mod = new BigInteger(mod, mSign);

      return [quotient, mod];
    }

    BigInteger.prototype.divmod = function (v) {
      var result = divModAny(this, v);
      return {
        quotient: result[0],
        remainder: result[1]
      };
    };

    NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;

    BigInteger.prototype.divide = function (v) {
      return divModAny(this, v)[0];
    };

    NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function (v) {
      return new NativeBigInt(this.value / parseValue(v).value);
    };

    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

    BigInteger.prototype.mod = function (v) {
      return divModAny(this, v)[1];
    };

    NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function (v) {
      return new NativeBigInt(this.value % parseValue(v).value);
    };

    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

    BigInteger.prototype.pow = function (v) {
      var n = parseValue(v),
          a = this.value,
          b = n.value,
          value,
          x,
          y;
      if (b === 0) return Integer[1];
      if (a === 0) return Integer[0];
      if (a === 1) return Integer[1];
      if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];

      if (n.sign) {
        return Integer[0];
      }

      if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");

      if (this.isSmall) {
        if (isPrecise(value = Math.pow(a, b))) return new SmallInteger(truncate(value));
      }

      x = this;
      y = Integer[1];

      while (true) {
        if (b & 1 === 1) {
          y = y.times(x);
          --b;
        }

        if (b === 0) break;
        b /= 2;
        x = x.square();
      }

      return y;
    };

    SmallInteger.prototype.pow = BigInteger.prototype.pow;

    NativeBigInt.prototype.pow = function (v) {
      var n = parseValue(v);
      var a = this.value,
          b = n.value;

      var _0 = BigInt(0),
          _1 = BigInt(1),
          _2 = BigInt(2);

      if (b === _0) return Integer[1];
      if (a === _0) return Integer[0];
      if (a === _1) return Integer[1];
      if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
      if (n.isNegative()) return new NativeBigInt(_0);
      var x = this;
      var y = Integer[1];

      while (true) {
        if ((b & _1) === _1) {
          y = y.times(x);
          --b;
        }

        if (b === _0) break;
        b /= _2;
        x = x.square();
      }

      return y;
    };

    BigInteger.prototype.modPow = function (exp, mod) {
      exp = parseValue(exp);
      mod = parseValue(mod);
      if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var r = Integer[1],
          base = this.mod(mod);

      if (exp.isNegative()) {
        exp = exp.multiply(Integer[-1]);
        base = base.modInv(mod);
      }

      while (exp.isPositive()) {
        if (base.isZero()) return Integer[0];
        if (exp.isOdd()) r = r.multiply(base).mod(mod);
        exp = exp.divide(2);
        base = base.square().mod(mod);
      }

      return r;
    };

    NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

    function compareAbs(a, b) {
      if (a.length !== b.length) {
        return a.length > b.length ? 1 : -1;
      }

      for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
      }

      return 0;
    }

    BigInteger.prototype.compareAbs = function (v) {
      var n = parseValue(v),
          a = this.value,
          b = n.value;
      if (n.isSmall) return 1;
      return compareAbs(a, b);
    };

    SmallInteger.prototype.compareAbs = function (v) {
      var n = parseValue(v),
          a = Math.abs(this.value),
          b = n.value;

      if (n.isSmall) {
        b = Math.abs(b);
        return a === b ? 0 : a > b ? 1 : -1;
      }

      return -1;
    };

    NativeBigInt.prototype.compareAbs = function (v) {
      var a = this.value;
      var b = parseValue(v).value;
      a = a >= 0 ? a : -a;
      b = b >= 0 ? b : -b;
      return a === b ? 0 : a > b ? 1 : -1;
    };

    BigInteger.prototype.compare = function (v) {
      // See discussion about comparison with Infinity:
      // https://github.com/peterolson/BigInteger.js/issues/61
      if (v === Infinity) {
        return -1;
      }

      if (v === -Infinity) {
        return 1;
      }

      var n = parseValue(v),
          a = this.value,
          b = n.value;

      if (this.sign !== n.sign) {
        return n.sign ? 1 : -1;
      }

      if (n.isSmall) {
        return this.sign ? -1 : 1;
      }

      return compareAbs(a, b) * (this.sign ? -1 : 1);
    };

    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

    SmallInteger.prototype.compare = function (v) {
      if (v === Infinity) {
        return -1;
      }

      if (v === -Infinity) {
        return 1;
      }

      var n = parseValue(v),
          a = this.value,
          b = n.value;

      if (n.isSmall) {
        return a == b ? 0 : a > b ? 1 : -1;
      }

      if (a < 0 !== n.sign) {
        return a < 0 ? -1 : 1;
      }

      return a < 0 ? 1 : -1;
    };

    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

    NativeBigInt.prototype.compare = function (v) {
      if (v === Infinity) {
        return -1;
      }

      if (v === -Infinity) {
        return 1;
      }

      var a = this.value;
      var b = parseValue(v).value;
      return a === b ? 0 : a > b ? 1 : -1;
    };

    NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;

    BigInteger.prototype.equals = function (v) {
      return this.compare(v) === 0;
    };

    NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

    BigInteger.prototype.notEquals = function (v) {
      return this.compare(v) !== 0;
    };

    NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

    BigInteger.prototype.greater = function (v) {
      return this.compare(v) > 0;
    };

    NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

    BigInteger.prototype.lesser = function (v) {
      return this.compare(v) < 0;
    };

    NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

    BigInteger.prototype.greaterOrEquals = function (v) {
      return this.compare(v) >= 0;
    };

    NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

    BigInteger.prototype.lesserOrEquals = function (v) {
      return this.compare(v) <= 0;
    };

    NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

    BigInteger.prototype.isEven = function () {
      return (this.value[0] & 1) === 0;
    };

    SmallInteger.prototype.isEven = function () {
      return (this.value & 1) === 0;
    };

    NativeBigInt.prototype.isEven = function () {
      return (this.value & BigInt(1)) === BigInt(0);
    };

    BigInteger.prototype.isOdd = function () {
      return (this.value[0] & 1) === 1;
    };

    SmallInteger.prototype.isOdd = function () {
      return (this.value & 1) === 1;
    };

    NativeBigInt.prototype.isOdd = function () {
      return (this.value & BigInt(1)) === BigInt(1);
    };

    BigInteger.prototype.isPositive = function () {
      return !this.sign;
    };

    SmallInteger.prototype.isPositive = function () {
      return this.value > 0;
    };

    NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;

    BigInteger.prototype.isNegative = function () {
      return this.sign;
    };

    SmallInteger.prototype.isNegative = function () {
      return this.value < 0;
    };

    NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;

    BigInteger.prototype.isUnit = function () {
      return false;
    };

    SmallInteger.prototype.isUnit = function () {
      return Math.abs(this.value) === 1;
    };

    NativeBigInt.prototype.isUnit = function () {
      return this.abs().value === BigInt(1);
    };

    BigInteger.prototype.isZero = function () {
      return false;
    };

    SmallInteger.prototype.isZero = function () {
      return this.value === 0;
    };

    NativeBigInt.prototype.isZero = function () {
      return this.value === BigInt(0);
    };

    BigInteger.prototype.isDivisibleBy = function (v) {
      var n = parseValue(v);
      if (n.isZero()) return false;
      if (n.isUnit()) return true;
      if (n.compareAbs(2) === 0) return this.isEven();
      return this.mod(n).isZero();
    };

    NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

    function isBasicPrime(v) {
      var n = v.abs();
      if (n.isUnit()) return false;
      if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
      if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
      if (n.lesser(49)) return true; // we don't know if it's prime: let the other functions figure it out
    }

    function millerRabinTest(n, a) {
      var nPrev = n.prev(),
          b = nPrev,
          r = 0,
          d,
          i,
          x;

      while (b.isEven()) {
        b = b.divide(2), r++;
      }

      next: for (i = 0; i < a.length; i++) {
        if (n.lesser(a[i])) continue;
        x = bigInt(a[i]).modPow(b, n);
        if (x.isUnit() || x.equals(nPrev)) continue;

        for (d = r - 1; d != 0; d--) {
          x = x.square().mod(n);
          if (x.isUnit()) return false;
          if (x.equals(nPrev)) continue next;
        }

        return false;
      }

      return true;
    } // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2


    BigInteger.prototype.isPrime = function (strict) {
      var isPrime = isBasicPrime(this);
      if (isPrime !== undefined$1) return isPrime;
      var n = this.abs();
      var bits = n.bitLength();
      if (bits <= 64) return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      var logN = Math.log(2) * bits.toJSNumber();
      var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);

      for (var a = [], i = 0; i < t; i++) {
        a.push(bigInt(i + 2));
      }

      return millerRabinTest(n, a);
    };

    NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

    BigInteger.prototype.isProbablePrime = function (iterations, rng) {
      var isPrime = isBasicPrime(this);
      if (isPrime !== undefined$1) return isPrime;
      var n = this.abs();
      var t = iterations === undefined$1 ? 5 : iterations;

      for (var a = [], i = 0; i < t; i++) {
        a.push(bigInt.randBetween(2, n.minus(2), rng));
      }

      return millerRabinTest(n, a);
    };

    NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

    BigInteger.prototype.modInv = function (n) {
      var t = bigInt.zero,
          newT = bigInt.one,
          r = parseValue(n),
          newR = this.abs(),
          q,
          lastT,
          lastR;

      while (!newR.isZero()) {
        q = r.divide(newR);
        lastT = t;
        lastR = r;
        t = newT;
        r = newR;
        newT = lastT.subtract(q.multiply(newT));
        newR = lastR.subtract(q.multiply(newR));
      }

      if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");

      if (t.compare(0) === -1) {
        t = t.add(n);
      }

      if (this.isNegative()) {
        return t.negate();
      }

      return t;
    };

    NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

    BigInteger.prototype.next = function () {
      var value = this.value;

      if (this.sign) {
        return subtractSmall(value, 1, this.sign);
      }

      return new BigInteger(addSmall(value, 1), this.sign);
    };

    SmallInteger.prototype.next = function () {
      var value = this.value;
      if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
      return new BigInteger(MAX_INT_ARR, false);
    };

    NativeBigInt.prototype.next = function () {
      return new NativeBigInt(this.value + BigInt(1));
    };

    BigInteger.prototype.prev = function () {
      var value = this.value;

      if (this.sign) {
        return new BigInteger(addSmall(value, 1), true);
      }

      return subtractSmall(value, 1, this.sign);
    };

    SmallInteger.prototype.prev = function () {
      var value = this.value;
      if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
      return new BigInteger(MAX_INT_ARR, true);
    };

    NativeBigInt.prototype.prev = function () {
      return new NativeBigInt(this.value - BigInt(1));
    };

    var powersOfTwo = [1];

    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) {
      powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
    }

    var powers2Length = powersOfTwo.length,
        highestPower2 = powersOfTwo[powers2Length - 1];

    function shift_isSmall(n) {
      return Math.abs(n) <= BASE;
    }

    BigInteger.prototype.shiftLeft = function (v) {
      var n = parseValue(v).toJSNumber();

      if (!shift_isSmall(n)) {
        throw new Error(String(n) + " is too large for shifting.");
      }

      if (n < 0) return this.shiftRight(-n);
      var result = this;
      if (result.isZero()) return result;

      while (n >= powers2Length) {
        result = result.multiply(highestPower2);
        n -= powers2Length - 1;
      }

      return result.multiply(powersOfTwo[n]);
    };

    NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

    BigInteger.prototype.shiftRight = function (v) {
      var remQuo;
      var n = parseValue(v).toJSNumber();

      if (!shift_isSmall(n)) {
        throw new Error(String(n) + " is too large for shifting.");
      }

      if (n < 0) return this.shiftLeft(-n);
      var result = this;

      while (n >= powers2Length) {
        if (result.isZero() || result.isNegative() && result.isUnit()) return result;
        remQuo = divModAny(result, highestPower2);
        result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
        n -= powers2Length - 1;
      }

      remQuo = divModAny(result, powersOfTwo[n]);
      return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
    };

    NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

    function bitwise(x, y, fn) {
      y = parseValue(y);
      var xSign = x.isNegative(),
          ySign = y.isNegative();
      var xRem = xSign ? x.not() : x,
          yRem = ySign ? y.not() : y;
      var xDigit = 0,
          yDigit = 0;
      var xDivMod = null,
          yDivMod = null;
      var result = [];

      while (!xRem.isZero() || !yRem.isZero()) {
        xDivMod = divModAny(xRem, highestPower2);
        xDigit = xDivMod[1].toJSNumber();

        if (xSign) {
          xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
        }

        yDivMod = divModAny(yRem, highestPower2);
        yDigit = yDivMod[1].toJSNumber();

        if (ySign) {
          yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
        }

        xRem = xDivMod[0];
        yRem = yDivMod[0];
        result.push(fn(xDigit, yDigit));
      }

      var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);

      for (var i = result.length - 1; i >= 0; i -= 1) {
        sum = sum.multiply(highestPower2).add(bigInt(result[i]));
      }

      return sum;
    }

    BigInteger.prototype.not = function () {
      return this.negate().prev();
    };

    NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;

    BigInteger.prototype.and = function (n) {
      return bitwise(this, n, function (a, b) {
        return a & b;
      });
    };

    NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;

    BigInteger.prototype.or = function (n) {
      return bitwise(this, n, function (a, b) {
        return a | b;
      });
    };

    NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;

    BigInteger.prototype.xor = function (n) {
      return bitwise(this, n, function (a, b) {
        return a ^ b;
      });
    };

    NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
    var LOBMASK_I = 1 << 30,
        LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;

    function roughLOB(n) {
      // get lowestOneBit (rough)
      // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
      // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
      var v = n.value,
          x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
      return x & -x;
    }

    function integerLogarithm(value, base) {
      if (base.compareTo(value) <= 0) {
        var tmp = integerLogarithm(value, base.square(base));
        var p = tmp.p;
        var e = tmp.e;
        var t = p.multiply(base);
        return t.compareTo(value) <= 0 ? {
          p: t,
          e: e * 2 + 1
        } : {
          p: p,
          e: e * 2
        };
      }

      return {
        p: bigInt(1),
        e: 0
      };
    }

    BigInteger.prototype.bitLength = function () {
      var n = this;

      if (n.compareTo(bigInt(0)) < 0) {
        n = n.negate().subtract(bigInt(1));
      }

      if (n.compareTo(bigInt(0)) === 0) {
        return bigInt(0);
      }

      return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
    };

    NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

    function max(a, b) {
      a = parseValue(a);
      b = parseValue(b);
      return a.greater(b) ? a : b;
    }

    function min(a, b) {
      a = parseValue(a);
      b = parseValue(b);
      return a.lesser(b) ? a : b;
    }

    function gcd(a, b) {
      a = parseValue(a).abs();
      b = parseValue(b).abs();
      if (a.equals(b)) return a;
      if (a.isZero()) return b;
      if (b.isZero()) return a;
      var c = Integer[1],
          d,
          t;

      while (a.isEven() && b.isEven()) {
        d = min(roughLOB(a), roughLOB(b));
        a = a.divide(d);
        b = b.divide(d);
        c = c.multiply(d);
      }

      while (a.isEven()) {
        a = a.divide(roughLOB(a));
      }

      do {
        while (b.isEven()) {
          b = b.divide(roughLOB(b));
        }

        if (a.greater(b)) {
          t = b;
          b = a;
          a = t;
        }

        b = b.subtract(a);
      } while (!b.isZero());

      return c.isUnit() ? a : a.multiply(c);
    }

    function lcm(a, b) {
      a = parseValue(a).abs();
      b = parseValue(b).abs();
      return a.divide(gcd(a, b)).multiply(b);
    }

    function randBetween(a, b, rng) {
      a = parseValue(a);
      b = parseValue(b);
      var usedRNG = rng || Math.random;
      var low = min(a, b),
          high = max(a, b);
      var range = high.subtract(low).add(1);
      if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
      var digits = toBase(range, BASE).value;
      var result = [],
          restricted = true;

      for (var i = 0; i < digits.length; i++) {
        var top = restricted ? digits[i] + (i + 1 < digits.length ? digits[i + 1] / BASE : 0) : BASE;
        var digit = truncate(usedRNG() * top);
        result.push(digit);
        if (digit < digits[i]) restricted = false;
      }

      return low.add(Integer.fromArray(result, BASE, false));
    }

    var parseBase = function parseBase(text, base, alphabet, caseSensitive) {
      alphabet = alphabet || DEFAULT_ALPHABET;
      text = String(text);

      if (!caseSensitive) {
        text = text.toLowerCase();
        alphabet = alphabet.toLowerCase();
      }

      var length = text.length;
      var i;
      var absBase = Math.abs(base);
      var alphabetValues = {};

      for (i = 0; i < alphabet.length; i++) {
        alphabetValues[alphabet[i]] = i;
      }

      for (i = 0; i < length; i++) {
        var c = text[i];
        if (c === "-") continue;

        if (c in alphabetValues) {
          if (alphabetValues[c] >= absBase) {
            if (c === "1" && absBase === 1) continue;
            throw new Error(c + " is not a valid digit in base " + base + ".");
          }
        }
      }

      base = parseValue(base);
      var digits = [];
      var isNegative = text[0] === "-";

      for (i = isNegative ? 1 : 0; i < text.length; i++) {
        var c = text[i];
        if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));else if (c === "<") {
          var start = i;

          do {
            i++;
          } while (text[i] !== ">" && i < text.length);

          digits.push(parseValue(text.slice(start + 1, i)));
        } else throw new Error(c + " is not a valid character");
      }

      return parseBaseFromArray(digits, base, isNegative);
    };

    function parseBaseFromArray(digits, base, isNegative) {
      var val = Integer[0],
          pow = Integer[1],
          i;

      for (i = digits.length - 1; i >= 0; i--) {
        val = val.add(digits[i].times(pow));
        pow = pow.times(base);
      }

      return isNegative ? val.negate() : val;
    }

    function stringify(digit, alphabet) {
      alphabet = alphabet || DEFAULT_ALPHABET;

      if (digit < alphabet.length) {
        return alphabet[digit];
      }

      return "<" + digit + ">";
    }

    function toBase(n, base) {
      base = bigInt(base);

      if (base.isZero()) {
        if (n.isZero()) return {
          value: [0],
          isNegative: false
        };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }

      if (base.equals(-1)) {
        if (n.isZero()) return {
          value: [0],
          isNegative: false
        };
        if (n.isNegative()) return {
          value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
          isNegative: false
        };
        var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        arr.unshift([1]);
        return {
          value: [].concat.apply([], arr),
          isNegative: false
        };
      }

      var neg = false;

      if (n.isNegative() && base.isPositive()) {
        neg = true;
        n = n.abs();
      }

      if (base.isUnit()) {
        if (n.isZero()) return {
          value: [0],
          isNegative: false
        };
        return {
          value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: neg
        };
      }

      var out = [];
      var left = n,
          divmod;

      while (left.isNegative() || left.compareAbs(base) >= 0) {
        divmod = left.divmod(base);
        left = divmod.quotient;
        var digit = divmod.remainder;

        if (digit.isNegative()) {
          digit = base.minus(digit).abs();
          left = left.next();
        }

        out.push(digit.toJSNumber());
      }

      out.push(left.toJSNumber());
      return {
        value: out.reverse(),
        isNegative: neg
      };
    }

    function toBaseString(n, base, alphabet) {
      var arr = toBase(n, base);
      return (arr.isNegative ? "-" : "") + arr.value.map(function (x) {
        return stringify(x, alphabet);
      }).join('');
    }

    BigInteger.prototype.toArray = function (radix) {
      return toBase(this, radix);
    };

    SmallInteger.prototype.toArray = function (radix) {
      return toBase(this, radix);
    };

    NativeBigInt.prototype.toArray = function (radix) {
      return toBase(this, radix);
    };

    BigInteger.prototype.toString = function (radix, alphabet) {
      if (radix === undefined$1) radix = 10;
      if (radix !== 10) return toBaseString(this, radix, alphabet);
      var v = this.value,
          l = v.length,
          str = String(v[--l]),
          zeros = "0000000",
          digit;

      while (--l >= 0) {
        digit = String(v[l]);
        str += zeros.slice(digit.length) + digit;
      }

      var sign = this.sign ? "-" : "";
      return sign + str;
    };

    SmallInteger.prototype.toString = function (radix, alphabet) {
      if (radix === undefined$1) radix = 10;
      if (radix != 10) return toBaseString(this, radix, alphabet);
      return String(this.value);
    };

    NativeBigInt.prototype.toString = SmallInteger.prototype.toString;

    NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () {
      return this.toString();
    };

    BigInteger.prototype.valueOf = function () {
      return parseInt(this.toString(), 10);
    };

    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

    SmallInteger.prototype.valueOf = function () {
      return this.value;
    };

    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;

    NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function () {
      return parseInt(this.toString(), 10);
    };

    function parseStringValue(v) {
      if (isPrecise(+v)) {
        var x = +v;
        if (x === truncate(x)) return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
        throw new Error("Invalid integer: " + v);
      }

      var sign = v[0] === "-";
      if (sign) v = v.slice(1);
      var split = v.split(/e/i);
      if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));

      if (split.length === 2) {
        var exp = split[1];
        if (exp[0] === "+") exp = exp.slice(1);
        exp = +exp;
        if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
        var text = split[0];
        var decimalPlace = text.indexOf(".");

        if (decimalPlace >= 0) {
          exp -= text.length - decimalPlace - 1;
          text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
        }

        if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
        text += new Array(exp + 1).join("0");
        v = text;
      }

      var isValid = /^([0-9][0-9]*)$/.test(v);
      if (!isValid) throw new Error("Invalid integer: " + v);

      if (supportsNativeBigInt) {
        return new NativeBigInt(BigInt(sign ? "-" + v : v));
      }

      var r = [],
          max = v.length,
          l = LOG_BASE,
          min = max - l;

      while (max > 0) {
        r.push(+v.slice(min, max));
        min -= l;
        if (min < 0) min = 0;
        max -= l;
      }

      trim(r);
      return new BigInteger(r, sign);
    }

    function parseNumberValue(v) {
      if (supportsNativeBigInt) {
        return new NativeBigInt(BigInt(v));
      }

      if (isPrecise(v)) {
        if (v !== truncate(v)) throw new Error(v + " is not an integer.");
        return new SmallInteger(v);
      }

      return parseStringValue(v.toString());
    }

    function parseValue(v) {
      if (typeof v === "number") {
        return parseNumberValue(v);
      }

      if (typeof v === "string") {
        return parseStringValue(v);
      }

      if (typeof v === "bigint") {
        return new NativeBigInt(v);
      }

      return v;
    } // Pre-define numbers in range [-999,999]


    for (var i = 0; i < 1000; i++) {
      Integer[i] = parseValue(i);
      if (i > 0) Integer[-i] = parseValue(-i);
    } // Backwards compatibility


    Integer.one = Integer[1];
    Integer.zero = Integer[0];
    Integer.minusOne = Integer[-1];
    Integer.max = max;
    Integer.min = min;
    Integer.gcd = gcd;
    Integer.lcm = lcm;

    Integer.isInstance = function (x) {
      return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt;
    };

    Integer.randBetween = randBetween;

    Integer.fromArray = function (digits, base, isNegative) {
      return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
    };

    return Integer;
  }(); // Node.js check


  if (module.hasOwnProperty("exports")) {
    module.exports = bigInt;
  } //amd check
})(BigInteger);

var bigInt = BigInteger.exports;

var INTRINSICS = {};

var customUtilInspectFormatters = _defineProperty({}, 'Temporal.Duration', function TemporalDuration(depth, options) {
  var descr = options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), 'special');
  if (depth < 1) return descr;
  var entries = [];

  for (var _i = 0, _arr = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']; _i < _arr.length; _i++) {
    var prop = _arr[_i];
    if (this[prop] !== 0) entries.push("  ".concat(prop, ": ").concat(options.stylize(this[prop], 'number')));
  }

  return descr + ' {\n' + entries.join(',\n') + '\n}';
});

function defaultUtilInspectFormatter(depth, options) {
  return options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), 'special');
}

function MakeIntrinsicClass(Class, name) {
  Object.defineProperty(Class.prototype, Symbol.toStringTag, {
    value: name,
    writable: false,
    enumerable: false,
    configurable: true
  });

  {
    Object.defineProperty(Class.prototype, Symbol.for('nodejs.util.inspect.custom'), {
      value: customUtilInspectFormatters[name] || defaultUtilInspectFormatter,
      writable: false,
      enumerable: false,
      configurable: true
    });
  }

  var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;
      var desc = Object.getOwnPropertyDescriptor(Class, prop);
      if (!desc.configurable || !desc.enumerable) continue;
      desc.enumerable = false;
      Object.defineProperty(Class, prop, desc);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class.prototype)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _prop = _step2.value;

      var _desc = Object.getOwnPropertyDescriptor(Class.prototype, _prop);

      if (!_desc.configurable || !_desc.enumerable) continue;
      _desc.enumerable = false;
      Object.defineProperty(Class.prototype, _prop, _desc);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  DefineIntrinsic(name, Class);
  DefineIntrinsic("".concat(name, ".prototype"), Class.prototype);
}
function DefineIntrinsic(name, value) {
  var key = "%".concat(name, "%");
  if (INTRINSICS[key] !== undefined) throw new Error("intrinsic ".concat(name, " already exists"));
  INTRINSICS[key] = value;
}
function GetIntrinsic(intrinsic) {
  return INTRINSICS[intrinsic];
}

// Instant
var EPOCHNANOSECONDS = 'slot-epochNanoSeconds'; // TimeZone

var TIMEZONE_ID = 'slot-timezone-identifier'; // DateTime, Date, Time, YearMonth, MonthDay

var ISO_YEAR = 'slot-year';
var ISO_MONTH = 'slot-month';
var ISO_DAY = 'slot-day';
var ISO_HOUR = 'slot-hour';
var ISO_MINUTE = 'slot-minute';
var ISO_SECOND = 'slot-second';
var ISO_MILLISECOND = 'slot-millisecond';
var ISO_MICROSECOND = 'slot-microsecond';
var ISO_NANOSECOND = 'slot-nanosecond';
var CALENDAR = 'slot-calendar'; // Date, YearMonth, and MonthDay all have the same slots, disambiguation needed:

var DATE_BRAND = 'slot-date-brand';
var YEAR_MONTH_BRAND = 'slot-year-month-brand';
var MONTH_DAY_BRAND = 'slot-month-day-brand'; // ZonedDateTime

var INSTANT = 'slot-cached-instant';
var TIME_ZONE = 'slot-time-zone'; // Duration

var YEARS = 'slot-years';
var MONTHS = 'slot-months';
var WEEKS = 'slot-weeks';
var DAYS = 'slot-days';
var HOURS = 'slot-hours';
var MINUTES = 'slot-minutes';
var SECONDS = 'slot-seconds';
var MILLISECONDS = 'slot-milliseconds';
var MICROSECONDS = 'slot-microseconds';
var NANOSECONDS = 'slot-nanoseconds'; // Calendar

var CALENDAR_ID = 'slot-calendar-identifier';
var slots = new WeakMap();
function CreateSlots(container) {
  slots.set(container, Object.create(null));
}

function GetSlots(container) {
  return slots.get(container);
}

function HasSlot(container) {
  if (!container || 'object' !== _typeof(container)) return false;
  var myslots = GetSlots(container);

  for (var _len = arguments.length, ids = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ids[_key - 1] = arguments[_key];
  }

  return !!myslots && ids.reduce(function (all, id) {
    return all && id in myslots;
  }, true);
}
function GetSlot(container, id) {
  var value = GetSlots(container)[id];
  if (value === undefined) throw new TypeError("Missing internal slot ".concat(id));
  return value;
}
function SetSlot(container, id, value) {
  GetSlots(container)[id] = value;
}

var _excluded = ["month", "monthCode", "year", "era", "eraYear"];
var ArrayIncludes = Array.prototype.includes;
var ArrayPrototypePush$2 = Array.prototype.push;
var IntlDateTimeFormat$2 = globalThis.Intl.DateTimeFormat;
var MathAbs$1 = Math.abs;
var MathFloor$1 = Math.floor;
var ObjectAssign$2 = Object.assign;
var ObjectEntries = Object.entries;
var ObjectKeys = Object.keys;
var ReflectApply$2 = Reflect.apply;
var impl = {};
var Calendar = /*#__PURE__*/function () {
  function Calendar(idParam) {
    _classCallCheck(this, Calendar);

    // Note: if the argument is not passed, IsBuiltinCalendar("undefined") will fail. This check
    //       exists only to improve the error message.
    if (arguments.length < 1) {
      throw new RangeError('missing argument: id is required');
    }

    var id = ToString(idParam);
    if (!IsBuiltinCalendar(id)) throw new RangeError("invalid calendar identifier ".concat(id));
    CreateSlots(this);
    SetSlot(this, CALENDAR_ID, id);

    {
      Object.defineProperty(this, '_repr_', {
        value: "".concat(this[Symbol.toStringTag], " <").concat(id, ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }

  _createClass(Calendar, [{
    key: "id",
    get: function get() {
      return ToString(this);
    }
  }, {
    key: "dateFromFields",
    value: function dateFromFields(fields) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsObject(fields)) throw new TypeError('invalid fields');
      var options = GetOptionsObject(optionsParam);
      return impl[GetSlot(this, CALENDAR_ID)].dateFromFields(fields, options, this);
    }
  }, {
    key: "yearMonthFromFields",
    value: function yearMonthFromFields(fields) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsObject(fields)) throw new TypeError('invalid fields');
      var options = GetOptionsObject(optionsParam);
      return impl[GetSlot(this, CALENDAR_ID)].yearMonthFromFields(fields, options, this);
    }
  }, {
    key: "monthDayFromFields",
    value: function monthDayFromFields(fields) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsObject(fields)) throw new TypeError('invalid fields');
      var options = GetOptionsObject(optionsParam);
      return impl[GetSlot(this, CALENDAR_ID)].monthDayFromFields(fields, options, this);
    }
  }, {
    key: "fields",
    value: function fields(_fields) {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var fieldsArray = [];
      var allowed = new Set(['year', 'month', 'monthCode', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond']);

      var _iterator = _createForOfIteratorHelper(_fields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          if (typeof name !== 'string') throw new TypeError('invalid fields');
          if (!allowed.has(name)) throw new RangeError("invalid field name ".concat(name));
          allowed.delete(name);
          ArrayPrototypePush$2.call(fieldsArray, name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return impl[GetSlot(this, CALENDAR_ID)].fields(fieldsArray);
    }
  }, {
    key: "mergeFields",
    value: function mergeFields(fields, additionalFields) {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      return impl[GetSlot(this, CALENDAR_ID)].mergeFields(fields, additionalFields);
    }
  }, {
    key: "dateAdd",
    value: function dateAdd(dateParam, durationParam) {
      var optionsParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var date = ToTemporalDate(dateParam);
      var duration = ToTemporalDuration(durationParam);
      var options = GetOptionsObject(optionsParam);
      var overflow = ToTemporalOverflow(options);

      var _ES$BalanceDuration = BalanceDuration(GetSlot(duration, DAYS), GetSlot(duration, HOURS), GetSlot(duration, MINUTES), GetSlot(duration, SECONDS), GetSlot(duration, MILLISECONDS), GetSlot(duration, MICROSECONDS), GetSlot(duration, NANOSECONDS), 'day'),
          days = _ES$BalanceDuration.days;

      return impl[GetSlot(this, CALENDAR_ID)].dateAdd(date, GetSlot(duration, YEARS), GetSlot(duration, MONTHS), GetSlot(duration, WEEKS), days, overflow, this);
    }
  }, {
    key: "dateUntil",
    value: function dateUntil(oneParam, twoParam) {
      var optionsParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var one = ToTemporalDate(oneParam);
      var two = ToTemporalDate(twoParam);
      var options = GetOptionsObject(optionsParam);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'], 'day');

      var _impl$GetSlot$dateUnt = impl[GetSlot(this, CALENDAR_ID)].dateUntil(one, two, largestUnit),
          years = _impl$GetSlot$dateUnt.years,
          months = _impl$GetSlot$dateUnt.months,
          weeks = _impl$GetSlot$dateUnt.weeks,
          days = _impl$GetSlot$dateUnt.days;

      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    }
  }, {
    key: "year",
    value: function year(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
      return impl[GetSlot(this, CALENDAR_ID)].year(date);
    }
  }, {
    key: "month",
    value: function month(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (IsTemporalMonthDay(date)) throw new TypeError('use monthCode on PlainMonthDay instead');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
      return impl[GetSlot(this, CALENDAR_ID)].month(date);
    }
  }, {
    key: "monthCode",
    value: function monthCode(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date) && !IsTemporalMonthDay(date)) date = ToTemporalDate(date);
      return impl[GetSlot(this, CALENDAR_ID)].monthCode(date);
    }
  }, {
    key: "day",
    value: function day(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalMonthDay(date)) date = ToTemporalDate(date);
      return impl[GetSlot(this, CALENDAR_ID)].day(date);
    }
  }, {
    key: "era",
    value: function era(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
      return impl[GetSlot(this, CALENDAR_ID)].era(date);
    }
  }, {
    key: "eraYear",
    value: function eraYear(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date);
      return impl[GetSlot(this, CALENDAR_ID)].eraYear(date);
    }
  }, {
    key: "dayOfWeek",
    value: function dayOfWeek(dateParam) {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var date = ToTemporalDate(dateParam);
      return impl[GetSlot(this, CALENDAR_ID)].dayOfWeek(date);
    }
  }, {
    key: "dayOfYear",
    value: function dayOfYear(dateParam) {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var date = ToTemporalDate(dateParam);
      return impl[GetSlot(this, CALENDAR_ID)].dayOfYear(date);
    }
  }, {
    key: "weekOfYear",
    value: function weekOfYear(dateParam) {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var date = ToTemporalDate(dateParam);
      return impl[GetSlot(this, CALENDAR_ID)].weekOfYear(date);
    }
  }, {
    key: "daysInWeek",
    value: function daysInWeek(dateParam) {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      var date = ToTemporalDate(dateParam);
      return impl[GetSlot(this, CALENDAR_ID)].daysInWeek(date);
    }
  }, {
    key: "daysInMonth",
    value: function daysInMonth(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date); // TODO: is the cast below (here and in other methods) safe?  What if it's
      // a PlainYearMonth?

      return impl[GetSlot(this, CALENDAR_ID)].daysInMonth(date);
    }
  }, {
    key: "daysInYear",
    value: function daysInYear(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date); // TODO: is the cast below (here and in other methods) safe?  What if it's
      // a PlainYearMonth?

      return impl[GetSlot(this, CALENDAR_ID)].daysInYear(date);
    }
  }, {
    key: "monthsInYear",
    value: function monthsInYear(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date); // TODO: is the cast below (here and in other methods) safe?  What if it's
      // a PlainYearMonth?

      return impl[GetSlot(this, CALENDAR_ID)].monthsInYear(date);
    }
  }, {
    key: "inLeapYear",
    value: function inLeapYear(dateParam) {
      var date = dateParam;
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      if (!IsTemporalYearMonth(date)) date = ToTemporalDate(date); // TODO: is the cast below (here and in other methods) safe?  What if it's
      // a PlainYearMonth?

      return impl[GetSlot(this, CALENDAR_ID)].inLeapYear(date);
    }
  }, {
    key: "toString",
    value: function toString() {
      if (!IsTemporalCalendar(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, CALENDAR_ID);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return ToString(this);
    }
  }], [{
    key: "from",
    value: function from(item) {
      return ToTemporalCalendar(item);
    }
  }]);

  return Calendar;
}();
MakeIntrinsicClass(Calendar, 'Temporal.Calendar');
DefineIntrinsic('Temporal.Calendar.from', Calendar.from);
impl['iso8601'] = {
  dateFromFields: function dateFromFields(fieldsParam, options, calendar) {
    var overflow = ToTemporalOverflow(options);
    var fields = PrepareTemporalFields(fieldsParam, [['day'], ['month', undefined], ['monthCode', undefined], ['year']]);
    fields = resolveNonLunisolarMonth(fields);
    var _fields2 = fields,
        year = _fields2.year,
        month = _fields2.month,
        day = _fields2.day;

    var _ES$RegulateISODate = RegulateISODate(year, month, day, overflow);

    year = _ES$RegulateISODate.year;
    month = _ES$RegulateISODate.month;
    day = _ES$RegulateISODate.day;
    return CreateTemporalDate(year, month, day, calendar);
  },
  yearMonthFromFields: function yearMonthFromFields(fieldsParam, options, calendar) {
    var overflow = ToTemporalOverflow(options);
    var fields = PrepareTemporalFields(fieldsParam, [['month', undefined], ['monthCode', undefined], ['year']]);
    fields = resolveNonLunisolarMonth(fields);
    var _fields3 = fields,
        year = _fields3.year,
        month = _fields3.month;

    var _ES$RegulateISOYearMo = RegulateISOYearMonth(year, month, overflow);

    year = _ES$RegulateISOYearMo.year;
    month = _ES$RegulateISOYearMo.month;
    return CreateTemporalYearMonth(year, month, calendar,
    /* referenceISODay = */
    1);
  },
  monthDayFromFields: function monthDayFromFields(fieldsParam, options, calendar) {
    var overflow = ToTemporalOverflow(options);
    var fields = PrepareTemporalFields(fieldsParam, [['day'], ['month', undefined], ['monthCode', undefined], ['year', undefined]]);

    if (fields.month !== undefined && fields.year === undefined && fields.monthCode === undefined) {
      throw new TypeError('either year or monthCode required with month');
    }

    var useYear = fields.monthCode === undefined;
    var referenceISOYear = 1972;
    fields = resolveNonLunisolarMonth(fields);
    var _fields4 = fields,
        month = _fields4.month,
        day = _fields4.day,
        year = _fields4.year;

    var _ES$RegulateISODate2 = RegulateISODate(useYear ? year : referenceISOYear, month, day, overflow);

    month = _ES$RegulateISODate2.month;
    day = _ES$RegulateISODate2.day;
    return CreateTemporalMonthDay(month, day, calendar, referenceISOYear);
  },
  fields: function fields(_fields5) {
    return _fields5;
  },
  mergeFields: function mergeFields(fields, additionalFields) {
    var merged = {};

    var _iterator2 = _createForOfIteratorHelper(ObjectKeys(fields)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var nextKey = _step2.value;
        if (nextKey === 'month' || nextKey === 'monthCode') continue;
        merged[nextKey] = fields[nextKey];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var newKeys = ObjectKeys(additionalFields);

    var _iterator3 = _createForOfIteratorHelper(newKeys),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _nextKey = _step3.value;
        merged[_nextKey] = additionalFields[_nextKey];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (!ArrayIncludes.call(newKeys, 'month') && !ArrayIncludes.call(newKeys, 'monthCode')) {
      var month = fields.month,
          monthCode = fields.monthCode;
      if (month !== undefined) merged.month = month;
      if (monthCode !== undefined) merged.monthCode = monthCode;
    }

    return merged;
  },
  dateAdd: function dateAdd(date, years, months, weeks, days, overflow, calendar) {
    var year = GetSlot(date, ISO_YEAR);
    var month = GetSlot(date, ISO_MONTH);
    var day = GetSlot(date, ISO_DAY);

    var _ES$AddISODate = AddISODate(year, month, day, years, months, weeks, days, overflow);

    year = _ES$AddISODate.year;
    month = _ES$AddISODate.month;
    day = _ES$AddISODate.day;
    return CreateTemporalDate(year, month, day, calendar);
  },
  dateUntil: function dateUntil(one, two, largestUnit) {
    return DifferenceISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY), largestUnit);
  },
  year: function year(date) {
    return GetSlot(date, ISO_YEAR);
  },
  era: function era() {
    return undefined;
  },
  eraYear: function eraYear() {
    return undefined;
  },
  month: function month(date) {
    return GetSlot(date, ISO_MONTH);
  },
  monthCode: function monthCode(date) {
    return buildMonthCode(GetSlot(date, ISO_MONTH));
  },
  day: function day(date) {
    return GetSlot(date, ISO_DAY);
  },
  dayOfWeek: function dayOfWeek(date) {
    return DayOfWeek(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
  },
  dayOfYear: function dayOfYear(date) {
    return DayOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
  },
  weekOfYear: function weekOfYear(date) {
    return WeekOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
  },
  daysInWeek: function daysInWeek() {
    return 7;
  },
  daysInMonth: function daysInMonth(date) {
    return ISODaysInMonth(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH));
  },
  daysInYear: function daysInYear(dateParam) {
    var date = dateParam;
    if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
    return LeapYear(GetSlot(date, ISO_YEAR)) ? 366 : 365;
  },
  monthsInYear: function monthsInYear() {
    return 12;
  },
  inLeapYear: function inLeapYear(dateParam) {
    var date = dateParam;
    if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
    return LeapYear(GetSlot(date, ISO_YEAR));
  }
}; // Note: other built-in calendars than iso8601 are not part of the Temporal
// proposal for ECMA-262. These calendars will be standardized as part of
// ECMA-402.

function monthCodeNumberPart(monthCode) {
  if (!monthCode.startsWith('M')) {
    throw new RangeError("Invalid month code: ".concat(monthCode, ".  Month codes must start with M."));
  }

  var month = +monthCode.slice(1);
  if (isNaN(month)) throw new RangeError("Invalid month code: ".concat(monthCode));
  return month;
}

function buildMonthCode(month) {
  var leap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "M".concat(month.toString().padStart(2, '0')).concat(leap ? 'L' : '');
}
/**
 * Safely merge a month, monthCode pair into an integer month.
 * If both are present, make sure they match.
 * This logic doesn't work for lunisolar calendars!
 * */


function resolveNonLunisolarMonth(calendarDate) {
  var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var monthsPerYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  var month = calendarDate.month,
      monthCode = calendarDate.monthCode;

  if (monthCode === undefined) {
    if (month === undefined) throw new TypeError('Either month or monthCode are required'); // The ISO calendar uses the default (undefined) value because it does
    // constrain/reject after this method returns. Non-ISO calendars, however,
    // rely on this function to constrain/reject out-of-range `month` values.

    if (overflow === 'reject') RejectToRange(month, 1, monthsPerYear);
    if (overflow === 'constrain') month = ConstrainToRange(month, 1, monthsPerYear);
    monthCode = buildMonthCode(month);
  } else {
    var numberPart = monthCodeNumberPart(monthCode);

    if (month !== undefined && month !== numberPart) {
      throw new RangeError("monthCode ".concat(monthCode, " and month ").concat(month, " must match if both are present"));
    }

    if (monthCode !== buildMonthCode(numberPart)) {
      throw new RangeError("Invalid month code: ".concat(monthCode));
    }

    month = numberPart;
    if (month < 1 || month > monthsPerYear) throw new RangeError("Invalid monthCode: ".concat(monthCode));
  }

  return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
    month: month,
    monthCode: monthCode
  });
}
/**
 * This prototype implementation of non-ISO calendars makes many repeated calls
 * to Intl APIs which may be slow (e.g. >0.2ms). This trivial cache will speed
 * up these repeat accesses. Each cache instance is associated (via a WeakMap)
 * to a specific Temporal object, which speeds up multiple calendar calls on the
 * same Temporal object instance.  No invalidation or pruning is necessary
 * because each object's cache is thrown away when the object is GC-ed.
 */


var OneObjectCache = /*#__PURE__*/function () {
  function OneObjectCache() {
    var cacheToClone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    _classCallCheck(this, OneObjectCache);

    this.map = new Map();
    this.calls = 0;
    this.hits = 0;
    this.misses = 0;
    this.now = globalThis.performance ? globalThis.performance.now() : Date.now();

    if (cacheToClone !== undefined) {
      var i = 0; // TODO why was this originally cacheToClone.length ?

      var _iterator4 = _createForOfIteratorHelper(cacheToClone.map.entries()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _this$map;

          var entry = _step4.value;
          if (++i > OneObjectCache.MAX_CACHE_ENTRIES) break;

          (_this$map = this.map).set.apply(_this$map, _toConsumableArray(entry));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }

  _createClass(OneObjectCache, [{
    key: "get",
    value: function get(key) {
      var result = this.map.get(key);

      if (result) {
        this.hits++;
        this.report();
      }

      this.calls++;
      return result;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.map.set(key, value);
      this.misses++;
      this.report();
    }
  }, {
    key: "report",
    value: function report() {
      /*
      if (this.calls === 0) return;
      const ms = (globalThis.performance ? globalThis.performance.now() : Date.now()) - this.now;
      const hitRate = ((100 * this.hits) / this.calls).toFixed(0);
      console.log(`${this.calls} calls in ${ms.toFixed(2)}ms. Hits: ${this.hits} (${hitRate}%). Misses: ${this.misses}.`);
      */
    }
  }, {
    key: "setObject",
    value: function setObject(obj) {
      if (OneObjectCache.objectMap.get(obj)) throw new RangeError('object already cached');
      OneObjectCache.objectMap.set(obj, this);
      this.report();
    }
    /**
     * Returns a WeakMap-backed cache that's used to store expensive results
     * that are associated with a particular Temporal object instance.
     *
     * @param obj - object to associate with the cache
     */

  }], [{
    key: "getCacheForObject",
    value: function getCacheForObject(obj) {
      var cache = OneObjectCache.objectMap.get(obj);

      if (!cache) {
        cache = new OneObjectCache();
        OneObjectCache.objectMap.set(obj, cache);
      }

      return cache;
    }
  }]);

  return OneObjectCache;
}();

OneObjectCache.objectMap = new WeakMap();
OneObjectCache.MAX_CACHE_ENTRIES = 1000;

function toUtcIsoDateString(_ref) {
  var isoYear = _ref.isoYear,
      isoMonth = _ref.isoMonth,
      isoDay = _ref.isoDay;
  var yearString = ISOYearString(isoYear);
  var monthString = ISODateTimePartString(isoMonth);
  var dayString = ISODateTimePartString(isoDay);
  return "".concat(yearString, "-").concat(monthString, "-").concat(dayString, "T00:00Z");
}

function simpleDateDiff(one, two) {
  return {
    years: one.year - two.year,
    months: one.month - two.month,
    days: one.day - two.day
  };
}
/**
 * Implementation that's common to all non-trivial non-ISO calendars
 */


var nonIsoHelperBase = {
  // The properties and methods below here should be the same for all lunar/lunisolar calendars.
  getFormatter: function getFormatter() {
    // `new Intl.DateTimeFormat()` is amazingly slow and chews up RAM. Per
    // https://bugs.chromium.org/p/v8/issues/detail?id=6528#c4, we cache one
    // DateTimeFormat instance per calendar. Caching is lazy so we only pay for
    // calendars that are used. Note that the nonIsoHelperBase object is spread
    // into each each calendar's implementation before any cache is created, so
    // each calendar gets its own separate cached formatter.
    if (typeof this.formatter === 'undefined') {
      this.formatter = new IntlDateTimeFormat$2("en-US-u-ca-".concat(this.id), {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        era: this.eraLength,
        timeZone: 'UTC'
      });
    }

    return this.formatter;
  },
  isoToCalendarDate: function isoToCalendarDate(isoDate, cache) {
    var _this = this;

    var isoYear = isoDate.year,
        isoMonth = isoDate.month,
        isoDay = isoDate.day;
    var key = JSON.stringify({
      func: 'isoToCalendarDate',
      isoYear: isoYear,
      isoMonth: isoMonth,
      isoDay: isoDay,
      id: this.id
    });
    var cached = cache.get(key);
    if (cached) return cached;
    var dateTimeFormat = this.getFormatter();
    var parts, isoString;

    try {
      isoString = toUtcIsoDateString({
        isoYear: isoYear,
        isoMonth: isoMonth,
        isoDay: isoDay
      });
      parts = dateTimeFormat.formatToParts(new Date(isoString));
    } catch (e) {
      throw new RangeError("Invalid ISO date: ".concat(JSON.stringify({
        isoYear: isoYear,
        isoMonth: isoMonth,
        isoDay: isoDay
      })));
    }

    var result = {};

    var _iterator5 = _createForOfIteratorHelper(parts),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = _step5.value,
            type = _step5$value.type,
            value = _step5$value.value;
        if (type === 'year') result.eraYear = +value; // TODO: remove this type annotation when this value gets into TS lib types

        if (type === 'relatedYear') result.eraYear = +value;

        if (type === 'month') {
          var matches = /^([-0-9.]+)(.*?)$/.exec(value);
          if (!matches || matches.length != 3) throw new RangeError("Unexpected month: ".concat(value));
          result.month = +matches[1];

          if (result.month < 1) {
            throw new RangeError("Invalid month ".concat(value, " from ").concat(isoString, "[u-ca-").concat(this.id, "]") + ' (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)');
          }

          if (result.month > 13) {
            throw new RangeError("Invalid month ".concat(value, " from ").concat(isoString, "[u-ca-").concat(this.id, "]") + ' (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)');
          }

          if (matches[2]) result.monthExtra = matches[2];
        }

        if (type === 'day') result.day = +value;

        if (this.hasEra && type === 'era' && value != null && value !== '') {
          // The convention for Temporal era values is lowercase, so following
          // that convention in this prototype. Punctuation is removed, accented
          // letters are normalized, and spaces are replaced with dashes.
          // E.g.: "ERA0" => "era0", "Before R.O.C." => "before-roc", "En’ō" => "eno"
          // The call to normalize() and the replacement regex deals with era
          // names that contain non-ASCII characters like Japanese eras. Also
          // ignore extra content in parentheses like JPN era date ranges.
          value = value.split(' (')[0];
          result.era = value.normalize('NFD').replace(/(?:(?![ \x2D0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])/g, '').replace(' ', '-').toLowerCase();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (result.eraYear === undefined) {
      // Node 12 has outdated ICU data that lacks the `relatedYear` field in the
      // output of Intl.DateTimeFormat.formatToParts.
      throw new RangeError("Intl.DateTimeFormat.formatToParts lacks relatedYear in ".concat(this.id, " calendar. Try Node 14+ or modern browsers."));
    } // Translate eras that may be handled differently by Temporal vs. by Intl
    // (e.g. Japanese pre-Meiji eras). See #526 for details.


    if (this.reviseIntlEra) {
      var _this$reviseIntlEra = this.reviseIntlEra(result, isoDate),
          era = _this$reviseIntlEra.era,
          eraYear = _this$reviseIntlEra.eraYear;

      result.era = era;
      result.eraYear = eraYear;
    }

    if (this.checkIcuBugs) this.checkIcuBugs(result, isoDate);
    var calendarDate = this.adjustCalendarDate(result, cache, 'constrain', true);
    if (calendarDate.year === undefined) throw new RangeError("Missing year converting ".concat(JSON.stringify(isoDate)));
    if (calendarDate.month === undefined) throw new RangeError("Missing month converting ".concat(JSON.stringify(isoDate)));
    if (calendarDate.day === undefined) throw new RangeError("Missing day converting ".concat(JSON.stringify(isoDate)));
    cache.set(key, calendarDate); // Also cache the reverse mapping

    ['constrain', 'reject'].forEach(function (overflow) {
      var keyReverse = JSON.stringify({
        func: 'calendarToIsoDate',
        year: calendarDate.year,
        month: calendarDate.month,
        day: calendarDate.day,
        overflow: overflow,
        id: _this.id
      });
      cache.set(keyReverse, isoDate);
    });
    return calendarDate;
  },
  validateCalendarDate: function validateCalendarDate(calendarDate) {
    var era = calendarDate.era,
        month = calendarDate.month,
        year = calendarDate.year,
        day = calendarDate.day,
        eraYear = calendarDate.eraYear,
        monthCode = calendarDate.monthCode,
        monthExtra = calendarDate.monthExtra; // When there's a suffix (e.g. "5bis" for a leap month in Chinese calendar)
    // the derived class must deal with it.

    if (monthExtra !== undefined) throw new RangeError('Unexpected `monthExtra` value');
    if (year === undefined && eraYear === undefined) throw new TypeError('year or eraYear is required');
    if (month === undefined && monthCode === undefined) throw new TypeError('month or monthCode is required');
    if (day === undefined) throw new RangeError('Missing day');

    if (monthCode !== undefined) {
      if (typeof monthCode !== 'string') {
        throw new RangeError("monthCode must be a string, not ".concat(_typeof(monthCode)));
      }

      if (!/^M([01]?\d)(L?)$/.test(monthCode)) throw new RangeError("Invalid monthCode: ".concat(monthCode));
    }

    if (this.constantEra) {
      if (era !== undefined && era !== this.constantEra) {
        throw new RangeError("era must be ".concat(this.constantEra, ", not ").concat(era));
      }

      if (eraYear !== undefined && year !== undefined && eraYear !== year) {
        throw new RangeError("eraYear ".concat(eraYear, " does not match year ").concat(year));
      }
    }
  },

  /**
   * Allows derived calendars to add additional fields and/or to make
   * adjustments e.g. to set the era based on the date or to revise the month
   * number in lunisolar calendars per
   * https://github.com/tc39/proposal-temporal/issues/1203.
   *
   * The base implementation fills in missing values by assuming the simplest
   * possible calendar:
   * - no eras or a constant era defined in `.constantEra`
   * - non-lunisolar calendar (no leap months)
   * */
  adjustCalendarDate: function adjustCalendarDate(calendarDateParam, cache, overflow
  /*, fromLegacyDate = false */
  ) {
    if (this.calendarType === 'lunisolar') throw new RangeError('Override required for lunisolar calendars');
    var calendarDate = calendarDateParam;
    this.validateCalendarDate(calendarDate);
    var largestMonth = this.monthsInYear(calendarDate, cache);
    var _calendarDate = calendarDate,
        month = _calendarDate.month,
        year = _calendarDate.year,
        eraYear = _calendarDate.eraYear,
        monthCode = _calendarDate.monthCode; // For calendars that always use the same era, set it here so that derived
    // calendars won't need to implement this method simply to set the era.

    if (this.constantEra) {
      // year and eraYear always match when there's only one possible era
      if (year === undefined) year = eraYear;
      if (eraYear === undefined) eraYear = year;
      calendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        era: this.constantEra,
        year: year,
        eraYear: eraYear
      });
    }

    var _resolveNonLunisolarM = resolveNonLunisolarMonth(calendarDate, overflow, largestMonth);

    month = _resolveNonLunisolarM.month;
    monthCode = _resolveNonLunisolarM.monthCode;
    return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
      month: month,
      monthCode: monthCode
    });
  },
  regulateMonthDayNaive: function regulateMonthDayNaive(calendarDate, overflow, cache) {
    var largestMonth = this.monthsInYear(calendarDate, cache);
    var month = calendarDate.month,
        day = calendarDate.day;

    if (overflow === 'reject') {
      RejectToRange(month, 1, largestMonth);
      RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
    } else {
      month = ConstrainToRange(month, 1, largestMonth);
      day = ConstrainToRange(day, 1, this.maximumMonthLength(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
        month: month
      })));
    }

    return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
      month: month,
      day: day
    });
  },
  calendarToIsoDate: function calendarToIsoDate(dateParam) {
    var _this2 = this;

    var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constrain';
    var cache = arguments.length > 2 ? arguments[2] : undefined;
    var originalDate = dateParam; // First, normalize the calendar date to ensure that (year, month, day)
    // are all present, converting monthCode and eraYear if needed.

    var date = this.adjustCalendarDate(dateParam, cache, overflow, false); // Fix obviously out-of-bounds values. Values that are valid generally, but
    // not in this particular year, may not be caught here for some calendars.
    // If so, these will be handled lower below.

    date = this.regulateMonthDayNaive(date, overflow, cache);
    var _date = date,
        year = _date.year,
        month = _date.month,
        day = _date.day;
    var key = JSON.stringify({
      func: 'calendarToIsoDate',
      year: year,
      month: month,
      day: day,
      overflow: overflow,
      id: this.id
    });
    var cached = cache.get(key);
    if (cached) return cached; // If YMD are present in the input but the input has been constrained
    // already, then cache both the original value and the constrained value.

    var keyOriginal;

    if (originalDate.year !== undefined && originalDate.month !== undefined && originalDate.day !== undefined && (originalDate.year !== date.year || originalDate.month !== date.month || originalDate.day !== date.day)) {
      keyOriginal = JSON.stringify({
        func: 'calendarToIsoDate',
        year: originalDate.year,
        month: originalDate.month,
        day: originalDate.day,
        overflow: overflow,
        id: this.id
      });
      cached = cache.get(keyOriginal);
      if (cached) return cached;
    } // First, try to roughly guess the result


    var isoEstimate = this.estimateIsoDate({
      year: year,
      month: month,
      day: day
    });

    var calculateSameMonthResult = function calculateSameMonthResult(diffDays) {
      // If the estimate is in the same year & month as the target, then we can
      // calculate the result exactly and short-circuit any additional logic.
      // This optimization assumes that months are continuous. It would break if
      // a calendar skipped days, like the Julian->Gregorian switchover. But the
      // only ICU calendars that currently skip days (japanese/roc/buddhist) is
      // a bug (https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)
      // that's currently detected by `checkIcuBugs()` which will throw. So
      // this optimization should be safe for all ICU calendars.
      var testIsoEstimate = _this2.addDaysIso(isoEstimate, diffDays);

      if (date.day > _this2.minimumMonthLength(date)) {
        // There's a chance that the calendar date is out of range. Throw or
        // constrain if so.
        var testCalendarDate = _this2.isoToCalendarDate(testIsoEstimate, cache);

        while (testCalendarDate.month !== month || testCalendarDate.year !== year) {
          if (overflow === 'reject') {
            throw new RangeError("day ".concat(day, " does not exist in month ").concat(month, " of year ").concat(year));
          } // Back up a day at a time until we're not hanging over the month end


          testIsoEstimate = _this2.addDaysIso(testIsoEstimate, -1);
          testCalendarDate = _this2.isoToCalendarDate(testIsoEstimate, cache);
        }
      }

      return testIsoEstimate;
    };

    var sign = 0;
    var roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
    var diff = simpleDateDiff(date, roundtripEstimate);

    if (diff.years !== 0 || diff.months !== 0 || diff.days !== 0) {
      var diffTotalDaysEstimate = diff.years * 365 + diff.months * 30 + diff.days;
      isoEstimate = this.addDaysIso(isoEstimate, diffTotalDaysEstimate);
      roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
      diff = simpleDateDiff(date, roundtripEstimate);

      if (diff.years === 0 && diff.months === 0) {
        isoEstimate = calculateSameMonthResult(diff.days);
      } else {
        sign = this.compareCalendarDates(date, roundtripEstimate);
      }
    } // If the initial guess is not in the same month, then then bisect the
    // distance to the target, starting with 8 days per step.


    var increment = 8;
    var maybeConstrained = false;

    while (sign) {
      isoEstimate = this.addDaysIso(isoEstimate, sign * increment);
      var oldRoundtripEstimate = roundtripEstimate;
      roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
      var oldSign = sign;
      sign = this.compareCalendarDates(date, roundtripEstimate);

      if (sign) {
        diff = simpleDateDiff(date, roundtripEstimate);

        if (diff.years === 0 && diff.months === 0) {
          isoEstimate = calculateSameMonthResult(diff.days); // Signal the loop condition that there's a match.

          sign = 0; // If the calendar day is larger than the minimal length for this
          // month, then it might be larger than the actual length of the month.
          // So we won't cache it as the correct calendar date for this ISO
          // date.

          maybeConstrained = date.day > this.minimumMonthLength(date);
        } else if (oldSign && sign !== oldSign) {
          if (increment > 1) {
            // If the estimate overshot the target, try again with a smaller increment
            // in the reverse direction.
            increment /= 2;
          } else {
            // Increment is 1, and neither the previous estimate nor the new
            // estimate is correct. The only way that can happen is if the
            // original date was an invalid value that will be constrained or
            // rejected here.
            if (overflow === 'reject') {
              throw new RangeError("Can't find ISO date from calendar date: ".concat(JSON.stringify(_objectSpread2({}, originalDate))));
            } else {
              // To constrain, pick the earliest value
              var order = this.compareCalendarDates(roundtripEstimate, oldRoundtripEstimate); // If current value is larger, then back up to the previous value.

              if (order > 0) isoEstimate = this.addDaysIso(isoEstimate, -1);
              maybeConstrained = true;
              sign = 0;
            }
          }
        }
      }
    }

    cache.set(key, isoEstimate);
    if (keyOriginal) cache.set(keyOriginal, isoEstimate);

    if (date.year === undefined || date.month === undefined || date.day === undefined || date.monthCode === undefined || this.hasEra && (date.era === undefined || date.eraYear === undefined)) {
      throw new RangeError('Unexpected missing property');
    }

    if (!maybeConstrained) {
      // Also cache the reverse mapping
      var keyReverse = JSON.stringify({
        func: 'isoToCalendarDate',
        isoYear: isoEstimate.year,
        isoMonth: isoEstimate.month,
        isoDay: isoEstimate.day,
        id: this.id
      });
      cache.set(keyReverse, date);
    }

    return isoEstimate;
  },
  temporalToCalendarDate: function temporalToCalendarDate(date, cache) {
    var isoDate = {
      year: GetSlot(date, ISO_YEAR),
      month: GetSlot(date, ISO_MONTH),
      day: GetSlot(date, ISO_DAY)
    };
    var result = this.isoToCalendarDate(isoDate, cache);
    return result;
  },
  compareCalendarDates: function compareCalendarDates(date1Param, date2Param) {
    // `date1` and `date2` are already records. The calls below simply validate
    // that all three required fields are present.
    var date1 = PrepareTemporalFields(date1Param, [['day'], ['month'], ['year']]);
    var date2 = PrepareTemporalFields(date2Param, [['day'], ['month'], ['year']]);
    if (date1.year !== date2.year) return ComparisonResult(date1.year - date2.year);
    if (date1.month !== date2.month) return ComparisonResult(date1.month - date2.month);
    if (date1.day !== date2.day) return ComparisonResult(date1.day - date2.day);
    return 0;
  },

  /** Ensure that a calendar date actually exists. If not, return the closest earlier date. */
  regulateDate: function regulateDate(calendarDate) {
    var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constrain';
    var cache = arguments.length > 2 ? arguments[2] : undefined;
    var isoDate = this.calendarToIsoDate(calendarDate, overflow, cache);
    return this.isoToCalendarDate(isoDate, cache);
  },
  addDaysIso: function addDaysIso(isoDate, days) {
    var added = AddISODate(isoDate.year, isoDate.month, isoDate.day, 0, 0, 0, days, 'constrain');
    return added;
  },
  addDaysCalendar: function addDaysCalendar(calendarDate, days, cache) {
    var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
    var addedIso = this.addDaysIso(isoDate, days);
    var addedCalendar = this.isoToCalendarDate(addedIso, cache);
    return addedCalendar;
  },
  addMonthsCalendar: function addMonthsCalendar(calendarDateParam, months, overflow, cache) {
    var calendarDate = calendarDateParam;
    var _calendarDate2 = calendarDate,
        day = _calendarDate2.day;

    for (var i = 0, absMonths = MathAbs$1(months); i < absMonths; i++) {
      var _calendarDate3 = calendarDate,
          month = _calendarDate3.month;
      var oldCalendarDate = calendarDate;
      var days = months < 0 ? -Math.max(day, this.daysInPreviousMonth(calendarDate, cache)) : this.daysInMonth(calendarDate, cache);
      var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
      var addedIso = this.addDaysIso(isoDate, days, cache);
      calendarDate = this.isoToCalendarDate(addedIso, cache); // Normally, we can advance one month by adding the number of days in the
      // current month. However, if we're at the end of the current month and
      // the next month has fewer days, then we rolled over to the after-next
      // month. Below we detect this condition and back up until we're back in
      // the desired month.

      if (months > 0) {
        var monthsInOldYear = this.monthsInYear(oldCalendarDate, cache);

        while (calendarDate.month - 1 !== month % monthsInOldYear) {
          addedIso = this.addDaysIso(addedIso, -1, cache);
          calendarDate = this.isoToCalendarDate(addedIso, cache);
        }
      }

      if (calendarDate.day !== day) {
        // try to retain the original day-of-month, if possible
        calendarDate = this.regulateDate(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
          day: day
        }), 'constrain', cache);
      }
    }

    if (overflow === 'reject' && calendarDate.day !== day) {
      throw new RangeError("Day ".concat(day, " does not exist in resulting calendar month"));
    }

    return calendarDate;
  },
  addCalendar: function addCalendar(calendarDate, _ref2, overflow, cache) {
    var _ref2$years = _ref2.years,
        years = _ref2$years === void 0 ? 0 : _ref2$years,
        _ref2$months = _ref2.months,
        months = _ref2$months === void 0 ? 0 : _ref2$months,
        _ref2$weeks = _ref2.weeks,
        weeks = _ref2$weeks === void 0 ? 0 : _ref2$weeks,
        _ref2$days = _ref2.days,
        days = _ref2$days === void 0 ? 0 : _ref2$days;
    var year = calendarDate.year,
        month = calendarDate.month,
        day = calendarDate.day;
    var addedMonths = this.addMonthsCalendar({
      year: year + years,
      month: month,
      day: day
    }, months, overflow, cache);
    var initialDays = days + weeks * 7;
    var addedDays = this.addDaysCalendar(addedMonths, initialDays, cache);
    return addedDays;
  },
  untilCalendar: function untilCalendar(calendarOne, calendarTwo, largestUnit, cache) {
    var days = 0;
    var weeks = 0;
    var months = 0;
    var years = 0;

    switch (largestUnit) {
      case 'day':
        days = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
        break;

      case 'week':
        {
          var totalDays = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
          days = totalDays % 7;
          weeks = (totalDays - days) / 7;
          break;
        }

      case 'month':
      case 'year':
        {
          var diffYears = calendarTwo.year - calendarOne.year;
          var diffMonths = calendarTwo.month - calendarOne.month;
          var diffDays = calendarTwo.day - calendarOne.day;
          var sign = this.compareCalendarDates(calendarTwo, calendarOne);

          if (largestUnit === 'year' && diffYears) {
            var isOneFurtherInYear = diffMonths * sign < 0 || diffMonths === 0 && diffDays * sign < 0;
            years = isOneFurtherInYear ? diffYears - sign : diffYears;
          }

          var yearsAdded = years ? this.addCalendar(calendarOne, {
            years: years
          }, 'constrain', cache) : calendarOne; // Now we have less than one year remaining. Add one month at a time
          // until we go over the target, then back up one month and calculate
          // remaining days and weeks.

          var current;
          var next = yearsAdded;

          do {
            months += sign;
            current = next;
            next = this.addMonthsCalendar(current, sign, 'constrain', cache);

            if (next.day !== calendarOne.day) {
              // In case the day was constrained down, try to un-constrain it
              next = this.regulateDate(_objectSpread2(_objectSpread2({}, next), {}, {
                day: calendarOne.day
              }), 'constrain', cache);
            }
          } while (this.compareCalendarDates(calendarTwo, next) * sign >= 0);

          months -= sign; // correct for loop above which overshoots by 1

          var remainingDays = this.calendarDaysUntil(current, calendarTwo, cache);
          days = remainingDays;
          break;
        }
    }

    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days
    };
  },
  daysInMonth: function daysInMonth(calendarDate, cache) {
    // Add enough days to roll over to the next month. One we're in the next
    // month, we can calculate the length of the current month. NOTE: This
    // algorithm assumes that months are continuous. It would break if a
    // calendar skipped days, like the Julian->Gregorian switchover. But the
    // only ICU calendars that currently skip days (japanese/roc/buddhist) is a
    // bug (https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)
    // that's currently detected by `checkIcuBugs()` which will throw. So this
    // code should be safe for all ICU calendars.
    var day = calendarDate.day;
    var max = this.maximumMonthLength(calendarDate);
    var min = this.minimumMonthLength(calendarDate); // easiest case: we already know the month length if min and max are the same.

    if (min === max) return min; // Add enough days to get into the next month, without skipping it

    var increment = day <= max - min ? max : min;
    var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
    var addedIsoDate = this.addDaysIso(isoDate, increment);
    var addedCalendarDate = this.isoToCalendarDate(addedIsoDate, cache); // Now back up to the last day of the original month

    var endOfMonthIso = this.addDaysIso(addedIsoDate, -addedCalendarDate.day);
    var endOfMonthCalendar = this.isoToCalendarDate(endOfMonthIso, cache);
    return endOfMonthCalendar.day;
  },
  daysInPreviousMonth: function daysInPreviousMonth(calendarDate, cache) {
    var day = calendarDate.day,
        month = calendarDate.month,
        year = calendarDate.year; // Check to see if we already know the month length, and return it if so

    var previousMonthYear = month > 1 ? year : year - 1;
    var previousMonthDate = {
      year: previousMonthYear,
      month: month,
      day: 1
    };
    var previousMonth = month > 1 ? month - 1 : this.monthsInYear(previousMonthDate, cache);
    previousMonthDate = _objectSpread2(_objectSpread2({}, previousMonthDate), {}, {
      month: previousMonth
    });
    var min = this.minimumMonthLength(previousMonthDate);
    var max = this.maximumMonthLength(previousMonthDate);
    if (min === max) return max;
    var isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
    var lastDayOfPreviousMonthIso = this.addDaysIso(isoDate, -day);
    var lastDayOfPreviousMonthCalendar = this.isoToCalendarDate(lastDayOfPreviousMonthIso, cache);
    return lastDayOfPreviousMonthCalendar.day;
  },
  startOfCalendarYear: function startOfCalendarYear(calendarDate) {
    return {
      year: calendarDate.year,
      month: 1,
      day: 1
    };
  },
  startOfCalendarMonth: function startOfCalendarMonth(calendarDate) {
    return {
      year: calendarDate.year,
      month: calendarDate.month,
      day: 1
    };
  },
  calendarDaysUntil: function calendarDaysUntil(calendarOne, calendarTwo, cache) {
    var oneIso = this.calendarToIsoDate(calendarOne, 'constrain', cache);
    var twoIso = this.calendarToIsoDate(calendarTwo, 'constrain', cache);
    return this.isoDaysUntil(oneIso, twoIso);
  },
  isoDaysUntil: function isoDaysUntil(oneIso, twoIso) {
    var duration = DifferenceISODate(oneIso.year, oneIso.month, oneIso.day, twoIso.year, twoIso.month, twoIso.day, 'day');
    return duration.days;
  },
  // The short era format works for all calendars except Japanese, which will
  // override.
  eraLength: 'short',
  // All built-in calendars except Chinese/Dangi and Hebrew use an era
  hasEra: true,
  monthDayFromFields: function monthDayFromFields(fields, overflow, cache) {
    var year = fields.year,
        month = fields.month,
        monthCode = fields.monthCode,
        day = fields.day,
        era = fields.era,
        eraYear = fields.eraYear;

    if (monthCode === undefined) {
      if (year === undefined && (era === undefined || eraYear === undefined)) {
        throw new TypeError('`monthCode`, `year`, or `era` and `eraYear` is required');
      }

      var _this$adjustCalendarD = this.adjustCalendarDate({
        year: year,
        month: month,
        monthCode: monthCode,
        day: day,
        era: era,
        eraYear: eraYear
      }, cache, overflow);

      monthCode = _this$adjustCalendarD.monthCode;
      year = _this$adjustCalendarD.year;
    }

    var isoYear, isoMonth, isoDay;
    var closestCalendar, closestIso; // Look backwards starting from the calendar year of 1972-01-01 up to 100
    // calendar years to find a year that has this month and day. Normal months
    // and days will match immediately, but for leap days and leap months we may
    // have to look for a while.

    var startDateIso = {
      year: 1972,
      month: 1,
      day: 1
    };

    var _this$isoToCalendarDa = this.isoToCalendarDate(startDateIso, cache),
        calendarYear = _this$isoToCalendarDa.year;

    for (var i = 0; i < 100; i++) {
      var testCalendarDate = this.adjustCalendarDate({
        day: day,
        monthCode: monthCode,
        year: calendarYear - i
      }, cache);
      var isoDate = this.calendarToIsoDate(testCalendarDate, 'constrain', cache);
      var roundTripCalendarDate = this.isoToCalendarDate(isoDate, cache);
      isoYear = isoDate.year;
      isoMonth = isoDate.month;
      isoDay = isoDate.day;

      if (roundTripCalendarDate.monthCode === monthCode && roundTripCalendarDate.day === day) {
        return {
          month: isoMonth,
          day: isoDay,
          year: isoYear
        };
      } else if (overflow === 'constrain') {
        // non-ISO constrain algorithm tries to find the closest date in a matching month
        if (closestCalendar === undefined || roundTripCalendarDate.monthCode === closestCalendar.monthCode && roundTripCalendarDate.day > closestCalendar.day) {
          closestCalendar = roundTripCalendarDate;
          closestIso = isoDate;
        }
      }
    }

    if (overflow === 'constrain' && closestIso !== undefined) return closestIso;
    throw new RangeError("No recent ".concat(this.id, " year with monthCode ").concat(monthCode, " and day ").concat(day));
  }
};
var helperHebrew = ObjectAssign$2({}, nonIsoHelperBase, {
  id: 'hebrew',
  calendarType: 'lunisolar',
  inLeapYear: function inLeapYear(calendarDate
  /*, cache */
  ) {
    var year = calendarDate.year; // FYI: In addition to adding a month in leap years, the Hebrew calendar
    // also has per-year changes to the number of days of Heshvan and Kislev.
    // Given that these can be calculated by counting the number of days in
    // those months, I assume that these DO NOT need to be exposed as
    // Hebrew-only prototype fields or methods.

    return (7 * year + 1) % 19 < 7;
  },
  monthsInYear: function monthsInYear(calendarDate) {
    return this.inLeapYear(calendarDate) ? 13 : 12;
  },
  minimumMonthLength: function minimumMonthLength(calendarDate) {
    return this.minMaxMonthLength(calendarDate, 'min');
  },
  maximumMonthLength: function maximumMonthLength(calendarDate) {
    return this.minMaxMonthLength(calendarDate, 'max');
  },
  minMaxMonthLength: function minMaxMonthLength(calendarDate, minOrMax) {
    var month = calendarDate.month,
        year = calendarDate.year;
    var monthCode = this.getMonthCode(year, month);
    var monthInfo = ObjectEntries(this.months).find(function (m) {
      return m[1].monthCode === monthCode;
    });
    if (monthInfo === undefined) throw new RangeError("unmatched Hebrew month: ".concat(month));
    var daysInMonth = monthInfo[1].days;
    return typeof daysInMonth === 'number' ? daysInMonth : daysInMonth[minOrMax];
  },

  /** Take a guess at what ISO date a particular calendar date corresponds to */
  estimateIsoDate: function estimateIsoDate(calendarDate) {
    var year = calendarDate.year;
    return {
      year: year - 3760,
      month: 1,
      day: 1
    };
  },
  months: {
    Tishri: {
      leap: 1,
      regular: 1,
      monthCode: 'M01',
      days: 30
    },
    Heshvan: {
      leap: 2,
      regular: 2,
      monthCode: 'M02',
      days: {
        min: 29,
        max: 30
      }
    },
    Kislev: {
      leap: 3,
      regular: 3,
      monthCode: 'M03',
      days: {
        min: 29,
        max: 30
      }
    },
    Tevet: {
      leap: 4,
      regular: 4,
      monthCode: 'M04',
      days: 29
    },
    Shevat: {
      leap: 5,
      regular: 5,
      monthCode: 'M05',
      days: 30
    },
    Adar: {
      leap: undefined,
      regular: 6,
      monthCode: 'M06',
      days: 29
    },
    'Adar I': {
      leap: 6,
      regular: undefined,
      monthCode: 'M05L',
      days: 30
    },
    'Adar II': {
      leap: 7,
      regular: undefined,
      monthCode: 'M06',
      days: 29
    },
    Nisan: {
      leap: 8,
      regular: 7,
      monthCode: 'M07',
      days: 30
    },
    Iyar: {
      leap: 9,
      regular: 8,
      monthCode: 'M08',
      days: 29
    },
    Sivan: {
      leap: 10,
      regular: 9,
      monthCode: 'M09',
      days: 30
    },
    Tamuz: {
      leap: 11,
      regular: 10,
      monthCode: 'M10',
      days: 29
    },
    Av: {
      leap: 12,
      regular: 11,
      monthCode: 'M11',
      days: 30
    },
    Elul: {
      leap: 13,
      regular: 12,
      monthCode: 'M12',
      days: 29
    }
  },
  getMonthCode: function getMonthCode(year, month) {
    if (this.inLeapYear({
      year: year
    })) {
      return month === 6 ? buildMonthCode(5, true) : buildMonthCode(month < 6 ? month : month - 1);
    } else {
      return buildMonthCode(month);
    }
  },
  adjustCalendarDate: function adjustCalendarDate(calendarDate, cache) {
    var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
    var fromLegacyDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var year = calendarDate.year,
        eraYear = calendarDate.eraYear,
        month = calendarDate.month,
        monthCode = calendarDate.monthCode,
        day = calendarDate.day,
        monthExtra = calendarDate.monthExtra;
    if (year === undefined) year = eraYear;
    if (eraYear === undefined) eraYear = year;

    if (fromLegacyDate) {
      // In Pre Node-14 V8, DateTimeFormat.formatToParts `month: 'numeric'`
      // output returns the numeric equivalent of `month` as a string, meaning
      // that `'6'` in a leap year is Adar I, while `'6'` in a non-leap year
      // means Adar. In this case, `month` will already be correct and no action
      // is needed. However, in Node 14 and later formatToParts returns the name
      // of the Hebrew month (e.g. "Tevet"), so we'll need to look up the
      // correct `month` using the string name as a key.
      if (monthExtra) {
        var monthInfo = this.months[monthExtra];
        if (!monthInfo) throw new RangeError("Unrecognized month from formatToParts: ".concat(monthExtra));
        month = this.inLeapYear({
          year: year
        }) ? monthInfo.leap : monthInfo.regular;
      }

      monthCode = this.getMonthCode(year, month);
      var result = {
        year: year,
        month: month,
        day: day,
        era: undefined,
        eraYear: eraYear,
        monthCode: monthCode
      };
      return result;
    } else {
      // When called without input coming from legacy Date output, simply ensure
      // that all fields are present.
      this.validateCalendarDate(calendarDate);

      if (month === undefined) {
        if (monthCode.endsWith('L')) {
          if (monthCode !== 'M05L') {
            throw new RangeError("Hebrew leap month must have monthCode M05L, not ".concat(monthCode));
          }

          month = 6;

          if (!this.inLeapYear({
            year: year
          })) {
            if (overflow === 'reject') {
              throw new RangeError("Hebrew monthCode M05L is invalid in year ".concat(year, " which is not a leap year"));
            } else {
              // constrain to last day of previous month (Av)
              month = 5;
              day = 30;
              monthCode = 'M05';
            }
          }
        } else {
          month = monthCodeNumberPart(monthCode); // if leap month is before this one, the month index is one more than the month code

          if (this.inLeapYear({
            year: year
          }) && month > 6) month++;
          var largestMonth = this.monthsInYear({
            year: year
          });
          if (month < 1 || month > largestMonth) throw new RangeError("Invalid monthCode: ".concat(monthCode));
        }
      } else {
        if (overflow === 'reject') {
          RejectToRange(month, 1, this.monthsInYear({
            year: year
          }));
          RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
        } else {
          month = ConstrainToRange(month, 1, this.monthsInYear({
            year: year
          }));
          day = ConstrainToRange(day, 1, this.maximumMonthLength(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
            month: month
          })));
        }

        if (monthCode === undefined) {
          monthCode = this.getMonthCode(year, month);
        } else {
          var calculatedMonthCode = this.getMonthCode(year, month);

          if (calculatedMonthCode !== monthCode) {
            throw new RangeError("monthCode ".concat(monthCode, " doesn't correspond to month ").concat(month, " in Hebrew year ").concat(year));
          }
        }
      }

      return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        day: day,
        month: month,
        monthCode: monthCode,
        year: year,
        eraYear: eraYear
      });
    }
  },
  // All built-in calendars except Chinese/Dangi and Hebrew use an era
  hasEra: false
});
/**
 * For Temporal purposes, the Islamic calendar is simple because it's always the
 * same 12 months in the same order.
 */

var helperIslamic = ObjectAssign$2({}, nonIsoHelperBase, {
  id: 'islamic',
  calendarType: 'lunar',
  inLeapYear: function inLeapYear(calendarDate, cache) {
    // In leap years, the 12th month has 30 days. In non-leap years: 29.
    var days = this.daysInMonth({
      year: calendarDate.year,
      month: 12,
      day: 1
    }, cache);
    return days === 30;
  },
  monthsInYear: function monthsInYear() {
    return 12;
  },
  minimumMonthLength: function
    /* calendarDate */
  minimumMonthLength() {
    return 29;
  },
  maximumMonthLength: function
    /* calendarDate */
  maximumMonthLength() {
    return 30;
  },
  DAYS_PER_ISLAMIC_YEAR: 354 + 11 / 30,
  DAYS_PER_ISO_YEAR: 365.2425,
  constantEra: 'ah',
  estimateIsoDate: function estimateIsoDate(calendarDate) {
    var _this$adjustCalendarD2 = this.adjustCalendarDate(calendarDate),
        year = _this$adjustCalendarD2.year;

    return {
      year: MathFloor$1(year * this.DAYS_PER_ISLAMIC_YEAR / this.DAYS_PER_ISO_YEAR) + 622,
      month: 1,
      day: 1
    };
  }
});
var helperPersian = ObjectAssign$2({}, nonIsoHelperBase, {
  id: 'persian',
  calendarType: 'solar',
  inLeapYear: function inLeapYear(calendarDate, cache) {
    // Same logic (count days in the last month) for Persian as for Islamic,
    // even though Persian is solar and Islamic is lunar.
    return helperIslamic.inLeapYear(calendarDate, cache);
  },
  monthsInYear: function monthsInYear() {
    return 12;
  },
  minimumMonthLength: function minimumMonthLength(calendarDate) {
    var month = calendarDate.month;
    if (month === 12) return 29;
    return month <= 6 ? 31 : 30;
  },
  maximumMonthLength: function maximumMonthLength(calendarDate) {
    var month = calendarDate.month;
    if (month === 12) return 30;
    return month <= 6 ? 31 : 30;
  },
  constantEra: 'ap',
  estimateIsoDate: function estimateIsoDate(calendarDate) {
    var _this$adjustCalendarD3 = this.adjustCalendarDate(calendarDate),
        year = _this$adjustCalendarD3.year;

    return {
      year: year + 621,
      month: 1,
      day: 1
    };
  }
});
var helperIndian = ObjectAssign$2({}, nonIsoHelperBase, {
  id: 'indian',
  calendarType: 'solar',
  inLeapYear: function inLeapYear(calendarDate
  /*, cache*/
  ) {
    // From https://en.wikipedia.org/wiki/Indian_national_calendar:
    // Years are counted in the Saka era, which starts its year 0 in the year 78
    // of the Common Era. To determine leap years, add 78 to the Saka year – if
    // the result is a leap year in the Gregorian calendar, then the Saka year
    // is a leap year as well.
    return isGregorianLeapYear(calendarDate.year + 78);
  },
  monthsInYear: function monthsInYear() {
    return 12;
  },
  minimumMonthLength: function minimumMonthLength(calendarDate) {
    return this.getMonthInfo(calendarDate).length;
  },
  maximumMonthLength: function maximumMonthLength(calendarDate) {
    return this.getMonthInfo(calendarDate).length;
  },
  constantEra: 'saka',
  // Indian months always start at the same well-known Gregorian month and
  // day. So this conversion is easy and fast. See
  // https://en.wikipedia.org/wiki/Indian_national_calendar
  months: {
    1: {
      length: 30,
      month: 3,
      day: 22,
      leap: {
        length: 31,
        month: 3,
        day: 21
      }
    },
    2: {
      length: 31,
      month: 4,
      day: 21
    },
    3: {
      length: 31,
      month: 5,
      day: 22
    },
    4: {
      length: 31,
      month: 6,
      day: 22
    },
    5: {
      length: 31,
      month: 7,
      day: 23
    },
    6: {
      length: 31,
      month: 8,
      day: 23
    },
    7: {
      length: 30,
      month: 9,
      day: 23
    },
    8: {
      length: 30,
      month: 10,
      day: 23
    },
    9: {
      length: 30,
      month: 11,
      day: 22
    },
    10: {
      length: 30,
      month: 12,
      day: 22
    },
    11: {
      length: 30,
      month: 1,
      nextYear: true,
      day: 21
    },
    12: {
      length: 30,
      month: 2,
      nextYear: true,
      day: 20
    }
  },
  getMonthInfo: function getMonthInfo(calendarDate) {
    var month = calendarDate.month;
    var monthInfo = this.months[month];
    if (monthInfo === undefined) throw new RangeError("Invalid month: ".concat(month));
    if (this.inLeapYear(calendarDate) && monthInfo.leap) monthInfo = monthInfo.leap;
    return monthInfo;
  },
  estimateIsoDate: function estimateIsoDate(calendarDateParam) {
    // FYI, this "estimate" is always the exact ISO date, which makes the Indian
    // calendar fast!
    var calendarDate = this.adjustCalendarDate(calendarDateParam);
    var monthInfo = this.getMonthInfo(calendarDate);
    var isoYear = calendarDate.year + 78 + (monthInfo.nextYear ? 1 : 0);
    var isoMonth = monthInfo.month;
    var isoDay = monthInfo.day;
    var isoDate = AddISODate(isoYear, isoMonth, isoDay, 0, 0, 0, calendarDate.day - 1, 'constrain');
    return isoDate;
  },
  // https://bugs.chromium.org/p/v8/issues/detail?id=10529 causes Intl's Indian
  // calendar output to fail for all dates before 0001-01-01 ISO.  For example,
  // in Node 12 0000-01-01 is calculated as 6146/12/-583 instead of 10/11/-79 as
  // expected.
  vulnerableToBceBug: new Date('0000-01-01T00:00Z').toLocaleDateString('en-US-u-ca-indian', {
    timeZone: 'UTC'
  }) !== '10/11/-79 Saka',
  checkIcuBugs: function checkIcuBugs(calendarDate, isoDate) {
    if (this.vulnerableToBceBug && isoDate.year < 1) {
      throw new RangeError("calendar '".concat(this.id, "' is broken for ISO dates before 0001-01-01") + ' (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)');
    }
  }
});
/**
 * This function adds additional metadata that makes it easier to work with
 * eras. Note that it mutates and normalizes the original era objects, which is
 * OK because this is non-observable, internal-only metadata.
 *
 * The result is an array of eras with the shape defined above.
 * */

function adjustEras(erasParam) {
  var eras = erasParam;

  if (eras.length === 0) {
    throw new RangeError('Invalid era data: eras are required');
  }

  if (eras.length === 1 && eras[0].reverseOf) {
    throw new RangeError('Invalid era data: anchor era cannot count years backwards');
  }

  if (eras.length === 1 && !eras[0].name) {
    throw new RangeError('Invalid era data: at least one named era is required');
  }

  if (eras.filter(function (e) {
    return e.reverseOf != null;
  }).length > 1) {
    throw new RangeError('Invalid era data: only one era can count years backwards');
  } // Find the "anchor era" which is the era used for (era-less) `year`. Reversed
  // eras can never be anchors. The era without an `anchorEpoch` property is the
  // anchor.


  var anchorEra;
  eras.forEach(function (e) {
    if (e.isAnchor || !e.anchorEpoch && !e.reverseOf) {
      if (anchorEra) throw new RangeError('Invalid era data: cannot have multiple anchor eras');
      anchorEra = e;
      e.anchorEpoch = {
        year: e.hasYearZero ? 0 : 1
      };
    } else if (!e.name) {
      throw new RangeError('If era name is blank, it must be the anchor era');
    }
  }); // If the era name is undefined, then it's an anchor that doesn't interact
  // with eras at all. For example, Japanese `year` is always the same as ISO
  // `year`.  So this "era" is the anchor era but isn't used for era matching.
  // Strip it from the list that's returned.

  eras = eras.filter(function (e) {
    return e.name;
  });
  eras.forEach(function (e) {
    // Some eras are mirror images of another era e.g. B.C. is the reverse of A.D.
    // Replace the string-valued "reverseOf" property with the actual era object
    // that's reversed.
    var reverseOf = e.reverseOf;

    if (reverseOf) {
      var reversedEra = eras.find(function (era) {
        return era.name === reverseOf;
      });
      if (reversedEra === undefined) throw new RangeError("Invalid era data: unmatched reverseOf era: ".concat(reverseOf));
      e.reverseOf = reversedEra;
      e.anchorEpoch = reversedEra.anchorEpoch;
      e.isoEpoch = reversedEra.isoEpoch;
    }

    if (e.anchorEpoch.month === undefined) e.anchorEpoch.month = 1;
    if (e.anchorEpoch.day === undefined) e.anchorEpoch.day = 1;
  }); // Ensure that the latest epoch is first in the array. This lets us try to
  // match eras in index order, with the last era getting the remaining older
  // years. Any reverse-signed era must be at the end.

  eras.sort(function (e1, e2) {
    if (e1.reverseOf) return 1;
    if (e2.reverseOf) return -1;
    return e2.isoEpoch.year - e1.isoEpoch.year;
  }); // If there's a reversed era, then the one before it must be the era that's
  // being reversed.

  var lastEraReversed = eras[eras.length - 1].reverseOf;

  if (lastEraReversed) {
    if (lastEraReversed !== eras[eras.length - 2]) throw new RangeError('Invalid era data: invalid reverse-sign era');
  } // Finally, add a "genericName" property in the format "era{n} where `n` is
  // zero-based index, with the oldest era being zero. This format is used by
  // older versions of ICU data.


  eras.forEach(function (e, i) {
    e.genericName = "era".concat(eras.length - 1 - i);
  });
  return {
    eras: eras,
    anchorEra: anchorEra || eras[0]
  };
}

function isGregorianLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
/** Base for all Gregorian-like calendars. */


var makeHelperGregorian = function makeHelperGregorian(id, originalEras) {
  var _adjustEras = adjustEras(originalEras),
      eras = _adjustEras.eras,
      anchorEra = _adjustEras.anchorEra;

  var helperGregorian = ObjectAssign$2({}, nonIsoHelperBase, {
    id: id,
    eras: eras,
    anchorEra: anchorEra,
    calendarType: 'solar',
    inLeapYear: function inLeapYear(calendarDate
    /*, cache */
    ) {
      var _this$estimateIsoDate = this.estimateIsoDate(calendarDate),
          year = _this$estimateIsoDate.year;

      return isGregorianLeapYear(year);
    },
    monthsInYear: function monthsInYear() {
      return 12;
    },
    minimumMonthLength: function minimumMonthLength(calendarDate) {
      var month = calendarDate.month;
      if (month === 2) return this.inLeapYear(calendarDate) ? 29 : 28;
      return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
    },
    maximumMonthLength: function maximumMonthLength(calendarDate) {
      return this.minimumMonthLength(calendarDate);
    },

    /** Fill in missing parts of the (year, era, eraYear) tuple */
    completeEraYear: function completeEraYear(calendarDate) {
      var _this3 = this;

      var checkField = function checkField(name, value) {
        var currentValue = calendarDate[name];

        if (currentValue != null && currentValue != value) {
          throw new RangeError("Input ".concat(name, " ").concat(currentValue, " doesn't match calculated value ").concat(value));
        }
      };

      var eraFromYear = function eraFromYear(year) {
        var eraYear;

        var adjustedCalendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          year: year
        });

        var matchingEra = _this3.eras.find(function (e, i) {
          if (i === _this3.eras.length - 1) {
            if (e.reverseOf) {
              // This is a reverse-sign era (like BCE) which must be the oldest
              // era. Count years backwards.
              if (year > 0) throw new RangeError("Signed year ".concat(year, " is invalid for era ").concat(e.name));
              eraYear = e.anchorEpoch.year - year;
              return true;
            } // last era always gets all "leftover" (older than epoch) years,
            // so no need for a comparison like below.


            eraYear = year - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
            return true;
          }

          var comparison = nonIsoHelperBase.compareCalendarDates(adjustedCalendarDate, e.anchorEpoch);

          if (comparison >= 0) {
            eraYear = year - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
            return true;
          }

          return false;
        });

        if (!matchingEra) throw new RangeError("Year ".concat(year, " was not matched by any era"));
        return {
          eraYear: eraYear,
          era: matchingEra.name
        };
      };

      var year = calendarDate.year,
          eraYear = calendarDate.eraYear,
          era = calendarDate.era;

      if (year != null) {
        var _eraFromYear = eraFromYear(year);

        eraYear = _eraFromYear.eraYear;
        era = _eraFromYear.era;
        checkField('era', era);
        checkField('eraYear', eraYear);
      } else if (eraYear != null) {
        var matchingEra = era === undefined ? undefined : this.eras.find(function (e) {
          return e.name === era || e.genericName === era;
        });
        if (!matchingEra) throw new RangeError("Era ".concat(era, " (ISO year ").concat(eraYear, ") was not matched by any era"));

        if (eraYear < 1 && matchingEra.reverseOf) {
          throw new RangeError("Years in ".concat(era, " era must be positive, not ").concat(year));
        }

        if (matchingEra.reverseOf) {
          year = matchingEra.anchorEpoch.year - eraYear;
        } else {
          year = eraYear + matchingEra.anchorEpoch.year - (matchingEra.hasYearZero ? 0 : 1);
        }

        checkField('year', year); // We'll accept dates where the month/day is earlier than the start of
        // the era or after its end as long as it's in the same year. If that
        // happens, we'll adjust the era/eraYear pair to be the correct era for
        // the `year`.

        var _eraFromYear2 = eraFromYear(year);

        eraYear = _eraFromYear2.eraYear;
        era = _eraFromYear2.era;
      } else {
        throw new RangeError('Either `year` or `eraYear` and `era` are required');
      }

      return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        year: year,
        eraYear: eraYear,
        era: era
      });
    },
    adjustCalendarDate: function adjustCalendarDate(calendarDateParam, cache, overflow
    /*, fromLegacyDate = false */
    ) {
      var calendarDate = calendarDateParam; // Because this is not a lunisolar calendar, it's safe to convert monthCode to a number

      var _calendarDate4 = calendarDate,
          month = _calendarDate4.month,
          monthCode = _calendarDate4.monthCode;
      if (month === undefined) calendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        month: monthCodeNumberPart(monthCode)
      });
      this.validateCalendarDate(calendarDate);
      calendarDate = this.completeEraYear(calendarDate); // TODO this can become `super` later.

      calendarDate = ReflectApply$2(nonIsoHelperBase.adjustCalendarDate, this, [calendarDate, cache, overflow]);
      return calendarDate;
    },
    estimateIsoDate: function estimateIsoDate(calendarDateParam) {
      var calendarDate = this.adjustCalendarDate(calendarDateParam);
      var year = calendarDate.year,
          month = calendarDate.month,
          day = calendarDate.day;
      var anchorEra = this.anchorEra;
      var isoYearEstimate = year + anchorEra.isoEpoch.year - (anchorEra.hasYearZero ? 0 : 1);
      return RegulateISODate(isoYearEstimate, month, day, 'constrain');
    },
    // Several calendars based on the Gregorian calendar use Julian dates (not
    // proleptic Gregorian dates) before the Julian switchover in Oct 1582. See
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1173158.
    v8IsVulnerableToJulianBug: new Date('+001001-01-01T00:00Z').toLocaleDateString('en-US-u-ca-japanese', {
      timeZone: 'UTC'
    }).startsWith('12'),
    calendarIsVulnerableToJulianBug: false,
    checkIcuBugs: function checkIcuBugs(calendarDate, isoDate) {
      if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug) {
        var beforeJulianSwitch = CompareISODate(isoDate.year, isoDate.month, isoDate.day, 1582, 10, 15) < 0;

        if (beforeJulianSwitch) {
          throw new RangeError("calendar '".concat(this.id, "' is broken for ISO dates before 1582-10-15") + ' (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)');
        }
      }
    }
  });
  return helperGregorian;
};

var makeHelperOrthodox = function makeHelperOrthodox(id, originalEras) {
  var base = makeHelperGregorian(id, originalEras);
  return ObjectAssign$2(base, {
    inLeapYear: function inLeapYear(calendarDate
    /*, cache */
    ) {
      // Leap years happen one year before the Julian leap year. Note that this
      // calendar is based on the Julian calendar which has a leap year every 4
      // years, unlike the Gregorian calendar which doesn't have leap years on
      // years divisible by 100 except years divisible by 400.
      //
      // Note that we're assuming that leap years in before-epoch times match
      // how leap years are defined now. This is probably not accurate but I'm
      // not sure how better to do it.
      var year = calendarDate.year;
      return (year + 1) % 4 === 0;
    },
    monthsInYear: function monthsInYear() {
      return 13;
    },
    minimumMonthLength: function minimumMonthLength(calendarDate) {
      var month = calendarDate.month; // Ethiopian/Coptic calendars have 12 30-day months and an extra 5-6 day 13th month.

      if (month === 13) return this.inLeapYear(calendarDate) ? 6 : 5;
      return 30;
    },
    maximumMonthLength: function maximumMonthLength(calendarDate) {
      return this.minimumMonthLength(calendarDate);
    }
  });
}; // `coptic` and `ethiopic` calendars are very similar to `ethioaa` calendar,
// with the following differences:
// - Coptic uses BCE-like positive numbers for years before its epoch (the other
//   two use negative year numbers before epoch)
// - Coptic has a different epoch date
// - Ethiopic has an additional second era that starts at the same date as the
//   zero era of ethioaa.


var helperEthioaa = makeHelperOrthodox('ethioaa', [{
  name: 'era0',
  isoEpoch: {
    year: -5492,
    month: 7,
    day: 17
  }
}]);
var helperCoptic = makeHelperOrthodox('coptic', [{
  name: 'era1',
  isoEpoch: {
    year: 284,
    month: 8,
    day: 29
  }
}, {
  name: 'era0',
  reverseOf: 'era1'
}]); // Anchor is currently the older era to match ethioaa, but should it be the newer era?
// See https://github.com/tc39/ecma402/issues/534 for discussion.

var helperEthiopic = makeHelperOrthodox('ethiopic', [{
  name: 'era0',
  isoEpoch: {
    year: -5492,
    month: 7,
    day: 17
  }
}, {
  name: 'era1',
  isoEpoch: {
    year: 8,
    month: 8,
    day: 27
  },
  anchorEpoch: {
    year: 5501
  }
}]);
var helperRoc = ObjectAssign$2({}, makeHelperGregorian('roc', [{
  name: 'minguo',
  isoEpoch: {
    year: 1912,
    month: 1,
    day: 1
  }
}, {
  name: 'before-roc',
  reverseOf: 'minguo'
}]), {
  calendarIsVulnerableToJulianBug: true
});
var helperBuddhist = ObjectAssign$2({}, makeHelperGregorian('buddhist', [{
  name: 'be',
  hasYearZero: true,
  isoEpoch: {
    year: -543,
    month: 1,
    day: 1
  }
}]), {
  calendarIsVulnerableToJulianBug: true
});
var helperGregory = ObjectAssign$2({}, makeHelperGregorian('gregory', [{
  name: 'ce',
  isoEpoch: {
    year: 1,
    month: 1,
    day: 1
  }
}, {
  name: 'bce',
  reverseOf: 'ce'
}]), {
  reviseIntlEra: function reviseIntlEra(calendarDate
  /*, isoDate*/
  ) {
    var era = calendarDate.era,
        eraYear = calendarDate.eraYear;
    if (era === 'bc') era = 'bce';
    if (era === 'ad') era = 'ce';
    return {
      era: era,
      eraYear: eraYear
    };
  }
});
var helperJapanese = ObjectAssign$2({}, // NOTE: Only the 5 modern eras (Meiji and later) are included. For dates
// before Meiji 1, the `ce` and `bce` eras are used. Challenges with pre-Meiji
// eras include:
// - Start/end dates of older eras are not precisely defined, which is
//   challenging given Temporal's need for precision
// - Some era dates and/or names are disputed by historians
// - As historical research proceeds, new eras are discovered and existing era
//   dates are modified, leading to considerable churn which is not good for
//   Temporal use.
//  - The earliest era (in 645 CE) may not end up being the earliest depending
//    on future historical scholarship
//  - Before Meiji, Japan used a lunar (or lunisolar?) calendar but AFAIK
//    that's not reflected in the ICU implementation.
//
// For more discussion: https://github.com/tc39/proposal-temporal/issues/526.
//
// Here's a full list of CLDR/ICU eras:
// https://github.com/unicode-org/icu/blob/master/icu4c/source/data/locales/root.txt#L1582-L1818
// https://github.com/unicode-org/cldr/blob/master/common/supplemental/supplementalData.xml#L4310-L4546
//
// NOTE: Japan started using the Gregorian calendar in 6 Meiji, replacing a
// lunisolar calendar. So the day before January 1 of 6 Meiji (1873) was not
// December 31, but December 2, of 5 Meiji (1872). The existing Ecma-402
// Japanese calendar doesn't seem to take this into account, so neither do we:
// > args = ['en-ca-u-ca-japanese', { era: 'short' }]
// > new Date('1873-01-01T12:00').toLocaleString(...args)
// '1 1, 6 Meiji, 12:00:00 PM'
// > new Date('1872-12-31T12:00').toLocaleString(...args)
// '12 31, 5 Meiji, 12:00:00 PM'
makeHelperGregorian('japanese', [// The Japanese calendar `year` is just the ISO year, because (unlike other
// ICU calendars) there's no obvious "default era", we use the ISO year.
{
  name: 'reiwa',
  isoEpoch: {
    year: 2019,
    month: 5,
    day: 1
  },
  anchorEpoch: {
    year: 2019,
    month: 5,
    day: 1
  }
}, {
  name: 'heisei',
  isoEpoch: {
    year: 1989,
    month: 1,
    day: 8
  },
  anchorEpoch: {
    year: 1989,
    month: 1,
    day: 8
  }
}, {
  name: 'showa',
  isoEpoch: {
    year: 1926,
    month: 12,
    day: 25
  },
  anchorEpoch: {
    year: 1926,
    month: 12,
    day: 25
  }
}, {
  name: 'taisho',
  isoEpoch: {
    year: 1912,
    month: 7,
    day: 30
  },
  anchorEpoch: {
    year: 1912,
    month: 7,
    day: 30
  }
}, {
  name: 'meiji',
  isoEpoch: {
    year: 1868,
    month: 9,
    day: 8
  },
  anchorEpoch: {
    year: 1868,
    month: 9,
    day: 8
  }
}, {
  name: 'ce',
  isoEpoch: {
    year: 1,
    month: 1,
    day: 1
  }
}, {
  name: 'bce',
  reverseOf: 'ce'
}]), {
  // The last 3 Japanese eras confusingly return only one character in the
  // default "short" era, so need to use the long format.
  eraLength: 'long',
  calendarIsVulnerableToJulianBug: true,
  reviseIntlEra: function reviseIntlEra(calendarDate, isoDate) {
    var era = calendarDate.era,
        eraYear = calendarDate.eraYear;
    var isoYear = isoDate.year;
    if (this.eras.find(function (e) {
      return e.name === era;
    })) return {
      era: era,
      eraYear: eraYear
    };
    return isoYear < 1 ? {
      era: 'bce',
      eraYear: 1 - isoYear
    } : {
      era: 'ce',
      eraYear: isoYear
    };
  }
});
var helperChinese = ObjectAssign$2({}, nonIsoHelperBase, {
  id: 'chinese',
  calendarType: 'lunisolar',
  inLeapYear: function inLeapYear(calendarDate, cache) {
    var months = this.getMonthList(calendarDate.year, cache);
    return ObjectEntries(months).length === 13;
  },
  monthsInYear: function monthsInYear(calendarDate, cache) {
    return this.inLeapYear(calendarDate, cache) ? 13 : 12;
  },
  minimumMonthLength: function
    /* calendarDate */
  minimumMonthLength() {
    return 29;
  },
  maximumMonthLength: function
    /* calendarDate */
  maximumMonthLength() {
    return 30;
  },
  getMonthList: function getMonthList(calendarYear, cache) {
    var _this4 = this;

    if (calendarYear === undefined) {
      throw new TypeError('Missing year');
    }

    var key = JSON.stringify({
      func: 'getMonthList',
      calendarYear: calendarYear,
      id: this.id
    });
    var cached = cache.get(key);
    if (cached) return cached;
    var dateTimeFormat = this.getFormatter();

    var getCalendarDate = function getCalendarDate(isoYear, daysPastFeb1) {
      var isoStringFeb1 = toUtcIsoDateString({
        isoYear: isoYear,
        isoMonth: 2,
        isoDay: 1
      });
      var legacyDate = new Date(isoStringFeb1); // Now add the requested number of days, which may wrap to the next month.

      legacyDate.setUTCDate(daysPastFeb1 + 1);
      var newYearGuess = dateTimeFormat.formatToParts(legacyDate);
      var calendarMonthString = newYearGuess.find(function (tv) {
        return tv.type === 'month';
      }).value;
      var calendarDay = +newYearGuess.find(function (tv) {
        return tv.type === 'day';
      }).value;
      var calendarYearToVerify = newYearGuess.find(function (tv) {
        return tv.type === 'relatedYear';
      });

      if (calendarYearToVerify !== undefined) {
        calendarYearToVerify = +calendarYearToVerify.value;
      } else {
        // Node 12 has outdated ICU data that lacks the `relatedYear` field in the
        // output of Intl.DateTimeFormat.formatToParts.
        throw new RangeError("Intl.DateTimeFormat.formatToParts lacks relatedYear in ".concat(_this4.id, " calendar. Try Node 14+ or modern browsers."));
      }

      return {
        calendarMonthString: calendarMonthString,
        calendarDay: calendarDay,
        calendarYearToVerify: calendarYearToVerify
      };
    }; // First, find a date close to Chinese New Year. Feb 17 will either be in
    // the first month or near the end of the last month of the previous year.


    var isoDaysDelta = 17;

    var _getCalendarDate = getCalendarDate(calendarYear, isoDaysDelta),
        calendarMonthString = _getCalendarDate.calendarMonthString,
        calendarDay = _getCalendarDate.calendarDay,
        calendarYearToVerify = _getCalendarDate.calendarYearToVerify; // If we didn't guess the first month correctly, add (almost in some months)
    // a lunar month


    if (calendarMonthString !== '1') {
      isoDaysDelta += 29;

      var _getCalendarDate2 = getCalendarDate(calendarYear, isoDaysDelta);

      calendarMonthString = _getCalendarDate2.calendarMonthString;
      calendarDay = _getCalendarDate2.calendarDay;
    } // Now back up to near the start of the first month, but not too near that
    // off-by-one issues matter.


    isoDaysDelta -= calendarDay - 5;
    var result = {}; // TODO: type the month list result

    var monthIndex = 1;
    var oldCalendarDay;
    var oldMonthString;
    var done = false;

    do {
      var _getCalendarDate3 = getCalendarDate(calendarYear, isoDaysDelta);

      calendarMonthString = _getCalendarDate3.calendarMonthString;
      calendarDay = _getCalendarDate3.calendarDay;
      calendarYearToVerify = _getCalendarDate3.calendarYearToVerify;

      if (oldCalendarDay) {
        result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
      }

      if (calendarYearToVerify !== calendarYear) {
        done = true;
      } else {
        result[calendarMonthString] = {
          monthIndex: monthIndex++
        }; // Move to the next month. Because months are sometimes 29 days, the day of the
        // calendar month will move forward slowly but not enough to flip over to a new
        // month before the loop ends at 12-13 months.

        isoDaysDelta += 30;
      }

      oldCalendarDay = calendarDay;
      oldMonthString = calendarMonthString;
    } while (!done);

    result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
    cache.set(key, result);
    return result;
  },
  estimateIsoDate: function estimateIsoDate(calendarDate) {
    var year = calendarDate.year,
        month = calendarDate.month;
    return {
      year: year,
      month: month >= 12 ? 12 : month + 1,
      day: 1
    };
  },
  adjustCalendarDate: function adjustCalendarDate(calendarDate, cache) {
    var overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'constrain';
    var fromLegacyDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var year = calendarDate.year,
        month = calendarDate.month,
        monthExtra = calendarDate.monthExtra,
        day = calendarDate.day,
        monthCode = calendarDate.monthCode,
        eraYear = calendarDate.eraYear;

    if (fromLegacyDate) {
      // Legacy Date output returns a string that's an integer with an optional
      // "bis" suffix used only by the Chinese/Dangi calendar to indicate a leap
      // month. Below we'll normalize the output.
      year = eraYear;
      if (monthExtra && monthExtra !== 'bis') throw new RangeError("Unexpected leap month suffix: ".concat(monthExtra));

      var _monthCode = buildMonthCode(month, monthExtra !== undefined);

      var monthString = "".concat(month).concat(monthExtra || '');
      var months = this.getMonthList(year, cache);
      var monthInfo = months[monthString];
      if (monthInfo === undefined) throw new RangeError("Unmatched month ".concat(monthString, " in Chinese year ").concat(year));
      month = monthInfo.monthIndex;
      return {
        year: year,
        month: month,
        day: day,
        era: undefined,
        eraYear: eraYear,
        monthCode: _monthCode
      };
    } else {
      // When called without input coming from legacy Date output,
      // simply ensure that all fields are present.
      this.validateCalendarDate(calendarDate);
      if (year === undefined) year = eraYear;
      if (eraYear === undefined) eraYear = year;

      if (month === undefined) {
        var _months = this.getMonthList(year, cache);

        var numberPart = monthCode.replace('L', 'bis').slice(1);
        if (numberPart[0] === '0') numberPart = numberPart.slice(1);
        var _monthInfo = _months[numberPart];
        month = _monthInfo && _monthInfo.monthIndex; // If this leap month isn't present in this year, constrain down to the last day of the previous month.

        if (month === undefined && monthCode.endsWith('L') && !['M01L', 'M12L', 'M13L'].includes(monthCode) && overflow === 'constrain') {
          var withoutML = monthCode.slice(1, -1);
          if (withoutML[0] === '0') withoutML = withoutML.slice(1);
          _monthInfo = _months[withoutML];

          if (_monthInfo) {
            var _monthInfo2 = _monthInfo;
            day = _monthInfo2.daysInMonth;
            month = _monthInfo2.monthIndex;
            monthCode = buildMonthCode(withoutML);
          }
        }

        if (month === undefined) {
          throw new RangeError("Unmatched month ".concat(monthCode, " in Chinese year ").concat(year));
        }
      } else if (monthCode === undefined) {
        var _months2 = this.getMonthList(year, cache);

        var monthEntries = ObjectEntries(_months2);
        var largestMonth = monthEntries.length;

        if (overflow === 'reject') {
          RejectToRange(month, 1, largestMonth);
          RejectToRange(day, 1, this.maximumMonthLength());
        } else {
          month = ConstrainToRange(month, 1, largestMonth);
          day = ConstrainToRange(day, 1, this.maximumMonthLength());
        }

        var matchingMonthEntry = monthEntries.find(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              v = _ref4[1];

          return v.monthIndex === month;
        });

        if (matchingMonthEntry === undefined) {
          throw new RangeError("Invalid month ".concat(month, " in Chinese year ").concat(year));
        }

        monthCode = buildMonthCode(matchingMonthEntry[0].replace('bis', ''), matchingMonthEntry[0].indexOf('bis') !== -1);
      } else {
        // Both month and monthCode are present. Make sure they don't conflict.
        var _months3 = this.getMonthList(year, cache);

        var _numberPart = monthCode.replace('L', 'bis').slice(1);

        if (_numberPart[0] === '0') _numberPart = _numberPart.slice(1);
        var _monthInfo3 = _months3[_numberPart];
        if (!_monthInfo3) throw new RangeError("Unmatched monthCode ".concat(monthCode, " in Chinese year ").concat(year));

        if (month !== _monthInfo3.monthIndex) {
          throw new RangeError("monthCode ".concat(monthCode, " doesn't correspond to month ").concat(month, " in Chinese year ").concat(year));
        }
      }

      return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        year: year,
        eraYear: eraYear,
        month: month,
        monthCode: monthCode,
        day: day
      });
    }
  },
  // All built-in calendars except Chinese/Dangi and Hebrew use an era
  hasEra: false
}); // Dangi (Korean) calendar has same implementation as Chinese

var helperDangi = ObjectAssign$2({}, _objectSpread2(_objectSpread2({}, helperChinese), {}, {
  id: 'dangi'
}));
/**
 * Common implementation of all non-ISO calendars.
 * Per-calendar id and logic live in `id` and `helper` properties attached later.
 * This split allowed an easy separation between code that was similar between
 * ISO and non-ISO implementations vs. code that was very different.
 */

var nonIsoGeneralImpl = {
  dateFromFields: function dateFromFields(fieldsParam, options, calendar) {
    var overflow = ToTemporalOverflow(options);
    var cache = new OneObjectCache(); // Intentionally alphabetical

    var fields = PrepareTemporalFields(fieldsParam, [['day'], ['era', undefined], ['eraYear', undefined], ['month', undefined], ['monthCode', undefined], ['year', undefined]]);

    var _this$helper$calendar = this.helper.calendarToIsoDate(fields, overflow, cache),
        year = _this$helper$calendar.year,
        month = _this$helper$calendar.month,
        day = _this$helper$calendar.day;

    var result = CreateTemporalDate(year, month, day, calendar);
    cache.setObject(result);
    return result;
  },
  yearMonthFromFields: function yearMonthFromFields(fieldsParam, options, calendar) {
    var overflow = ToTemporalOverflow(options);
    var cache = new OneObjectCache(); // Intentionally alphabetical

    var fields = PrepareTemporalFields(fieldsParam, [['era', undefined], ['eraYear', undefined], ['month', undefined], ['monthCode', undefined], ['year', undefined]]);

    var _this$helper$calendar2 = this.helper.calendarToIsoDate(_objectSpread2(_objectSpread2({}, fields), {}, {
      day: 1
    }), overflow, cache),
        year = _this$helper$calendar2.year,
        month = _this$helper$calendar2.month,
        day = _this$helper$calendar2.day;

    var result = CreateTemporalYearMonth(year, month, calendar,
    /* referenceISODay = */
    day);
    cache.setObject(result);
    return result;
  },
  monthDayFromFields: function monthDayFromFields(fieldsParam, options, calendar) {
    var overflow = ToTemporalOverflow(options); // All built-in calendars require `day`, but some allow other fields to be
    // substituted for `month`. And for lunisolar calendars, either `monthCode`
    // or `year` must be provided because `month` is ambiguous without a year or
    // a code.

    var cache = new OneObjectCache();
    var fields = PrepareTemporalFields(fieldsParam, [['day'], ['era', undefined], ['eraYear', undefined], ['month', undefined], ['monthCode', undefined], ['year', undefined]]);

    var _this$helper$monthDay = this.helper.monthDayFromFields(fields, overflow, cache),
        year = _this$helper$monthDay.year,
        month = _this$helper$monthDay.month,
        day = _this$helper$monthDay.day; // `year` is a reference year where this month/day exists in this calendar


    var result = CreateTemporalMonthDay(month, day, calendar,
    /* referenceISOYear = */
    year);
    cache.setObject(result);
    return result;
  },
  fields: function fields(fieldsParam) {
    var fields = fieldsParam;
    if (fields.includes('year')) fields = [].concat(_toConsumableArray(fields), ['era', 'eraYear']);
    return fields;
  },
  mergeFields: function mergeFields(fields, additionalFields) {
    var fieldsCopy = _objectSpread2({}, fields);

    var additionalFieldsCopy = _objectSpread2({}, additionalFields); // era and eraYear are intentionally unused
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    var month = fieldsCopy.month,
        monthCode = fieldsCopy.monthCode,
        year = fieldsCopy.year;
        fieldsCopy.era;
        fieldsCopy.eraYear;
        var original = _objectWithoutProperties(fieldsCopy, _excluded);

    var newMonth = additionalFieldsCopy.month,
        newMonthCode = additionalFieldsCopy.monthCode,
        newYear = additionalFieldsCopy.year,
        newEra = additionalFieldsCopy.era,
        newEraYear = additionalFieldsCopy.eraYear;

    if (newMonth === undefined && newMonthCode === undefined) {
      original.month = month;
      original.monthCode = monthCode;
    }

    if (newYear === undefined && newEra === undefined && newEraYear === undefined) {
      // Only `year` is needed. We don't set era and eraYear because it's
      // possible to create a conflict for eras that start or end mid-year. See
      // https://github.com/tc39/proposal-temporal/issues/1784.
      original.year = year;
    }

    return _objectSpread2(_objectSpread2({}, original), additionalFieldsCopy);
  },
  dateAdd: function dateAdd(date, years, months, weeks, days, overflow, calendar) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    var added = this.helper.addCalendar(calendarDate, {
      years: years,
      months: months,
      weeks: weeks,
      days: days
    }, overflow, cache);
    var isoAdded = this.helper.calendarToIsoDate(added, 'constrain', cache);
    var year = isoAdded.year,
        month = isoAdded.month,
        day = isoAdded.day;
    var newTemporalObject = CreateTemporalDate(year, month, day, calendar); // The new object's cache starts with the cache of the old object

    var newCache = new OneObjectCache(cache);
    newCache.setObject(newTemporalObject);
    return newTemporalObject;
  },
  dateUntil: function dateUntil(one, two, largestUnit) {
    var cacheOne = OneObjectCache.getCacheForObject(one);
    var cacheTwo = OneObjectCache.getCacheForObject(two);
    var calendarOne = this.helper.temporalToCalendarDate(one, cacheOne);
    var calendarTwo = this.helper.temporalToCalendarDate(two, cacheTwo);
    var result = this.helper.untilCalendar(calendarOne, calendarTwo, largestUnit, cacheOne);
    return result;
  },
  year: function year(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    return calendarDate.year;
  },
  month: function month(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    return calendarDate.month;
  },
  day: function day(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    return calendarDate.day;
  },
  era: function era(date) {
    if (!this.helper.hasEra) return undefined;
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    return calendarDate.era;
  },
  eraYear: function eraYear(date) {
    if (!this.helper.hasEra) return undefined;
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    return calendarDate.eraYear;
  },
  monthCode: function monthCode(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    return calendarDate.monthCode;
  },
  dayOfWeek: function dayOfWeek(date) {
    return impl['iso8601'].dayOfWeek(date);
  },
  dayOfYear: function dayOfYear(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.isoToCalendarDate(date, cache);
    var startOfYear = this.helper.startOfCalendarYear(calendarDate);
    var diffDays = this.helper.calendarDaysUntil(startOfYear, calendarDate, cache);
    return diffDays + 1;
  },
  weekOfYear: function weekOfYear(date) {
    return impl['iso8601'].weekOfYear(date);
  },
  daysInWeek: function daysInWeek(date) {
    return impl['iso8601'].daysInWeek(date);
  },
  daysInMonth: function daysInMonth(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache); // Easy case: if the helper knows the length without any heavy calculation.

    var max = this.helper.maximumMonthLength(calendarDate);
    var min = this.helper.minimumMonthLength(calendarDate);
    if (max === min) return max; // The harder case is where months vary every year, e.g. islamic calendars.
    // Find the answer by calculating the difference in days between the first
    // day of the current month and the first day of the next month.

    var startOfMonthCalendar = this.helper.startOfCalendarMonth(calendarDate);
    var startOfNextMonthCalendar = this.helper.addMonthsCalendar(startOfMonthCalendar, 1, 'constrain', cache);
    var result = this.helper.calendarDaysUntil(startOfMonthCalendar, startOfNextMonthCalendar, cache);
    return result;
  },
  daysInYear: function daysInYear(dateParam) {
    var date = dateParam;
    if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    var startOfYearCalendar = this.helper.startOfCalendarYear(calendarDate);
    var startOfNextYearCalendar = this.helper.addCalendar(startOfYearCalendar, {
      years: 1
    }, 'constrain', cache);
    var result = this.helper.calendarDaysUntil(startOfYearCalendar, startOfNextYearCalendar, cache);
    return result;
  },
  monthsInYear: function monthsInYear(date) {
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    var result = this.helper.monthsInYear(calendarDate, cache);
    return result;
  },
  inLeapYear: function inLeapYear(dateParam) {
    var date = dateParam;
    if (!HasSlot(date, ISO_YEAR)) date = ToTemporalDate(date);
    var cache = OneObjectCache.getCacheForObject(date);
    var calendarDate = this.helper.temporalToCalendarDate(date, cache);
    var result = this.helper.inLeapYear(calendarDate, cache);
    return result;
  }
};
impl['hebrew'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperHebrew
});
impl['islamic'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperIslamic
});
['islamic-umalqura', 'islamic-tbla', 'islamic-civil', 'islamic-rgsa', 'islamicc'].forEach(function (id) {
  impl[id] = ObjectAssign$2({}, nonIsoGeneralImpl, {
    helper: _objectSpread2(_objectSpread2({}, helperIslamic), {}, {
      id: id
    })
  });
});
impl['persian'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperPersian
});
impl['ethiopic'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperEthiopic
});
impl['ethioaa'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperEthioaa
});
impl['coptic'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperCoptic
});
impl['chinese'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperChinese
});
impl['dangi'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperDangi
});
impl['roc'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperRoc
});
impl['indian'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperIndian
});
impl['buddhist'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperBuddhist
});
impl['japanese'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperJapanese
});
impl['gregory'] = ObjectAssign$2({}, nonIsoGeneralImpl, {
  helper: helperGregory
});
var BUILTIN_CALENDAR_IDS = Object.keys(impl);
function IsBuiltinCalendar(id) {
  return ArrayIncludes.call(BUILTIN_CALENDAR_IDS, id);
}

var tzComponent = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
var offsetNoCapture = /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/;
var timeZoneID = new RegExp("(?:(?:".concat(tzComponent.source, ")(?:\\/(?:").concat(tzComponent.source, "))*|Etc/GMT[-+]\\d{1,2}|").concat(offsetNoCapture.source, ")"));
var calComponent = /[A-Za-z0-9]{3,8}/;
var calendarID = new RegExp("(?:".concat(calComponent.source, "(?:-").concat(calComponent.source, ")*)"));
var yearpart = /(?:[+\u2212-]\d{6}|\d{4})/;
var monthpart = /(?:0[1-9]|1[0-2])/;
var daypart = /(?:0[1-9]|[12]\d|3[01])/;
var datesplit = new RegExp("(".concat(yearpart.source, ")(?:-(").concat(monthpart.source, ")-(").concat(daypart.source, ")|(").concat(monthpart.source, ")(").concat(daypart.source, "))"));
var timesplit = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
var offset = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
var zonesplit = new RegExp("(?:([zZ])|(?:".concat(offset.source, ")?)(?:\\[(").concat(timeZoneID.source, ")\\])?"));
var calendar = new RegExp("\\[u-ca=(".concat(calendarID.source, ")\\]"));
var instant$1 = new RegExp("^".concat(datesplit.source, "(?:(?:T|\\s+)").concat(timesplit.source, ")?").concat(zonesplit.source, "(?:").concat(calendar.source, ")?$"), 'i');
var datetime = new RegExp("^".concat(datesplit.source, "(?:(?:T|\\s+)").concat(timesplit.source, ")?(?:").concat(zonesplit.source, ")?(?:").concat(calendar.source, ")?$"), 'i');
var time = new RegExp("^".concat(timesplit.source, "(?:").concat(zonesplit.source, ")?(?:").concat(calendar.source, ")?$"), 'i'); // The short forms of YearMonth and MonthDay are only for the ISO calendar.
// Non-ISO calendar YearMonth and MonthDay have to parse as a Temporal.PlainDate,
// with the reference fields.
// YYYYMM forbidden by ISO 8601, but since it is not ambiguous with anything
// else we could parse in a YearMonth context, we allow it

var yearmonth = new RegExp("^(".concat(yearpart.source, ")-?(").concat(monthpart.source, ")$"));
var monthday = new RegExp("^(?:--)?(".concat(monthpart.source, ")-?(").concat(daypart.source, ")$"));
var fraction = /(\d+)(?:[.,](\d{1,9}))?/;
var durationDate = /(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/;
var durationTime = new RegExp("(?:".concat(fraction.source, "H)?(?:").concat(fraction.source, "M)?(?:").concat(fraction.source, "S)?"));
var duration = new RegExp("^([+\u2212-])?P".concat(durationDate.source, "(?:T(?!$)").concat(durationTime.source, ")?$"), 'i');

var ArrayPrototypePush$1 = Array.prototype.push;
var IntlDateTimeFormat$1 = globalThis.Intl.DateTimeFormat;
var MathMin = Math.min;
var MathMax = Math.max;
var MathAbs = Math.abs;
var MathFloor = Math.floor;
var MathSign = Math.sign;
var MathTrunc = Math.trunc;
var NumberIsNaN = Number.isNaN;
var NumberIsFinite = Number.isFinite;
var NumberCtor = Number;
var StringCtor = String;
var NumberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
var ObjectCreate$2 = Object.create;
var ObjectDefineProperty = Object.defineProperty;
var ObjectIs = Object.is;
var ReflectApply$1 = Reflect.apply;
var DAY_SECONDS = 86400;
var DAY_NANOS = bigInt(DAY_SECONDS).multiply(1e9);
var NS_MIN = bigInt(-DAY_SECONDS).multiply(1e17);
var NS_MAX = bigInt(DAY_SECONDS).multiply(1e17);
var YEAR_MIN = -271821;
var YEAR_MAX = 275760;
var BEFORE_FIRST_DST = bigInt(-388152).multiply(1e13); // 1847-01-01T00:00:00Z

function IsInteger(value) {
  if (typeof value !== 'number' || !NumberIsFinite(value)) return false;
  var abs = MathAbs(value);
  return MathFloor(abs) === abs;
}

function IsObject(value) {
  return _typeof(value) === 'object' && value !== null || typeof value === 'function';
}
function ToNumber(value) {
  if (typeof value === 'bigint') throw new TypeError('Cannot convert BigInt to number');
  return NumberCtor(value);
}

function ToInteger(value) {
  var num = ToNumber(value);
  if (NumberIsNaN(num)) return 0;
  var integer = MathTrunc(num);
  if (num === 0) return 0;
  return integer;
}

function ToString(value) {
  if (_typeof(value) === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a String');
  }

  return StringCtor(value);
}
function ToIntegerThrowOnInfinity(value) {
  var integer = ToInteger(value);

  if (!NumberIsFinite(integer)) {
    throw new RangeError('infinity is out of range');
  }

  return integer;
}
function ToPositiveInteger(valueParam, property) {
  var value = ToInteger(valueParam);

  if (!NumberIsFinite(value)) {
    throw new RangeError('infinity is out of range');
  }

  if (value < 1) {
    if (property !== undefined) {
      throw new RangeError("property '".concat(property, "' cannot be a a number less than one"));
    }

    throw new RangeError('Cannot convert a number less than one to a positive integer');
  }

  return value;
}
function ToIntegerWithoutRounding(valueParam) {
  var value = ToNumber(valueParam);
  if (NumberIsNaN(value)) return 0;

  if (!NumberIsFinite(value)) {
    throw new RangeError('infinity is out of range');
  }

  if (!IsInteger(value)) {
    throw new RangeError("unsupported fractional value ".concat(value));
  }

  return ToInteger(value); // ℝ(value) in spec text; converts -0 to 0
}
var BUILTIN_CASTS = new Map([['year', ToIntegerThrowOnInfinity], ['month', ToPositiveInteger], ['monthCode', ToString], ['day', ToPositiveInteger], ['hour', ToIntegerThrowOnInfinity], ['minute', ToIntegerThrowOnInfinity], ['second', ToIntegerThrowOnInfinity], ['millisecond', ToIntegerThrowOnInfinity], ['microsecond', ToIntegerThrowOnInfinity], ['nanosecond', ToIntegerThrowOnInfinity], ['years', ToIntegerWithoutRounding], ['months', ToIntegerWithoutRounding], ['weeks', ToIntegerWithoutRounding], ['days', ToIntegerWithoutRounding], ['hours', ToIntegerWithoutRounding], ['minutes', ToIntegerWithoutRounding], ['seconds', ToIntegerWithoutRounding], ['milliseconds', ToIntegerWithoutRounding], ['microseconds', ToIntegerWithoutRounding], ['nanoseconds', ToIntegerWithoutRounding], ['era', ToString], ['eraYear', ToInteger], ['offset', ToString]]);
var ALLOWED_UNITS = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'];
var SINGULAR_PLURAL_UNITS = [['years', 'year'], ['months', 'month'], ['weeks', 'week'], ['days', 'day'], ['hours', 'hour'], ['minutes', 'minute'], ['seconds', 'second'], ['milliseconds', 'millisecond'], ['microseconds', 'microsecond'], ['nanoseconds', 'nanosecond']];
var IntlDateTimeFormatEnUsCache = new Map();

function getIntlDateTimeFormatEnUsForTimeZone(timeZoneIdentifier) {
  var instance = IntlDateTimeFormatEnUsCache.get(timeZoneIdentifier);

  if (instance === undefined) {
    instance = new IntlDateTimeFormat$1('en-us', {
      timeZone: StringCtor(timeZoneIdentifier),
      hour12: false,
      era: 'short',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    IntlDateTimeFormatEnUsCache.set(timeZoneIdentifier, instance);
  }

  return instance;
}

function IsTemporalInstant(item) {
  return HasSlot(item, EPOCHNANOSECONDS) && !HasSlot(item, TIME_ZONE, CALENDAR);
}
function IsTemporalTimeZone(item) {
  return HasSlot(item, TIMEZONE_ID);
}
function IsTemporalCalendar(item) {
  return HasSlot(item, CALENDAR_ID);
}
function IsTemporalDuration(item) {
  return HasSlot(item, YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS, MILLISECONDS, MICROSECONDS, NANOSECONDS);
}
function IsTemporalDate(item) {
  return HasSlot(item, DATE_BRAND);
}
function IsTemporalTime(item) {
  return HasSlot(item, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND) && !HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY);
}
function IsTemporalDateTime(item) {
  return HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND);
}
function IsTemporalYearMonth(item) {
  return HasSlot(item, YEAR_MONTH_BRAND);
}
function IsTemporalMonthDay(item) {
  return HasSlot(item, MONTH_DAY_BRAND);
}
function IsTemporalZonedDateTime(item) {
  return HasSlot(item, EPOCHNANOSECONDS, TIME_ZONE, CALENDAR);
}
function RejectObjectWithCalendarOrTimeZone(item) {
  if (HasSlot(item, CALENDAR) || HasSlot(item, TIME_ZONE)) {
    throw new TypeError('with() does not support a calendar or timeZone property');
  }

  if (item.calendar !== undefined) {
    throw new TypeError('with() does not support a calendar property');
  }

  if (item.timeZone !== undefined) {
    throw new TypeError('with() does not support a timeZone property');
  }
}

function ParseTemporalTimeZone(stringIdent) {
  // TODO: why aren't these three variables destructured to include `undefined` as possible types?
  var _ParseTemporalTimeZon = ParseTemporalTimeZoneString(stringIdent),
      ianaName = _ParseTemporalTimeZon.ianaName,
      offset = _ParseTemporalTimeZon.offset,
      z = _ParseTemporalTimeZon.z;

  if (ianaName) return ianaName;
  if (z) return 'UTC';
  return offset;
}

function FormatCalendarAnnotation(id, showCalendar) {
  if (showCalendar === 'never') return '';
  if (showCalendar === 'auto' && id === 'iso8601') return '';
  return "[u-ca=".concat(id, "]");
}

function ParseISODateTime(isoString, _ref) {
  var zoneRequired = _ref.zoneRequired;
  var regex = zoneRequired ? instant$1 : datetime;
  var match = regex.exec(isoString);
  if (!match) throw new RangeError("invalid ISO 8601 string: ".concat(isoString));
  var yearString = match[1];
  if (yearString[0] === "\u2212") yearString = "-".concat(yearString.slice(1));
  var year = ToInteger(yearString);
  var month = ToInteger(match[2] || match[4]);
  var day = ToInteger(match[3] || match[5]);
  var hour = ToInteger(match[6]);
  var minute = ToInteger(match[7] || match[10]);
  var second = ToInteger(match[8] || match[11]);
  if (second === 60) second = 59;
  var fraction = (match[9] || match[12]) + '000000000';
  var millisecond = ToInteger(fraction.slice(0, 3));
  var microsecond = ToInteger(fraction.slice(3, 6));
  var nanosecond = ToInteger(fraction.slice(6, 9));
  var offset;
  var z = false;

  if (match[13]) {
    offset = undefined;
    z = true;
  } else if (match[14] && match[15]) {
    var offsetSign = match[14] === '-' || match[14] === "\u2212" ? '-' : '+';
    var offsetHours = match[15] || '00';
    var offsetMinutes = match[16] || '00';
    var offsetSeconds = match[17] || '00';
    var offsetFraction = match[18] || '0';
    offset = "".concat(offsetSign).concat(offsetHours, ":").concat(offsetMinutes);

    if (+offsetFraction) {
      while (offsetFraction.endsWith('0')) {
        offsetFraction = offsetFraction.slice(0, -1);
      }

      offset += ":".concat(offsetSeconds, ".").concat(offsetFraction);
    } else if (+offsetSeconds) {
      offset += ":".concat(offsetSeconds);
    }

    if (offset === '-00:00') offset = '+00:00';
  }

  var ianaName = match[19];

  if (ianaName) {
    try {
      // Canonicalize name if it is an IANA link name or is capitalized wrong
      ianaName = GetCanonicalTimeZoneIdentifier(ianaName).toString();
    } catch (_unused) {// Not an IANA name, may be a custom ID, pass through unchanged
    }
  }

  var calendar = match[20];
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond,
    ianaName: ianaName,
    offset: offset,
    z: z,
    calendar: calendar
  };
}

function ParseTemporalInstantString(isoString) {
  return ParseISODateTime(isoString, {
    zoneRequired: true
  });
}

function ParseTemporalZonedDateTimeString(isoString) {
  return ParseISODateTime(isoString, {
    zoneRequired: true
  });
}

function ParseTemporalDateTimeString(isoString) {
  return ParseISODateTime(isoString, {
    zoneRequired: false
  });
}

function ParseTemporalDateString(isoString) {
  return ParseISODateTime(isoString, {
    zoneRequired: false
  });
}

function ParseTemporalTimeString(isoString) {
  var match = time.exec(isoString);
  var hour, minute, second, millisecond, microsecond, nanosecond, calendar;

  if (match) {
    hour = ToInteger(match[1]);
    minute = ToInteger(match[2] || match[5]);
    second = ToInteger(match[3] || match[6]);
    if (second === 60) second = 59;
    var fraction = (match[4] || match[7]) + '000000000';
    millisecond = ToInteger(fraction.slice(0, 3));
    microsecond = ToInteger(fraction.slice(3, 6));
    nanosecond = ToInteger(fraction.slice(6, 9));
    calendar = match[15];
  } else {
    var z;

    var _ParseISODateTime = ParseISODateTime(isoString, {
      zoneRequired: false
    });

    hour = _ParseISODateTime.hour;
    minute = _ParseISODateTime.minute;
    second = _ParseISODateTime.second;
    millisecond = _ParseISODateTime.millisecond;
    microsecond = _ParseISODateTime.microsecond;
    nanosecond = _ParseISODateTime.nanosecond;
    calendar = _ParseISODateTime.calendar;
    z = _ParseISODateTime.z;
    if (z) throw new RangeError('Z designator not supported for PlainTime');
  }

  return {
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond,
    calendar: calendar
  };
}

function ParseTemporalYearMonthString(isoString) {
  var match = yearmonth.exec(isoString);
  var year, month, calendar, referenceISODay;

  if (match) {
    var yearString = match[1];
    if (yearString[0] === "\u2212") yearString = "-".concat(yearString.slice(1));
    year = ToInteger(yearString);
    month = ToInteger(match[2]);
    calendar = match[3];
  } else {
    var z;

    var _ParseISODateTime2 = ParseISODateTime(isoString, {
      zoneRequired: false
    });

    year = _ParseISODateTime2.year;
    month = _ParseISODateTime2.month;
    calendar = _ParseISODateTime2.calendar;
    referenceISODay = _ParseISODateTime2.day;
    z = _ParseISODateTime2.z;
    if (z) throw new RangeError('Z designator not supported for PlainYearMonth');
  }

  return {
    year: year,
    month: month,
    calendar: calendar,
    referenceISODay: referenceISODay
  };
}

function ParseTemporalMonthDayString(isoString) {
  var match = monthday.exec(isoString);
  var month, day, calendar, referenceISOYear;

  if (match) {
    month = ToInteger(match[1]);
    day = ToInteger(match[2]);
  } else {
    var z;

    var _ParseISODateTime3 = ParseISODateTime(isoString, {
      zoneRequired: false
    });

    month = _ParseISODateTime3.month;
    day = _ParseISODateTime3.day;
    calendar = _ParseISODateTime3.calendar;
    referenceISOYear = _ParseISODateTime3.year;
    z = _ParseISODateTime3.z;
    if (z) throw new RangeError('Z designator not supported for PlainMonthDay');
  }

  return {
    month: month,
    day: day,
    calendar: calendar,
    referenceISOYear: referenceISOYear
  };
}

function ParseTemporalTimeZoneString(stringIdent) {
  try {
    var canonicalIdent = GetCanonicalTimeZoneIdentifier(stringIdent);

    if (canonicalIdent) {
      canonicalIdent = canonicalIdent.toString();
      if (ParseOffsetString(canonicalIdent) !== null) return {
        offset: canonicalIdent
      };
      return {
        ianaName: canonicalIdent
      };
    }
  } catch (_unused2) {// fall through
  }

  try {
    // Try parsing ISO string instead
    return ParseISODateTime(stringIdent, {
      zoneRequired: true
    });
  } catch (_unused3) {
    throw new RangeError("Invalid time zone: ".concat(stringIdent));
  }
}

function ParseTemporalDurationString(isoString) {
  var match = duration.exec(isoString);
  if (!match) throw new RangeError("invalid duration: ".concat(isoString));

  if (match.slice(2).every(function (element) {
    return element === undefined;
  })) {
    throw new RangeError("invalid duration: ".concat(isoString));
  }

  var sign = match[1] === '-' || match[1] === "\u2212" ? -1 : 1;
  var years = ToInteger(match[2]) * sign;
  var months = ToInteger(match[3]) * sign;
  var weeks = ToInteger(match[4]) * sign;
  var days = ToInteger(match[5]) * sign;
  var hours = ToInteger(match[6]) * sign;
  var fHours = match[7];
  var minutes = ToInteger(match[8]) * sign;
  var fMinutes = match[9];
  var seconds = ToInteger(match[10]) * sign;
  var fSeconds = match[11] + '000000000';
  var milliseconds = ToInteger(fSeconds.slice(0, 3)) * sign;
  var microseconds = ToInteger(fSeconds.slice(3, 6)) * sign;
  var nanoseconds = ToInteger(fSeconds.slice(6, 9)) * sign;
  fHours = fHours ? sign * ToInteger(fHours) / Math.pow(10, fHours.length) : 0;
  fMinutes = fMinutes ? sign * ToInteger(fMinutes) / Math.pow(10, fMinutes.length) : 0;

  var _DurationHandleFracti = DurationHandleFractions(fHours, minutes, fMinutes, seconds, milliseconds, microseconds, nanoseconds);

  minutes = _DurationHandleFracti.minutes;
  seconds = _DurationHandleFracti.seconds;
  milliseconds = _DurationHandleFracti.milliseconds;
  microseconds = _DurationHandleFracti.microseconds;
  nanoseconds = _DurationHandleFracti.nanoseconds;
  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}

function ParseTemporalInstant(isoString) {
  var _ParseTemporalInstant = ParseTemporalInstantString(isoString),
      year = _ParseTemporalInstant.year,
      month = _ParseTemporalInstant.month,
      day = _ParseTemporalInstant.day,
      hour = _ParseTemporalInstant.hour,
      minute = _ParseTemporalInstant.minute,
      second = _ParseTemporalInstant.second,
      millisecond = _ParseTemporalInstant.millisecond,
      microsecond = _ParseTemporalInstant.microsecond,
      nanosecond = _ParseTemporalInstant.nanosecond,
      offset = _ParseTemporalInstant.offset,
      z = _ParseTemporalInstant.z;

  var epochNs = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  if (epochNs === null) throw new RangeError('DateTime outside of supported range');
  if (!z && !offset) throw new RangeError('Temporal.Instant requires a time zone offset');
  var offsetNs = z ? 0 : ParseOffsetString(offset);
  return epochNs.subtract(offsetNs);
}

function RegulateISODate(yearParam, monthParam, dayParam, overflow) {
  var year = yearParam;
  var month = monthParam;
  var day = dayParam;

  switch (overflow) {
    case 'reject':
      RejectISODate(year, month, day);
      break;

    case 'constrain':
      var _ConstrainISODate = ConstrainISODate(year, month, day);

      year = _ConstrainISODate.year;
      month = _ConstrainISODate.month;
      day = _ConstrainISODate.day;
      break;
  }

  return {
    year: year,
    month: month,
    day: day
  };
}
function RegulateTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, overflow) {
  var hour = hourParam;
  var minute = minuteParam;
  var second = secondParam;
  var millisecond = millisecondParam;
  var microsecond = microsecondParam;
  var nanosecond = nanosecondParam;

  switch (overflow) {
    case 'reject':
      RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
      break;

    case 'constrain':
      var _ConstrainTime = ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond);

      hour = _ConstrainTime.hour;
      minute = _ConstrainTime.minute;
      second = _ConstrainTime.second;
      millisecond = _ConstrainTime.millisecond;
      microsecond = _ConstrainTime.microsecond;
      nanosecond = _ConstrainTime.nanosecond;
      break;
  }

  return {
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}
function RegulateISOYearMonth(yearParam, monthParam, overflow) {
  var year = yearParam;
  var month = monthParam;
  var referenceISODay = 1;

  switch (overflow) {
    case 'reject':
      RejectISODate(year, month, referenceISODay);
      break;

    case 'constrain':
      var _ConstrainISODate2 = ConstrainISODate(year, month);

      year = _ConstrainISODate2.year;
      month = _ConstrainISODate2.month;
      break;
  }

  return {
    year: year,
    month: month
  };
}

function DurationHandleFractions(fHoursParam, minutesParam, fMinutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam) {
  var fHours = fHoursParam;
  var minutes = minutesParam;
  var fMinutes = fMinutesParam;
  var seconds = secondsParam;
  var milliseconds = millisecondsParam;
  var microseconds = microsecondsParam;
  var nanoseconds = nanosecondsParam;

  if (fHours !== 0) {
    [minutes, fMinutes, seconds, milliseconds, microseconds, nanoseconds].forEach(function (val) {
      if (val !== 0) throw new RangeError('only the smallest unit can be fractional');
    });
    var mins = fHours * 60;
    minutes = MathTrunc(mins);
    fMinutes = mins % 1;
  }

  if (fMinutes !== 0) {
    [seconds, milliseconds, microseconds, nanoseconds].forEach(function (val) {
      if (val !== 0) throw new RangeError('only the smallest unit can be fractional');
    });
    var secs = fMinutes * 60;
    seconds = MathTrunc(secs);
    var fSeconds = secs % 1;

    if (fSeconds !== 0) {
      var mils = fSeconds * 1000;
      milliseconds = MathTrunc(mils);
      var fMilliseconds = mils % 1;

      if (fMilliseconds !== 0) {
        var mics = fMilliseconds * 1000;
        microseconds = MathTrunc(mics);
        var fMicroseconds = mics % 1;

        if (fMicroseconds !== 0) {
          var nans = fMicroseconds * 1000;
          nanoseconds = MathTrunc(nans);
        }
      }
    }
  }

  return {
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}

function ToTemporalDurationRecord(item) {
  if (IsTemporalDuration(item)) {
    return {
      years: GetSlot(item, YEARS),
      months: GetSlot(item, MONTHS),
      weeks: GetSlot(item, WEEKS),
      days: GetSlot(item, DAYS),
      hours: GetSlot(item, HOURS),
      minutes: GetSlot(item, MINUTES),
      seconds: GetSlot(item, SECONDS),
      milliseconds: GetSlot(item, MILLISECONDS),
      microseconds: GetSlot(item, MICROSECONDS),
      nanoseconds: GetSlot(item, NANOSECONDS)
    };
  }

  var props = ToPartialRecord(item, ['days', 'hours', 'microseconds', 'milliseconds', 'minutes', 'months', 'nanoseconds', 'seconds', 'weeks', 'years']);
  if (!props) throw new TypeError('invalid duration-like');
  var _props$years = props.years,
      years = _props$years === void 0 ? 0 : _props$years,
      _props$months = props.months,
      months = _props$months === void 0 ? 0 : _props$months,
      _props$weeks = props.weeks,
      weeks = _props$weeks === void 0 ? 0 : _props$weeks,
      _props$days = props.days,
      days = _props$days === void 0 ? 0 : _props$days,
      _props$hours = props.hours,
      hours = _props$hours === void 0 ? 0 : _props$hours,
      _props$minutes = props.minutes,
      minutes = _props$minutes === void 0 ? 0 : _props$minutes,
      _props$seconds = props.seconds,
      seconds = _props$seconds === void 0 ? 0 : _props$seconds,
      _props$milliseconds = props.milliseconds,
      milliseconds = _props$milliseconds === void 0 ? 0 : _props$milliseconds,
      _props$microseconds = props.microseconds,
      microseconds = _props$microseconds === void 0 ? 0 : _props$microseconds,
      _props$nanoseconds = props.nanoseconds,
      nanoseconds = _props$nanoseconds === void 0 ? 0 : _props$nanoseconds;
  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}

function ToLimitedTemporalDuration(item) {
  var disallowedProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var record;

  if (IsObject(item)) {
    record = ToTemporalDurationRecord(item);
  } else {
    var str = ToString(item);
    record = ParseTemporalDurationString(str);
  }

  var _record = record,
      years = _record.years,
      months = _record.months,
      weeks = _record.weeks,
      days = _record.days,
      hours = _record.hours,
      minutes = _record.minutes,
      seconds = _record.seconds,
      milliseconds = _record.milliseconds,
      microseconds = _record.microseconds,
      nanoseconds = _record.nanoseconds;
  RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

  var _iterator = _createForOfIteratorHelper(disallowedProperties),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (record[property] !== 0) {
        throw new RangeError("Duration field ".concat(property, " not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead."));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return record;
}
function ToTemporalOverflow(options) {
  return GetOption(options, 'overflow', ['constrain', 'reject'], 'constrain');
}
function ToTemporalDisambiguation(options) {
  return GetOption(options, 'disambiguation', ['compatible', 'earlier', 'later', 'reject'], 'compatible');
}
function ToTemporalRoundingMode(options, fallback) {
  return GetOption(options, 'roundingMode', ['ceil', 'floor', 'trunc', 'halfExpand'], fallback);
}
function NegateTemporalRoundingMode(roundingMode) {
  switch (roundingMode) {
    case 'ceil':
      return 'floor';

    case 'floor':
      return 'ceil';

    default:
      return roundingMode;
  }
}
function ToTemporalOffset(options, fallback) {
  return GetOption(options, 'offset', ['prefer', 'use', 'ignore', 'reject'], fallback);
}
function ToShowCalendarOption(options) {
  return GetOption(options, 'calendarName', ['auto', 'always', 'never'], 'auto');
}
function ToShowTimeZoneNameOption(options) {
  return GetOption(options, 'timeZoneName', ['auto', 'never'], 'auto');
}
function ToShowOffsetOption(options) {
  return GetOption(options, 'offset', ['auto', 'never'], 'auto');
}
function ToTemporalRoundingIncrement(options, dividend, inclusive) {
  var maximum = Infinity;
  if (dividend !== undefined) maximum = dividend;
  if (!inclusive && dividend !== undefined) maximum = dividend > 1 ? dividend - 1 : 1;
  var increment = GetNumberOption(options, 'roundingIncrement', 1, maximum, 1);

  if (dividend !== undefined && dividend % increment !== 0) {
    throw new RangeError("Rounding increment must divide evenly into ".concat(dividend));
  }

  return increment;
}
function ToTemporalDateTimeRoundingIncrement(options, smallestUnit) {
  var maximumIncrements = {
    year: undefined,
    month: undefined,
    week: undefined,
    day: undefined,
    hour: 24,
    minute: 60,
    second: 60,
    millisecond: 1000,
    microsecond: 1000,
    nanosecond: 1000
  };
  return ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
}
function ToSecondsStringPrecision(options) {
  var smallestUnit = ToSmallestTemporalUnit(options, undefined, ['year', 'month', 'week', 'day', 'hour']);

  switch (smallestUnit) {
    case 'minute':
      return {
        precision: 'minute',
        unit: 'minute',
        increment: 1
      };

    case 'second':
      return {
        precision: 0,
        unit: 'second',
        increment: 1
      };

    case 'millisecond':
      return {
        precision: 3,
        unit: 'millisecond',
        increment: 1
      };

    case 'microsecond':
      return {
        precision: 6,
        unit: 'microsecond',
        increment: 1
      };

    case 'nanosecond':
      return {
        precision: 9,
        unit: 'nanosecond',
        increment: 1
      };

  }

  var digits = options.fractionalSecondDigits;
  if (digits === undefined) digits = 'auto';

  if (typeof digits !== 'number') {
    var stringDigits = ToString(digits);
    if (stringDigits === 'auto') return {
      precision: 'auto',
      unit: 'nanosecond',
      increment: 1
    };
    throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(stringDigits));
  }

  if (NumberIsNaN(digits) || digits < 0 || digits > 9) {
    throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digits));
  }

  var precision = MathFloor(digits);

  switch (precision) {
    case 0:
      return {
        precision: precision,
        unit: 'second',
        increment: 1
      };

    case 1:
    case 2:
    case 3:
      return {
        precision: precision,
        unit: 'millisecond',
        increment: Math.pow(10, 3 - precision)
      };

    case 4:
    case 5:
    case 6:
      return {
        precision: precision,
        unit: 'microsecond',
        increment: Math.pow(10, 6 - precision)
      };

    case 7:
    case 8:
    case 9:
      return {
        precision: precision,
        unit: 'nanosecond',
        increment: Math.pow(10, 9 - precision)
      };

    default:
      throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digits));
  }
}
function ToLargestTemporalUnit(options, fallback) {
  var disallowedStrings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var autoValue = arguments.length > 3 ? arguments[3] : undefined;
  var singular = new Map(SINGULAR_PLURAL_UNITS.filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        sing = _ref3[1];

    return !disallowedStrings.includes(sing);
  }));
  var allowed = new Set(ALLOWED_UNITS);

  var _iterator2 = _createForOfIteratorHelper(disallowedStrings),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var s = _step2.value;
      allowed.delete(s);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var retval = GetOption(options, 'largestUnit', ['auto'].concat(_toConsumableArray(allowed), _toConsumableArray(singular.keys())), fallback);
  if (retval === 'auto' && autoValue !== undefined) return autoValue;

  if (singular.has(retval)) {
    return singular.get(retval);
  }

  return retval;
}
function ToSmallestTemporalUnit(options, fallback) {
  var disallowedStrings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var singular = new Map(SINGULAR_PLURAL_UNITS.filter(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        sing = _ref5[1];

    return !disallowedStrings.includes(sing);
  }));
  var allowed = new Set(ALLOWED_UNITS);

  var _iterator3 = _createForOfIteratorHelper(disallowedStrings),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var s = _step3.value;
      allowed.delete(s);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var value = GetOption(options, 'smallestUnit', [].concat(_toConsumableArray(allowed), _toConsumableArray(singular.keys())), fallback);
  if (singular.has(value)) return singular.get(value);
  return value;
}
function ToTemporalDurationTotalUnit(options) {
  // This AO is identical to ToSmallestTemporalUnit, except:
  // - default is always `undefined` (caller will throw if omitted)
  // - option is named `unit` (not `smallestUnit`)
  // - all units are valid (no `disallowedStrings`)
  var singular = new Map(SINGULAR_PLURAL_UNITS);
  var value = GetOption(options, 'unit', [].concat(_toConsumableArray(singular.values()), _toConsumableArray(singular.keys())), undefined);

  if (singular.has(value)) {
    return singular.get(value);
  }

  return value;
}
function ToRelativeTemporalObject(options) {
  var relativeTo = options.relativeTo; // TODO: `as undefined` below should not be needed.  Verify that it can be
  // removed after strictNullChecks is enabled.

  if (relativeTo === undefined) return relativeTo;
  var offsetBehaviour = 'option';
  var matchMinutes = false;
  var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, timeZone, offset;

  if (IsObject(relativeTo)) {
    if (IsTemporalZonedDateTime(relativeTo) || IsTemporalDate(relativeTo)) return relativeTo;
    if (IsTemporalDateTime(relativeTo)) return TemporalDateTimeToDate(relativeTo);
    calendar = GetTemporalCalendarWithISODefault(relativeTo);
    var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
    var fields = ToTemporalDateTimeFields(relativeTo, fieldNames);
    var dateOptions = ObjectCreate$2(null);
    dateOptions.overflow = 'constrain';

    var _InterpretTemporalDat = InterpretTemporalDateTimeFields(calendar, fields, dateOptions);

    year = _InterpretTemporalDat.year;
    month = _InterpretTemporalDat.month;
    day = _InterpretTemporalDat.day;
    hour = _InterpretTemporalDat.hour;
    minute = _InterpretTemporalDat.minute;
    second = _InterpretTemporalDat.second;
    millisecond = _InterpretTemporalDat.millisecond;
    microsecond = _InterpretTemporalDat.microsecond;
    nanosecond = _InterpretTemporalDat.nanosecond;
    // The `offset` and `timeZone` properties only exist on ZonedDateTime (or
    // ZonedDateTimeLike-property bags). The assertions below are used to avoid
    // TS errors while not diverging runtime code from proposal-temporal.
    offset = relativeTo.offset;
    if (offset === undefined) offsetBehaviour = 'wall';
    timeZone = relativeTo.timeZone;
  } else {
    var ianaName, z;

    var _ParseISODateTime4 = ParseISODateTime(ToString(relativeTo), {
      zoneRequired: false
    });

    year = _ParseISODateTime4.year;
    month = _ParseISODateTime4.month;
    day = _ParseISODateTime4.day;
    hour = _ParseISODateTime4.hour;
    minute = _ParseISODateTime4.minute;
    second = _ParseISODateTime4.second;
    millisecond = _ParseISODateTime4.millisecond;
    microsecond = _ParseISODateTime4.microsecond;
    nanosecond = _ParseISODateTime4.nanosecond;
    calendar = _ParseISODateTime4.calendar;
    ianaName = _ParseISODateTime4.ianaName;
    offset = _ParseISODateTime4.offset;
    z = _ParseISODateTime4.z;
    if (ianaName) timeZone = ianaName;

    if (z) {
      offsetBehaviour = 'exact';
    } else if (!offset) {
      offsetBehaviour = 'wall';
    }

    if (!calendar) calendar = GetISO8601Calendar();
    calendar = ToTemporalCalendar(calendar);
    matchMinutes = true;
  }

  if (timeZone) {
    timeZone = ToTemporalTimeZone(timeZone);
    var offsetNs = 0;
    if (offsetBehaviour === 'option') offsetNs = ParseOffsetString(ToString(offset));
    var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, 'compatible', 'reject', matchMinutes);
    return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
  }

  return CreateTemporalDate(year, month, day, calendar);
}
function ValidateTemporalUnitRange(largestUnit, smallestUnit) {
  if (ALLOWED_UNITS.indexOf(largestUnit) > ALLOWED_UNITS.indexOf(smallestUnit)) {
    throw new RangeError("largestUnit ".concat(largestUnit, " cannot be smaller than smallestUnit ").concat(smallestUnit));
  }
}
function DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
  var singular = new Map(SINGULAR_PLURAL_UNITS);

  for (var _i = 0, _arr = [['years', years], ['months', months], ['weeks', weeks], ['days', days], ['hours', hours], ['minutes', minutes], ['seconds', seconds], ['milliseconds', milliseconds], ['microseconds', microseconds], ['nanoseconds', nanoseconds]]; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        prop = _arr$_i[0],
        v = _arr$_i[1];

    if (v !== 0) return singular.get(prop);
  }

  return 'nanosecond';
}
function LargerOfTwoTemporalUnits(unit1, unit2) {
  if (ALLOWED_UNITS.indexOf(unit1) > ALLOWED_UNITS.indexOf(unit2)) return unit2;
  return unit1;
}
function ToPartialRecord(bag, fields, callerCast) {
  if (!IsObject(bag)) return false;
  var any;

  var _iterator4 = _createForOfIteratorHelper(fields),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var property = _step4.value;
      var value = bag[property];

      if (value !== undefined) {
        any = any || {};

        if (callerCast === undefined && BUILTIN_CASTS.has(property)) {
          any[property] = BUILTIN_CASTS.get(property)(value);
        } else if (callerCast !== undefined) {
          any[property] = callerCast(value);
        } else {
          any[property] = value;
        }
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return any ? any : false;
}
function PrepareTemporalFields(bag, fields) {
  if (!IsObject(bag)) return undefined;
  var result = {};
  var any = false;

  var _iterator5 = _createForOfIteratorHelper(fields),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var fieldRecord = _step5.value;

      var _fieldRecord = _slicedToArray(fieldRecord, 2),
          property = _fieldRecord[0],
          defaultValue = _fieldRecord[1];

      var value = bag[property];

      if (value === undefined) {
        if (fieldRecord.length === 1) {
          throw new TypeError("required property '".concat(property, "' missing or undefined"));
        } // TODO: two TS issues here:
        // 1. `undefined` was stripped from the type of `defaultValue`. Will it
        //    come back when strictNullChecks is enabled?
        // 2. Can types be improved to remove the need for the type assertion?


        value = defaultValue;
      } else {
        any = true;

        if (BUILTIN_CASTS.has(property)) {
          value = BUILTIN_CASTS.get(property)(value);
        }
      }

      result[property] = value;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  if (!any) {
    throw new TypeError('no supported properties found');
  }

  if (result['era'] === undefined !== (result['eraYear'] === undefined)) {
    throw new RangeError("properties 'era' and 'eraYear' must be provided together");
  }

  return result;
} // field access in the following operations is intentionally alphabetical

function ToTemporalDateFields(bag, fieldNames) {
  var entries = [['day', undefined], ['month', undefined], ['monthCode', undefined], ['year', undefined]]; // Add extra fields from the calendar at the end

  fieldNames.forEach(function (fieldName) {
    if (!entries.some(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
          name = _ref7[0];

      return name === fieldName;
    })) {
      entries.push([fieldName, undefined]);
    }
  });
  return PrepareTemporalFields(bag, entries);
}
function ToTemporalDateTimeFields(bag, fieldNames) {
  var entries = [['day', undefined], ['hour', 0], ['microsecond', 0], ['millisecond', 0], ['minute', 0], ['month', undefined], ['monthCode', undefined], ['nanosecond', 0], ['second', 0], ['year', undefined]]; // Add extra fields from the calendar at the end

  fieldNames.forEach(function (fieldName) {
    if (!entries.some(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 1),
          name = _ref9[0];

      return name === fieldName;
    })) {
      entries.push([fieldName, undefined]);
    }
  });
  return PrepareTemporalFields(bag, entries);
}
function ToTemporalMonthDayFields(bag, fieldNames) {
  var entries = [['day', undefined], ['month', undefined], ['monthCode', undefined], ['year', undefined]]; // Add extra fields from the calendar at the end

  fieldNames.forEach(function (fieldName) {
    if (!entries.some(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 1),
          name = _ref11[0];

      return name === fieldName;
    })) {
      entries.push([fieldName, undefined]);
    }
  });
  return PrepareTemporalFields(bag, entries);
}
function ToTemporalTimeRecord(bag) {
  return PrepareTemporalFields(bag, [['hour', 0], ['microsecond', 0], ['millisecond', 0], ['minute', 0], ['nanosecond', 0], ['second', 0]]);
}
function ToTemporalYearMonthFields(bag, fieldNames) {
  var entries = [['month', undefined], ['monthCode', undefined], ['year', undefined]]; // Add extra fields from the calendar at the end

  fieldNames.forEach(function (fieldName) {
    if (!entries.some(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 1),
          name = _ref13[0];

      return name === fieldName;
    })) {
      entries.push([fieldName, undefined]);
    }
  });
  return PrepareTemporalFields(bag, entries);
}

function ToTemporalZonedDateTimeFields(bag, fieldNames) {
  var entries = [['day', undefined], ['hour', 0], ['microsecond', 0], ['millisecond', 0], ['minute', 0], ['month', undefined], ['monthCode', undefined], ['nanosecond', 0], ['second', 0], ['year', undefined], ['offset', undefined], ['timeZone']]; // Add extra fields from the calendar at the end

  fieldNames.forEach(function (fieldName) {
    if (!entries.some(function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 1),
          name = _ref15[0];

      return name === fieldName;
    })) {
      entries.push([fieldName, undefined]);
    }
  });
  return PrepareTemporalFields(bag, entries);
}

function ToTemporalDate(itemParam) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ObjectCreate$2(null);
  var item = itemParam;

  if (IsObject(item)) {
    if (IsTemporalDate(item)) return item;

    if (IsTemporalZonedDateTime(item)) {
      item = BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
    }

    if (IsTemporalDateTime(item)) {
      return CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
    }

    var _calendar = GetTemporalCalendarWithISODefault(item);

    var fieldNames = CalendarFields(_calendar, ['day', 'month', 'monthCode', 'year']);
    var fields = ToTemporalDateFields(item, fieldNames);
    return DateFromFields(_calendar, fields, options);
  }

  ToTemporalOverflow(options); // validate and ignore

  var _ParseTemporalDateStr = ParseTemporalDateString(ToString(item)),
      year = _ParseTemporalDateStr.year,
      month = _ParseTemporalDateStr.month,
      day = _ParseTemporalDateStr.day,
      calendar = _ParseTemporalDateStr.calendar,
      z = _ParseTemporalDateStr.z;

  if (z) throw new RangeError('Z designator not supported for PlainDate');
  var TemporalPlainDate = GetIntrinsic('%Temporal.PlainDate%');
  return new TemporalPlainDate(year, month, day, calendar); // include validation
}
function InterpretTemporalDateTimeFields(calendar, fields, options) {
  var _ToTemporalTimeRecord = ToTemporalTimeRecord(fields),
      hour = _ToTemporalTimeRecord.hour,
      minute = _ToTemporalTimeRecord.minute,
      second = _ToTemporalTimeRecord.second,
      millisecond = _ToTemporalTimeRecord.millisecond,
      microsecond = _ToTemporalTimeRecord.microsecond,
      nanosecond = _ToTemporalTimeRecord.nanosecond;

  var overflow = ToTemporalOverflow(options);
  var date = DateFromFields(calendar, fields, options);
  var year = GetSlot(date, ISO_YEAR);
  var month = GetSlot(date, ISO_MONTH);
  var day = GetSlot(date, ISO_DAY);

  var _RegulateTime = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

  hour = _RegulateTime.hour;
  minute = _RegulateTime.minute;
  second = _RegulateTime.second;
  millisecond = _RegulateTime.millisecond;
  microsecond = _RegulateTime.microsecond;
  nanosecond = _RegulateTime.nanosecond;
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}
function ToTemporalDateTime(item) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ObjectCreate$2(null);
  var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar;

  if (IsObject(item)) {
    if (IsTemporalDateTime(item)) return item;

    if (IsTemporalZonedDateTime(item)) {
      return BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
    }

    if (IsTemporalDate(item)) {
      return CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(item, CALENDAR));
    }

    calendar = GetTemporalCalendarWithISODefault(item);
    var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
    var fields = ToTemporalDateTimeFields(item, fieldNames);

    var _InterpretTemporalDat2 = InterpretTemporalDateTimeFields(calendar, fields, options);

    year = _InterpretTemporalDat2.year;
    month = _InterpretTemporalDat2.month;
    day = _InterpretTemporalDat2.day;
    hour = _InterpretTemporalDat2.hour;
    minute = _InterpretTemporalDat2.minute;
    second = _InterpretTemporalDat2.second;
    millisecond = _InterpretTemporalDat2.millisecond;
    microsecond = _InterpretTemporalDat2.microsecond;
    nanosecond = _InterpretTemporalDat2.nanosecond;
  } else {
    ToTemporalOverflow(options); // validate and ignore

    var z;

    var _ParseTemporalDateTim = ParseTemporalDateTimeString(ToString(item));

    year = _ParseTemporalDateTim.year;
    month = _ParseTemporalDateTim.month;
    day = _ParseTemporalDateTim.day;
    hour = _ParseTemporalDateTim.hour;
    minute = _ParseTemporalDateTim.minute;
    second = _ParseTemporalDateTim.second;
    millisecond = _ParseTemporalDateTim.millisecond;
    microsecond = _ParseTemporalDateTim.microsecond;
    nanosecond = _ParseTemporalDateTim.nanosecond;
    calendar = _ParseTemporalDateTim.calendar;
    z = _ParseTemporalDateTim.z;
    if (z) throw new RangeError('Z designator not supported for PlainDateTime');
    RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (calendar === undefined) calendar = GetISO8601Calendar();
    calendar = ToTemporalCalendar(calendar);
  }

  return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
}
function ToTemporalDuration(item) {
  var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;

  if (IsObject(item)) {
    if (IsTemporalDuration(item)) return item;

    var _ToTemporalDurationRe = ToTemporalDurationRecord(item);

    years = _ToTemporalDurationRe.years;
    months = _ToTemporalDurationRe.months;
    weeks = _ToTemporalDurationRe.weeks;
    days = _ToTemporalDurationRe.days;
    hours = _ToTemporalDurationRe.hours;
    minutes = _ToTemporalDurationRe.minutes;
    seconds = _ToTemporalDurationRe.seconds;
    milliseconds = _ToTemporalDurationRe.milliseconds;
    microseconds = _ToTemporalDurationRe.microseconds;
    nanoseconds = _ToTemporalDurationRe.nanoseconds;
  } else {
    var _ParseTemporalDuratio = ParseTemporalDurationString(ToString(item));

    years = _ParseTemporalDuratio.years;
    months = _ParseTemporalDuratio.months;
    weeks = _ParseTemporalDuratio.weeks;
    days = _ParseTemporalDuratio.days;
    hours = _ParseTemporalDuratio.hours;
    minutes = _ParseTemporalDuratio.minutes;
    seconds = _ParseTemporalDuratio.seconds;
    milliseconds = _ParseTemporalDuratio.milliseconds;
    microseconds = _ParseTemporalDuratio.microseconds;
    nanoseconds = _ParseTemporalDuratio.nanoseconds;
  }

  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
  return new TemporalDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
}
function ToTemporalInstant(item) {
  if (IsTemporalInstant(item)) return item;

  if (IsTemporalZonedDateTime(item)) {
    var _TemporalInstant = GetIntrinsic('%Temporal.Instant%');

    return new _TemporalInstant(GetSlot(item, EPOCHNANOSECONDS));
  }

  var ns = ParseTemporalInstant(ToString(item));
  var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
  return new TemporalInstant(ns);
}
function ToTemporalMonthDay(item) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ObjectCreate$2(null);

  if (IsObject(item)) {
    if (IsTemporalMonthDay(item)) return item;

    var _calendar2, calendarAbsent;

    if (HasSlot(item, CALENDAR)) {
      _calendar2 = GetSlot(item, CALENDAR);
      calendarAbsent = false;
    } else {
      var _maybeStringCalendar = item.calendar;
      calendarAbsent = _maybeStringCalendar === undefined;
      if (_maybeStringCalendar === undefined) _maybeStringCalendar = GetISO8601Calendar();
      _calendar2 = ToTemporalCalendar(_maybeStringCalendar);
    }

    var fieldNames = CalendarFields(_calendar2, ['day', 'month', 'monthCode', 'year']);
    var fields = ToTemporalMonthDayFields(item, fieldNames); // Callers who omit the calendar are not writing calendar-independent
    // code. In that case, `monthCode`/`year` can be omitted; `month` and
    // `day` are sufficient. Add a `year` to satisfy calendar validation.

    if (calendarAbsent && fields.month !== undefined && fields.monthCode === undefined && fields.year === undefined) {
      fields.year = 1972;
    }

    return MonthDayFromFields(_calendar2, fields, options);
  }

  ToTemporalOverflow(options); // validate and ignore

  var _ParseTemporalMonthDa = ParseTemporalMonthDayString(ToString(item)),
      month = _ParseTemporalMonthDa.month,
      day = _ParseTemporalMonthDa.day,
      referenceISOYear = _ParseTemporalMonthDa.referenceISOYear,
      maybeStringCalendar = _ParseTemporalMonthDa.calendar; // TODO: should this be a ternary?


  var calendar = maybeStringCalendar;
  if (calendar === undefined) calendar = GetISO8601Calendar();
  calendar = ToTemporalCalendar(calendar);

  if (referenceISOYear === undefined) {
    RejectISODate(1972, month, day);
    return CreateTemporalMonthDay(month, day, calendar);
  }

  var result = CreateTemporalMonthDay(month, day, calendar, referenceISOYear);
  var canonicalOptions = ObjectCreate$2(null);
  return MonthDayFromFields(calendar, result, canonicalOptions);
}
function ToTemporalTime(itemParam) {
  var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constrain';
  var item = itemParam;
  var hour, minute, second, millisecond, microsecond, nanosecond, calendar;

  if (IsObject(item)) {
    if (IsTemporalTime(item)) return item;

    if (IsTemporalZonedDateTime(item)) {
      item = BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
    }

    if (IsTemporalDateTime(item)) {
      var _TemporalPlainTime = GetIntrinsic('%Temporal.PlainTime%');

      return new _TemporalPlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
    }

    calendar = GetTemporalCalendarWithISODefault(item);

    if (ToString(calendar) !== 'iso8601') {
      throw new RangeError('PlainTime can only have iso8601 calendar');
    }

    var _ToTemporalTimeRecord2 = ToTemporalTimeRecord(item);

    hour = _ToTemporalTimeRecord2.hour;
    minute = _ToTemporalTimeRecord2.minute;
    second = _ToTemporalTimeRecord2.second;
    millisecond = _ToTemporalTimeRecord2.millisecond;
    microsecond = _ToTemporalTimeRecord2.microsecond;
    nanosecond = _ToTemporalTimeRecord2.nanosecond;

    var _RegulateTime2 = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

    hour = _RegulateTime2.hour;
    minute = _RegulateTime2.minute;
    second = _RegulateTime2.second;
    millisecond = _RegulateTime2.millisecond;
    microsecond = _RegulateTime2.microsecond;
    nanosecond = _RegulateTime2.nanosecond;
  } else {
    var _ParseTemporalTimeStr = ParseTemporalTimeString(ToString(item));

    hour = _ParseTemporalTimeStr.hour;
    minute = _ParseTemporalTimeStr.minute;
    second = _ParseTemporalTimeStr.second;
    millisecond = _ParseTemporalTimeStr.millisecond;
    microsecond = _ParseTemporalTimeStr.microsecond;
    nanosecond = _ParseTemporalTimeStr.nanosecond;
    calendar = _ParseTemporalTimeStr.calendar;
    RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);

    if (calendar !== undefined && calendar !== 'iso8601') {
      throw new RangeError('PlainTime can only have iso8601 calendar');
    }
  }

  var TemporalPlainTime = GetIntrinsic('%Temporal.PlainTime%');
  return new TemporalPlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
}
function ToTemporalYearMonth(item) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ObjectCreate$2(null);

  if (IsObject(item)) {
    if (IsTemporalYearMonth(item)) return item;

    var _calendar3 = GetTemporalCalendarWithISODefault(item);

    var fieldNames = CalendarFields(_calendar3, ['month', 'monthCode', 'year']);
    var fields = ToTemporalYearMonthFields(item, fieldNames);
    return YearMonthFromFields(_calendar3, fields, options);
  }

  ToTemporalOverflow(options); // validate and ignore

  var _ParseTemporalYearMon = ParseTemporalYearMonthString(ToString(item)),
      year = _ParseTemporalYearMon.year,
      month = _ParseTemporalYearMon.month,
      referenceISODay = _ParseTemporalYearMon.referenceISODay,
      maybeStringCalendar = _ParseTemporalYearMon.calendar; // TODO: replace with ternary?


  var calendar = maybeStringCalendar;
  if (calendar === undefined) calendar = GetISO8601Calendar();
  calendar = ToTemporalCalendar(calendar);

  if (referenceISODay === undefined) {
    RejectISODate(year, month, 1);
    return CreateTemporalYearMonth(year, month, calendar);
  }

  var result = CreateTemporalYearMonth(year, month, calendar, referenceISODay);
  var canonicalOptions = ObjectCreate$2(null);
  return YearMonthFromFields(calendar, result, canonicalOptions);
}
function InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, disambiguation, offsetOpt, matchMinute) {
  var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
  var dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);

  if (offsetBehaviour === 'wall' || offsetOpt === 'ignore') {
    // Simple case: ISO string without a TZ offset (or caller wants to ignore
    // the offset), so just convert DateTime to Instant in the given time zone
    var _instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, disambiguation);

    return GetSlot(_instant, EPOCHNANOSECONDS);
  } // The caller wants the offset to always win ('use') OR the caller is OK
  // with the offset winning ('prefer' or 'reject') as long as it's valid
  // for this timezone and date/time.


  if (offsetBehaviour === 'exact' || offsetOpt === 'use') {
    // Calculate the instant for the input's date/time and offset
    var epochNs = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (epochNs === null) throw new RangeError('ZonedDateTime outside of supported range');
    return epochNs.minus(offsetNs);
  } // "prefer" or "reject"


  var possibleInstants = GetPossibleInstantsFor(timeZone, dt);

  var _iterator6 = _createForOfIteratorHelper(possibleInstants),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var candidate = _step6.value;
      var candidateOffset = GetOffsetNanosecondsFor(timeZone, candidate);
      var roundedCandidateOffset = RoundNumberToIncrement(bigInt(candidateOffset), 60e9, 'halfExpand').toJSNumber();

      if (candidateOffset === offsetNs || matchMinute && roundedCandidateOffset === offsetNs) {
        return GetSlot(candidate, EPOCHNANOSECONDS);
      }
    } // the user-provided offset doesn't match any instants for this time
    // zone and date/time.

  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  if (offsetOpt === 'reject') {
    var offsetStr = FormatTimeZoneOffsetString(offsetNs);
    var timeZoneString = IsTemporalTimeZone(timeZone) ? GetSlot(timeZone, TIMEZONE_ID) : 'time zone'; // The tsc emit for this line rewrites to invoke the PlainDateTime's valueOf method, NOT
    // toString (which is invoked by Node when using template literals directly).
    // See https://github.com/microsoft/TypeScript/issues/39744 for the proposed fix in tsc emit

    throw new RangeError("Offset ".concat(offsetStr, " is invalid for ").concat(dt.toString(), " in ").concat(timeZoneString));
  } // fall through: offsetOpt === 'prefer', but the offset doesn't match
  // so fall back to use the time zone instead.


  var instant = DisambiguatePossibleInstants(possibleInstants, timeZone, dt, disambiguation);
  return GetSlot(instant, EPOCHNANOSECONDS);
}
function ToTemporalZonedDateTime(item) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ObjectCreate$2(null);
  var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone, offset, calendar;
  var matchMinute = false;
  var offsetBehaviour = 'option';

  if (IsObject(item)) {
    if (IsTemporalZonedDateTime(item)) return item;
    calendar = GetTemporalCalendarWithISODefault(item);
    var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
    var fields = ToTemporalZonedDateTimeFields(item, fieldNames);

    var _InterpretTemporalDat3 = InterpretTemporalDateTimeFields(calendar, fields, options);

    year = _InterpretTemporalDat3.year;
    month = _InterpretTemporalDat3.month;
    day = _InterpretTemporalDat3.day;
    hour = _InterpretTemporalDat3.hour;
    minute = _InterpretTemporalDat3.minute;
    second = _InterpretTemporalDat3.second;
    millisecond = _InterpretTemporalDat3.millisecond;
    microsecond = _InterpretTemporalDat3.microsecond;
    nanosecond = _InterpretTemporalDat3.nanosecond;
    timeZone = ToTemporalTimeZone(fields.timeZone);
    offset = fields.offset;

    if (offset === undefined) {
      offsetBehaviour = 'wall';
    } else {
      offset = ToString(offset);
    }
  } else {
    ToTemporalOverflow(options); // validate and ignore

    var ianaName, z;

    var _ParseTemporalZonedDa = ParseTemporalZonedDateTimeString(ToString(item));

    year = _ParseTemporalZonedDa.year;
    month = _ParseTemporalZonedDa.month;
    day = _ParseTemporalZonedDa.day;
    hour = _ParseTemporalZonedDa.hour;
    minute = _ParseTemporalZonedDa.minute;
    second = _ParseTemporalZonedDa.second;
    millisecond = _ParseTemporalZonedDa.millisecond;
    microsecond = _ParseTemporalZonedDa.microsecond;
    nanosecond = _ParseTemporalZonedDa.nanosecond;
    ianaName = _ParseTemporalZonedDa.ianaName;
    offset = _ParseTemporalZonedDa.offset;
    z = _ParseTemporalZonedDa.z;
    calendar = _ParseTemporalZonedDa.calendar;
    if (!ianaName) throw new RangeError('time zone ID required in brackets');

    if (z) {
      offsetBehaviour = 'exact';
    } else if (!offset) {
      offsetBehaviour = 'wall';
    }

    var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
    timeZone = new TemporalTimeZone(ianaName);
    if (!calendar) calendar = GetISO8601Calendar();
    calendar = ToTemporalCalendar(calendar);
    matchMinute = true; // ISO strings may specify offset with less precision
  }

  var offsetNs = 0;
  if (offsetBehaviour === 'option') offsetNs = ParseOffsetString(offset);
  var disambiguation = ToTemporalDisambiguation(options);
  var offsetOpt = ToTemporalOffset(options, 'reject');
  var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, disambiguation, offsetOpt, matchMinute);
  return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
}
function CreateTemporalDateSlots(result, isoYear, isoMonth, isoDay, calendar) {
  RejectISODate(isoYear, isoMonth, isoDay);
  RejectDateRange(isoYear, isoMonth, isoDay);
  CreateSlots(result);
  SetSlot(result, ISO_YEAR, isoYear);
  SetSlot(result, ISO_MONTH, isoMonth);
  SetSlot(result, ISO_DAY, isoDay);
  SetSlot(result, CALENDAR, calendar);
  SetSlot(result, DATE_BRAND, true);

  {
    ObjectDefineProperty(result, '_repr_', {
      value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalDateToString(result), ">"),
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
}
function CreateTemporalDate(isoYear, isoMonth, isoDay) {
  var calendar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : GetISO8601Calendar();
  var TemporalPlainDate = GetIntrinsic('%Temporal.PlainDate%');
  var result = ObjectCreate$2(TemporalPlainDate.prototype);
  CreateTemporalDateSlots(result, isoYear, isoMonth, isoDay, calendar);
  return result;
}
function CreateTemporalDateTimeSlots(result, isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns, calendar) {
  RejectDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns);
  RejectDateTimeRange(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns);
  CreateSlots(result);
  SetSlot(result, ISO_YEAR, isoYear);
  SetSlot(result, ISO_MONTH, isoMonth);
  SetSlot(result, ISO_DAY, isoDay);
  SetSlot(result, ISO_HOUR, h);
  SetSlot(result, ISO_MINUTE, min);
  SetSlot(result, ISO_SECOND, s);
  SetSlot(result, ISO_MILLISECOND, ms);
  SetSlot(result, ISO_MICROSECOND, µs);
  SetSlot(result, ISO_NANOSECOND, ns);
  SetSlot(result, CALENDAR, calendar);

  {
    Object.defineProperty(result, '_repr_', {
      value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalDateTimeToString(result, 'auto'), ">"),
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
}
function CreateTemporalDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns) {
  var calendar = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : GetISO8601Calendar();
  var TemporalPlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
  var result = ObjectCreate$2(TemporalPlainDateTime.prototype);
  CreateTemporalDateTimeSlots(result, isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns, calendar);
  return result;
}
function CreateTemporalMonthDaySlots(result, isoMonth, isoDay, calendar, referenceISOYear) {
  RejectISODate(referenceISOYear, isoMonth, isoDay);
  RejectDateRange(referenceISOYear, isoMonth, isoDay);
  CreateSlots(result);
  SetSlot(result, ISO_MONTH, isoMonth);
  SetSlot(result, ISO_DAY, isoDay);
  SetSlot(result, ISO_YEAR, referenceISOYear);
  SetSlot(result, CALENDAR, calendar);
  SetSlot(result, MONTH_DAY_BRAND, true);

  {
    Object.defineProperty(result, '_repr_', {
      value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalMonthDayToString(result), ">"),
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
}
function CreateTemporalMonthDay(isoMonth, isoDay) {
  var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
  var referenceISOYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1972;
  var TemporalPlainMonthDay = GetIntrinsic('%Temporal.PlainMonthDay%');
  var result = ObjectCreate$2(TemporalPlainMonthDay.prototype);
  CreateTemporalMonthDaySlots(result, isoMonth, isoDay, calendar, referenceISOYear);
  return result;
}
function CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar, referenceISODay) {
  RejectISODate(isoYear, isoMonth, referenceISODay);
  RejectYearMonthRange(isoYear, isoMonth);
  CreateSlots(result);
  SetSlot(result, ISO_YEAR, isoYear);
  SetSlot(result, ISO_MONTH, isoMonth);
  SetSlot(result, ISO_DAY, referenceISODay);
  SetSlot(result, CALENDAR, calendar);
  SetSlot(result, YEAR_MONTH_BRAND, true);

  {
    Object.defineProperty(result, '_repr_', {
      value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalYearMonthToString(result), ">"),
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
}
function CreateTemporalYearMonth(isoYear, isoMonth) {
  var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
  var referenceISODay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var TemporalPlainYearMonth = GetIntrinsic('%Temporal.PlainYearMonth%');
  var result = ObjectCreate$2(TemporalPlainYearMonth.prototype);
  CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar, referenceISODay);
  return result;
}
function CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone, calendar) {
  ValidateEpochNanoseconds(epochNanoseconds);
  CreateSlots(result);
  SetSlot(result, EPOCHNANOSECONDS, epochNanoseconds);
  SetSlot(result, TIME_ZONE, timeZone);
  SetSlot(result, CALENDAR, calendar);
  var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
  var instant = new TemporalInstant(GetSlot(result, EPOCHNANOSECONDS));
  SetSlot(result, INSTANT, instant);

  {
    Object.defineProperty(result, '_repr_', {
      value: "".concat(result[Symbol.toStringTag], " <").concat(TemporalZonedDateTimeToString(result, 'auto'), ">"),
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
}
function CreateTemporalZonedDateTime(epochNanoseconds, timeZone) {
  var calendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
  var TemporalZonedDateTime = GetIntrinsic('%Temporal.ZonedDateTime%');
  var result = ObjectCreate$2(TemporalZonedDateTime.prototype);
  CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone, calendar);
  return result;
}
function GetISO8601Calendar() {
  var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
  return new TemporalCalendar('iso8601');
} // TODO: should (can?) we make this generic so the field names are checked
// against the type that the calendar is a property of?

function CalendarFields(calendar, fieldNamesParam) {
  var fieldNames = fieldNamesParam;

  if (calendar.fields) {
    fieldNames = calendar.fields(fieldNames);
  }

  var result = [];

  var _iterator7 = _createForOfIteratorHelper(fieldNames),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var name = _step7.value;
      if (typeof name !== 'string') throw new TypeError('bad return from calendar.fields()');
      ArrayPrototypePush$1.call(result, name);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return result;
}
function CalendarMergeFields(calendar, fields, additionalFields) {
  var calMergeFields = calendar.mergeFields;

  if (!calMergeFields) {
    return _objectSpread2(_objectSpread2({}, fields), additionalFields);
  }

  var result = Reflect.apply(calMergeFields, calendar, [fields, additionalFields]);
  if (!IsObject(result)) throw new TypeError('bad return from calendar.mergeFields()');
  return result;
}
function CalendarDateAdd(calendar, date, duration, options, dateAddParam) {
  var dateAdd = dateAddParam;

  if (dateAdd === undefined) {
    dateAdd = calendar.dateAdd;
  }

  var result = ReflectApply$1(dateAdd, calendar, [date, duration, options]);
  if (!IsTemporalDate(result)) throw new TypeError('invalid result');
  return result;
}
function CalendarDateUntil(calendar, date, otherDate, options, dateUntilParam) {
  var dateUntil = dateUntilParam;

  if (dateUntil === undefined) {
    dateUntil = calendar.dateUntil;
  }

  var result = ReflectApply$1(dateUntil, calendar, [date, otherDate, options]);
  if (!IsTemporalDuration(result)) throw new TypeError('invalid result');
  return result;
}
function CalendarYear(calendar, dateLike) {
  var result = calendar.year(dateLike);

  if (result === undefined) {
    throw new RangeError('calendar year result must be an integer');
  }

  return ToIntegerThrowOnInfinity(result);
}
function CalendarMonth(calendar, dateLike) {
  var result = calendar.month(dateLike);

  if (result === undefined) {
    throw new RangeError('calendar month result must be a positive integer');
  }

  return ToPositiveInteger(result);
}
function CalendarMonthCode(calendar, dateLike) {
  var result = calendar.monthCode(dateLike);

  if (result === undefined) {
    throw new RangeError('calendar monthCode result must be a string');
  }

  return ToString(result);
}
function CalendarDay(calendar, dateLike) {
  var result = calendar.day(dateLike);

  if (result === undefined) {
    throw new RangeError('calendar day result must be a positive integer');
  }

  return ToPositiveInteger(result);
}
function CalendarEra(calendar, dateLike) {
  var result = calendar.era(dateLike);

  if (result !== undefined) {
    result = ToString(result);
  }

  return result;
}
function CalendarEraYear(calendar, dateLike) {
  var result = calendar.eraYear(dateLike);

  if (result !== undefined) {
    result = ToIntegerThrowOnInfinity(result);
  }

  return result;
}
function CalendarDayOfWeek(calendar, dateLike) {
  return calendar.dayOfWeek(dateLike);
}
function CalendarDayOfYear(calendar, dateLike) {
  return calendar.dayOfYear(dateLike);
}
function CalendarWeekOfYear(calendar, dateLike) {
  return calendar.weekOfYear(dateLike);
}
function CalendarDaysInWeek(calendar, dateLike) {
  return calendar.daysInWeek(dateLike);
}
function CalendarDaysInMonth(calendar, dateLike) {
  return calendar.daysInMonth(dateLike);
}
function CalendarDaysInYear(calendar, dateLike) {
  return calendar.daysInYear(dateLike);
}
function CalendarMonthsInYear(calendar, dateLike) {
  return calendar.monthsInYear(dateLike);
}
function CalendarInLeapYear(calendar, dateLike) {
  return calendar.inLeapYear(dateLike);
}
function ToTemporalCalendar(calendarLikeParam) {
  var calendarLike = calendarLikeParam;

  if (IsObject(calendarLike)) {
    if (HasSlot(calendarLike, CALENDAR)) return GetSlot(calendarLike, CALENDAR);
    if (!('calendar' in calendarLike)) return calendarLike;
    calendarLike = calendarLike.calendar;
    if (IsObject(calendarLike) && !('calendar' in calendarLike)) return calendarLike;
  }

  var identifier = ToString(calendarLike);
  var TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
  if (IsBuiltinCalendar(identifier)) return new TemporalCalendar(identifier);
  var calendar;

  try {
    var _ParseISODateTime5 = ParseISODateTime(identifier, {
      zoneRequired: false
    });

    calendar = _ParseISODateTime5.calendar;
  } catch (_unused4) {
    throw new RangeError("Invalid calendar: ".concat(identifier));
  }

  if (!calendar) calendar = 'iso8601';
  return new TemporalCalendar(calendar);
}

function GetTemporalCalendarWithISODefault(item) {
  if (HasSlot(item, CALENDAR)) return GetSlot(item, CALENDAR);
  var calendar = item.calendar;
  if (calendar === undefined) return GetISO8601Calendar();
  return ToTemporalCalendar(calendar);
}

function CalendarEquals(one, two) {
  if (one === two) return true;
  var cal1 = ToString(one);
  var cal2 = ToString(two);
  return cal1 === cal2;
}
function ConsolidateCalendars(one, two) {
  if (one === two) return two;
  var sOne = ToString(one);
  var sTwo = ToString(two);

  if (sOne === sTwo || sOne === 'iso8601') {
    return two;
  } else if (sTwo === 'iso8601') {
    return one;
  } else {
    throw new RangeError('irreconcilable calendars');
  }
}
function DateFromFields(calendar, fields, options) {
  var result = calendar.dateFromFields(fields, options);
  if (!IsTemporalDate(result)) throw new TypeError('invalid result');
  return result;
}
function YearMonthFromFields(calendar, fields, options) {
  var result = calendar.yearMonthFromFields(fields, options);
  if (!IsTemporalYearMonth(result)) throw new TypeError('invalid result');
  return result;
}
function MonthDayFromFields(calendar, fields, options) {
  var result = calendar.monthDayFromFields(fields, options);
  if (!IsTemporalMonthDay(result)) throw new TypeError('invalid result');
  return result;
}
function ToTemporalTimeZone(temporalTimeZoneLikeParam) {
  var temporalTimeZoneLike = temporalTimeZoneLikeParam;

  if (IsObject(temporalTimeZoneLike)) {
    if (IsTemporalZonedDateTime(temporalTimeZoneLike)) return GetSlot(temporalTimeZoneLike, TIME_ZONE);
    if (!('timeZone' in temporalTimeZoneLike)) return temporalTimeZoneLike;
    temporalTimeZoneLike = temporalTimeZoneLike.timeZone;

    if (IsObject(temporalTimeZoneLike) && !('timeZone' in temporalTimeZoneLike)) {
      return temporalTimeZoneLike;
    }
  }

  var identifier = ToString(temporalTimeZoneLike);
  var timeZone = ParseTemporalTimeZone(identifier);
  var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
  return new TemporalTimeZone(timeZone);
}
function TimeZoneEquals(one, two) {
  if (one === two) return true;
  var tz1 = ToString(one);
  var tz2 = ToString(two);
  return tz1 === tz2;
}
function TemporalDateTimeToDate(dateTime) {
  return CreateTemporalDate(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, CALENDAR));
}
function TemporalDateTimeToTime(dateTime) {
  var Time = GetIntrinsic('%Temporal.PlainTime%');
  return new Time(GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
}
function GetOffsetNanosecondsFor(timeZone, instant) {
  var getOffsetNanosecondsFor = timeZone.getOffsetNanosecondsFor;

  if (typeof getOffsetNanosecondsFor !== 'function') {
    throw new TypeError('getOffsetNanosecondsFor not callable');
  }

  var offsetNs = Reflect.apply(getOffsetNanosecondsFor, timeZone, [instant]);

  if (typeof offsetNs !== 'number') {
    throw new TypeError('bad return from getOffsetNanosecondsFor');
  }

  if (!IsInteger(offsetNs) || MathAbs(offsetNs) > 86400e9) {
    throw new RangeError('out-of-range return from getOffsetNanosecondsFor');
  }

  return offsetNs;
}
function BuiltinTimeZoneGetOffsetStringFor(timeZone, instant) {
  var offsetNs = GetOffsetNanosecondsFor(timeZone, instant);
  return FormatTimeZoneOffsetString(offsetNs);
}
function BuiltinTimeZoneGetPlainDateTimeFor(timeZone, instant, calendar) {
  var ns = GetSlot(instant, EPOCHNANOSECONDS);
  var offsetNs = GetOffsetNanosecondsFor(timeZone, instant);

  var _GetISOPartsFromEpoch = GetISOPartsFromEpoch(ns),
      year = _GetISOPartsFromEpoch.year,
      month = _GetISOPartsFromEpoch.month,
      day = _GetISOPartsFromEpoch.day,
      hour = _GetISOPartsFromEpoch.hour,
      minute = _GetISOPartsFromEpoch.minute,
      second = _GetISOPartsFromEpoch.second,
      millisecond = _GetISOPartsFromEpoch.millisecond,
      microsecond = _GetISOPartsFromEpoch.microsecond,
      nanosecond = _GetISOPartsFromEpoch.nanosecond;

  var _BalanceISODateTime = BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond + offsetNs);

  year = _BalanceISODateTime.year;
  month = _BalanceISODateTime.month;
  day = _BalanceISODateTime.day;
  hour = _BalanceISODateTime.hour;
  minute = _BalanceISODateTime.minute;
  second = _BalanceISODateTime.second;
  millisecond = _BalanceISODateTime.millisecond;
  microsecond = _BalanceISODateTime.microsecond;
  nanosecond = _BalanceISODateTime.nanosecond;
  return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
}
function BuiltinTimeZoneGetInstantFor(timeZone, dateTime, disambiguation) {
  var possibleInstants = GetPossibleInstantsFor(timeZone, dateTime);
  return DisambiguatePossibleInstants(possibleInstants, timeZone, dateTime, disambiguation);
}

function DisambiguatePossibleInstants(possibleInstants, timeZone, dateTime, disambiguation) {
  var Instant = GetIntrinsic('%Temporal.Instant%');
  var numInstants = possibleInstants.length;
  if (numInstants === 1) return possibleInstants[0];

  if (numInstants) {
    switch (disambiguation) {
      case 'compatible': // fall through because 'compatible' means 'earlier' for "fall back" transitions

      case 'earlier':
        return possibleInstants[0];

      case 'later':
        return possibleInstants[numInstants - 1];

      case 'reject':
        {
          throw new RangeError('multiple instants found');
        }
    }
  }

  var year = GetSlot(dateTime, ISO_YEAR);
  var month = GetSlot(dateTime, ISO_MONTH);
  var day = GetSlot(dateTime, ISO_DAY);
  var hour = GetSlot(dateTime, ISO_HOUR);
  var minute = GetSlot(dateTime, ISO_MINUTE);
  var second = GetSlot(dateTime, ISO_SECOND);
  var millisecond = GetSlot(dateTime, ISO_MILLISECOND);
  var microsecond = GetSlot(dateTime, ISO_MICROSECOND);
  var nanosecond = GetSlot(dateTime, ISO_NANOSECOND);
  var utcns = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  if (utcns === null) throw new RangeError('DateTime outside of supported range');
  var dayBefore = new Instant(utcns.minus(86400e9));
  var dayAfter = new Instant(utcns.plus(86400e9));
  var offsetBefore = GetOffsetNanosecondsFor(timeZone, dayBefore);
  var offsetAfter = GetOffsetNanosecondsFor(timeZone, dayAfter);
  var nanoseconds = offsetAfter - offsetBefore;

  switch (disambiguation) {
    case 'earlier':
      {
        var calendar = GetSlot(dateTime, CALENDAR);
        var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        var earlier = AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, 0, 0, 0, 0, 0, 0, 0, 0, 0, -nanoseconds, undefined);
        var earlierPlainDateTime = new PlainDateTime(earlier.year, earlier.month, earlier.day, earlier.hour, earlier.minute, earlier.second, earlier.millisecond, earlier.microsecond, earlier.nanosecond, calendar);
        return GetPossibleInstantsFor(timeZone, earlierPlainDateTime)[0];
      }

    case 'compatible': // fall through because 'compatible' means 'later' for "spring forward" transitions

    case 'later':
      {
        var _calendar4 = GetSlot(dateTime, CALENDAR);

        var _PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');

        var later = AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, _calendar4, 0, 0, 0, 0, 0, 0, 0, 0, 0, nanoseconds, undefined);
        var laterPlainDateTime = new _PlainDateTime(later.year, later.month, later.day, later.hour, later.minute, later.second, later.millisecond, later.microsecond, later.nanosecond, _calendar4);
        var possible = GetPossibleInstantsFor(timeZone, laterPlainDateTime);
        return possible[possible.length - 1];
      }

    case 'reject':
      {
        throw new RangeError('no such instant found');
      }
  }
}

function GetPossibleInstantsFor(timeZone, dateTime) {
  var possibleInstants = timeZone.getPossibleInstantsFor(dateTime);
  var result = [];

  var _iterator8 = _createForOfIteratorHelper(possibleInstants),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var instant = _step8.value;

      if (!IsTemporalInstant(instant)) {
        throw new TypeError('bad return from getPossibleInstantsFor');
      }

      ArrayPrototypePush$1.call(result, instant);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  return result;
}

function ISOYearString(year) {
  var yearString;

  if (year < 1000 || year > 9999) {
    var sign = year < 0 ? '-' : '+';
    var yearNumber = MathAbs(year);
    yearString = sign + "000000".concat(yearNumber).slice(-6);
  } else {
    yearString = "".concat(year);
  }

  return yearString;
}
function ISODateTimePartString(part) {
  return "00".concat(part).slice(-2);
}
function FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision) {
  if (precision === 'minute') return '';
  var secs = ":".concat(ISODateTimePartString(second));
  var fractionNumber = millisecond * 1e6 + microsecond * 1e3 + nanosecond;
  var fraction;

  if (precision === 'auto') {
    if (fractionNumber === 0) return secs;
    fraction = "".concat(fractionNumber).padStart(9, '0');

    while (fraction[fraction.length - 1] === '0') {
      fraction = fraction.slice(0, -1);
    }
  } else {
    if (precision === 0) return secs;
    fraction = "".concat(fractionNumber).padStart(9, '0').slice(0, precision);
  }

  return "".concat(secs, ".").concat(fraction);
}
function TemporalInstantToString(instant, timeZone, precision) {
  var outputTimeZone = timeZone;

  if (outputTimeZone === undefined) {
    var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
    outputTimeZone = new TemporalTimeZone('UTC');
  }

  var iso = GetISO8601Calendar();
  var dateTime = BuiltinTimeZoneGetPlainDateTimeFor(outputTimeZone, instant, iso);
  var year = ISOYearString(GetSlot(dateTime, ISO_YEAR));
  var month = ISODateTimePartString(GetSlot(dateTime, ISO_MONTH));
  var day = ISODateTimePartString(GetSlot(dateTime, ISO_DAY));
  var hour = ISODateTimePartString(GetSlot(dateTime, ISO_HOUR));
  var minute = ISODateTimePartString(GetSlot(dateTime, ISO_MINUTE));
  var seconds = FormatSecondsStringPart(GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), precision);
  var timeZoneString = 'Z';

  if (timeZone !== undefined) {
    var offsetNs = GetOffsetNanosecondsFor(outputTimeZone, instant);
    timeZoneString = FormatISOTimeZoneOffsetString(offsetNs);
  }

  return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(timeZoneString);
}
function TemporalDurationToString(duration) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  function formatNumber(num) {
    if (num <= NumberMaxSafeInteger) return num.toString(10);
    return bigInt(num).toString();
  }

  var years = GetSlot(duration, YEARS);
  var months = GetSlot(duration, MONTHS);
  var weeks = GetSlot(duration, WEEKS);
  var days = GetSlot(duration, DAYS);
  var hours = GetSlot(duration, HOURS);
  var minutes = GetSlot(duration, MINUTES);
  var seconds = GetSlot(duration, SECONDS);
  var ms = GetSlot(duration, MILLISECONDS);
  var µs = GetSlot(duration, MICROSECONDS);
  var ns = GetSlot(duration, NANOSECONDS);
  var sign = DurationSign(years, months, weeks, days, hours, minutes, seconds, ms, µs, ns);

  if (options) {
    var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;

    var _RoundDuration = RoundDuration(0, 0, 0, 0, 0, 0, seconds, ms, µs, ns, increment, unit, roundingMode);

    seconds = _RoundDuration.seconds;
    ms = _RoundDuration.milliseconds;
    µs = _RoundDuration.microseconds;
    ns = _RoundDuration.nanoseconds;
  }

  var dateParts = [];
  if (years) dateParts.push("".concat(formatNumber(MathAbs(years)), "Y"));
  if (months) dateParts.push("".concat(formatNumber(MathAbs(months)), "M"));
  if (weeks) dateParts.push("".concat(formatNumber(MathAbs(weeks)), "W"));
  if (days) dateParts.push("".concat(formatNumber(MathAbs(days)), "D"));
  var timeParts = [];
  if (hours) timeParts.push("".concat(formatNumber(MathAbs(hours)), "H"));
  if (minutes) timeParts.push("".concat(formatNumber(MathAbs(minutes)), "M"));
  var secondParts = [];
  var total = TotalDurationNanoseconds(0, 0, 0, seconds, ms, µs, ns, 0);
  var nsBigInt, µsBigInt, msBigInt, secondsBigInt;

  var _total$divmod = total.divmod(1000);

  total = _total$divmod.quotient;
  nsBigInt = _total$divmod.remainder;

  var _total$divmod2 = total.divmod(1000);

  total = _total$divmod2.quotient;
  µsBigInt = _total$divmod2.remainder;

  var _total$divmod3 = total.divmod(1000);

  secondsBigInt = _total$divmod3.quotient;
  msBigInt = _total$divmod3.remainder;
  var fraction = MathAbs(msBigInt.toJSNumber()) * 1e6 + MathAbs(µsBigInt.toJSNumber()) * 1e3 + MathAbs(nsBigInt.toJSNumber());
  var decimalPart;

  if (precision === 'auto') {
    if (fraction !== 0) {
      decimalPart = "".concat(fraction).padStart(9, '0');

      while (decimalPart[decimalPart.length - 1] === '0') {
        decimalPart = decimalPart.slice(0, -1);
      }
    }
  } else if (precision !== 0) {
    decimalPart = "".concat(fraction).padStart(9, '0').slice(0, precision);
  }

  if (decimalPart) secondParts.unshift('.', decimalPart);
  if (!secondsBigInt.isZero() || secondParts.length) secondParts.unshift(secondsBigInt.abs().toString());
  if (secondParts.length) timeParts.push("".concat(secondParts.join(''), "S"));
  if (timeParts.length) timeParts.unshift('T');
  if (!dateParts.length && !timeParts.length) return 'PT0S';
  return "".concat(sign < 0 ? '-' : '', "P").concat(dateParts.join('')).concat(timeParts.join(''));
}
function TemporalDateToString(date) {
  var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var year = ISOYearString(GetSlot(date, ISO_YEAR));
  var month = ISODateTimePartString(GetSlot(date, ISO_MONTH));
  var day = ISODateTimePartString(GetSlot(date, ISO_DAY));
  var calendarID = ToString(GetSlot(date, CALENDAR));
  var calendar = FormatCalendarAnnotation(calendarID, showCalendar);
  return "".concat(year, "-").concat(month, "-").concat(day).concat(calendar);
}
function TemporalDateTimeToString(dateTime, precision) {
  var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var year = GetSlot(dateTime, ISO_YEAR);
  var month = GetSlot(dateTime, ISO_MONTH);
  var day = GetSlot(dateTime, ISO_DAY);
  var hour = GetSlot(dateTime, ISO_HOUR);
  var minute = GetSlot(dateTime, ISO_MINUTE);
  var second = GetSlot(dateTime, ISO_SECOND);
  var millisecond = GetSlot(dateTime, ISO_MILLISECOND);
  var microsecond = GetSlot(dateTime, ISO_MICROSECOND);
  var nanosecond = GetSlot(dateTime, ISO_NANOSECOND);

  if (options) {
    var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;

    var _RoundISODateTime = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);

    year = _RoundISODateTime.year;
    month = _RoundISODateTime.month;
    day = _RoundISODateTime.day;
    hour = _RoundISODateTime.hour;
    minute = _RoundISODateTime.minute;
    second = _RoundISODateTime.second;
    millisecond = _RoundISODateTime.millisecond;
    microsecond = _RoundISODateTime.microsecond;
    nanosecond = _RoundISODateTime.nanosecond;
  }

  var yearString = ISOYearString(year);
  var monthString = ISODateTimePartString(month);
  var dayString = ISODateTimePartString(day);
  var hourString = ISODateTimePartString(hour);
  var minuteString = ISODateTimePartString(minute);
  var secondsString = FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
  var calendarID = ToString(GetSlot(dateTime, CALENDAR));
  var calendar = FormatCalendarAnnotation(calendarID, showCalendar);
  return "".concat(yearString, "-").concat(monthString, "-").concat(dayString, "T").concat(hourString, ":").concat(minuteString).concat(secondsString).concat(calendar);
}
function TemporalMonthDayToString(monthDay) {
  var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var month = ISODateTimePartString(GetSlot(monthDay, ISO_MONTH));
  var day = ISODateTimePartString(GetSlot(monthDay, ISO_DAY));
  var resultString = "".concat(month, "-").concat(day);
  var calendar = GetSlot(monthDay, CALENDAR);
  var calendarID = ToString(calendar);

  if (calendarID !== 'iso8601') {
    var year = ISOYearString(GetSlot(monthDay, ISO_YEAR));
    resultString = "".concat(year, "-").concat(resultString);
  }

  var calendarString = FormatCalendarAnnotation(calendarID, showCalendar);
  if (calendarString) resultString += calendarString;
  return resultString;
}
function TemporalYearMonthToString(yearMonth) {
  var showCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var year = ISOYearString(GetSlot(yearMonth, ISO_YEAR));
  var month = ISODateTimePartString(GetSlot(yearMonth, ISO_MONTH));
  var resultString = "".concat(year, "-").concat(month);
  var calendar = GetSlot(yearMonth, CALENDAR);
  var calendarID = ToString(calendar);

  if (calendarID !== 'iso8601') {
    var day = ISODateTimePartString(GetSlot(yearMonth, ISO_DAY));
    resultString += "-".concat(day);
  }

  var calendarString = FormatCalendarAnnotation(calendarID, showCalendar);
  if (calendarString) resultString += calendarString;
  return resultString;
}
function TemporalZonedDateTimeToString(zdt, precision) {
  var showCalendar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
  var showTimeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'auto';
  var showOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'auto';
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
  var instant = GetSlot(zdt, INSTANT);

  if (options) {
    var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;
    var ns = RoundInstant(GetSlot(zdt, EPOCHNANOSECONDS), increment, unit, roundingMode);
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    instant = new TemporalInstant(ns);
  }

  var tz = GetSlot(zdt, TIME_ZONE);
  var iso = GetISO8601Calendar();
  var dateTime = BuiltinTimeZoneGetPlainDateTimeFor(tz, instant, iso);
  var year = ISOYearString(GetSlot(dateTime, ISO_YEAR));
  var month = ISODateTimePartString(GetSlot(dateTime, ISO_MONTH));
  var day = ISODateTimePartString(GetSlot(dateTime, ISO_DAY));
  var hour = ISODateTimePartString(GetSlot(dateTime, ISO_HOUR));
  var minute = ISODateTimePartString(GetSlot(dateTime, ISO_MINUTE));
  var seconds = FormatSecondsStringPart(GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), precision);
  var result = "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds);

  if (showOffset !== 'never') {
    var offsetNs = GetOffsetNanosecondsFor(tz, instant);
    result += FormatISOTimeZoneOffsetString(offsetNs);
  }

  if (showTimeZone !== 'never') result += "[".concat(tz, "]");
  var calendarID = ToString(GetSlot(zdt, CALENDAR));
  result += FormatCalendarAnnotation(calendarID, showCalendar);
  return result;
}
function ParseOffsetString(string) {
  var match = OFFSET.exec(StringCtor(string));
  if (!match) return null;
  var sign = match[1] === '-' || match[1] === "\u2212" ? -1 : +1;
  var hours = +match[2];
  var minutes = +(match[3] || 0);
  var seconds = +(match[4] || 0);
  var nanoseconds = +((match[5] || 0) + '000000000').slice(0, 9);
  return sign * (((hours * 60 + minutes) * 60 + seconds) * 1e9 + nanoseconds);
}
function GetCanonicalTimeZoneIdentifier(timeZoneIdentifier) {
  var offsetNs = ParseOffsetString(timeZoneIdentifier);
  if (offsetNs !== null) return FormatTimeZoneOffsetString(offsetNs);
  var formatter = getIntlDateTimeFormatEnUsForTimeZone(StringCtor(timeZoneIdentifier));
  return formatter.resolvedOptions().timeZone;
}
function GetIANATimeZoneOffsetNanoseconds(epochNanoseconds, id) {
  var _GetIANATimeZoneDateT = GetIANATimeZoneDateTimeParts(epochNanoseconds, id),
      year = _GetIANATimeZoneDateT.year,
      month = _GetIANATimeZoneDateT.month,
      day = _GetIANATimeZoneDateT.day,
      hour = _GetIANATimeZoneDateT.hour,
      minute = _GetIANATimeZoneDateT.minute,
      second = _GetIANATimeZoneDateT.second,
      millisecond = _GetIANATimeZoneDateT.millisecond,
      microsecond = _GetIANATimeZoneDateT.microsecond,
      nanosecond = _GetIANATimeZoneDateT.nanosecond;

  var utc = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  if (utc === null) throw new RangeError('Date outside of supported range');
  return +utc.minus(epochNanoseconds);
}

function FormatTimeZoneOffsetString(offsetNanosecondsParam) {
  var sign = offsetNanosecondsParam < 0 ? '-' : '+';
  var offsetNanoseconds = MathAbs(offsetNanosecondsParam);
  var nanoseconds = offsetNanoseconds % 1e9;
  var seconds = MathFloor(offsetNanoseconds / 1e9) % 60;
  var minutes = MathFloor(offsetNanoseconds / 60e9) % 60;
  var hours = MathFloor(offsetNanoseconds / 3600e9);
  var hourString = ISODateTimePartString(hours);
  var minuteString = ISODateTimePartString(minutes);
  var secondString = ISODateTimePartString(seconds);
  var post = '';

  if (nanoseconds) {
    var fraction = "".concat(nanoseconds).padStart(9, '0');

    while (fraction[fraction.length - 1] === '0') {
      fraction = fraction.slice(0, -1);
    }

    post = ":".concat(secondString, ".").concat(fraction);
  } else if (seconds) {
    post = ":".concat(secondString);
  }

  return "".concat(sign).concat(hourString, ":").concat(minuteString).concat(post);
}

function FormatISOTimeZoneOffsetString(offsetNanosecondsParam) {
  var offsetNanoseconds = RoundNumberToIncrement(bigInt(offsetNanosecondsParam), 60e9, 'halfExpand').toJSNumber();
  var sign = offsetNanoseconds < 0 ? '-' : '+';
  offsetNanoseconds = MathAbs(offsetNanoseconds);
  var minutes = offsetNanoseconds / 60e9 % 60;
  var hours = MathFloor(offsetNanoseconds / 3600e9);
  var hourString = ISODateTimePartString(hours);
  var minuteString = ISODateTimePartString(minutes);
  return "".concat(sign).concat(hourString, ":").concat(minuteString);
}

function GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
  // Note: Date.UTC() interprets one and two-digit years as being in the
  // 20th century, so don't use it
  var legacyDate = new Date();
  legacyDate.setUTCHours(hour, minute, second, millisecond);
  legacyDate.setUTCFullYear(year, month - 1, day);
  var ms = legacyDate.getTime();
  if (NumberIsNaN(ms)) return null;
  var ns = bigInt(ms).multiply(1e6);
  ns = ns.plus(bigInt(microsecond).multiply(1e3));
  ns = ns.plus(bigInt(nanosecond));
  if (ns.lesser(NS_MIN) || ns.greater(NS_MAX)) return null;
  return ns;
}

function GetISOPartsFromEpoch(epochNanoseconds) {
  var _bigInt$divmod = bigInt(epochNanoseconds).divmod(1e6),
      quotient = _bigInt$divmod.quotient,
      remainder = _bigInt$divmod.remainder;

  var epochMilliseconds = +quotient;
  var nanos = +remainder;

  if (nanos < 0) {
    nanos += 1e6;
    epochMilliseconds -= 1;
  }

  var microsecond = MathFloor(nanos / 1e3) % 1e3;
  var nanosecond = nanos % 1e3;
  var item = new Date(epochMilliseconds);
  var year = item.getUTCFullYear();
  var month = item.getUTCMonth() + 1;
  var day = item.getUTCDate();
  var hour = item.getUTCHours();
  var minute = item.getUTCMinutes();
  var second = item.getUTCSeconds();
  var millisecond = item.getUTCMilliseconds();
  return {
    epochMilliseconds: epochMilliseconds,
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
} // ts-prune-ignore-next TODO: remove this after tests are converted to TS


function GetIANATimeZoneDateTimeParts(epochNanoseconds, id) {
  var _GetISOPartsFromEpoch2 = GetISOPartsFromEpoch(epochNanoseconds),
      epochMilliseconds = _GetISOPartsFromEpoch2.epochMilliseconds,
      millisecond = _GetISOPartsFromEpoch2.millisecond,
      microsecond = _GetISOPartsFromEpoch2.microsecond,
      nanosecond = _GetISOPartsFromEpoch2.nanosecond;

  var _GetFormatterParts = GetFormatterParts(id, epochMilliseconds),
      year = _GetFormatterParts.year,
      month = _GetFormatterParts.month,
      day = _GetFormatterParts.day,
      hour = _GetFormatterParts.hour,
      minute = _GetFormatterParts.minute,
      second = _GetFormatterParts.second;

  return BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
}
function GetIANATimeZoneNextTransition(epochNanoseconds, id) {
  var uppercap = SystemUTCEpochNanoSeconds().plus(DAY_NANOS.multiply(366));
  var leftNanos = epochNanoseconds;
  var leftOffsetNs = GetIANATimeZoneOffsetNanoseconds(leftNanos, id);
  var rightNanos = leftNanos;
  var rightOffsetNs = leftOffsetNs;

  while (leftOffsetNs === rightOffsetNs && bigInt(leftNanos).compare(uppercap) === -1) {
    rightNanos = bigInt(leftNanos).plus(DAY_NANOS.multiply(2 * 7));
    rightOffsetNs = GetIANATimeZoneOffsetNanoseconds(rightNanos, id);

    if (leftOffsetNs === rightOffsetNs) {
      leftNanos = rightNanos;
    }
  }

  if (leftOffsetNs === rightOffsetNs) return null;
  var result = bisect(function (epochNs) {
    return GetIANATimeZoneOffsetNanoseconds(epochNs, id);
  }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
  return result;
}
function GetIANATimeZonePreviousTransition(epochNanoseconds, id) {
  var lowercap = BEFORE_FIRST_DST; // 1847-01-01T00:00:00Z

  var rightNanos = bigInt(epochNanoseconds).minus(1);
  var rightOffsetNs = GetIANATimeZoneOffsetNanoseconds(rightNanos, id);
  var leftNanos = rightNanos;
  var leftOffsetNs = rightOffsetNs;

  while (rightOffsetNs === leftOffsetNs && bigInt(rightNanos).compare(lowercap) === 1) {
    leftNanos = bigInt(rightNanos).minus(DAY_NANOS.multiply(2 * 7));
    leftOffsetNs = GetIANATimeZoneOffsetNanoseconds(leftNanos, id);

    if (rightOffsetNs === leftOffsetNs) {
      rightNanos = leftNanos;
    }
  }

  if (rightOffsetNs === leftOffsetNs) return null;
  var result = bisect(function (epochNs) {
    return GetIANATimeZoneOffsetNanoseconds(epochNs, id);
  }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
  return result;
} // ts-prune-ignore-next TODO: remove this after tests are converted to TS

function GetFormatterParts(timeZone, epochMilliseconds) {
  var formatter = getIntlDateTimeFormatEnUsForTimeZone(timeZone); // Using `format` instead of `formatToParts` for compatibility with older clients

  var datetime = formatter.format(new Date(epochMilliseconds));

  var _datetime$split = datetime.split(/[^\w]+/),
      _datetime$split2 = _slicedToArray(_datetime$split, 7),
      month = _datetime$split2[0],
      day = _datetime$split2[1],
      year = _datetime$split2[2],
      era = _datetime$split2[3],
      hour = _datetime$split2[4],
      minute = _datetime$split2[5],
      second = _datetime$split2[6];

  return {
    year: era.toUpperCase().startsWith('B') ? -year + 1 : +year,
    month: +month,
    day: +day,
    hour: hour === '24' ? 0 : +hour,
    minute: +minute,
    second: +second
  };
}
function GetIANATimeZoneEpochValue(id, year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
  var ns = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  if (ns === null) throw new RangeError('DateTime outside of supported range');
  var nsEarlier = ns.minus(DAY_NANOS);
  if (nsEarlier.lesser(NS_MIN)) nsEarlier = ns;
  var nsLater = ns.plus(DAY_NANOS);
  if (nsLater.greater(NS_MAX)) nsLater = ns;
  var earliest = GetIANATimeZoneOffsetNanoseconds(nsEarlier, id);
  var latest = GetIANATimeZoneOffsetNanoseconds(nsLater, id);
  var found = earliest === latest ? [earliest] : [earliest, latest];
  return found.map(function (offsetNanoseconds) {
    var epochNanoseconds = bigInt(ns).minus(offsetNanoseconds);
    var parts = GetIANATimeZoneDateTimeParts(epochNanoseconds, id);

    if (year !== parts.year || month !== parts.month || day !== parts.day || hour !== parts.hour || minute !== parts.minute || second !== parts.second || millisecond !== parts.millisecond || microsecond !== parts.microsecond || nanosecond !== parts.nanosecond) {
      return undefined;
    }

    return epochNanoseconds;
  }).filter(function (x) {
    return x !== undefined;
  });
}
function LeapYear(year) {
  if (undefined === year) return false;
  var isDiv4 = year % 4 === 0;
  var isDiv100 = year % 100 === 0;
  var isDiv400 = year % 400 === 0;
  return isDiv4 && (!isDiv100 || isDiv400);
}
function ISODaysInMonth(year, month) {
  var DoM = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  };
  return DoM[LeapYear(year) ? 'leapyear' : 'standard'][month - 1];
}
function DayOfWeek(year, month, day) {
  var m = month + (month < 3 ? 10 : -2);
  var Y = year - (month < 3 ? 1 : 0);
  var c = MathFloor(Y / 100);
  var y = Y - c * 100;
  var d = day;
  var pD = d;
  var pM = MathFloor(2.6 * m - 0.2);
  var pY = y + MathFloor(y / 4);
  var pC = MathFloor(c / 4) - 2 * c;
  var dow = (pD + pM + pY + pC) % 7;
  return dow + (dow <= 0 ? 7 : 0);
}
function DayOfYear(year, month, day) {
  var days = day;

  for (var m = month - 1; m > 0; m--) {
    days += ISODaysInMonth(year, m);
  }

  return days;
}
function WeekOfYear(year, month, day) {
  var doy = DayOfYear(year, month, day);
  var dow = DayOfWeek(year, month, day) || 7;
  var doj = DayOfWeek(year, 1, 1);
  var week = MathFloor((doy - dow + 10) / 7);

  if (week < 1) {
    if (doj === 5 || doj === 6 && LeapYear(year - 1)) {
      return 53;
    } else {
      return 52;
    }
  }

  if (week === 53) {
    if ((LeapYear(year) ? 366 : 365) - doy < 4 - dow) {
      return 1;
    }
  }

  return week;
}
function DurationSign(y, mon, w, d, h, min, s, ms, µs, ns) {
  for (var _i2 = 0, _arr2 = [y, mon, w, d, h, min, s, ms, µs, ns]; _i2 < _arr2.length; _i2++) {
    var prop = _arr2[_i2];
    if (prop !== 0) return prop < 0 ? -1 : 1;
  }

  return 0;
}

function BalanceISOYearMonth(yearParam, monthParam) {
  var year = yearParam;
  var month = monthParam;
  if (!NumberIsFinite(year) || !NumberIsFinite(month)) throw new RangeError('infinity is out of range');
  month -= 1;
  year += MathFloor(month / 12);
  month %= 12;
  if (month < 0) month += 12;
  month += 1;
  return {
    year: year,
    month: month
  };
}

function BalanceISODate(yearParam, monthParam, dayParam) {
  var year = yearParam;
  var month = monthParam;
  var day = dayParam;
  if (!NumberIsFinite(day)) throw new RangeError('infinity is out of range');

  var _BalanceISOYearMonth = BalanceISOYearMonth(year, month);

  year = _BalanceISOYearMonth.year;
  month = _BalanceISOYearMonth.month;
  var daysInYear = 0;
  var testYear = month > 2 ? year : year - 1;

  while (daysInYear = LeapYear(testYear) ? 366 : 365, day < -daysInYear) {
    year -= 1;
    testYear -= 1;
    day += daysInYear;
  }

  testYear += 1;

  while (daysInYear = LeapYear(testYear) ? 366 : 365, day > daysInYear) {
    year += 1;
    testYear += 1;
    day -= daysInYear;
  }

  while (day < 1) {
    var _BalanceISOYearMonth2 = BalanceISOYearMonth(year, month - 1);

    year = _BalanceISOYearMonth2.year;
    month = _BalanceISOYearMonth2.month;
    day += ISODaysInMonth(year, month);
  }

  while (day > ISODaysInMonth(year, month)) {
    day -= ISODaysInMonth(year, month);

    var _BalanceISOYearMonth3 = BalanceISOYearMonth(year, month + 1);

    year = _BalanceISOYearMonth3.year;
    month = _BalanceISOYearMonth3.month;
  }

  return {
    year: year,
    month: month,
    day: day
  };
}

function BalanceISODateTime(yearParam, monthParam, dayParam, hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam) {
  var _BalanceTime = BalanceTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam),
      deltaDays = _BalanceTime.deltaDays,
      hour = _BalanceTime.hour,
      minute = _BalanceTime.minute,
      second = _BalanceTime.second,
      millisecond = _BalanceTime.millisecond,
      microsecond = _BalanceTime.microsecond,
      nanosecond = _BalanceTime.nanosecond;

  var _BalanceISODate = BalanceISODate(yearParam, monthParam, dayParam + deltaDays),
      year = _BalanceISODate.year,
      month = _BalanceISODate.month,
      day = _BalanceISODate.day;

  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}

function BalanceTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam) {
  var hour = hourParam;
  var minute = minuteParam;
  var second = secondParam;
  var millisecond = millisecondParam;
  var microsecond = microsecondParam;
  var nanosecond = nanosecondParam;

  if (!NumberIsFinite(hour) || !NumberIsFinite(minute) || !NumberIsFinite(second) || !NumberIsFinite(millisecond) || !NumberIsFinite(microsecond) || !NumberIsFinite(nanosecond)) {
    throw new RangeError('infinity is out of range');
  }

  microsecond += MathFloor(nanosecond / 1000);
  nanosecond = NonNegativeModulo(nanosecond, 1000);
  millisecond += MathFloor(microsecond / 1000);
  microsecond = NonNegativeModulo(microsecond, 1000);
  second += MathFloor(millisecond / 1000);
  millisecond = NonNegativeModulo(millisecond, 1000);
  minute += MathFloor(second / 60);
  second = NonNegativeModulo(second, 60);
  hour += MathFloor(minute / 60);
  minute = NonNegativeModulo(minute, 60);
  var deltaDays = MathFloor(hour / 24);
  hour = NonNegativeModulo(hour, 24);
  return {
    deltaDays: deltaDays,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}

function TotalDurationNanoseconds(daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, offsetShift) {
  var days = bigInt(daysParam);
  var nanoseconds = bigInt(nanosecondsParam);
  if (daysParam !== 0) nanoseconds = bigInt(nanosecondsParam).subtract(offsetShift);
  var hours = bigInt(hoursParam).add(bigInt(days).multiply(24));
  var minutes = bigInt(minutesParam).add(hours.multiply(60));
  var seconds = bigInt(secondsParam).add(minutes.multiply(60));
  var milliseconds = bigInt(millisecondsParam).add(seconds.multiply(1000));
  var microseconds = bigInt(microsecondsParam).add(milliseconds.multiply(1000));
  return bigInt(nanoseconds).add(microseconds.multiply(1000));
}

function NanosecondsToDays(nanosecondsParam, relativeTo) {
  var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
  var sign = MathSign(nanosecondsParam.toJSNumber());
  var nanoseconds = bigInt(nanosecondsParam);
  var dayLengthNs = 86400e9;
  if (sign === 0) return {
    days: 0,
    nanoseconds: bigInt.zero,
    dayLengthNs: dayLengthNs
  };

  if (!IsTemporalZonedDateTime(relativeTo)) {
    var _days;

    var _nanoseconds$divmod = nanoseconds.divmod(dayLengthNs);

    _days = _nanoseconds$divmod.quotient;
    nanoseconds = _nanoseconds$divmod.remainder;
    _days = _days.toJSNumber();
    return {
      days: _days,
      nanoseconds: nanoseconds,
      dayLengthNs: dayLengthNs
    };
  }

  var startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
  var start = GetSlot(relativeTo, INSTANT);
  var endNs = startNs.add(nanoseconds);
  var end = new TemporalInstant(endNs);
  var timeZone = GetSlot(relativeTo, TIME_ZONE);
  var calendar = GetSlot(relativeTo, CALENDAR); // Find the difference in days only.

  var dtStart = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, start, calendar);
  var dtEnd = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, end, calendar);

  var _DifferenceISODateTim = DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar, 'day'),
      days = _DifferenceISODateTim.days;

  var intermediateNs = AddZonedDateTime(start, timeZone, calendar, 0, 0, 0, days, 0, 0, 0, 0, 0, 0); // may disambiguate
  // If clock time after addition was in the middle of a skipped period, the
  // endpoint was disambiguated to a later clock time. So it's possible that
  // the resulting disambiguated result is later than endNs. If so, then back
  // up one day and try again. Repeat if necessary (some transitions are
  // > 24 hours) until either there's zero days left or the date duration is
  // back inside the period where it belongs. Note that this case only can
  // happen for positive durations because the only direction that
  // `disambiguation: 'compatible'` can change clock time is forwards.

  if (sign === 1) {
    while (days > 0 && intermediateNs.greater(endNs)) {
      --days;
      intermediateNs = AddZonedDateTime(start, timeZone, calendar, 0, 0, 0, days, 0, 0, 0, 0, 0, 0); // may do disambiguation
    }
  }

  nanoseconds = endNs.subtract(intermediateNs);
  var isOverflow = false;
  var relativeInstant = new TemporalInstant(intermediateNs);

  do {
    // calculate length of the next day (day that contains the time remainder)
    var oneDayFartherNs = AddZonedDateTime(relativeInstant, timeZone, calendar, 0, 0, 0, sign, 0, 0, 0, 0, 0, 0);
    var relativeNs = GetSlot(relativeInstant, EPOCHNANOSECONDS);
    dayLengthNs = oneDayFartherNs.subtract(relativeNs).toJSNumber();
    isOverflow = nanoseconds.subtract(dayLengthNs).multiply(sign).geq(0);

    if (isOverflow) {
      nanoseconds = nanoseconds.subtract(dayLengthNs);
      relativeInstant = new TemporalInstant(oneDayFartherNs);
      days += sign;
    }
  } while (isOverflow);

  return {
    days: days,
    nanoseconds: nanoseconds,
    dayLengthNs: MathAbs(dayLengthNs)
  };
}

function BalanceDuration(daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, largestUnit) {
  var relativeTo = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : undefined;
  var days = daysParam;
  var nanosecondsBigInt, microsecondsBigInt, millisecondsBigInt, secondsBigInt, minutesBigInt, hoursBigInt;

  if (IsTemporalZonedDateTime(relativeTo)) {
    var endNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), GetSlot(relativeTo, TIME_ZONE), GetSlot(relativeTo, CALENDAR), 0, 0, 0, days, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam);
    var startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
    nanosecondsBigInt = endNs.subtract(startNs);
  } else {
    nanosecondsBigInt = TotalDurationNanoseconds(days, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, 0);
  }

  if (largestUnit === 'year' || largestUnit === 'month' || largestUnit === 'week' || largestUnit === 'day') {
    var _NanosecondsToDays = NanosecondsToDays(nanosecondsBigInt, relativeTo);

    days = _NanosecondsToDays.days;
    nanosecondsBigInt = _NanosecondsToDays.nanoseconds;
  } else {
    days = 0;
  }

  var sign = nanosecondsBigInt.lesser(0) ? -1 : 1;
  nanosecondsBigInt = nanosecondsBigInt.abs();
  microsecondsBigInt = millisecondsBigInt = secondsBigInt = minutesBigInt = hoursBigInt = bigInt.zero;

  switch (largestUnit) {
    case 'year':
    case 'month':
    case 'week':
    case 'day':
    case 'hour':
      var _nanosecondsBigInt$di = nanosecondsBigInt.divmod(1000);

      microsecondsBigInt = _nanosecondsBigInt$di.quotient;
      nanosecondsBigInt = _nanosecondsBigInt$di.remainder;

      var _microsecondsBigInt$d = microsecondsBigInt.divmod(1000);

      millisecondsBigInt = _microsecondsBigInt$d.quotient;
      microsecondsBigInt = _microsecondsBigInt$d.remainder;

      var _millisecondsBigInt$d = millisecondsBigInt.divmod(1000);

      secondsBigInt = _millisecondsBigInt$d.quotient;
      millisecondsBigInt = _millisecondsBigInt$d.remainder;

      var _secondsBigInt$divmod = secondsBigInt.divmod(60);

      minutesBigInt = _secondsBigInt$divmod.quotient;
      secondsBigInt = _secondsBigInt$divmod.remainder;

      var _minutesBigInt$divmod = minutesBigInt.divmod(60);

      hoursBigInt = _minutesBigInt$divmod.quotient;
      minutesBigInt = _minutesBigInt$divmod.remainder;
      break;

    case 'minute':
      var _nanosecondsBigInt$di2 = nanosecondsBigInt.divmod(1000);

      microsecondsBigInt = _nanosecondsBigInt$di2.quotient;
      nanosecondsBigInt = _nanosecondsBigInt$di2.remainder;

      var _microsecondsBigInt$d2 = microsecondsBigInt.divmod(1000);

      millisecondsBigInt = _microsecondsBigInt$d2.quotient;
      microsecondsBigInt = _microsecondsBigInt$d2.remainder;

      var _millisecondsBigInt$d2 = millisecondsBigInt.divmod(1000);

      secondsBigInt = _millisecondsBigInt$d2.quotient;
      millisecondsBigInt = _millisecondsBigInt$d2.remainder;

      var _secondsBigInt$divmod2 = secondsBigInt.divmod(60);

      minutesBigInt = _secondsBigInt$divmod2.quotient;
      secondsBigInt = _secondsBigInt$divmod2.remainder;
      break;

    case 'second':
      var _nanosecondsBigInt$di3 = nanosecondsBigInt.divmod(1000);

      microsecondsBigInt = _nanosecondsBigInt$di3.quotient;
      nanosecondsBigInt = _nanosecondsBigInt$di3.remainder;

      var _microsecondsBigInt$d3 = microsecondsBigInt.divmod(1000);

      millisecondsBigInt = _microsecondsBigInt$d3.quotient;
      microsecondsBigInt = _microsecondsBigInt$d3.remainder;

      var _millisecondsBigInt$d3 = millisecondsBigInt.divmod(1000);

      secondsBigInt = _millisecondsBigInt$d3.quotient;
      millisecondsBigInt = _millisecondsBigInt$d3.remainder;
      break;

    case 'millisecond':
      var _nanosecondsBigInt$di4 = nanosecondsBigInt.divmod(1000);

      microsecondsBigInt = _nanosecondsBigInt$di4.quotient;
      nanosecondsBigInt = _nanosecondsBigInt$di4.remainder;

      var _microsecondsBigInt$d4 = microsecondsBigInt.divmod(1000);

      millisecondsBigInt = _microsecondsBigInt$d4.quotient;
      microsecondsBigInt = _microsecondsBigInt$d4.remainder;
      break;

    case 'microsecond':
      var _nanosecondsBigInt$di5 = nanosecondsBigInt.divmod(1000);

      microsecondsBigInt = _nanosecondsBigInt$di5.quotient;
      nanosecondsBigInt = _nanosecondsBigInt$di5.remainder;
      break;

    case 'nanosecond':
      break;

    default:
      throw new Error('assert not reached');
  }

  var hours = hoursBigInt.toJSNumber() * sign;
  var minutes = minutesBigInt.toJSNumber() * sign;
  var seconds = secondsBigInt.toJSNumber() * sign;
  var milliseconds = millisecondsBigInt.toJSNumber() * sign;
  var microseconds = microsecondsBigInt.toJSNumber() * sign;
  var nanoseconds = nanosecondsBigInt.toJSNumber() * sign;
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function UnbalanceDurationRelative(yearsParam, monthsParam, weeksParam, daysParam, largestUnit, relativeToParam) {
  var years = yearsParam;
  var months = monthsParam;
  var weeks = weeksParam;
  var days = daysParam;
  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
  var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
  var calendar;
  var relativeTo;

  if (relativeToParam) {
    relativeTo = ToTemporalDate(relativeToParam);
    calendar = GetSlot(relativeTo, CALENDAR);
  }

  var oneYear = new TemporalDuration(sign);
  var oneMonth = new TemporalDuration(0, sign);
  var oneWeek = new TemporalDuration(0, 0, sign);

  switch (largestUnit) {
    case 'year':
      // no-op
      break;

    case 'month':
      {
        if (!calendar) throw new RangeError('a starting point is required for months balancing'); // balance years down to months

        var dateAdd = calendar.dateAdd;
        var dateUntil = calendar.dateUntil;
        var relativeToDateOnly = relativeTo;

        while (MathAbs(years) > 0) {
          var addOptions = ObjectCreate$2(null);
          var newRelativeTo = CalendarDateAdd(calendar, relativeToDateOnly, oneYear, addOptions, dateAdd);
          var untilOptions = ObjectCreate$2(null);
          untilOptions.largestUnit = 'month';
          var untilResult = CalendarDateUntil(calendar, relativeToDateOnly, newRelativeTo, untilOptions, dateUntil);
          var oneYearMonths = GetSlot(untilResult, MONTHS);
          relativeToDateOnly = newRelativeTo;
          months += oneYearMonths;
          years -= sign;
        }
      }
      break;

    case 'week':
      if (!calendar) throw new RangeError('a starting point is required for weeks balancing'); // balance years down to days

      while (MathAbs(years) > 0) {
        var oneYearDays = void 0;

        var _MoveRelativeDate = MoveRelativeDate(calendar, relativeTo, oneYear);

        relativeTo = _MoveRelativeDate.relativeTo;
        oneYearDays = _MoveRelativeDate.days;
        days += oneYearDays;
        years -= sign;
      } // balance months down to days


      while (MathAbs(months) > 0) {
        var oneMonthDays = void 0;

        var _MoveRelativeDate2 = MoveRelativeDate(calendar, relativeTo, oneMonth);

        relativeTo = _MoveRelativeDate2.relativeTo;
        oneMonthDays = _MoveRelativeDate2.days;
        days += oneMonthDays;
        months -= sign;
      }

      break;

    default:
      // balance years down to days
      while (MathAbs(years) > 0) {
        if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');

        var _oneYearDays = void 0;

        var _MoveRelativeDate3 = MoveRelativeDate(calendar, relativeTo, oneYear);

        relativeTo = _MoveRelativeDate3.relativeTo;
        _oneYearDays = _MoveRelativeDate3.days;
        days += _oneYearDays;
        years -= sign;
      } // balance months down to days


      while (MathAbs(months) > 0) {
        if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');

        var _oneMonthDays = void 0;

        var _MoveRelativeDate4 = MoveRelativeDate(calendar, relativeTo, oneMonth);

        relativeTo = _MoveRelativeDate4.relativeTo;
        _oneMonthDays = _MoveRelativeDate4.days;
        days += _oneMonthDays;
        months -= sign;
      } // balance weeks down to days


      while (MathAbs(weeks) > 0) {
        if (!calendar) throw new RangeError('a starting point is required for balancing calendar units');
        var oneWeekDays = void 0;

        var _MoveRelativeDate5 = MoveRelativeDate(calendar, relativeTo, oneWeek);

        relativeTo = _MoveRelativeDate5.relativeTo;
        oneWeekDays = _MoveRelativeDate5.days;
        days += oneWeekDays;
        weeks -= sign;
      }

      break;
  }

  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days
  };
}
function BalanceDurationRelative(yearsParam, monthsParam, weeksParam, daysParam, largestUnit, relativeToParam) {
  var years = yearsParam;
  var months = monthsParam;
  var weeks = weeksParam;
  var days = daysParam;
  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
  var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
  if (sign === 0) return {
    years: years,
    months: months,
    weeks: weeks,
    days: days
  };
  var calendar;
  var relativeTo;

  if (relativeToParam) {
    relativeTo = ToTemporalDate(relativeToParam);
    calendar = GetSlot(relativeTo, CALENDAR);
  }

  var oneYear = new TemporalDuration(sign);
  var oneMonth = new TemporalDuration(0, sign);
  var oneWeek = new TemporalDuration(0, 0, sign);

  switch (largestUnit) {
    case 'year':
      {
        if (!calendar) throw new RangeError('a starting point is required for years balancing'); // balance days up to years

        var newRelativeTo, oneYearDays;

        var _MoveRelativeDate6 = MoveRelativeDate(calendar, relativeTo, oneYear);

        newRelativeTo = _MoveRelativeDate6.relativeTo;
        oneYearDays = _MoveRelativeDate6.days;

        while (MathAbs(days) >= MathAbs(oneYearDays)) {
          days -= oneYearDays;
          years += sign;
          relativeTo = newRelativeTo;

          var _MoveRelativeDate7 = MoveRelativeDate(calendar, relativeTo, oneYear);

          newRelativeTo = _MoveRelativeDate7.relativeTo;
          oneYearDays = _MoveRelativeDate7.days;
        } // balance days up to months


        var oneMonthDays;

        var _MoveRelativeDate8 = MoveRelativeDate(calendar, relativeTo, oneMonth);

        newRelativeTo = _MoveRelativeDate8.relativeTo;
        oneMonthDays = _MoveRelativeDate8.days;

        while (MathAbs(days) >= MathAbs(oneMonthDays)) {
          days -= oneMonthDays;
          months += sign;
          relativeTo = newRelativeTo;

          var _MoveRelativeDate9 = MoveRelativeDate(calendar, relativeTo, oneMonth);

          newRelativeTo = _MoveRelativeDate9.relativeTo;
          oneMonthDays = _MoveRelativeDate9.days;
        } // balance months up to years


        var dateAdd = calendar.dateAdd;
        var addOptions = ObjectCreate$2(null);
        newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, addOptions, dateAdd);
        var dateUntil = calendar.dateUntil;
        var untilOptions = ObjectCreate$2(null);
        untilOptions.largestUnit = 'month';
        var untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, untilOptions, dateUntil);
        var oneYearMonths = GetSlot(untilResult, MONTHS);

        while (MathAbs(months) >= MathAbs(oneYearMonths)) {
          months -= oneYearMonths;
          years += sign;
          relativeTo = newRelativeTo;

          var _addOptions = ObjectCreate$2(null);

          newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, _addOptions, dateAdd);

          var _untilOptions = ObjectCreate$2(null);

          _untilOptions.largestUnit = 'month';
          untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, _untilOptions, dateUntil);
          oneYearMonths = GetSlot(untilResult, MONTHS);
        }

        break;
      }

    case 'month':
      {
        if (!calendar) throw new RangeError('a starting point is required for months balancing'); // balance days up to months

        var _newRelativeTo, _oneMonthDays2;

        var _MoveRelativeDate10 = MoveRelativeDate(calendar, relativeTo, oneMonth);

        _newRelativeTo = _MoveRelativeDate10.relativeTo;
        _oneMonthDays2 = _MoveRelativeDate10.days;

        while (MathAbs(days) >= MathAbs(_oneMonthDays2)) {
          days -= _oneMonthDays2;
          months += sign;
          relativeTo = _newRelativeTo;

          var _MoveRelativeDate11 = MoveRelativeDate(calendar, relativeTo, oneMonth);

          _newRelativeTo = _MoveRelativeDate11.relativeTo;
          _oneMonthDays2 = _MoveRelativeDate11.days;
        }

        break;
      }

    case 'week':
      {
        if (!calendar) throw new RangeError('a starting point is required for weeks balancing'); // balance days up to weeks

        var _newRelativeTo2, oneWeekDays;

        var _MoveRelativeDate12 = MoveRelativeDate(calendar, relativeTo, oneWeek);

        _newRelativeTo2 = _MoveRelativeDate12.relativeTo;
        oneWeekDays = _MoveRelativeDate12.days;

        while (MathAbs(days) >= MathAbs(oneWeekDays)) {
          days -= oneWeekDays;
          weeks += sign;
          relativeTo = _newRelativeTo2;

          var _MoveRelativeDate13 = MoveRelativeDate(calendar, relativeTo, oneWeek);

          _newRelativeTo2 = _MoveRelativeDate13.relativeTo;
          oneWeekDays = _MoveRelativeDate13.days;
        }

        break;
      }
  }

  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days
  };
}
function CalculateOffsetShift(relativeTo, y, mon, w, d, h, min, s, ms, µs, ns) {
  if (IsTemporalZonedDateTime(relativeTo)) {
    var instant = GetSlot(relativeTo, INSTANT);
    var timeZone = GetSlot(relativeTo, TIME_ZONE);
    var calendar = GetSlot(relativeTo, CALENDAR);
    var offsetBefore = GetOffsetNanosecondsFor(timeZone, instant);
    var after = AddZonedDateTime(instant, timeZone, calendar, y, mon, w, d, h, min, s, ms, µs, ns);
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    var instantAfter = new TemporalInstant(after);
    var offsetAfter = GetOffsetNanosecondsFor(timeZone, instantAfter);
    return offsetAfter - offsetBefore;
  }

  return 0;
}
function CreateNegatedTemporalDuration(duration) {
  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
  return new TemporalDuration(-GetSlot(duration, YEARS), -GetSlot(duration, MONTHS), -GetSlot(duration, WEEKS), -GetSlot(duration, DAYS), -GetSlot(duration, HOURS), -GetSlot(duration, MINUTES), -GetSlot(duration, SECONDS), -GetSlot(duration, MILLISECONDS), -GetSlot(duration, MICROSECONDS), -GetSlot(duration, NANOSECONDS));
}
function ConstrainToRange(value, min, max) {
  return MathMin(max, MathMax(min, value));
}

function ConstrainISODate(year, monthParam, dayParam) {
  var month = ConstrainToRange(monthParam, 1, 12);
  var day = ConstrainToRange(dayParam, 1, ISODaysInMonth(year, month));
  return {
    year: year,
    month: month,
    day: day
  };
}

function ConstrainTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam) {
  var hour = ConstrainToRange(hourParam, 0, 23);
  var minute = ConstrainToRange(minuteParam, 0, 59);
  var second = ConstrainToRange(secondParam, 0, 59);
  var millisecond = ConstrainToRange(millisecondParam, 0, 999);
  var microsecond = ConstrainToRange(microsecondParam, 0, 999);
  var nanosecond = ConstrainToRange(nanosecondParam, 0, 999);
  return {
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}

function RejectToRange(value, min, max) {
  if (value < min || value > max) throw new RangeError("value out of range: ".concat(min, " <= ").concat(value, " <= ").concat(max));
}

function RejectISODate(year, month, day) {
  RejectToRange(month, 1, 12);
  RejectToRange(day, 1, ISODaysInMonth(year, month));
}

function RejectDateRange(year, month, day) {
  // Noon avoids trouble at edges of DateTime range (excludes midnight)
  RejectDateTimeRange(year, month, day, 12, 0, 0, 0, 0, 0);
}

function RejectTime(hour, minute, second, millisecond, microsecond, nanosecond) {
  RejectToRange(hour, 0, 23);
  RejectToRange(minute, 0, 59);
  RejectToRange(second, 0, 59);
  RejectToRange(millisecond, 0, 999);
  RejectToRange(microsecond, 0, 999);
  RejectToRange(nanosecond, 0, 999);
}

function RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
  RejectISODate(year, month, day);
  RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
}

function RejectDateTimeRange(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
  RejectToRange(year, YEAR_MIN, YEAR_MAX); // Reject any DateTime 24 hours or more outside the Instant range

  if (year === YEAR_MIN && null == GetEpochFromISOParts(year, month, day + 1, hour, minute, second, millisecond, microsecond, nanosecond - 1) || year === YEAR_MAX && null == GetEpochFromISOParts(year, month, day - 1, hour, minute, second, millisecond, microsecond, nanosecond + 1)) {
    throw new RangeError('DateTime outside of supported range');
  }
}

function ValidateEpochNanoseconds(epochNanoseconds) {
  if (epochNanoseconds.lesser(NS_MIN) || epochNanoseconds.greater(NS_MAX)) {
    throw new RangeError('Instant outside of supported range');
  }
}

function RejectYearMonthRange(year, month) {
  RejectToRange(year, YEAR_MIN, YEAR_MAX);

  if (year === YEAR_MIN) {
    RejectToRange(month, 4, 12);
  } else if (year === YEAR_MAX) {
    RejectToRange(month, 1, 9);
  }
}

function RejectDuration(y, mon, w, d, h, min, s, ms, µs, ns) {
  var sign = DurationSign(y, mon, w, d, h, min, s, ms, µs, ns);

  for (var _i3 = 0, _arr3 = [y, mon, w, d, h, min, s, ms, µs, ns]; _i3 < _arr3.length; _i3++) {
    var prop = _arr3[_i3];
    if (!NumberIsFinite(prop)) throw new RangeError('infinite values not allowed as duration fields');
    var propSign = MathSign(prop);
    if (propSign !== 0 && propSign !== sign) throw new RangeError('mixed-sign values not allowed as duration fields');
  }
}

function DifferenceISODate(y1, m1, d1, y2, m2, d2, largestUnit) {
  switch (largestUnit) {
    case 'year':
    case 'month':
      {
        var sign = -CompareISODate(y1, m1, d1, y2, m2, d2);
        if (sign === 0) return {
          years: 0,
          months: 0,
          weeks: 0,
          days: 0
        };
        var start = {
          year: y1,
          month: m1,
          day: d1
        };
        var end = {
          year: y2,
          month: m2,
          day: d2
        };
        var years = end.year - start.year;
        var mid = AddISODate(y1, m1, d1, years, 0, 0, 0, 'constrain');
        var midSign = -CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);

        if (midSign === 0) {
          return largestUnit === 'year' ? {
            years: years,
            months: 0,
            weeks: 0,
            days: 0
          } : {
            years: 0,
            months: years * 12,
            weeks: 0,
            days: 0
          };
        }

        var months = end.month - start.month;

        if (midSign !== sign) {
          years -= sign;
          months += sign * 12;
        }

        mid = AddISODate(y1, m1, d1, years, months, 0, 0, 'constrain');
        midSign = -CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);

        if (midSign === 0) {
          return largestUnit === 'year' ? {
            years: years,
            months: months,
            weeks: 0,
            days: 0
          } : {
            years: 0,
            months: months + years * 12,
            weeks: 0,
            days: 0
          };
        }

        if (midSign !== sign) {
          // The end date is later in the month than mid date (or earlier for
          // negative durations). Back up one month.
          months -= sign;

          if (months === -sign) {
            years -= sign;
            months = 11 * sign;
          }

          mid = AddISODate(y1, m1, d1, years, months, 0, 0, 'constrain');
          midSign = -CompareISODate(y1, m1, d1, mid.year, mid.month, mid.day);
        }

        var days = 0; // If we get here, months and years are correct (no overflow), and `mid`
        // is within the range from `start` to `end`. To count the days between
        // `mid` and `end`, there are 3 cases:
        // 1) same month: use simple subtraction
        // 2) end is previous month from intermediate (negative duration)
        // 3) end is next month from intermediate (positive duration)

        if (mid.month === end.month) {
          // 1) same month: use simple subtraction
          days = end.day - mid.day;
        } else if (sign < 0) {
          // 2) end is previous month from intermediate (negative duration)
          // Example: intermediate: Feb 1, end: Jan 30, DaysInMonth = 31, days = -2
          days = -mid.day - (ISODaysInMonth(end.year, end.month) - end.day);
        } else {
          // 3) end is next month from intermediate (positive duration)
          // Example: intermediate: Jan 29, end: Feb 1, DaysInMonth = 31, days = 3
          days = end.day + (ISODaysInMonth(mid.year, mid.month) - mid.day);
        }

        if (largestUnit === 'month') {
          months += years * 12;
          years = 0;
        }

        return {
          years: years,
          months: months,
          weeks: 0,
          days: days
        };
      }

    case 'week':
    case 'day':
      {
        var larger, smaller, _sign;

        if (CompareISODate(y1, m1, d1, y2, m2, d2) < 0) {
          smaller = {
            year: y1,
            month: m1,
            day: d1
          };
          larger = {
            year: y2,
            month: m2,
            day: d2
          };
          _sign = 1;
        } else {
          smaller = {
            year: y2,
            month: m2,
            day: d2
          };
          larger = {
            year: y1,
            month: m1,
            day: d1
          };
          _sign = -1;
        }

        var _days2 = DayOfYear(larger.year, larger.month, larger.day) - DayOfYear(smaller.year, smaller.month, smaller.day);

        for (var year = smaller.year; year < larger.year; ++year) {
          _days2 += LeapYear(year) ? 366 : 365;
        }

        var weeks = 0;

        if (largestUnit === 'week') {
          weeks = MathFloor(_days2 / 7);
          _days2 %= 7;
        }

        weeks *= _sign;
        _days2 *= _sign;
        return {
          years: 0,
          months: 0,
          weeks: weeks,
          days: _days2
        };
      }

    default:
      throw new Error('assert not reached');
  }
}
function DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2) {
  var hours = h2 - h1;
  var minutes = min2 - min1;
  var seconds = s2 - s1;
  var milliseconds = ms2 - ms1;
  var microseconds = µs2 - µs1;
  var nanoseconds = ns2 - ns1;
  var sign = DurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
  hours *= sign;
  minutes *= sign;
  seconds *= sign;
  milliseconds *= sign;
  microseconds *= sign;
  nanoseconds *= sign;
  var deltaDays = 0;

  var _BalanceTime2 = BalanceTime(hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

  deltaDays = _BalanceTime2.deltaDays;
  hours = _BalanceTime2.hour;
  minutes = _BalanceTime2.minute;
  seconds = _BalanceTime2.second;
  milliseconds = _BalanceTime2.millisecond;
  microseconds = _BalanceTime2.microsecond;
  nanoseconds = _BalanceTime2.nanosecond;
  deltaDays *= sign;
  hours *= sign;
  minutes *= sign;
  seconds *= sign;
  milliseconds *= sign;
  microseconds *= sign;
  nanoseconds *= sign;
  return {
    deltaDays: deltaDays,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function DifferenceInstant(ns1, ns2, increment, unit, roundingMode) {
  var diff = ns2.minus(ns1);
  var remainder = diff.mod(86400e9);
  var wholeDays = diff.minus(remainder);
  var roundedRemainder = RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
  var roundedDiff = wholeDays.plus(roundedRemainder);
  var nanoseconds = +roundedDiff.mod(1e3);
  var microseconds = +roundedDiff.divide(1e3).mod(1e3);
  var milliseconds = +roundedDiff.divide(1e6).mod(1e3);
  var seconds = +roundedDiff.divide(1e9);
  return {
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function DifferenceISODateTime(y1Param, mon1Param, d1Param, h1, min1, s1, ms1, µs1, ns1, y2, mon2, d2, h2, min2, s2, ms2, µs2, ns2, calendar, largestUnit) {
  var options = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : ObjectCreate$2(null);
  var y1 = y1Param;
  var mon1 = mon1Param;
  var d1 = d1Param;

  var _DifferenceTime = DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2),
      deltaDays = _DifferenceTime.deltaDays,
      hours = _DifferenceTime.hours,
      minutes = _DifferenceTime.minutes,
      seconds = _DifferenceTime.seconds,
      milliseconds = _DifferenceTime.milliseconds,
      microseconds = _DifferenceTime.microseconds,
      nanoseconds = _DifferenceTime.nanoseconds;

  var timeSign = DurationSign(0, 0, 0, deltaDays, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

  var _BalanceISODate2 = BalanceISODate(y1, mon1, d1 + deltaDays);

  y1 = _BalanceISODate2.year;
  mon1 = _BalanceISODate2.month;
  d1 = _BalanceISODate2.day;
  var dateSign = CompareISODate(y2, mon2, d2, y1, mon1, d1);

  if (dateSign === -timeSign) {
    var _BalanceISODate3 = BalanceISODate(y1, mon1, d1 - timeSign);

    y1 = _BalanceISODate3.year;
    mon1 = _BalanceISODate3.month;
    d1 = _BalanceISODate3.day;

    var _BalanceDuration = BalanceDuration(-timeSign, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

    hours = _BalanceDuration.hours;
    minutes = _BalanceDuration.minutes;
    seconds = _BalanceDuration.seconds;
    milliseconds = _BalanceDuration.milliseconds;
    microseconds = _BalanceDuration.microseconds;
    nanoseconds = _BalanceDuration.nanoseconds;
  }

  var date1 = CreateTemporalDate(y1, mon1, d1, calendar);
  var date2 = CreateTemporalDate(y2, mon2, d2, calendar);
  var dateLargestUnit = LargerOfTwoTemporalUnits('day', largestUnit);

  var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
    largestUnit: dateLargestUnit
  });

  var _CalendarDateUntil = CalendarDateUntil(calendar, date1, date2, untilOptions),
      years = _CalendarDateUntil.years,
      months = _CalendarDateUntil.months,
      weeks = _CalendarDateUntil.weeks,
      days = _CalendarDateUntil.days; // Signs of date part and time part may not agree; balance them together


  var _BalanceDuration2 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

  days = _BalanceDuration2.days;
  hours = _BalanceDuration2.hours;
  minutes = _BalanceDuration2.minutes;
  seconds = _BalanceDuration2.seconds;
  milliseconds = _BalanceDuration2.milliseconds;
  microseconds = _BalanceDuration2.microseconds;
  nanoseconds = _BalanceDuration2.nanoseconds;
  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, options) {
  var nsDiff = ns2.subtract(ns1);

  if (nsDiff.isZero()) {
    return {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    };
  } // Find the difference in dates only.


  var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
  var start = new TemporalInstant(ns1);
  var end = new TemporalInstant(ns2);
  var dtStart = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, start, calendar);
  var dtEnd = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, end, calendar);

  var _DifferenceISODateTim2 = DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar, largestUnit, options),
      years = _DifferenceISODateTim2.years,
      months = _DifferenceISODateTim2.months,
      weeks = _DifferenceISODateTim2.weeks,
      days = _DifferenceISODateTim2.days;

  var intermediateNs = AddZonedDateTime(start, timeZone, calendar, years, months, weeks, 0, 0, 0, 0, 0, 0, 0); // may disambiguate

  var timeRemainderNs = ns2.subtract(intermediateNs);
  var intermediate = CreateTemporalZonedDateTime(intermediateNs, timeZone, calendar);

  var _NanosecondsToDays2 = NanosecondsToDays(timeRemainderNs, intermediate);

  timeRemainderNs = _NanosecondsToDays2.nanoseconds;
  days = _NanosecondsToDays2.days;

  // Finally, merge the date and time durations and return the merged result.
  var _BalanceDuration3 = BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs.toJSNumber(), 'hour'),
      hours = _BalanceDuration3.hours,
      minutes = _BalanceDuration3.minutes,
      seconds = _BalanceDuration3.seconds,
      milliseconds = _BalanceDuration3.milliseconds,
      microseconds = _BalanceDuration3.microseconds,
      nanoseconds = _BalanceDuration3.nanoseconds;

  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function AddISODate(yearParam, monthParam, dayParam, yearsParam, monthsParam, weeksParam, daysParam, overflow) {
  var year = yearParam;
  var month = monthParam;
  var day = dayParam;
  var years = yearsParam;
  var months = monthsParam;
  var weeks = weeksParam;
  var days = daysParam;
  year += years;
  month += months;

  var _BalanceISOYearMonth4 = BalanceISOYearMonth(year, month);

  year = _BalanceISOYearMonth4.year;
  month = _BalanceISOYearMonth4.month;

  var _RegulateISODate = RegulateISODate(year, month, day, overflow);

  year = _RegulateISODate.year;
  month = _RegulateISODate.month;
  day = _RegulateISODate.day;
  days += 7 * weeks;
  day += days;

  var _BalanceISODate4 = BalanceISODate(year, month, day);

  year = _BalanceISODate4.year;
  month = _BalanceISODate4.month;
  day = _BalanceISODate4.day;
  return {
    year: year,
    month: month,
    day: day
  };
}
function AddTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
  var hour = hourParam;
  var minute = minuteParam;
  var second = secondParam;
  var millisecond = millisecondParam;
  var microsecond = microsecondParam;
  var nanosecond = nanosecondParam;
  hour += hours;
  minute += minutes;
  second += seconds;
  millisecond += milliseconds;
  microsecond += microseconds;
  nanosecond += nanoseconds;
  var deltaDays = 0;

  var _BalanceTime3 = BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);

  deltaDays = _BalanceTime3.deltaDays;
  hour = _BalanceTime3.hour;
  minute = _BalanceTime3.minute;
  second = _BalanceTime3.second;
  millisecond = _BalanceTime3.millisecond;
  microsecond = _BalanceTime3.microsecond;
  nanosecond = _BalanceTime3.nanosecond;
  return {
    deltaDays: deltaDays,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}
function AddDuration(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2, relativeTo) {
  var largestUnit1 = DefaultTemporalLargestUnit(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
  var largestUnit2 = DefaultTemporalLargestUnit(y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);
  var largestUnit = LargerOfTwoTemporalUnits(largestUnit1, largestUnit2);
  var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;

  if (!relativeTo) {
    if (largestUnit === 'year' || largestUnit === 'month' || largestUnit === 'week') {
      throw new RangeError('relativeTo is required for years, months, or weeks arithmetic');
    }

    years = months = weeks = 0;

    var _BalanceDuration4 = BalanceDuration(d1 + d2, h1 + h2, min1 + min2, s1 + s2, ms1 + ms2, µs1 + µs2, ns1 + ns2, largestUnit);

    days = _BalanceDuration4.days;
    hours = _BalanceDuration4.hours;
    minutes = _BalanceDuration4.minutes;
    seconds = _BalanceDuration4.seconds;
    milliseconds = _BalanceDuration4.milliseconds;
    microseconds = _BalanceDuration4.microseconds;
    nanoseconds = _BalanceDuration4.nanoseconds;
  } else if (IsTemporalDate(relativeTo)) {
    var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    var calendar = GetSlot(relativeTo, CALENDAR);
    var dateDuration1 = new TemporalDuration(y1, mon1, w1, d1, 0, 0, 0, 0, 0, 0);
    var dateDuration2 = new TemporalDuration(y2, mon2, w2, d2, 0, 0, 0, 0, 0, 0);
    var dateAdd = calendar.dateAdd;
    var firstAddOptions = ObjectCreate$2(null);
    var intermediate = CalendarDateAdd(calendar, relativeTo, dateDuration1, firstAddOptions, dateAdd);
    var secondAddOptions = ObjectCreate$2(null);
    var end = CalendarDateAdd(calendar, intermediate, dateDuration2, secondAddOptions, dateAdd);
    var dateLargestUnit = LargerOfTwoTemporalUnits('day', largestUnit);
    var differenceOptions = ObjectCreate$2(null);
    differenceOptions.largestUnit = dateLargestUnit;

    var _CalendarDateUntil2 = CalendarDateUntil(calendar, relativeTo, end, differenceOptions);

    years = _CalendarDateUntil2.years;
    months = _CalendarDateUntil2.months;
    weeks = _CalendarDateUntil2.weeks;
    days = _CalendarDateUntil2.days;

    var _BalanceDuration5 = BalanceDuration(days, h1 + h2, min1 + min2, s1 + s2, ms1 + ms2, µs1 + µs2, ns1 + ns2, largestUnit);

    days = _BalanceDuration5.days;
    hours = _BalanceDuration5.hours;
    minutes = _BalanceDuration5.minutes;
    seconds = _BalanceDuration5.seconds;
    milliseconds = _BalanceDuration5.milliseconds;
    microseconds = _BalanceDuration5.microseconds;
    nanoseconds = _BalanceDuration5.nanoseconds;
  } else {
    // relativeTo is a ZonedDateTime
    var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    var timeZone = GetSlot(relativeTo, TIME_ZONE);

    var _calendar5 = GetSlot(relativeTo, CALENDAR);

    var intermediateNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, _calendar5, y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
    var endNs = AddZonedDateTime(new TemporalInstant(intermediateNs), timeZone, _calendar5, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);

    if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
      // The user is only asking for a time difference, so return difference of instants.
      years = 0;
      months = 0;
      weeks = 0;
      days = 0;

      var _DifferenceInstant = DifferenceInstant(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, 1, 'nanosecond', 'halfExpand');

      seconds = _DifferenceInstant.seconds;
      milliseconds = _DifferenceInstant.milliseconds;
      microseconds = _DifferenceInstant.microseconds;
      nanoseconds = _DifferenceInstant.nanoseconds;

      var _BalanceDuration6 = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      hours = _BalanceDuration6.hours;
      minutes = _BalanceDuration6.minutes;
      seconds = _BalanceDuration6.seconds;
      milliseconds = _BalanceDuration6.milliseconds;
      microseconds = _BalanceDuration6.microseconds;
      nanoseconds = _BalanceDuration6.nanoseconds;
    } else {
      var _DifferenceZonedDateT = DifferenceZonedDateTime(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, timeZone, _calendar5, largestUnit);

      years = _DifferenceZonedDateT.years;
      months = _DifferenceZonedDateT.months;
      weeks = _DifferenceZonedDateT.weeks;
      days = _DifferenceZonedDateT.days;
      hours = _DifferenceZonedDateT.hours;
      minutes = _DifferenceZonedDateT.minutes;
      seconds = _DifferenceZonedDateT.seconds;
      milliseconds = _DifferenceZonedDateT.milliseconds;
      microseconds = _DifferenceZonedDateT.microseconds;
      nanoseconds = _DifferenceZonedDateT.nanoseconds;
    }
  }

  RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function AddInstant(epochNanoseconds, h, min, s, ms, µs, ns) {
  var sum = bigInt.zero;
  sum = sum.plus(bigInt(ns));
  sum = sum.plus(bigInt(µs).multiply(1e3));
  sum = sum.plus(bigInt(ms).multiply(1e6));
  sum = sum.plus(bigInt(s).multiply(1e9));
  sum = sum.plus(bigInt(min).multiply(60 * 1e9));
  sum = sum.plus(bigInt(h).multiply(60 * 60 * 1e9));
  var result = bigInt(epochNanoseconds).plus(sum);
  ValidateEpochNanoseconds(result);
  return result;
}
function AddDateTime(year, month, day, hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, calendar, years, months, weeks, daysParam, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options) {
  var days = daysParam; // Add the time part

  var _AddTime = AddTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, hours, minutes, seconds, milliseconds, microseconds, nanoseconds),
      deltaDays = _AddTime.deltaDays,
      hour = _AddTime.hour,
      minute = _AddTime.minute,
      second = _AddTime.second,
      millisecond = _AddTime.millisecond,
      microsecond = _AddTime.microsecond,
      nanosecond = _AddTime.nanosecond;

  days += deltaDays; // Delegate the date part addition to the calendar

  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
  var datePart = CreateTemporalDate(year, month, day, calendar);
  var dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
  var addedDate = CalendarDateAdd(calendar, datePart, dateDuration, options);
  return {
    year: GetSlot(addedDate, ISO_YEAR),
    month: GetSlot(addedDate, ISO_MONTH),
    day: GetSlot(addedDate, ISO_DAY),
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}
function AddZonedDateTime(instant, timeZone, calendar, years, months, weeks, days, h, min, s, ms, µs, ns, options) {
  // If only time is to be added, then use Instant math. It's not OK to fall
  // through to the date/time code below because compatible disambiguation in
  // the PlainDateTime=>Instant conversion will change the offset of any
  // ZonedDateTime in the repeated clock time after a backwards transition.
  // When adding/subtracting time units and not dates, this disambiguation is
  // not expected and so is avoided below via a fast path for time-only
  // arithmetic.
  // BTW, this behavior is similar in spirit to offset: 'prefer' in `with`.
  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');

  if (DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0) === 0) {
    return AddInstant(GetSlot(instant, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
  } // RFC 5545 requires the date portion to be added in calendar days and the
  // time portion to be added in exact time.


  var dt = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, instant, calendar);
  var datePart = CreateTemporalDate(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), calendar);
  var dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
  var addedDate = CalendarDateAdd(calendar, datePart, dateDuration, options);
  var dtIntermediate = CreateTemporalDateTime(GetSlot(addedDate, ISO_YEAR), GetSlot(addedDate, ISO_MONTH), GetSlot(addedDate, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND), calendar); // Note that 'compatible' is used below because this disambiguation behavior
  // is required by RFC 5545.

  var instantIntermediate = BuiltinTimeZoneGetInstantFor(timeZone, dtIntermediate, 'compatible');
  return AddInstant(GetSlot(instantIntermediate, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
}

function RoundNumberToIncrement(quantity, increment, mode) {
  if (increment === 1) return quantity;

  var _quantity$divmod = quantity.divmod(increment),
      quotient = _quantity$divmod.quotient,
      remainder = _quantity$divmod.remainder;

  if (remainder.equals(bigInt.zero)) return quantity;
  var sign = remainder.lt(bigInt.zero) ? -1 : 1;

  switch (mode) {
    case 'ceil':
      if (sign > 0) quotient = quotient.add(sign);
      break;

    case 'floor':
      if (sign < 0) quotient = quotient.add(sign);
      break;

    case 'trunc':
      // no change needed, because divmod is a truncation
      break;

    case 'halfExpand':
      // "half up away from zero"
      if (remainder.multiply(2).abs().toJSNumber() >= increment) quotient = quotient.add(sign);
      break;
  }

  return quotient.multiply(increment);
}

function RoundInstant(epochNs, increment, unit, roundingMode) {
  // Note: NonNegativeModulo, but with BigInt
  var remainder = epochNs.mod(86400e9);
  if (remainder.lesser(0)) remainder = remainder.plus(86400e9);
  var wholeDays = epochNs.minus(remainder);
  var roundedRemainder = RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
  return wholeDays.plus(roundedRemainder);
}
function RoundISODateTime(yearParam, monthParam, dayParam, hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, increment, unit, roundingMode) {
  var dayLengthNs = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 86400e9;

  var _RoundTime = RoundTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, increment, unit, roundingMode, dayLengthNs),
      deltaDays = _RoundTime.deltaDays,
      hour = _RoundTime.hour,
      minute = _RoundTime.minute,
      second = _RoundTime.second,
      millisecond = _RoundTime.millisecond,
      microsecond = _RoundTime.microsecond,
      nanosecond = _RoundTime.nanosecond;

  var _BalanceISODate5 = BalanceISODate(yearParam, monthParam, dayParam + deltaDays),
      year = _BalanceISODate5.year,
      month = _BalanceISODate5.month,
      day = _BalanceISODate5.day;

  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    millisecond: millisecond,
    microsecond: microsecond,
    nanosecond: nanosecond
  };
}
function RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
  var dayLengthNs = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 86400e9;
  var quantity = bigInt.zero;

  switch (unit) {
    case 'day':
    case 'hour':
      quantity = bigInt(hour);
    // fall through

    case 'minute':
      quantity = quantity.multiply(60).plus(minute);
    // fall through

    case 'second':
      quantity = quantity.multiply(60).plus(second);
    // fall through

    case 'millisecond':
      quantity = quantity.multiply(1000).plus(millisecond);
    // fall through

    case 'microsecond':
      quantity = quantity.multiply(1000).plus(microsecond);
    // fall through

    case 'nanosecond':
      quantity = quantity.multiply(1000).plus(nanosecond);
  }

  var nsPerUnit = unit === 'day' ? dayLengthNs : nsPerTimeUnit[unit];
  var rounded = RoundNumberToIncrement(quantity, nsPerUnit * increment, roundingMode);
  var result = rounded.divide(nsPerUnit).toJSNumber();

  switch (unit) {
    case 'day':
      return {
        deltaDays: result,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        microsecond: 0,
        nanosecond: 0
      };

    case 'hour':
      return BalanceTime(result, 0, 0, 0, 0, 0);

    case 'minute':
      return BalanceTime(hour, result, 0, 0, 0, 0);

    case 'second':
      return BalanceTime(hour, minute, result, 0, 0, 0);

    case 'millisecond':
      return BalanceTime(hour, minute, second, result, 0, 0);

    case 'microsecond':
      return BalanceTime(hour, minute, second, millisecond, result, 0);

    case 'nanosecond':
      return BalanceTime(hour, minute, second, millisecond, microsecond, result);

    default:
      throw new Error("Invalid unit ".concat(unit));
  }
}

function DaysUntil(earlier, later) {
  return DifferenceISODate(GetSlot(earlier, ISO_YEAR), GetSlot(earlier, ISO_MONTH), GetSlot(earlier, ISO_DAY), GetSlot(later, ISO_YEAR), GetSlot(later, ISO_MONTH), GetSlot(later, ISO_DAY), 'day').days;
}

function MoveRelativeDate(calendar, relativeToParam, duration) {
  var options = ObjectCreate$2(null);
  var later = CalendarDateAdd(calendar, relativeToParam, duration, options);
  var days = DaysUntil(relativeToParam, later);
  return {
    relativeTo: later,
    days: days
  };
}

function MoveRelativeZonedDateTime(relativeTo, years, months, weeks, days) {
  var timeZone = GetSlot(relativeTo, TIME_ZONE);
  var calendar = GetSlot(relativeTo, CALENDAR);
  var intermediateNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
  return CreateTemporalZonedDateTime(intermediateNs, timeZone, calendar);
}
function AdjustRoundedDurationDays(yearsParam, monthsParam, weeksParam, daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, increment, unit, roundingMode, relativeTo) {
  var years = yearsParam;
  var months = monthsParam;
  var weeks = weeksParam;
  var days = daysParam;
  var hours = hoursParam;
  var minutes = minutesParam;
  var seconds = secondsParam;
  var milliseconds = millisecondsParam;
  var microseconds = microsecondsParam;
  var nanoseconds = nanosecondsParam;

  if (!IsTemporalZonedDateTime(relativeTo) || unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day' || unit === 'nanosecond' && increment === 1) {
    return {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
      microseconds: microseconds,
      nanoseconds: nanoseconds
    };
  } // There's one more round of rounding possible: if relativeTo is a
  // ZonedDateTime, the time units could have rounded up into enough hours
  // to exceed the day length. If this happens, grow the date part by a
  // single day and re-run exact time rounding on the smaller remainder. DO
  // NOT RECURSE, because once the extra hours are sucked up into the date
  // duration, there's no way for another full day to come from the next
  // round of rounding. And if it were possible (e.g. contrived calendar
  // with 30-minute-long "days") then it'd risk an infinite loop.


  var timeRemainderNs = TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
  var direction = MathSign(timeRemainderNs.toJSNumber());
  var timeZone = GetSlot(relativeTo, TIME_ZONE);
  var calendar = GetSlot(relativeTo, CALENDAR);
  var dayStart = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
  var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
  var dayEnd = AddZonedDateTime(new TemporalInstant(dayStart), timeZone, calendar, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0);
  var dayLengthNs = dayEnd.subtract(dayStart);

  if (timeRemainderNs.subtract(dayLengthNs).multiply(direction).geq(0)) {
    var _AddDuration = AddDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0, relativeTo);

    years = _AddDuration.years;
    months = _AddDuration.months;
    weeks = _AddDuration.weeks;
    days = _AddDuration.days;
    timeRemainderNs = RoundInstant(timeRemainderNs.subtract(dayLengthNs), increment, unit, roundingMode);

    var _BalanceDuration7 = BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs.toJSNumber(), 'hour');

    hours = _BalanceDuration7.hours;
    minutes = _BalanceDuration7.minutes;
    seconds = _BalanceDuration7.seconds;
    milliseconds = _BalanceDuration7.milliseconds;
    microseconds = _BalanceDuration7.microseconds;
    nanoseconds = _BalanceDuration7.nanoseconds;
  }

  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds
  };
}
function RoundDuration(yearsParam, monthsParam, weeksParam, daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, increment, unit, roundingMode) {
  var relativeToParam = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : undefined;
  var years = yearsParam;
  var months = monthsParam;
  var weeks = weeksParam;
  var days = daysParam;
  var hours = hoursParam;
  var minutes = minutesParam;
  var seconds = secondsParam;
  var milliseconds = millisecondsParam;
  var microseconds = microsecondsParam;
  var nanoseconds = bigInt(nanosecondsParam);
  var TemporalDuration = GetIntrinsic('%Temporal.Duration%');
  var calendar, zdtRelative; // A cast is used below because relativeTo will be either PlainDate or
  // undefined for the rest of this long method (after any ZDT=>PlainDate
  // conversion below), and TS isn't smart enough to know that the type has
  // changed. See https://github.com/microsoft/TypeScript/issues/27706.

  var relativeTo = relativeToParam;

  if (relativeTo) {
    if (IsTemporalZonedDateTime(relativeTo)) {
      zdtRelative = relativeTo;
      relativeTo = ToTemporalDate(relativeTo);
    } else if (!IsTemporalDate(relativeTo)) {
      throw new TypeError('starting point must be PlainDate or ZonedDateTime');
    }

    calendar = GetSlot(relativeTo, CALENDAR);
  } // First convert time units up to days, if rounding to days or higher units.
  // If rounding relative to a ZonedDateTime, then some days may not be 24h.


  var dayLengthNs;

  if (unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day') {
    nanoseconds = TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanosecondsParam, 0);
    var intermediate;

    if (zdtRelative) {
      intermediate = MoveRelativeZonedDateTime(zdtRelative, years, months, weeks, days);
    }

    var deltaDays;

    var _NanosecondsToDays3 = NanosecondsToDays(nanoseconds, intermediate);

    deltaDays = _NanosecondsToDays3.days;
    nanoseconds = _NanosecondsToDays3.nanoseconds;
    dayLengthNs = _NanosecondsToDays3.dayLengthNs;
    days += deltaDays;
    hours = minutes = seconds = milliseconds = microseconds = 0;
  }

  var total;

  switch (unit) {
    case 'year':
      {
        if (!calendar) throw new RangeError('A starting point is required for years rounding'); // convert months and weeks to days by calculating difference(
        // relativeTo + years, relativeTo + { years, months, weeks })

        var yearsDuration = new TemporalDuration(years);
        var dateAdd = calendar.dateAdd;
        var firstAddOptions = ObjectCreate$2(null);
        var yearsLater = CalendarDateAdd(calendar, relativeTo, yearsDuration, firstAddOptions, dateAdd);
        var yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
        var secondAddOptions = ObjectCreate$2(null);
        var yearsMonthsWeeksLater = CalendarDateAdd(calendar, relativeTo, yearsMonthsWeeks, secondAddOptions, dateAdd);
        var monthsWeeksInDays = DaysUntil(yearsLater, yearsMonthsWeeksLater);
        relativeTo = yearsLater;
        days += monthsWeeksInDays;
        var thirdAddOptions = ObjectCreate$2(null);
        var daysLater = CalendarDateAdd(calendar, relativeTo, {
          days: days
        }, thirdAddOptions, dateAdd);
        var untilOptions = ObjectCreate$2(null);
        untilOptions.largestUnit = 'year';
        var yearsPassed = CalendarDateUntil(calendar, relativeTo, daysLater, untilOptions).years;
        years += yearsPassed;
        var oldRelativeTo = relativeTo;
        var fourthAddOptions = ObjectCreate$2(null);
        relativeTo = CalendarDateAdd(calendar, relativeTo, {
          years: yearsPassed
        }, fourthAddOptions, dateAdd);
        var daysPassed = DaysUntil(oldRelativeTo, relativeTo);
        days -= daysPassed;
        var oneYear = new TemporalDuration(days < 0 ? -1 : 1);

        var _MoveRelativeDate14 = MoveRelativeDate(calendar, relativeTo, oneYear),
            oneYearDays = _MoveRelativeDate14.days; // Note that `nanoseconds` below (here and in similar code for months,
        // weeks, and days further below) isn't actually nanoseconds for the
        // full date range.  Instead, it's a BigInt representation of total
        // days multiplied by the number of nanoseconds in the last day of
        // the duration. This lets us do days-or-larger rounding using BigInt
        // math which reduces precision loss.


        oneYearDays = MathAbs(oneYearDays);
        var divisor = bigInt(oneYearDays).multiply(dayLengthNs);
        nanoseconds = divisor.multiply(years).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
        var rounded = RoundNumberToIncrement(nanoseconds, divisor.multiply(increment).toJSNumber(), roundingMode);
        total = nanoseconds.toJSNumber() / divisor.toJSNumber();
        years = rounded.divide(divisor).toJSNumber();
        nanoseconds = bigInt.zero;
        months = weeks = days = 0;
        break;
      }

    case 'month':
      {
        if (!calendar) throw new RangeError('A starting point is required for months rounding'); // convert weeks to days by calculating difference(relativeTo +
        //   { years, months }, relativeTo + { years, months, weeks })

        var yearsMonths = new TemporalDuration(years, months);
        var _dateAdd = calendar.dateAdd;

        var _firstAddOptions = ObjectCreate$2(null);

        var yearsMonthsLater = CalendarDateAdd(calendar, relativeTo, yearsMonths, _firstAddOptions, _dateAdd);

        var _yearsMonthsWeeks = new TemporalDuration(years, months, weeks);

        var _secondAddOptions = ObjectCreate$2(null);

        var _yearsMonthsWeeksLater = CalendarDateAdd(calendar, relativeTo, _yearsMonthsWeeks, _secondAddOptions, _dateAdd);

        var weeksInDays = DaysUntil(yearsMonthsLater, _yearsMonthsWeeksLater);
        relativeTo = yearsMonthsLater;
        days += weeksInDays; // Months may be different lengths of days depending on the calendar,
        // convert days to months in a loop as described above under 'years'.

        var sign = MathSign(days);
        var oneMonth = new TemporalDuration(0, days < 0 ? -1 : 1);
        var oneMonthDays;

        var _MoveRelativeDate15 = MoveRelativeDate(calendar, relativeTo, oneMonth);

        relativeTo = _MoveRelativeDate15.relativeTo;
        oneMonthDays = _MoveRelativeDate15.days;

        while (MathAbs(days) >= MathAbs(oneMonthDays)) {
          months += sign;
          days -= oneMonthDays;

          var _MoveRelativeDate16 = MoveRelativeDate(calendar, relativeTo, oneMonth);

          relativeTo = _MoveRelativeDate16.relativeTo;
          oneMonthDays = _MoveRelativeDate16.days;
        }

        oneMonthDays = MathAbs(oneMonthDays);

        var _divisor = bigInt(oneMonthDays).multiply(dayLengthNs);

        nanoseconds = _divisor.multiply(months).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);

        var _rounded = RoundNumberToIncrement(nanoseconds, _divisor.multiply(increment).toJSNumber(), roundingMode);

        total = nanoseconds.toJSNumber() / _divisor.toJSNumber();
        months = _rounded.divide(_divisor).toJSNumber();
        nanoseconds = bigInt.zero;
        weeks = days = 0;
        break;
      }

    case 'week':
      {
        if (!calendar) throw new RangeError('A starting point is required for weeks rounding'); // Weeks may be different lengths of days depending on the calendar,
        // convert days to weeks in a loop as described above under 'years'.

        var _sign2 = MathSign(days);

        var oneWeek = new TemporalDuration(0, 0, days < 0 ? -1 : 1);
        var oneWeekDays;

        var _MoveRelativeDate17 = MoveRelativeDate(calendar, relativeTo, oneWeek);

        relativeTo = _MoveRelativeDate17.relativeTo;
        oneWeekDays = _MoveRelativeDate17.days;

        while (MathAbs(days) >= MathAbs(oneWeekDays)) {
          weeks += _sign2;
          days -= oneWeekDays;

          var _MoveRelativeDate18 = MoveRelativeDate(calendar, relativeTo, oneWeek);

          relativeTo = _MoveRelativeDate18.relativeTo;
          oneWeekDays = _MoveRelativeDate18.days;
        }

        oneWeekDays = MathAbs(oneWeekDays);

        var _divisor2 = bigInt(oneWeekDays).multiply(dayLengthNs);

        nanoseconds = _divisor2.multiply(weeks).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);

        var _rounded2 = RoundNumberToIncrement(nanoseconds, _divisor2.multiply(increment).toJSNumber(), roundingMode);

        total = nanoseconds.toJSNumber() / _divisor2.toJSNumber();
        weeks = _rounded2.divide(_divisor2).toJSNumber();
        nanoseconds = bigInt.zero;
        days = 0;
        break;
      }

    case 'day':
      {
        var _divisor3 = bigInt(dayLengthNs);

        nanoseconds = _divisor3.multiply(days).plus(nanoseconds);

        var _rounded3 = RoundNumberToIncrement(nanoseconds, _divisor3.multiply(increment).toJSNumber(), roundingMode);

        total = nanoseconds.toJSNumber() / _divisor3.toJSNumber();
        days = _rounded3.divide(_divisor3).toJSNumber();
        nanoseconds = bigInt.zero;
        break;
      }

    case 'hour':
      {
        var _divisor4 = 3600e9;
        nanoseconds = bigInt(hours).multiply(3600e9).plus(bigInt(minutes).multiply(60e9)).plus(bigInt(seconds).multiply(1e9)).plus(bigInt(milliseconds).multiply(1e6)).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
        total = nanoseconds.toJSNumber() / _divisor4;

        var _rounded4 = RoundNumberToIncrement(nanoseconds, _divisor4 * increment, roundingMode);

        hours = _rounded4.divide(_divisor4).toJSNumber();
        nanoseconds = bigInt.zero;
        minutes = seconds = milliseconds = microseconds = 0;
        break;
      }

    case 'minute':
      {
        var _divisor5 = 60e9;
        nanoseconds = bigInt(minutes).multiply(60e9).plus(bigInt(seconds).multiply(1e9)).plus(bigInt(milliseconds).multiply(1e6)).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
        total = nanoseconds.toJSNumber() / _divisor5;

        var _rounded5 = RoundNumberToIncrement(nanoseconds, _divisor5 * increment, roundingMode);

        minutes = _rounded5.divide(_divisor5).toJSNumber();
        nanoseconds = bigInt.zero;
        seconds = milliseconds = microseconds = 0;
        break;
      }

    case 'second':
      {
        var _divisor6 = 1e9;
        nanoseconds = bigInt(seconds).multiply(1e9).plus(bigInt(milliseconds).multiply(1e6)).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
        total = nanoseconds.toJSNumber() / _divisor6;

        var _rounded6 = RoundNumberToIncrement(nanoseconds, _divisor6 * increment, roundingMode);

        seconds = _rounded6.divide(_divisor6).toJSNumber();
        nanoseconds = bigInt.zero;
        milliseconds = microseconds = 0;
        break;
      }

    case 'millisecond':
      {
        var _divisor7 = 1e6;
        nanoseconds = bigInt(milliseconds).multiply(1e6).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
        total = nanoseconds.toJSNumber() / _divisor7;

        var _rounded7 = RoundNumberToIncrement(nanoseconds, _divisor7 * increment, roundingMode);

        milliseconds = _rounded7.divide(_divisor7).toJSNumber();
        nanoseconds = bigInt.zero;
        microseconds = 0;
        break;
      }

    case 'microsecond':
      {
        var _divisor8 = 1e3;
        nanoseconds = bigInt(microseconds).multiply(1e3).plus(nanoseconds);
        total = nanoseconds.toJSNumber() / _divisor8;

        var _rounded8 = RoundNumberToIncrement(nanoseconds, _divisor8 * increment, roundingMode);

        microseconds = _rounded8.divide(_divisor8).toJSNumber();
        nanoseconds = bigInt.zero;
        break;
      }

    case 'nanosecond':
      {
        total = nanoseconds.toJSNumber();
        nanoseconds = RoundNumberToIncrement(bigInt(nanoseconds), increment, roundingMode);
        break;
      }
  }

  return {
    years: years,
    months: months,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
    nanoseconds: nanoseconds.toJSNumber(),
    total: total
  };
}
function CompareISODate(y1, m1, d1, y2, m2, d2) {
  for (var _i4 = 0, _arr4 = [[y1, y2], [m1, m2], [d1, d2]]; _i4 < _arr4.length; _i4++) {
    var _arr4$_i = _slicedToArray(_arr4[_i4], 2),
        x = _arr4$_i[0],
        y = _arr4$_i[1];

    if (x !== y) return ComparisonResult(x - y);
  }

  return 0;
}

function NonNegativeModulo(x, y) {
  var result = x % y;
  if (ObjectIs(result, -0)) return 0;
  if (result < 0) result += y;
  return result;
}

function ToBigInt(arg) {
  if (bigInt.isInstance(arg)) {
    return arg;
  }

  var prim = arg;

  if (_typeof(arg) === 'object') {
    var toPrimFn = arg[Symbol.toPrimitive];

    if (toPrimFn && typeof toPrimFn === 'function') {
      prim = ReflectApply$1(toPrimFn, arg, ['number']);
    }
  }

  switch (_typeof(prim)) {
    case 'undefined':
    case 'object':
    case 'number':
    case 'symbol':
    default:
      throw new TypeError("cannot convert ".concat(_typeof(arg), " to bigint"));

    case 'string':
      if (!prim.match(/^\s*(?:[+-]?\d+\s*)?$/)) {
        throw new SyntaxError('invalid BigInt syntax');
      }

    // eslint: no-fallthrough: false

    case 'bigint':
      try {
        return bigInt(prim);
      } catch (e) {
        if (e instanceof Error && e.message.startsWith('Invalid integer')) throw new SyntaxError(e.message);
        throw e;
      }

    case 'boolean':
      if (prim) {
        return bigInt(1);
      } else {
        return bigInt.zero;
      }

  }
} // Note: This method returns values with bogus nanoseconds based on the previous iteration's
// milliseconds. That way there is a guarantee that the full nanoseconds are always going to be
// increasing at least and that the microsecond and nanosecond fields are likely to be non-zero.

var SystemUTCEpochNanoSeconds = function () {
  var ns = Date.now() % 1e6;
  return function () {
    var ms = Date.now();
    var result = bigInt(ms).multiply(1e6).plus(ns);
    ns = ms % 1e6;
    return bigInt.min(NS_MAX, bigInt.max(NS_MIN, result));
  };
}();
function SystemTimeZone() {
  var fmt = new IntlDateTimeFormat$1('en-us');
  var TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
  return new TemporalTimeZone(ParseTemporalTimeZone(fmt.resolvedOptions().timeZone));
}
function ComparisonResult(value) {
  return value < 0 ? -1 : value > 0 ? 1 : value;
}
function GetOptionsObject(options) {
  if (options === undefined) return ObjectCreate$2(null);
  if (IsObject(options) && options !== null) return options;
  throw new TypeError("Options parameter must be an object, not ".concat(options === null ? 'null' : "".concat(_typeof(options))));
}
function CreateOnePropObject(propName, propValue) {
  var o = ObjectCreate$2(null);
  o[propName] = propValue;
  return o;
}

function GetOption(options, property, allowedValues, fallback) {
  var value = options[property];

  if (value !== undefined) {
    value = ToString(value);

    if (!allowedValues.includes(value)) {
      throw new RangeError("".concat(property, " must be one of ").concat(allowedValues.join(', '), ", not ").concat(value));
    }

    return value;
  }

  return fallback;
}

function GetNumberOption(options, property, minimum, maximum, fallback) {
  var valueRaw = options[property];
  if (valueRaw === undefined) return fallback;
  var value = ToNumber(valueRaw);

  if (NumberIsNaN(value) || value < minimum || value > maximum) {
    throw new RangeError("".concat(property, " must be between ").concat(minimum, " and ").concat(maximum, ", not ").concat(value));
  }

  return MathFloor(value);
}

var OFFSET = new RegExp("^".concat(offset.source, "$"));

function bisect(getState, leftParam, rightParam) {
  var lstateParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getState(leftParam);
  var rstateParam = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : getState(rightParam);
  var left = bigInt(leftParam);
  var right = bigInt(rightParam);
  var lstate = lstateParam;
  var rstate = rstateParam;

  while (right.minus(left).greater(1)) {
    var middle = left.plus(right).divide(2);
    var mstate = getState(middle);

    if (mstate === lstate) {
      left = middle;
      lstate = mstate;
    } else if (mstate === rstate) {
      right = middle;
      rstate = mstate;
    } else {
      throw new Error("invalid state in bisection ".concat(lstate, " - ").concat(mstate, " - ").concat(rstate));
    }
  }

  return right;
}

var nsPerTimeUnit = {
  hour: 3600e9,
  minute: 60e9,
  second: 1e9,
  millisecond: 1e6,
  microsecond: 1e3,
  nanosecond: 1
};

var DATE = Symbol('date');
var YM = Symbol('ym');
var MD = Symbol('md');
var TIME = Symbol('time');
var DATETIME = Symbol('datetime');
var ZONED = Symbol('zoneddatetime');
var INST = Symbol('instant');
var ORIGINAL = Symbol('original');
var TZ_RESOLVED = Symbol('timezone');
var TZ_GIVEN = Symbol('timezone-id-given');
var CAL_ID = Symbol('calendar-id');
var LOCALE = Symbol('locale');
var OPTIONS = Symbol('options');

var descriptor = function descriptor(value) {
  return {
    value: value,
    enumerable: true,
    writable: false,
    configurable: true
  };
};

var IntlDateTimeFormat = globalThis.Intl.DateTimeFormat;
var ObjectAssign$1 = Object.assign;
var ObjectHasOwnProperty = Object.prototype.hasOwnProperty;
var ReflectApply = Reflect.apply; // Construction of built-in Intl.DateTimeFormat objects is sloooooow,
// so we'll only create those instances when we need them.
// See https://bugs.chromium.org/p/v8/issues/detail?id=6528

function getPropLazy(obj, prop) {
  var val = obj[prop];

  if (typeof val === 'function') {
    // If we get here, `val` is an "amender function". It will take the user's
    // options and transform them into suitable options to be passed into the
    // built-in (non-polyfill) Intl.DateTimeFormat constructor. These options
    // will vary depending on the Temporal type, so that's why we store separate
    // formatters in separate props on the polyfill's DateTimeFormat instances.
    // The efficiency happens because we don't create an (expensive) formatter
    // until the user calls toLocaleString for that Temporal type.
    val = new IntlDateTimeFormat(obj[LOCALE], val(obj[OPTIONS])); // TODO: can this be typed more cleanly?

    obj[prop] = val;
  }

  return val;
} // Similarly, lazy-init TimeZone instances.


function getResolvedTimeZoneLazy(obj) {
  var val = obj[TZ_RESOLVED];

  if (typeof val === 'string') {
    val = ToTemporalTimeZone(val);
    obj[TZ_RESOLVED] = val;
  }

  return val;
}

function DateTimeFormatImpl() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!(this instanceof DateTimeFormatImpl)) {
    return new DateTimeFormatImpl(locale, optionsParam);
  }

  var hasOptions = typeof optionsParam !== 'undefined';
  var options = hasOptions ? ObjectAssign$1({}, optionsParam) : {}; // TODO: remove type assertion after Temporal types land in TS lib types

  var original = new IntlDateTimeFormat(locale, options);
  var ro = original.resolvedOptions(); // DateTimeFormat instances are very expensive to create. Therefore, they will
  // be lazily created only when needed, using the locale and options provided.
  // But it's possible for callers to mutate those inputs before lazy creation
  // happens. For this reason, we clone the inputs instead of caching the
  // original objects. To avoid the complexity of deep cloning any inputs that
  // are themselves objects (e.g. the locales array, or options property values
  // that will be coerced to strings), we rely on `resolvedOptions()` to do the
  // coercion and cloning for us. Unfortunately, we can't just use the resolved
  // options as-is because our options-amending logic adds additional fields if
  // the user doesn't supply any unit fields like year, month, day, hour, etc.
  // Therefore, we limit the properties in the clone to properties that were
  // present in the original input.

  if (hasOptions) {
    var clonedResolved = ObjectAssign$1({}, ro);

    for (var prop in clonedResolved) {
      if (!ReflectApply(ObjectHasOwnProperty, options, [prop])) {
        delete clonedResolved[prop];
      }
    }

    this[OPTIONS] = clonedResolved;
  } else {
    this[OPTIONS] = options;
  }

  this[TZ_GIVEN] = options.timeZone ? options.timeZone : null;
  this[LOCALE] = ro.locale;
  this[ORIGINAL] = original;
  this[TZ_RESOLVED] = ro.timeZone;
  this[CAL_ID] = ro.calendar;
  this[DATE] = dateAmend;
  this[YM] = yearMonthAmend;
  this[MD] = monthDayAmend;
  this[TIME] = timeAmend;
  this[DATETIME] = datetimeAmend;
  this[ZONED] = zonedDateTimeAmend;
  this[INST] = instantAmend;
  return undefined; // TODO: I couldn't satisfy TS without adding this. Is there another way?
}

Object.defineProperty(DateTimeFormatImpl, 'name', {
  writable: true,
  value: 'DateTimeFormat'
});
var DateTimeFormat = DateTimeFormatImpl;

DateTimeFormatImpl.supportedLocalesOf = function (locales, options) {
  return IntlDateTimeFormat.supportedLocalesOf(locales, options);
};

var properties = {
  resolvedOptions: descriptor(resolvedOptions),
  format: descriptor(format),
  formatRange: descriptor(formatRange)
};

if ('formatToParts' in IntlDateTimeFormat.prototype) {
  properties.formatToParts = descriptor(formatToParts);
}

if ('formatRangeToParts' in IntlDateTimeFormat.prototype) {
  properties.formatRangeToParts = descriptor(formatRangeToParts);
}

DateTimeFormatImpl.prototype = Object.create(IntlDateTimeFormat.prototype, properties);

function resolvedOptions() {
  return this[ORIGINAL].resolvedOptions();
}

function adjustFormatterTimeZone(formatter, timeZone) {
  if (!timeZone) return formatter;
  var options = formatter.resolvedOptions();
  if (options.timeZone === timeZone) return formatter; // Existing Intl isn't typed to accept Temporal-specific options, but will not
  // break at runtime if we pass them. Also, the lib types for resolved options
  // are less restrictive than the types for options. For example, `weekday` is
  // `'long' | 'short' | 'narrow'` in options but `string` in resolved options.
  // TODO: investigate why, and file an issue against TS if it's a bug.

  return new IntlDateTimeFormat(options.locale, _objectSpread2(_objectSpread2({}, options), {}, {
    timeZone: timeZone
  }));
} // TODO: investigate why there's a rest parameter here. Does this function really need to accept extra params?
// And if so, why doesn't formatRange also accept extra params?


function format(datetime) {
  var _this$ORIGINAL;

  var _extractOverrides = extractOverrides(datetime, this),
      instant = _extractOverrides.instant,
      formatter = _extractOverrides.formatter,
      timeZone = _extractOverrides.timeZone;

  if (instant && formatter) {
    formatter = adjustFormatterTimeZone(formatter, timeZone);
    return formatter.format(instant.epochMilliseconds);
  }

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return (_this$ORIGINAL = this[ORIGINAL]).format.apply(_this$ORIGINAL, [datetime].concat(rest));
}

function formatToParts(datetime) {
  var _this$ORIGINAL2;

  var _extractOverrides2 = extractOverrides(datetime, this),
      instant = _extractOverrides2.instant,
      formatter = _extractOverrides2.formatter,
      timeZone = _extractOverrides2.timeZone;

  if (instant && formatter) {
    formatter = adjustFormatterTimeZone(formatter, timeZone);
    return formatter.formatToParts(instant.epochMilliseconds);
  }

  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  return (_this$ORIGINAL2 = this[ORIGINAL]).formatToParts.apply(_this$ORIGINAL2, [datetime].concat(rest));
}

function formatRange(a, b) {
  if (isTemporalObject(a) || isTemporalObject(b)) {
    if (!sameTemporalType(a, b)) {
      throw new TypeError('Intl.DateTimeFormat.formatRange accepts two values of the same type');
    }

    var _extractOverrides3 = extractOverrides(a, this),
        aa = _extractOverrides3.instant,
        aformatter = _extractOverrides3.formatter,
        atz = _extractOverrides3.timeZone;

    var _extractOverrides4 = extractOverrides(b, this),
        bb = _extractOverrides4.instant,
        bformatter = _extractOverrides4.formatter,
        btz = _extractOverrides4.timeZone;

    if (atz && btz && atz !== btz) {
      throw new RangeError('cannot format range between different time zones');
    }

    if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
      var formatter = adjustFormatterTimeZone(aformatter, atz); // TODO: Remove type assertion after this method lands in TS lib types

      return formatter.formatRange(aa.epochMilliseconds, bb.epochMilliseconds);
    }
  } // TODO: Remove type assertion after this method lands in TS lib types


  return this[ORIGINAL].formatRange(a, b);
}

function formatRangeToParts(a, b) {
  if (isTemporalObject(a) || isTemporalObject(b)) {
    if (!sameTemporalType(a, b)) {
      throw new TypeError('Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type');
    }

    var _extractOverrides5 = extractOverrides(a, this),
        aa = _extractOverrides5.instant,
        aformatter = _extractOverrides5.formatter,
        atz = _extractOverrides5.timeZone;

    var _extractOverrides6 = extractOverrides(b, this),
        bb = _extractOverrides6.instant,
        bformatter = _extractOverrides6.formatter,
        btz = _extractOverrides6.timeZone;

    if (atz && btz && atz !== btz) {
      throw new RangeError('cannot format range between different time zones');
    }

    if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
      var formatter = adjustFormatterTimeZone(aformatter, atz); // TODO: Remove type assertion after this method lands in TS lib types

      return formatter.formatRangeToParts(aa.epochMilliseconds, bb.epochMilliseconds);
    }
  } // TODO: Remove type assertion after this method lands in TS lib types


  return this[ORIGINAL].formatRangeToParts(a, b);
}

function amend() {
  var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var amended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = ObjectAssign$1({}, optionsParam);

  for (var _i = 0, _arr = ['year', 'month', 'day', 'hour', 'minute', 'second', 'weekday', 'dayPeriod', 'timeZoneName', 'dateStyle', 'timeStyle']; _i < _arr.length; _i++) {
    var opt = _arr[_i];
    options[opt] = opt in amended ? amended[opt] : options[opt];
    if (options[opt] === false || options[opt] === undefined) delete options[opt];
  }

  return options;
}

function timeAmend(optionsParam) {
  var options = amend(optionsParam, {
    year: false,
    month: false,
    day: false,
    weekday: false,
    timeZoneName: false,
    dateStyle: false
  });

  if (!hasTimeOptions(options)) {
    options = ObjectAssign$1({}, options, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  }

  return options;
}

function yearMonthAmend(optionsParam) {
  var options = amend(optionsParam, {
    day: false,
    hour: false,
    minute: false,
    second: false,
    weekday: false,
    dayPeriod: false,
    timeZoneName: false,
    dateStyle: false,
    timeStyle: false
  });

  if (!('year' in options || 'month' in options)) {
    options = ObjectAssign$1(options, {
      year: 'numeric',
      month: 'numeric'
    });
  }

  return options;
}

function monthDayAmend(optionsParam) {
  var options = amend(optionsParam, {
    year: false,
    hour: false,
    minute: false,
    second: false,
    weekday: false,
    dayPeriod: false,
    timeZoneName: false,
    dateStyle: false,
    timeStyle: false
  });

  if (!('month' in options || 'day' in options)) {
    options = ObjectAssign$1({}, options, {
      month: 'numeric',
      day: 'numeric'
    });
  }

  return options;
}

function dateAmend(optionsParam) {
  var options = amend(optionsParam, {
    hour: false,
    minute: false,
    second: false,
    dayPeriod: false,
    timeZoneName: false,
    timeStyle: false
  });

  if (!hasDateOptions(options)) {
    options = ObjectAssign$1({}, options, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
  }

  return options;
}

function datetimeAmend(optionsParam) {
  var options = amend(optionsParam, {
    timeZoneName: false
  });

  if (!hasTimeOptions(options) && !hasDateOptions(options)) {
    options = ObjectAssign$1({}, options, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  }

  return options;
}

function zonedDateTimeAmend(optionsParam) {
  var options = optionsParam;

  if (!hasTimeOptions(options) && !hasDateOptions(options)) {
    options = ObjectAssign$1({}, options, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    if (options.timeZoneName === undefined) options.timeZoneName = 'short';
  }

  return options;
}

function instantAmend(optionsParam) {
  var options = optionsParam;

  if (!hasTimeOptions(options) && !hasDateOptions(options)) {
    options = ObjectAssign$1({}, options, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  }

  return options;
}

function hasDateOptions(options) {
  return 'year' in options || 'month' in options || 'day' in options || 'weekday' in options || 'dateStyle' in options;
}

function hasTimeOptions(options) {
  return 'hour' in options || 'minute' in options || 'second' in options || 'timeStyle' in options || 'dayPeriod' in options;
}

function isTemporalObject(obj) {
  return IsTemporalDate(obj) || IsTemporalTime(obj) || IsTemporalDateTime(obj) || IsTemporalZonedDateTime(obj) || IsTemporalYearMonth(obj) || IsTemporalMonthDay(obj) || IsTemporalInstant(obj);
}

function sameTemporalType(x, y) {
  if (!isTemporalObject(x) || !isTemporalObject(y)) return false;
  if (IsTemporalTime(x) && !IsTemporalTime(y)) return false;
  if (IsTemporalDate(x) && !IsTemporalDate(y)) return false;
  if (IsTemporalDateTime(x) && !IsTemporalDateTime(y)) return false;
  if (IsTemporalZonedDateTime(x) && !IsTemporalZonedDateTime(y)) return false;
  if (IsTemporalYearMonth(x) && !IsTemporalYearMonth(y)) return false;
  if (IsTemporalMonthDay(x) && !IsTemporalMonthDay(y)) return false;
  if (IsTemporalInstant(x) && !IsTemporalInstant(y)) return false;
  return true;
}

function extractOverrides(temporalObj, main) {
  var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');

  if (IsTemporalTime(temporalObj)) {
    var hour = GetSlot(temporalObj, ISO_HOUR);
    var minute = GetSlot(temporalObj, ISO_MINUTE);
    var second = GetSlot(temporalObj, ISO_SECOND);
    var millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
    var microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
    var nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
    var datetime = new DateTime(1970, 1, 1, hour, minute, second, millisecond, microsecond, nanosecond, main[CAL_ID]);
    return {
      instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), datetime, 'compatible'),
      formatter: getPropLazy(main, TIME)
    };
  }

  if (IsTemporalYearMonth(temporalObj)) {
    var isoYear = GetSlot(temporalObj, ISO_YEAR);
    var isoMonth = GetSlot(temporalObj, ISO_MONTH);
    var referenceISODay = GetSlot(temporalObj, ISO_DAY);
    var calendar = ToString(GetSlot(temporalObj, CALENDAR));

    if (calendar !== main[CAL_ID]) {
      throw new RangeError("cannot format PlainYearMonth with calendar ".concat(calendar, " in locale with calendar ").concat(main[CAL_ID]));
    }

    var _datetime = new DateTime(isoYear, isoMonth, referenceISODay, 12, 0, 0, 0, 0, 0, calendar);

    return {
      instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), _datetime, 'compatible'),
      formatter: getPropLazy(main, YM)
    };
  }

  if (IsTemporalMonthDay(temporalObj)) {
    var referenceISOYear = GetSlot(temporalObj, ISO_YEAR);

    var _isoMonth = GetSlot(temporalObj, ISO_MONTH);

    var isoDay = GetSlot(temporalObj, ISO_DAY);

    var _calendar = ToString(GetSlot(temporalObj, CALENDAR));

    if (_calendar !== main[CAL_ID]) {
      throw new RangeError("cannot format PlainMonthDay with calendar ".concat(_calendar, " in locale with calendar ").concat(main[CAL_ID]));
    }

    var _datetime2 = new DateTime(referenceISOYear, _isoMonth, isoDay, 12, 0, 0, 0, 0, 0, _calendar);

    return {
      instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), _datetime2, 'compatible'),
      formatter: getPropLazy(main, MD)
    };
  }

  if (IsTemporalDate(temporalObj)) {
    var _isoYear = GetSlot(temporalObj, ISO_YEAR);

    var _isoMonth2 = GetSlot(temporalObj, ISO_MONTH);

    var _isoDay = GetSlot(temporalObj, ISO_DAY);

    var _calendar2 = ToString(GetSlot(temporalObj, CALENDAR));

    if (_calendar2 !== 'iso8601' && _calendar2 !== main[CAL_ID]) {
      throw new RangeError("cannot format PlainDate with calendar ".concat(_calendar2, " in locale with calendar ").concat(main[CAL_ID]));
    }

    var _datetime3 = new DateTime(_isoYear, _isoMonth2, _isoDay, 12, 0, 0, 0, 0, 0, main[CAL_ID]);

    return {
      instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), _datetime3, 'compatible'),
      formatter: getPropLazy(main, DATE)
    };
  }

  if (IsTemporalDateTime(temporalObj)) {
    var _isoYear2 = GetSlot(temporalObj, ISO_YEAR);

    var _isoMonth3 = GetSlot(temporalObj, ISO_MONTH);

    var _isoDay2 = GetSlot(temporalObj, ISO_DAY);

    var _hour = GetSlot(temporalObj, ISO_HOUR);

    var _minute = GetSlot(temporalObj, ISO_MINUTE);

    var _second = GetSlot(temporalObj, ISO_SECOND);

    var _millisecond = GetSlot(temporalObj, ISO_MILLISECOND);

    var _microsecond = GetSlot(temporalObj, ISO_MICROSECOND);

    var _nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);

    var _calendar3 = ToString(GetSlot(temporalObj, CALENDAR));

    if (_calendar3 !== 'iso8601' && _calendar3 !== main[CAL_ID]) {
      throw new RangeError("cannot format PlainDateTime with calendar ".concat(_calendar3, " in locale with calendar ").concat(main[CAL_ID]));
    }

    var _datetime4 = temporalObj;

    if (_calendar3 === 'iso8601') {
      _datetime4 = new DateTime(_isoYear2, _isoMonth3, _isoDay2, _hour, _minute, _second, _millisecond, _microsecond, _nanosecond, main[CAL_ID]);
    }

    return {
      instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), _datetime4, 'compatible'),
      formatter: getPropLazy(main, DATETIME)
    };
  }

  if (IsTemporalZonedDateTime(temporalObj)) {
    var _calendar4 = ToString(GetSlot(temporalObj, CALENDAR));

    if (_calendar4 !== 'iso8601' && _calendar4 !== main[CAL_ID]) {
      throw new RangeError("cannot format ZonedDateTime with calendar ".concat(_calendar4, " in locale with calendar ").concat(main[CAL_ID]));
    }

    var timeZone = GetSlot(temporalObj, TIME_ZONE);
    var objTimeZone = ToString(timeZone);

    if (main[TZ_GIVEN] && main[TZ_GIVEN] !== objTimeZone) {
      throw new RangeError("timeZone option ".concat(main[TZ_GIVEN], " doesn't match actual time zone ").concat(objTimeZone));
    }

    return {
      instant: GetSlot(temporalObj, INSTANT),
      formatter: getPropLazy(main, ZONED),
      timeZone: objTimeZone
    };
  }

  if (IsTemporalInstant(temporalObj)) {
    return {
      instant: temporalObj,
      formatter: getPropLazy(main, INST)
    };
  }

  return {};
}

var intl = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DateTimeFormat: DateTimeFormat
});

var DISALLOWED_UNITS$3 = ['year', 'month', 'week', 'day'];
var MAX_DIFFERENCE_INCREMENTS = {
  hour: 24,
  minute: 60,
  second: 60,
  millisecond: 1000,
  microsecond: 1000,
  nanosecond: 1000
};
var Instant = /*#__PURE__*/function () {
  function Instant(epochNanoseconds) {
    _classCallCheck(this, Instant);

    // Note: if the argument is not passed, ToBigInt(undefined) will throw. This check exists only
    //       to improve the error message.
    if (arguments.length < 1) {
      throw new TypeError('missing argument: epochNanoseconds is required');
    }

    var ns = ToBigInt(epochNanoseconds);
    ValidateEpochNanoseconds(ns);
    CreateSlots(this);
    SetSlot(this, EPOCHNANOSECONDS, ns);

    {
      var repr = TemporalInstantToString(this, undefined, 'auto');
      Object.defineProperty(this, '_repr_', {
        value: "".concat(this[Symbol.toStringTag], " <").concat(repr, ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }

  _createClass(Instant, [{
    key: "epochSeconds",
    get: function get() {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var value = GetSlot(this, EPOCHNANOSECONDS);
      return +value.divide(1e9);
    }
  }, {
    key: "epochMilliseconds",
    get: function get() {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var value = bigInt(GetSlot(this, EPOCHNANOSECONDS));
      return +value.divide(1e6);
    }
  }, {
    key: "epochMicroseconds",
    get: function get() {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var value = GetSlot(this, EPOCHNANOSECONDS);
      return bigIntIfAvailable$2(value.divide(1e3));
    }
  }, {
    key: "epochNanoseconds",
    get: function get() {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      return bigIntIfAvailable$2(GetSlot(this, EPOCHNANOSECONDS));
    }
  }, {
    key: "add",
    value: function add(temporalDurationLike) {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');

      var _ES$ToLimitedTemporal = ToLimitedTemporalDuration(temporalDurationLike, ['years', 'months', 'weeks', 'days']),
          hours = _ES$ToLimitedTemporal.hours,
          minutes = _ES$ToLimitedTemporal.minutes,
          seconds = _ES$ToLimitedTemporal.seconds,
          milliseconds = _ES$ToLimitedTemporal.milliseconds,
          microseconds = _ES$ToLimitedTemporal.microseconds,
          nanoseconds = _ES$ToLimitedTemporal.nanoseconds;

      var ns = AddInstant(GetSlot(this, EPOCHNANOSECONDS), hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      return new Instant(ns);
    }
  }, {
    key: "subtract",
    value: function subtract(temporalDurationLike) {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');

      var _ES$ToLimitedTemporal2 = ToLimitedTemporalDuration(temporalDurationLike, ['years', 'months', 'weeks', 'days']),
          hours = _ES$ToLimitedTemporal2.hours,
          minutes = _ES$ToLimitedTemporal2.minutes,
          seconds = _ES$ToLimitedTemporal2.seconds,
          milliseconds = _ES$ToLimitedTemporal2.milliseconds,
          microseconds = _ES$ToLimitedTemporal2.microseconds,
          nanoseconds = _ES$ToLimitedTemporal2.nanoseconds;

      var ns = AddInstant(GetSlot(this, EPOCHNANOSECONDS), -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
      return new Instant(ns);
    }
  }, {
    key: "until",
    value: function until(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalInstant(otherParam);
      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$3);
      var defaultLargestUnit = LargerOfTwoTemporalUnits('second', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$3, defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, MAX_DIFFERENCE_INCREMENTS[smallestUnit], false);
      var onens = GetSlot(this, EPOCHNANOSECONDS);
      var twons = GetSlot(other, EPOCHNANOSECONDS);

      var _ES$DifferenceInstant = DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode),
          seconds = _ES$DifferenceInstant.seconds,
          milliseconds = _ES$DifferenceInstant.milliseconds,
          microseconds = _ES$DifferenceInstant.microseconds,
          nanoseconds = _ES$DifferenceInstant.nanoseconds;

      var hours, minutes;

      var _ES$BalanceDuration = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      hours = _ES$BalanceDuration.hours;
      minutes = _ES$BalanceDuration.minutes;
      seconds = _ES$BalanceDuration.seconds;
      milliseconds = _ES$BalanceDuration.milliseconds;
      microseconds = _ES$BalanceDuration.microseconds;
      nanoseconds = _ES$BalanceDuration.nanoseconds;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "since",
    value: function since(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalInstant(otherParam);
      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$3);
      var defaultLargestUnit = LargerOfTwoTemporalUnits('second', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$3, defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, MAX_DIFFERENCE_INCREMENTS[smallestUnit], false);
      var onens = GetSlot(other, EPOCHNANOSECONDS);
      var twons = GetSlot(this, EPOCHNANOSECONDS);

      var _ES$DifferenceInstant2 = DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode),
          seconds = _ES$DifferenceInstant2.seconds,
          milliseconds = _ES$DifferenceInstant2.milliseconds,
          microseconds = _ES$DifferenceInstant2.microseconds,
          nanoseconds = _ES$DifferenceInstant2.nanoseconds;

      var hours, minutes;

      var _ES$BalanceDuration2 = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      hours = _ES$BalanceDuration2.hours;
      minutes = _ES$BalanceDuration2.minutes;
      seconds = _ES$BalanceDuration2.seconds;
      milliseconds = _ES$BalanceDuration2.milliseconds;
      microseconds = _ES$BalanceDuration2.microseconds;
      nanoseconds = _ES$BalanceDuration2.nanoseconds;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "round",
    value: function round(optionsParam) {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      if (optionsParam === undefined) throw new TypeError('options parameter is required');
      var options = typeof optionsParam === 'string' ? CreateOnePropObject('smallestUnit', optionsParam) : GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, undefined, DISALLOWED_UNITS$3);
      if (smallestUnit === undefined) throw new RangeError('smallestUnit is required');
      var roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
      var maximumIncrements = {
        hour: 24,
        minute: 1440,
        second: 86400,
        millisecond: 86400e3,
        microsecond: 86400e6,
        nanosecond: 86400e9
      };
      var roundingIncrement = ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], true);
      var ns = GetSlot(this, EPOCHNANOSECONDS);
      var roundedNs = RoundInstant(ns, roundingIncrement, smallestUnit, roundingMode);
      return new Instant(roundedNs);
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalInstant(otherParam);
      var one = GetSlot(this, EPOCHNANOSECONDS);
      var two = GetSlot(other, EPOCHNANOSECONDS);
      return bigInt(one).equals(two);
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);
      var timeZone = options.timeZone;
      if (timeZone !== undefined) timeZone = ToTemporalTimeZone(timeZone); // Although TS doesn't acknowledge it, below here `timeZone` is a Temporal.TimeZoneProtocol

      var _ES$ToSecondsStringPr = ToSecondsStringPrecision(options),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;

      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var ns = GetSlot(this, EPOCHNANOSECONDS);
      var roundedNs = RoundInstant(ns, increment, unit, roundingMode);
      var roundedInstant = new Instant(roundedNs);
      return TemporalInstantToString(roundedInstant, timeZone, precision);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      return TemporalInstantToString(this, undefined, 'auto');
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() or equals() to compare Temporal.Instant');
    }
  }, {
    key: "toZonedDateTime",
    value: function toZonedDateTime(item) {
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');

      if (!IsObject(item)) {
        throw new TypeError('invalid argument in toZonedDateTime');
      }

      var calendarLike = item.calendar;

      if (calendarLike === undefined) {
        throw new TypeError('missing calendar property in toZonedDateTime');
      }

      var calendar = ToTemporalCalendar(calendarLike);
      var temporalTimeZoneLike = item.timeZone;

      if (temporalTimeZoneLike === undefined) {
        throw new TypeError('missing timeZone property in toZonedDateTime');
      }

      var timeZone = ToTemporalTimeZone(temporalTimeZoneLike);
      return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }, {
    key: "toZonedDateTimeISO",
    value: function toZonedDateTimeISO(itemParam) {
      var item = itemParam;
      if (!IsTemporalInstant(this)) throw new TypeError('invalid receiver');

      if (IsObject(item)) {
        var timeZoneProperty = item.timeZone;

        if (timeZoneProperty !== undefined) {
          item = timeZoneProperty;
        }
      }

      var timeZone = ToTemporalTimeZone(item);
      var calendar = GetISO8601Calendar();
      return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }], [{
    key: "fromEpochSeconds",
    value: function fromEpochSeconds(epochSecondsParam) {
      var epochSeconds = ToNumber(epochSecondsParam);
      var epochNanoseconds = bigInt(epochSeconds).multiply(1e9);
      ValidateEpochNanoseconds(epochNanoseconds);
      return new Instant(epochNanoseconds);
    }
  }, {
    key: "fromEpochMilliseconds",
    value: function fromEpochMilliseconds(epochMillisecondsParam) {
      var epochMilliseconds = ToNumber(epochMillisecondsParam);
      var epochNanoseconds = bigInt(epochMilliseconds).multiply(1e6);
      ValidateEpochNanoseconds(epochNanoseconds);
      return new Instant(epochNanoseconds);
    }
  }, {
    key: "fromEpochMicroseconds",
    value: function fromEpochMicroseconds(epochMicrosecondsParam) {
      var epochMicroseconds = ToBigInt(epochMicrosecondsParam);
      var epochNanoseconds = epochMicroseconds.multiply(1e3);
      ValidateEpochNanoseconds(epochNanoseconds);
      return new Instant(epochNanoseconds);
    }
  }, {
    key: "fromEpochNanoseconds",
    value: function fromEpochNanoseconds(epochNanosecondsParam) {
      var epochNanoseconds = ToBigInt(epochNanosecondsParam);
      ValidateEpochNanoseconds(epochNanoseconds);
      return new Instant(epochNanoseconds);
    }
  }, {
    key: "from",
    value: function from(item) {
      if (IsTemporalInstant(item)) {
        return new Instant(GetSlot(item, EPOCHNANOSECONDS));
      }

      return ToTemporalInstant(item);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var one = ToTemporalInstant(oneParam);
      var two = ToTemporalInstant(twoParam);
      var oneNs = GetSlot(one, EPOCHNANOSECONDS);
      var twoNs = GetSlot(two, EPOCHNANOSECONDS);
      if (bigInt(oneNs).lesser(twoNs)) return -1;
      if (bigInt(oneNs).greater(twoNs)) return 1;
      return 0;
    }
  }]);

  return Instant;
}();
MakeIntrinsicClass(Instant, 'Temporal.Instant');

function bigIntIfAvailable$2(wrapper) {
  return typeof globalThis.BigInt === 'undefined' ? wrapper : wrapper.value;
}

var DISALLOWED_UNITS$2 = ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'];
var PlainDate = /*#__PURE__*/function () {
  function PlainDate(isoYearParam, isoMonthParam, isoDayParam) {
    var calendarParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : GetISO8601Calendar();

    _classCallCheck(this, PlainDate);

    var isoYear = ToIntegerThrowOnInfinity(isoYearParam);
    var isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
    var isoDay = ToIntegerThrowOnInfinity(isoDayParam);
    var calendar = ToTemporalCalendar(calendarParam); // Note: if the arguments are not passed,
    //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
    //       be rejected by RejectISODate in CreateTemporalDateSlots. This check
    //       exists only to improve the error message.

    if (arguments.length < 3) {
      throw new RangeError('missing argument: isoYear, isoMonth and isoDay are required');
    }

    CreateTemporalDateSlots(this, isoYear, isoMonth, isoDay, calendar);
  }

  _createClass(PlainDate, [{
    key: "calendar",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, CALENDAR);
    }
  }, {
    key: "era",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarEra(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "eraYear",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarEraYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "year",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "month",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarMonth(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "monthCode",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "day",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarDay(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "dayOfWeek",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "dayOfYear",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarDayOfYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "weekOfYear",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInWeek",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInYear",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "monthsInYear",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "inLeapYear",
    get: function get() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "with",
    value: function _with(temporalDateLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');

      if (!IsObject(temporalDateLike)) {
        throw new TypeError('invalid argument');
      }

      RejectObjectWithCalendarOrTimeZone(temporalDateLike);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
      var props = ToPartialRecord(temporalDateLike, fieldNames);

      if (!props) {
        throw new TypeError('invalid date-like');
      }

      var fields = ToTemporalDateFields(this, fieldNames);
      fields = CalendarMergeFields(calendar, fields, props);
      fields = ToTemporalDateFields(fields, fieldNames);
      var options = GetOptionsObject(optionsParam);
      return DateFromFields(calendar, fields, options);
    }
  }, {
    key: "withCalendar",
    value: function withCalendar(calendarParam) {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var calendar = ToTemporalCalendar(calendarParam);
      return new PlainDate(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
    }
  }, {
    key: "add",
    value: function add(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var duration = ToTemporalDuration(temporalDurationLike);
      var options = GetOptionsObject(optionsParam);
      return CalendarDateAdd(GetSlot(this, CALENDAR), this, duration, options);
    }
  }, {
    key: "subtract",
    value: function subtract(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var duration = CreateNegatedTemporalDuration(ToTemporalDuration(temporalDurationLike));
      var options = GetOptionsObject(optionsParam);
      return CalendarDateAdd(GetSlot(this, CALENDAR), this, duration, options);
    }
  }, {
    key: "until",
    value: function until(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalDate(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarId = ToString(calendar);
      var otherCalendarId = ToString(otherCalendar);

      if (calendarId !== otherCalendarId) {
        throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'day', DISALLOWED_UNITS$2);
      var defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$2, defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);

      var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
        largestUnit: largestUnit
      });

      var result = CalendarDateUntil(calendar, this, other, untilOptions);
      if (smallestUnit === 'day' && roundingIncrement === 1) return result;
      var years = result.years,
          months = result.months,
          weeks = result.weeks,
          days = result.days;

      var _ES$RoundDuration = RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, this);

      years = _ES$RoundDuration.years;
      months = _ES$RoundDuration.months;
      weeks = _ES$RoundDuration.weeks;
      days = _ES$RoundDuration.days;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    }
  }, {
    key: "since",
    value: function since(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalDate(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarId = ToString(calendar);
      var otherCalendarId = ToString(otherCalendar);

      if (calendarId !== otherCalendarId) {
        throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'day', DISALLOWED_UNITS$2);
      var defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$2, defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);

      var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
        largestUnit: largestUnit
      });

      var _ES$CalendarDateUntil = CalendarDateUntil(calendar, this, other, untilOptions),
          years = _ES$CalendarDateUntil.years,
          months = _ES$CalendarDateUntil.months,
          weeks = _ES$CalendarDateUntil.weeks,
          days = _ES$CalendarDateUntil.days;

      var Duration = GetIntrinsic('%Temporal.Duration%');

      if (smallestUnit === 'day' && roundingIncrement === 1) {
        return new Duration(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
      }

      var _ES$RoundDuration2 = RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode), this);

      years = _ES$RoundDuration2.years;
      months = _ES$RoundDuration2.months;
      weeks = _ES$RoundDuration2.weeks;
      days = _ES$RoundDuration2.days;
      return new Duration(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalDate(otherParam);

      for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
        var slot = _arr[_i];
        var val1 = GetSlot(this, slot);
        var val2 = GetSlot(other, slot);
        if (val1 !== val2) return false;
      }

      return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);
      var showCalendar = ToShowCalendarOption(options);
      return TemporalDateToString(this, showCalendar);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return TemporalDateToString(this);
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() or equals() to compare Temporal.PlainDate');
    }
  }, {
    key: "toPlainDateTime",
    value: function toPlainDateTime() {
      var temporalTimeParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var year = GetSlot(this, ISO_YEAR);
      var month = GetSlot(this, ISO_MONTH);
      var day = GetSlot(this, ISO_DAY);
      var calendar = GetSlot(this, CALENDAR);
      if (temporalTimeParam === undefined) return CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar);
      var temporalTime = ToTemporalTime(temporalTimeParam);
      var hour = GetSlot(temporalTime, ISO_HOUR);
      var minute = GetSlot(temporalTime, ISO_MINUTE);
      var second = GetSlot(temporalTime, ISO_SECOND);
      var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
      var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
      var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "toZonedDateTime",
    value: function toZonedDateTime(item) {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var timeZone, temporalTime;

      if (IsObject(item)) {
        var timeZoneLike = item.timeZone;

        if (timeZoneLike === undefined) {
          // The cast below is needed because it's possible here for
          // `timeZoneLike` here to be `{ plainTime: Temporal.PlainTimeLike }`,
          // not a TimeZoneProtocol.
          // TODO: should we check for that shape to improve on the (bad) error
          // message that the caller will get from ToTemporalTimeZone?
          timeZone = ToTemporalTimeZone(item);
        } else {
          timeZone = ToTemporalTimeZone(timeZoneLike);
          temporalTime = item.plainTime;
        }
      } else {
        timeZone = ToTemporalTimeZone(item);
      }

      var year = GetSlot(this, ISO_YEAR);
      var month = GetSlot(this, ISO_MONTH);
      var day = GetSlot(this, ISO_DAY);
      var calendar = GetSlot(this, CALENDAR);
      var hour = 0,
          minute = 0,
          second = 0,
          millisecond = 0,
          microsecond = 0,
          nanosecond = 0;

      if (temporalTime !== undefined) {
        temporalTime = ToTemporalTime(temporalTime);
        hour = GetSlot(temporalTime, ISO_HOUR);
        minute = GetSlot(temporalTime, ISO_MINUTE);
        second = GetSlot(temporalTime, ISO_SECOND);
        millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
      }

      var dt = CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      var instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
      return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }, {
    key: "toPlainYearMonth",
    value: function toPlainYearMonth() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var fields = ToTemporalYearMonthFields(this, fieldNames);
      return YearMonthFromFields(calendar, fields);
    }
  }, {
    key: "toPlainMonthDay",
    value: function toPlainMonthDay() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
      var fields = ToTemporalMonthDayFields(this, fieldNames);
      return MonthDayFromFields(calendar, fields);
    }
  }, {
    key: "getISOFields",
    value: function getISOFields() {
      if (!IsTemporalDate(this)) throw new TypeError('invalid receiver');
      return {
        calendar: GetSlot(this, CALENDAR),
        isoDay: GetSlot(this, ISO_DAY),
        isoMonth: GetSlot(this, ISO_MONTH),
        isoYear: GetSlot(this, ISO_YEAR)
      };
    }
  }], [{
    key: "from",
    value: function from(item) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var options = GetOptionsObject(optionsParam);

      if (IsTemporalDate(item)) {
        ToTemporalOverflow(options); // validate and ignore

        return CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
      }

      return ToTemporalDate(item, options);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var one = ToTemporalDate(oneParam);
      var two = ToTemporalDate(twoParam);
      return CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
    }
  }]);

  return PlainDate;
}();
MakeIntrinsicClass(PlainDate, 'Temporal.PlainDate');

var PlainDateTime = /*#__PURE__*/function () {
  function PlainDateTime(isoYearParam, isoMonthParam, isoDayParam) {
    var hourParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var minuteParam = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var secondParam = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var millisecondParam = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var microsecondParam = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var nanosecondParam = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var calendarParam = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : GetISO8601Calendar();

    _classCallCheck(this, PlainDateTime);

    var isoYear = ToIntegerThrowOnInfinity(isoYearParam);
    var isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
    var isoDay = ToIntegerThrowOnInfinity(isoDayParam);
    var hour = ToIntegerThrowOnInfinity(hourParam);
    var minute = ToIntegerThrowOnInfinity(minuteParam);
    var second = ToIntegerThrowOnInfinity(secondParam);
    var millisecond = ToIntegerThrowOnInfinity(millisecondParam);
    var microsecond = ToIntegerThrowOnInfinity(microsecondParam);
    var nanosecond = ToIntegerThrowOnInfinity(nanosecondParam);
    var calendar = ToTemporalCalendar(calendarParam); // Note: if the arguments are not passed,
    //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
    //       be rejected by RejectDateTime in CreateTemporalDateTimeSlots. This
    //       check exists only to improve the error message.

    if (arguments.length < 3) {
      throw new RangeError('missing argument: isoYear, isoMonth and isoDay are required');
    }

    CreateTemporalDateTimeSlots(this, isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
  }

  _createClass(PlainDateTime, [{
    key: "calendar",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, CALENDAR);
    }
  }, {
    key: "year",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "month",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarMonth(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "monthCode",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "day",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDay(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "hour",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_HOUR);
    }
  }, {
    key: "minute",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_MINUTE);
    }
  }, {
    key: "second",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_SECOND);
    }
  }, {
    key: "millisecond",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_MILLISECOND);
    }
  }, {
    key: "microsecond",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_MICROSECOND);
    }
  }, {
    key: "nanosecond",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_NANOSECOND);
    }
  }, {
    key: "era",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarEra(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "eraYear",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarEraYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "dayOfWeek",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "dayOfYear",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDayOfYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "weekOfYear",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInWeek",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInYear",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "monthsInYear",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "inLeapYear",
    get: function get() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "with",
    value: function _with(temporalDateTimeLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');

      if (!IsObject(temporalDateTimeLike)) {
        throw new TypeError('invalid argument');
      }

      RejectObjectWithCalendarOrTimeZone(temporalDateTimeLike);
      var options = GetOptionsObject(optionsParam);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
      var props = ToPartialRecord(temporalDateTimeLike, fieldNames);

      if (!props) {
        throw new TypeError('invalid date-time-like');
      }

      var fields = ToTemporalDateTimeFields(this, fieldNames);
      fields = CalendarMergeFields(calendar, fields, props);
      fields = ToTemporalDateTimeFields(fields, fieldNames);

      var _ES$InterpretTemporal = InterpretTemporalDateTimeFields(calendar, fields, options),
          year = _ES$InterpretTemporal.year,
          month = _ES$InterpretTemporal.month,
          day = _ES$InterpretTemporal.day,
          hour = _ES$InterpretTemporal.hour,
          minute = _ES$InterpretTemporal.minute,
          second = _ES$InterpretTemporal.second,
          millisecond = _ES$InterpretTemporal.millisecond,
          microsecond = _ES$InterpretTemporal.microsecond,
          nanosecond = _ES$InterpretTemporal.nanosecond;

      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "withPlainTime",
    value: function withPlainTime() {
      var temporalTimeParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var year = GetSlot(this, ISO_YEAR);
      var month = GetSlot(this, ISO_MONTH);
      var day = GetSlot(this, ISO_DAY);
      var calendar = GetSlot(this, CALENDAR);
      if (temporalTimeParam === undefined) return CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar);
      var temporalTime = ToTemporalTime(temporalTimeParam);
      var hour = GetSlot(temporalTime, ISO_HOUR);
      var minute = GetSlot(temporalTime, ISO_MINUTE);
      var second = GetSlot(temporalTime, ISO_SECOND);
      var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
      var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
      var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "withPlainDate",
    value: function withPlainDate(temporalDateParam) {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var temporalDate = ToTemporalDate(temporalDateParam);
      var year = GetSlot(temporalDate, ISO_YEAR);
      var month = GetSlot(temporalDate, ISO_MONTH);
      var day = GetSlot(temporalDate, ISO_DAY);
      var calendar = GetSlot(temporalDate, CALENDAR);
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);
      calendar = ConsolidateCalendars(GetSlot(this, CALENDAR), calendar);
      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "withCalendar",
    value: function withCalendar(calendarParam) {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var calendar = ToTemporalCalendar(calendarParam);
      return new PlainDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar);
    }
  }, {
    key: "add",
    value: function add(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var years = duration.years,
          months = duration.months,
          weeks = duration.weeks,
          days = duration.days,
          hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;
      var options = GetOptionsObject(optionsParam);
      var calendar = GetSlot(this, CALENDAR);

      var _ES$AddDateTime = AddDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options),
          year = _ES$AddDateTime.year,
          month = _ES$AddDateTime.month,
          day = _ES$AddDateTime.day,
          hour = _ES$AddDateTime.hour,
          minute = _ES$AddDateTime.minute,
          second = _ES$AddDateTime.second,
          millisecond = _ES$AddDateTime.millisecond,
          microsecond = _ES$AddDateTime.microsecond,
          nanosecond = _ES$AddDateTime.nanosecond;

      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "subtract",
    value: function subtract(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var years = duration.years,
          months = duration.months,
          weeks = duration.weeks,
          days = duration.days,
          hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;
      var options = GetOptionsObject(optionsParam);
      var calendar = GetSlot(this, CALENDAR);

      var _ES$AddDateTime2 = AddDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar, -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, options),
          year = _ES$AddDateTime2.year,
          month = _ES$AddDateTime2.month,
          day = _ES$AddDateTime2.day,
          hour = _ES$AddDateTime2.hour,
          minute = _ES$AddDateTime2.minute,
          second = _ES$AddDateTime2.second,
          millisecond = _ES$AddDateTime2.millisecond,
          microsecond = _ES$AddDateTime2.microsecond,
          nanosecond = _ES$AddDateTime2.nanosecond;

      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "until",
    value: function until(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalDateTime(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarId = ToString(calendar);
      var otherCalendarId = ToString(otherCalendar);

      if (calendarId !== otherCalendarId) {
        throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
      var defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);

      var _ES$DifferenceISODate = DifferenceISODateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar, largestUnit, options),
          years = _ES$DifferenceISODate.years,
          months = _ES$DifferenceISODate.months,
          weeks = _ES$DifferenceISODate.weeks,
          days = _ES$DifferenceISODate.days,
          hours = _ES$DifferenceISODate.hours,
          minutes = _ES$DifferenceISODate.minutes,
          seconds = _ES$DifferenceISODate.seconds,
          milliseconds = _ES$DifferenceISODate.milliseconds,
          microseconds = _ES$DifferenceISODate.microseconds,
          nanoseconds = _ES$DifferenceISODate.nanoseconds;

      var relativeTo = TemporalDateTimeToDate(this);

      var _ES$RoundDuration = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);

      years = _ES$RoundDuration.years;
      months = _ES$RoundDuration.months;
      weeks = _ES$RoundDuration.weeks;
      days = _ES$RoundDuration.days;
      hours = _ES$RoundDuration.hours;
      minutes = _ES$RoundDuration.minutes;
      seconds = _ES$RoundDuration.seconds;
      milliseconds = _ES$RoundDuration.milliseconds;
      microseconds = _ES$RoundDuration.microseconds;
      nanoseconds = _ES$RoundDuration.nanoseconds;

      var _ES$BalanceDuration = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      days = _ES$BalanceDuration.days;
      hours = _ES$BalanceDuration.hours;
      minutes = _ES$BalanceDuration.minutes;
      seconds = _ES$BalanceDuration.seconds;
      milliseconds = _ES$BalanceDuration.milliseconds;
      microseconds = _ES$BalanceDuration.microseconds;
      nanoseconds = _ES$BalanceDuration.nanoseconds;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "since",
    value: function since(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalDateTime(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarId = ToString(calendar);
      var otherCalendarId = ToString(otherCalendar);

      if (calendarId !== otherCalendarId) {
        throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
      var defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);

      var _ES$DifferenceISODate2 = DifferenceISODateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar, largestUnit, options),
          years = _ES$DifferenceISODate2.years,
          months = _ES$DifferenceISODate2.months,
          weeks = _ES$DifferenceISODate2.weeks,
          days = _ES$DifferenceISODate2.days,
          hours = _ES$DifferenceISODate2.hours,
          minutes = _ES$DifferenceISODate2.minutes,
          seconds = _ES$DifferenceISODate2.seconds,
          milliseconds = _ES$DifferenceISODate2.milliseconds,
          microseconds = _ES$DifferenceISODate2.microseconds,
          nanoseconds = _ES$DifferenceISODate2.nanoseconds;

      var relativeTo = TemporalDateTimeToDate(this);

      var _ES$RoundDuration2 = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode), relativeTo);

      years = _ES$RoundDuration2.years;
      months = _ES$RoundDuration2.months;
      weeks = _ES$RoundDuration2.weeks;
      days = _ES$RoundDuration2.days;
      hours = _ES$RoundDuration2.hours;
      minutes = _ES$RoundDuration2.minutes;
      seconds = _ES$RoundDuration2.seconds;
      milliseconds = _ES$RoundDuration2.milliseconds;
      microseconds = _ES$RoundDuration2.microseconds;
      nanoseconds = _ES$RoundDuration2.nanoseconds;

      var _ES$BalanceDuration2 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      days = _ES$BalanceDuration2.days;
      hours = _ES$BalanceDuration2.hours;
      minutes = _ES$BalanceDuration2.minutes;
      seconds = _ES$BalanceDuration2.seconds;
      milliseconds = _ES$BalanceDuration2.milliseconds;
      microseconds = _ES$BalanceDuration2.microseconds;
      nanoseconds = _ES$BalanceDuration2.nanoseconds;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
    }
  }, {
    key: "round",
    value: function round(optionsParam) {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      if (optionsParam === undefined) throw new TypeError('options parameter is required');
      var options = typeof optionsParam === 'string' ? CreateOnePropObject('smallestUnit', optionsParam) : GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, undefined, ['year', 'month', 'week']);
      if (smallestUnit === undefined) throw new RangeError('smallestUnit is required');
      var roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
      var maximumIncrements = {
        day: 1,
        hour: 24,
        minute: 60,
        second: 60,
        millisecond: 1000,
        microsecond: 1000,
        nanosecond: 1000
      };
      var roundingIncrement = ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
      var year = GetSlot(this, ISO_YEAR);
      var month = GetSlot(this, ISO_MONTH);
      var day = GetSlot(this, ISO_DAY);
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);

      var _ES$RoundISODateTime = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);

      year = _ES$RoundISODateTime.year;
      month = _ES$RoundISODateTime.month;
      day = _ES$RoundISODateTime.day;
      hour = _ES$RoundISODateTime.hour;
      minute = _ES$RoundISODateTime.minute;
      second = _ES$RoundISODateTime.second;
      millisecond = _ES$RoundISODateTime.millisecond;
      microsecond = _ES$RoundISODateTime.microsecond;
      nanosecond = _ES$RoundISODateTime.nanosecond;
      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, GetSlot(this, CALENDAR));
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalDateTime(otherParam);

      for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
        var slot = _arr[_i];
        var val1 = GetSlot(this, slot);
        var val2 = GetSlot(other, slot);
        if (val1 !== val2) return false;
      }

      return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);

      var _ES$ToSecondsStringPr = ToSecondsStringPrecision(options),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;

      var showCalendar = ToShowCalendarOption(options);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      return TemporalDateTimeToString(this, precision, showCalendar, {
        unit: unit,
        increment: increment,
        roundingMode: roundingMode
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return TemporalDateTimeToString(this, 'auto');
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() or equals() to compare Temporal.PlainDateTime');
    }
  }, {
    key: "toZonedDateTime",
    value: function toZonedDateTime(temporalTimeZoneLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var timeZone = ToTemporalTimeZone(temporalTimeZoneLike);
      var options = GetOptionsObject(optionsParam);
      var disambiguation = ToTemporalDisambiguation(options);
      var instant = BuiltinTimeZoneGetInstantFor(timeZone, this, disambiguation);
      return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
    }
  }, {
    key: "toPlainDate",
    value: function toPlainDate() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return TemporalDateTimeToDate(this);
    }
  }, {
    key: "toPlainYearMonth",
    value: function toPlainYearMonth() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var fields = ToTemporalYearMonthFields(this, fieldNames);
      return YearMonthFromFields(calendar, fields);
    }
  }, {
    key: "toPlainMonthDay",
    value: function toPlainMonthDay() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
      var fields = ToTemporalMonthDayFields(this, fieldNames);
      return MonthDayFromFields(calendar, fields);
    }
  }, {
    key: "toPlainTime",
    value: function toPlainTime() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return TemporalDateTimeToTime(this);
    }
  }, {
    key: "getISOFields",
    value: function getISOFields() {
      if (!IsTemporalDateTime(this)) throw new TypeError('invalid receiver');
      return {
        calendar: GetSlot(this, CALENDAR),
        isoDay: GetSlot(this, ISO_DAY),
        isoHour: GetSlot(this, ISO_HOUR),
        isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
        isoMillisecond: GetSlot(this, ISO_MILLISECOND),
        isoMinute: GetSlot(this, ISO_MINUTE),
        isoMonth: GetSlot(this, ISO_MONTH),
        isoNanosecond: GetSlot(this, ISO_NANOSECOND),
        isoSecond: GetSlot(this, ISO_SECOND),
        isoYear: GetSlot(this, ISO_YEAR)
      };
    }
  }], [{
    key: "from",
    value: function from(item) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var options = GetOptionsObject(optionsParam);

      if (IsTemporalDateTime(item)) {
        ToTemporalOverflow(options); // validate and ignore

        return CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND), GetSlot(item, CALENDAR));
      }

      return ToTemporalDateTime(item, options);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var one = ToTemporalDateTime(oneParam);
      var two = ToTemporalDateTime(twoParam);

      for (var _i2 = 0, _arr2 = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
        var slot = _arr2[_i2];
        var val1 = GetSlot(one, slot);
        var val2 = GetSlot(two, slot);
        if (val1 !== val2) return ComparisonResult(val1 - val2);
      }

      return 0;
    }
  }]);

  return PlainDateTime;
}();
MakeIntrinsicClass(PlainDateTime, 'Temporal.PlainDateTime');

var Duration = /*#__PURE__*/function () {
  function Duration() {
    var yearsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var monthsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var weeksParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var daysParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var hoursParam = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var minutesParam = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var secondsParam = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var millisecondsParam = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var microsecondsParam = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var nanosecondsParam = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;

    _classCallCheck(this, Duration);

    var years = ToIntegerWithoutRounding(yearsParam);
    var months = ToIntegerWithoutRounding(monthsParam);
    var weeks = ToIntegerWithoutRounding(weeksParam);
    var days = ToIntegerWithoutRounding(daysParam);
    var hours = ToIntegerWithoutRounding(hoursParam);
    var minutes = ToIntegerWithoutRounding(minutesParam);
    var seconds = ToIntegerWithoutRounding(secondsParam);
    var milliseconds = ToIntegerWithoutRounding(millisecondsParam);
    var microseconds = ToIntegerWithoutRounding(microsecondsParam);
    var nanoseconds = ToIntegerWithoutRounding(nanosecondsParam);
    var sign = DurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

    for (var _i = 0, _arr = [years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds]; _i < _arr.length; _i++) {
      var prop = _arr[_i];
      if (!Number.isFinite(prop)) throw new RangeError('infinite values not allowed as duration fields');
      var propSign = Math.sign(prop);
      if (propSign !== 0 && propSign !== sign) throw new RangeError('mixed-sign values not allowed as duration fields');
    }

    CreateSlots(this);
    SetSlot(this, YEARS, years);
    SetSlot(this, MONTHS, months);
    SetSlot(this, WEEKS, weeks);
    SetSlot(this, DAYS, days);
    SetSlot(this, HOURS, hours);
    SetSlot(this, MINUTES, minutes);
    SetSlot(this, SECONDS, seconds);
    SetSlot(this, MILLISECONDS, milliseconds);
    SetSlot(this, MICROSECONDS, microseconds);
    SetSlot(this, NANOSECONDS, nanoseconds);

    {
      Object.defineProperty(this, '_repr_', {
        value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalDurationToString(this), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }

  _createClass(Duration, [{
    key: "years",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, YEARS);
    }
  }, {
    key: "months",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, MONTHS);
    }
  }, {
    key: "weeks",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, WEEKS);
    }
  }, {
    key: "days",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, DAYS);
    }
  }, {
    key: "hours",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, HOURS);
    }
  }, {
    key: "minutes",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, MINUTES);
    }
  }, {
    key: "seconds",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, SECONDS);
    }
  }, {
    key: "milliseconds",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, MILLISECONDS);
    }
  }, {
    key: "microseconds",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, MICROSECONDS);
    }
  }, {
    key: "nanoseconds",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, NANOSECONDS);
    }
  }, {
    key: "sign",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
    }
  }, {
    key: "blank",
    get: function get() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS)) === 0;
    }
  }, {
    key: "with",
    value: function _with(durationLike) {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      var props = ToPartialRecord(durationLike, ['days', 'hours', 'microseconds', 'milliseconds', 'minutes', 'months', 'nanoseconds', 'seconds', 'weeks', 'years']);

      if (!props) {
        throw new TypeError('invalid duration-like');
      }

      var _props$years = props.years,
          years = _props$years === void 0 ? GetSlot(this, YEARS) : _props$years,
          _props$months = props.months,
          months = _props$months === void 0 ? GetSlot(this, MONTHS) : _props$months,
          _props$weeks = props.weeks,
          weeks = _props$weeks === void 0 ? GetSlot(this, WEEKS) : _props$weeks,
          _props$days = props.days,
          days = _props$days === void 0 ? GetSlot(this, DAYS) : _props$days,
          _props$hours = props.hours,
          hours = _props$hours === void 0 ? GetSlot(this, HOURS) : _props$hours,
          _props$minutes = props.minutes,
          minutes = _props$minutes === void 0 ? GetSlot(this, MINUTES) : _props$minutes,
          _props$seconds = props.seconds,
          seconds = _props$seconds === void 0 ? GetSlot(this, SECONDS) : _props$seconds,
          _props$milliseconds = props.milliseconds,
          milliseconds = _props$milliseconds === void 0 ? GetSlot(this, MILLISECONDS) : _props$milliseconds,
          _props$microseconds = props.microseconds,
          microseconds = _props$microseconds === void 0 ? GetSlot(this, MICROSECONDS) : _props$microseconds,
          _props$nanoseconds = props.nanoseconds,
          nanoseconds = _props$nanoseconds === void 0 ? GetSlot(this, NANOSECONDS) : _props$nanoseconds;
      return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "negated",
    value: function negated() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return CreateNegatedTemporalDuration(this);
    }
  }, {
    key: "abs",
    value: function abs() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return new Duration(Math.abs(GetSlot(this, YEARS)), Math.abs(GetSlot(this, MONTHS)), Math.abs(GetSlot(this, WEEKS)), Math.abs(GetSlot(this, DAYS)), Math.abs(GetSlot(this, HOURS)), Math.abs(GetSlot(this, MINUTES)), Math.abs(GetSlot(this, SECONDS)), Math.abs(GetSlot(this, MILLISECONDS)), Math.abs(GetSlot(this, MICROSECONDS)), Math.abs(GetSlot(this, NANOSECONDS)));
    }
  }, {
    key: "add",
    value: function add(other) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');

      var _ES$ToLimitedTemporal = ToLimitedTemporalDuration(other),
          years = _ES$ToLimitedTemporal.years,
          months = _ES$ToLimitedTemporal.months,
          weeks = _ES$ToLimitedTemporal.weeks,
          days = _ES$ToLimitedTemporal.days,
          hours = _ES$ToLimitedTemporal.hours,
          minutes = _ES$ToLimitedTemporal.minutes,
          seconds = _ES$ToLimitedTemporal.seconds,
          milliseconds = _ES$ToLimitedTemporal.milliseconds,
          microseconds = _ES$ToLimitedTemporal.microseconds,
          nanoseconds = _ES$ToLimitedTemporal.nanoseconds;

      var options = GetOptionsObject(optionsParam);
      var relativeTo = ToRelativeTemporalObject(options);

      var _ES$AddDuration = AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, relativeTo);

      years = _ES$AddDuration.years;
      months = _ES$AddDuration.months;
      weeks = _ES$AddDuration.weeks;
      days = _ES$AddDuration.days;
      hours = _ES$AddDuration.hours;
      minutes = _ES$AddDuration.minutes;
      seconds = _ES$AddDuration.seconds;
      milliseconds = _ES$AddDuration.milliseconds;
      microseconds = _ES$AddDuration.microseconds;
      nanoseconds = _ES$AddDuration.nanoseconds;
      return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "subtract",
    value: function subtract(other) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');

      var _ES$ToLimitedTemporal2 = ToLimitedTemporalDuration(other),
          years = _ES$ToLimitedTemporal2.years,
          months = _ES$ToLimitedTemporal2.months,
          weeks = _ES$ToLimitedTemporal2.weeks,
          days = _ES$ToLimitedTemporal2.days,
          hours = _ES$ToLimitedTemporal2.hours,
          minutes = _ES$ToLimitedTemporal2.minutes,
          seconds = _ES$ToLimitedTemporal2.seconds,
          milliseconds = _ES$ToLimitedTemporal2.milliseconds,
          microseconds = _ES$ToLimitedTemporal2.microseconds,
          nanoseconds = _ES$ToLimitedTemporal2.nanoseconds;

      var options = GetOptionsObject(optionsParam);
      var relativeTo = ToRelativeTemporalObject(options);

      var _ES$AddDuration2 = AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, relativeTo);

      years = _ES$AddDuration2.years;
      months = _ES$AddDuration2.months;
      weeks = _ES$AddDuration2.weeks;
      days = _ES$AddDuration2.days;
      hours = _ES$AddDuration2.hours;
      minutes = _ES$AddDuration2.minutes;
      seconds = _ES$AddDuration2.seconds;
      milliseconds = _ES$AddDuration2.milliseconds;
      microseconds = _ES$AddDuration2.microseconds;
      nanoseconds = _ES$AddDuration2.nanoseconds;
      return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "round",
    value: function round(optionsParam) {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      if (optionsParam === undefined) throw new TypeError('options parameter is required');
      var years = GetSlot(this, YEARS);
      var months = GetSlot(this, MONTHS);
      var weeks = GetSlot(this, WEEKS);
      var days = GetSlot(this, DAYS);
      var hours = GetSlot(this, HOURS);
      var minutes = GetSlot(this, MINUTES);
      var seconds = GetSlot(this, SECONDS);
      var milliseconds = GetSlot(this, MILLISECONDS);
      var microseconds = GetSlot(this, MICROSECONDS);
      var nanoseconds = GetSlot(this, NANOSECONDS);
      var defaultLargestUnit = DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      var options = typeof optionsParam === 'string' ? CreateOnePropObject('smallestUnit', optionsParam) : GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, undefined);
      var smallestUnitPresent = true;

      if (!smallestUnit) {
        smallestUnitPresent = false;
        smallestUnit = 'nanosecond';
      }

      defaultLargestUnit = LargerOfTwoTemporalUnits(defaultLargestUnit, smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, undefined);
      var largestUnitPresent = true;

      if (!largestUnit) {
        largestUnitPresent = false;
        largestUnit = defaultLargestUnit;
      }

      if (largestUnit === 'auto') largestUnit = defaultLargestUnit;

      if (!smallestUnitPresent && !largestUnitPresent) {
        throw new RangeError('at least one of smallestUnit or largestUnit is required');
      }

      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
      var roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
      var relativeTo = ToRelativeTemporalObject(options);

      var _ES$UnbalanceDuration = UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);

      years = _ES$UnbalanceDuration.years;
      months = _ES$UnbalanceDuration.months;
      weeks = _ES$UnbalanceDuration.weeks;
      days = _ES$UnbalanceDuration.days;

      var _ES$RoundDuration = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);

      years = _ES$RoundDuration.years;
      months = _ES$RoundDuration.months;
      weeks = _ES$RoundDuration.weeks;
      days = _ES$RoundDuration.days;
      hours = _ES$RoundDuration.hours;
      minutes = _ES$RoundDuration.minutes;
      seconds = _ES$RoundDuration.seconds;
      milliseconds = _ES$RoundDuration.milliseconds;
      microseconds = _ES$RoundDuration.microseconds;
      nanoseconds = _ES$RoundDuration.nanoseconds;

      var _ES$AdjustRoundedDura = AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);

      years = _ES$AdjustRoundedDura.years;
      months = _ES$AdjustRoundedDura.months;
      weeks = _ES$AdjustRoundedDura.weeks;
      days = _ES$AdjustRoundedDura.days;
      hours = _ES$AdjustRoundedDura.hours;
      minutes = _ES$AdjustRoundedDura.minutes;
      seconds = _ES$AdjustRoundedDura.seconds;
      milliseconds = _ES$AdjustRoundedDura.milliseconds;
      microseconds = _ES$AdjustRoundedDura.microseconds;
      nanoseconds = _ES$AdjustRoundedDura.nanoseconds;

      var _ES$BalanceDurationRe = BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);

      years = _ES$BalanceDurationRe.years;
      months = _ES$BalanceDurationRe.months;
      weeks = _ES$BalanceDurationRe.weeks;
      days = _ES$BalanceDurationRe.days;

      if (IsTemporalZonedDateTime(relativeTo)) {
        relativeTo = MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
      }

      var _ES$BalanceDuration = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit, relativeTo);

      days = _ES$BalanceDuration.days;
      hours = _ES$BalanceDuration.hours;
      minutes = _ES$BalanceDuration.minutes;
      seconds = _ES$BalanceDuration.seconds;
      milliseconds = _ES$BalanceDuration.milliseconds;
      microseconds = _ES$BalanceDuration.microseconds;
      nanoseconds = _ES$BalanceDuration.nanoseconds;
      return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "total",
    value: function total(optionsParam) {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      var years = GetSlot(this, YEARS);
      var months = GetSlot(this, MONTHS);
      var weeks = GetSlot(this, WEEKS);
      var days = GetSlot(this, DAYS);
      var hours = GetSlot(this, HOURS);
      var minutes = GetSlot(this, MINUTES);
      var seconds = GetSlot(this, SECONDS);
      var milliseconds = GetSlot(this, MILLISECONDS);
      var microseconds = GetSlot(this, MICROSECONDS);
      var nanoseconds = GetSlot(this, NANOSECONDS);
      if (optionsParam === undefined) throw new TypeError('options argument is required');
      var options = typeof optionsParam === 'string' ? CreateOnePropObject('unit', optionsParam) : GetOptionsObject(optionsParam);
      var unit = ToTemporalDurationTotalUnit(options);
      if (unit === undefined) throw new RangeError('unit option is required');
      var relativeTo = ToRelativeTemporalObject(options); // Convert larger units down to days

      var _ES$UnbalanceDuration2 = UnbalanceDurationRelative(years, months, weeks, days, unit, relativeTo);

      years = _ES$UnbalanceDuration2.years;
      months = _ES$UnbalanceDuration2.months;
      weeks = _ES$UnbalanceDuration2.weeks;
      days = _ES$UnbalanceDuration2.days;
      // If the unit we're totalling is smaller than `days`, convert days down to that unit.
      var intermediate;

      if (IsTemporalZonedDateTime(relativeTo)) {
        intermediate = MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
      }

      var _ES$BalanceDuration2 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, unit, intermediate);

      days = _ES$BalanceDuration2.days;
      hours = _ES$BalanceDuration2.hours;
      minutes = _ES$BalanceDuration2.minutes;
      seconds = _ES$BalanceDuration2.seconds;
      milliseconds = _ES$BalanceDuration2.milliseconds;
      microseconds = _ES$BalanceDuration2.microseconds;
      nanoseconds = _ES$BalanceDuration2.nanoseconds;

      // Finally, truncate to the correct unit and calculate remainder
      var _ES$RoundDuration2 = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 1, unit, 'trunc', relativeTo),
          total = _ES$RoundDuration2.total;

      return total;
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);

      var _ES$ToSecondsStringPr = ToSecondsStringPrecision(options),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;

      if (precision === 'minute') throw new RangeError('smallestUnit must not be "minute"');
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      return TemporalDurationToString(this, precision, {
        unit: unit,
        increment: increment,
        roundingMode: roundingMode
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');
      return TemporalDurationToString(this);
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalDuration(this)) throw new TypeError('invalid receiver');

      if (typeof Intl !== 'undefined' && typeof Intl.DurationFormat !== 'undefined') {
        return new Intl.DurationFormat(locales, options).format(this);
      }

      console.warn('Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat.');
      return TemporalDurationToString(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() to compare Temporal.Duration');
    }
  }], [{
    key: "from",
    value: function from(item) {
      if (IsTemporalDuration(item)) {
        return new Duration(GetSlot(item, YEARS), GetSlot(item, MONTHS), GetSlot(item, WEEKS), GetSlot(item, DAYS), GetSlot(item, HOURS), GetSlot(item, MINUTES), GetSlot(item, SECONDS), GetSlot(item, MILLISECONDS), GetSlot(item, MICROSECONDS), GetSlot(item, NANOSECONDS));
      }

      return ToTemporalDuration(item);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var optionsParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var one = ToTemporalDuration(oneParam);
      var two = ToTemporalDuration(twoParam);
      var options = GetOptionsObject(optionsParam);
      var relativeTo = ToRelativeTemporalObject(options);
      var y1 = GetSlot(one, YEARS);
      var mon1 = GetSlot(one, MONTHS);
      var w1 = GetSlot(one, WEEKS);
      var d1 = GetSlot(one, DAYS);
      var h1 = GetSlot(one, HOURS);
      var min1 = GetSlot(one, MINUTES);
      var s1 = GetSlot(one, SECONDS);
      var ms1 = GetSlot(one, MILLISECONDS);
      var µs1 = GetSlot(one, MICROSECONDS);
      var ns1 = GetSlot(one, NANOSECONDS);
      var y2 = GetSlot(two, YEARS);
      var mon2 = GetSlot(two, MONTHS);
      var w2 = GetSlot(two, WEEKS);
      var d2 = GetSlot(two, DAYS);
      var h2 = GetSlot(two, HOURS);
      var min2 = GetSlot(two, MINUTES);
      var s2 = GetSlot(two, SECONDS);
      var ms2 = GetSlot(two, MILLISECONDS);
      var µs2 = GetSlot(two, MICROSECONDS);
      var ns2 = GetSlot(two, NANOSECONDS);
      var shift1 = CalculateOffsetShift(relativeTo, y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
      var shift2 = CalculateOffsetShift(relativeTo, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);

      if (y1 !== 0 || y2 !== 0 || mon1 !== 0 || mon2 !== 0 || w1 !== 0 || w2 !== 0) {
        var _ES$UnbalanceDuration3 = UnbalanceDurationRelative(y1, mon1, w1, d1, 'day', relativeTo);

        d1 = _ES$UnbalanceDuration3.days;

        var _ES$UnbalanceDuration4 = UnbalanceDurationRelative(y2, mon2, w2, d2, 'day', relativeTo);

        d2 = _ES$UnbalanceDuration4.days;
      }

      var totalNs1 = TotalDurationNanoseconds(d1, h1, min1, s1, ms1, µs1, ns1, shift1);
      var totalNs2 = TotalDurationNanoseconds(d2, h2, min2, s2, ms2, µs2, ns2, shift2);
      return ComparisonResult(totalNs1.minus(totalNs2).toJSNumber());
    }
  }]);

  return Duration;
}();
MakeIntrinsicClass(Duration, 'Temporal.Duration');

var ObjectCreate$1 = Object.create;
var PlainMonthDay = /*#__PURE__*/function () {
  function PlainMonthDay(isoMonthParam, isoDayParam) {
    var calendarParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
    var referenceISOYearParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1972;

    _classCallCheck(this, PlainMonthDay);

    var isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
    var isoDay = ToIntegerThrowOnInfinity(isoDayParam);
    var calendar = ToTemporalCalendar(calendarParam);
    var referenceISOYear = ToIntegerThrowOnInfinity(referenceISOYearParam); // Note: if the arguments are not passed,
    //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
    //       be rejected by RejectISODate in CreateTemporalMonthDaySlots. This
    //       check exists only to improve the error message.

    if (arguments.length < 2) {
      throw new RangeError('missing argument: isoMonth and isoDay are required');
    }

    CreateTemporalMonthDaySlots(this, isoMonth, isoDay, calendar, referenceISOYear);
  }

  _createClass(PlainMonthDay, [{
    key: "monthCode",
    get: function get() {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "day",
    get: function get() {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      return CalendarDay(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "calendar",
    get: function get() {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, CALENDAR);
    }
  }, {
    key: "with",
    value: function _with(temporalMonthDayLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');

      if (!IsObject(temporalMonthDayLike)) {
        throw new TypeError('invalid argument');
      }

      RejectObjectWithCalendarOrTimeZone(temporalMonthDayLike);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
      var props = ToPartialRecord(temporalMonthDayLike, fieldNames);

      if (!props) {
        throw new TypeError('invalid month-day-like');
      }

      var fields = ToTemporalMonthDayFields(this, fieldNames);
      fields = CalendarMergeFields(calendar, fields, props);
      fields = ToTemporalMonthDayFields(fields, fieldNames);
      var options = GetOptionsObject(optionsParam);
      return MonthDayFromFields(calendar, fields, options);
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalMonthDay(otherParam);

      for (var _i = 0, _arr = [ISO_MONTH, ISO_DAY, ISO_YEAR]; _i < _arr.length; _i++) {
        var slot = _arr[_i];
        var val1 = GetSlot(this, slot);
        var val2 = GetSlot(other, slot);
        if (val1 !== val2) return false;
      }

      return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);
      var showCalendar = ToShowCalendarOption(options);
      return TemporalMonthDayToString(this, showCalendar);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      return TemporalMonthDayToString(this);
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use equals() to compare Temporal.PlainMonthDay');
    }
  }, {
    key: "toPlainDate",
    value: function toPlainDate(item) {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      if (!IsObject(item)) throw new TypeError('argument should be an object');
      var calendar = GetSlot(this, CALENDAR);
      var receiverFieldNames = CalendarFields(calendar, ['day', 'monthCode']);
      var fields = ToTemporalMonthDayFields(this, receiverFieldNames);
      var inputFieldNames = CalendarFields(calendar, ['year']);
      var inputEntries = [['year', undefined]]; // Add extra fields from the calendar at the end

      inputFieldNames.forEach(function (fieldName) {
        if (!inputEntries.some(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              name = _ref2[0];

          return name === fieldName;
        })) {
          inputEntries.push([fieldName, undefined]); // Make TS ignore extra fields
        }
      });
      var inputFields = PrepareTemporalFields(item, inputEntries);
      var mergedFields = CalendarMergeFields(calendar, fields, inputFields);

      var mergedFieldNames = _toConsumableArray(new Set([].concat(_toConsumableArray(receiverFieldNames), _toConsumableArray(inputFieldNames))));

      var mergedEntries = [];
      mergedFieldNames.forEach(function (fieldName) {
        if (!mergedEntries.some(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              name = _ref4[0];

          return name === fieldName;
        })) {
          mergedEntries.push([fieldName, undefined]);
        }
      });
      mergedFields = PrepareTemporalFields(mergedFields, mergedEntries);
      var options = ObjectCreate$1(null);
      options.overflow = 'reject';
      return DateFromFields(calendar, mergedFields, options);
    }
  }, {
    key: "getISOFields",
    value: function getISOFields() {
      if (!IsTemporalMonthDay(this)) throw new TypeError('invalid receiver');
      return {
        calendar: GetSlot(this, CALENDAR),
        isoDay: GetSlot(this, ISO_DAY),
        isoMonth: GetSlot(this, ISO_MONTH),
        isoYear: GetSlot(this, ISO_YEAR)
      };
    }
  }], [{
    key: "from",
    value: function from(item) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var options = GetOptionsObject(optionsParam);

      if (IsTemporalMonthDay(item)) {
        ToTemporalOverflow(options); // validate and ignore

        return CreateTemporalMonthDay(GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR), GetSlot(item, ISO_YEAR));
      }

      return ToTemporalMonthDay(item, options);
    }
  }]);

  return PlainMonthDay;
}();
MakeIntrinsicClass(PlainMonthDay, 'Temporal.PlainMonthDay');

var instant = function instant() {
  var Instant = GetIntrinsic('%Temporal.Instant%');
  return new Instant(SystemUTCEpochNanoSeconds());
};

var plainDateTime = function plainDateTime(calendarLike) {
  var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timeZone();
  var tZ = ToTemporalTimeZone(temporalTimeZoneLike);
  var calendar = ToTemporalCalendar(calendarLike);
  var inst = instant();
  return BuiltinTimeZoneGetPlainDateTimeFor(tZ, inst, calendar);
};

var plainDateTimeISO = function plainDateTimeISO() {
  var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
  var tZ = ToTemporalTimeZone(temporalTimeZoneLike);
  var calendar = GetISO8601Calendar();
  var inst = instant();
  return BuiltinTimeZoneGetPlainDateTimeFor(tZ, inst, calendar);
};

var zonedDateTime = function zonedDateTime(calendarLike) {
  var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timeZone();
  var tZ = ToTemporalTimeZone(temporalTimeZoneLike);
  var calendar = ToTemporalCalendar(calendarLike);
  return CreateTemporalZonedDateTime(SystemUTCEpochNanoSeconds(), tZ, calendar);
};

var zonedDateTimeISO = function zonedDateTimeISO() {
  var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
  return zonedDateTime(GetISO8601Calendar(), temporalTimeZoneLike);
};

var plainDate = function plainDate(calendarLike) {
  var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timeZone();
  return TemporalDateTimeToDate(plainDateTime(calendarLike, temporalTimeZoneLike));
};

var plainDateISO = function plainDateISO() {
  var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
  return TemporalDateTimeToDate(plainDateTimeISO(temporalTimeZoneLike));
};

var plainTimeISO = function plainTimeISO() {
  var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeZone();
  return TemporalDateTimeToTime(plainDateTimeISO(temporalTimeZoneLike));
};

var timeZone = function timeZone() {
  return SystemTimeZone();
};

var Now = _defineProperty({
  instant: instant,
  plainDateTime: plainDateTime,
  plainDateTimeISO: plainDateTimeISO,
  plainDate: plainDate,
  plainDateISO: plainDateISO,
  plainTimeISO: plainTimeISO,
  timeZone: timeZone,
  zonedDateTime: zonedDateTime,
  zonedDateTimeISO: zonedDateTimeISO
}, Symbol.toStringTag, 'Temporal.Now');
Object.defineProperty(Now, Symbol.toStringTag, {
  value: 'Temporal.Now',
  writable: false,
  enumerable: false,
  configurable: true
});

var ObjectAssign = Object.assign;
var DISALLOWED_UNITS$1 = ['year', 'month', 'week', 'day'];
var MAX_INCREMENTS = {
  hour: 24,
  minute: 60,
  second: 60,
  millisecond: 1000,
  microsecond: 1000,
  nanosecond: 1000
};

function TemporalTimeToString(time, precision) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var hour = GetSlot(time, ISO_HOUR);
  var minute = GetSlot(time, ISO_MINUTE);
  var second = GetSlot(time, ISO_SECOND);
  var millisecond = GetSlot(time, ISO_MILLISECOND);
  var microsecond = GetSlot(time, ISO_MICROSECOND);
  var nanosecond = GetSlot(time, ISO_NANOSECOND);

  if (options) {
    var unit = options.unit,
        increment = options.increment,
        roundingMode = options.roundingMode;

    var _ES$RoundTime = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);

    hour = _ES$RoundTime.hour;
    minute = _ES$RoundTime.minute;
    second = _ES$RoundTime.second;
    millisecond = _ES$RoundTime.millisecond;
    microsecond = _ES$RoundTime.microsecond;
    nanosecond = _ES$RoundTime.nanosecond;
  }

  var hourString = ISODateTimePartString(hour);
  var minuteString = ISODateTimePartString(minute);
  var seconds = FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
  return "".concat(hourString, ":").concat(minuteString).concat(seconds);
}

var PlainTime = /*#__PURE__*/function () {
  function PlainTime() {
    var isoHourParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var isoMinuteParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var isoSecondParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var isoMillisecondParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var isoMicrosecondParam = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var isoNanosecondParam = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, PlainTime);

    var isoHour = ToIntegerThrowOnInfinity(isoHourParam);
    var isoMinute = ToIntegerThrowOnInfinity(isoMinuteParam);
    var isoSecond = ToIntegerThrowOnInfinity(isoSecondParam);
    var isoMillisecond = ToIntegerThrowOnInfinity(isoMillisecondParam);
    var isoMicrosecond = ToIntegerThrowOnInfinity(isoMicrosecondParam);
    var isoNanosecond = ToIntegerThrowOnInfinity(isoNanosecondParam);
    RejectTime(isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond);
    CreateSlots(this);
    SetSlot(this, ISO_HOUR, isoHour);
    SetSlot(this, ISO_MINUTE, isoMinute);
    SetSlot(this, ISO_SECOND, isoSecond);
    SetSlot(this, ISO_MILLISECOND, isoMillisecond);
    SetSlot(this, ISO_MICROSECOND, isoMicrosecond);
    SetSlot(this, ISO_NANOSECOND, isoNanosecond);
    SetSlot(this, CALENDAR, GetISO8601Calendar());

    {
      Object.defineProperty(this, '_repr_', {
        value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalTimeToString(this, 'auto'), ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }

  _createClass(PlainTime, [{
    key: "calendar",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver'); // PlainTime's calendar isn't settable, so can't be a userland calendar

      return GetSlot(this, CALENDAR);
    }
  }, {
    key: "hour",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_HOUR);
    }
  }, {
    key: "minute",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_MINUTE);
    }
  }, {
    key: "second",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_SECOND);
    }
  }, {
    key: "millisecond",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_MILLISECOND);
    }
  }, {
    key: "microsecond",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_MICROSECOND);
    }
  }, {
    key: "nanosecond",
    get: function get() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, ISO_NANOSECOND);
    }
  }, {
    key: "with",
    value: function _with(temporalTimeLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');

      if (!IsObject(temporalTimeLike)) {
        throw new TypeError('invalid argument');
      }

      RejectObjectWithCalendarOrTimeZone(temporalTimeLike);
      var options = GetOptionsObject(optionsParam);
      var overflow = ToTemporalOverflow(options);
      var props = ToPartialRecord(temporalTimeLike, ['hour', 'microsecond', 'millisecond', 'minute', 'nanosecond', 'second']);

      if (!props) {
        throw new TypeError('invalid time-like');
      }

      var fields = ToTemporalTimeRecord(this);

      var _ObjectAssign = ObjectAssign(fields, props),
          hour = _ObjectAssign.hour,
          minute = _ObjectAssign.minute,
          second = _ObjectAssign.second,
          millisecond = _ObjectAssign.millisecond,
          microsecond = _ObjectAssign.microsecond,
          nanosecond = _ObjectAssign.nanosecond;

      var _ES$RegulateTime = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);

      hour = _ES$RegulateTime.hour;
      minute = _ES$RegulateTime.minute;
      second = _ES$RegulateTime.second;
      millisecond = _ES$RegulateTime.millisecond;
      microsecond = _ES$RegulateTime.microsecond;
      nanosecond = _ES$RegulateTime.nanosecond;
      return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
  }, {
    key: "add",
    value: function add(temporalDurationLike) {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);

      var _ES$AddTime = AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);

      hour = _ES$AddTime.hour;
      minute = _ES$AddTime.minute;
      second = _ES$AddTime.second;
      millisecond = _ES$AddTime.millisecond;
      microsecond = _ES$AddTime.microsecond;
      nanosecond = _ES$AddTime.nanosecond;

      var _ES$RegulateTime2 = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, 'reject');

      hour = _ES$RegulateTime2.hour;
      minute = _ES$RegulateTime2.minute;
      second = _ES$RegulateTime2.second;
      millisecond = _ES$RegulateTime2.millisecond;
      microsecond = _ES$RegulateTime2.microsecond;
      nanosecond = _ES$RegulateTime2.nanosecond;
      return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
  }, {
    key: "subtract",
    value: function subtract(temporalDurationLike) {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);

      var _ES$AddTime2 = AddTime(hour, minute, second, millisecond, microsecond, nanosecond, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);

      hour = _ES$AddTime2.hour;
      minute = _ES$AddTime2.minute;
      second = _ES$AddTime2.second;
      millisecond = _ES$AddTime2.millisecond;
      microsecond = _ES$AddTime2.microsecond;
      nanosecond = _ES$AddTime2.nanosecond;

      var _ES$RegulateTime3 = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, 'reject');

      hour = _ES$RegulateTime3.hour;
      minute = _ES$RegulateTime3.minute;
      second = _ES$RegulateTime3.second;
      millisecond = _ES$RegulateTime3.millisecond;
      microsecond = _ES$RegulateTime3.microsecond;
      nanosecond = _ES$RegulateTime3.nanosecond;
      return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
  }, {
    key: "until",
    value: function until(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalTime(otherParam);
      var options = GetOptionsObject(optionsParam);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$1, 'hour');
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$1);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, MAX_INCREMENTS[smallestUnit], false);

      var _ES$DifferenceTime = DifferenceTime(GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND)),
          hours = _ES$DifferenceTime.hours,
          minutes = _ES$DifferenceTime.minutes,
          seconds = _ES$DifferenceTime.seconds,
          milliseconds = _ES$DifferenceTime.milliseconds,
          microseconds = _ES$DifferenceTime.microseconds,
          nanoseconds = _ES$DifferenceTime.nanoseconds;

      var _ES$RoundDuration = RoundDuration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode);

      hours = _ES$RoundDuration.hours;
      minutes = _ES$RoundDuration.minutes;
      seconds = _ES$RoundDuration.seconds;
      milliseconds = _ES$RoundDuration.milliseconds;
      microseconds = _ES$RoundDuration.microseconds;
      nanoseconds = _ES$RoundDuration.nanoseconds;

      var _ES$BalanceDuration = BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      hours = _ES$BalanceDuration.hours;
      minutes = _ES$BalanceDuration.minutes;
      seconds = _ES$BalanceDuration.seconds;
      milliseconds = _ES$BalanceDuration.milliseconds;
      microseconds = _ES$BalanceDuration.microseconds;
      nanoseconds = _ES$BalanceDuration.nanoseconds;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "since",
    value: function since(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalTime(otherParam);
      var options = GetOptionsObject(optionsParam);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$1, 'hour');
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$1);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, MAX_INCREMENTS[smallestUnit], false);

      var _ES$DifferenceTime2 = DifferenceTime(GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND)),
          hours = _ES$DifferenceTime2.hours,
          minutes = _ES$DifferenceTime2.minutes,
          seconds = _ES$DifferenceTime2.seconds,
          milliseconds = _ES$DifferenceTime2.milliseconds,
          microseconds = _ES$DifferenceTime2.microseconds,
          nanoseconds = _ES$DifferenceTime2.nanoseconds;

      var _ES$RoundDuration2 = RoundDuration(0, 0, 0, 0, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode));

      hours = _ES$RoundDuration2.hours;
      minutes = _ES$RoundDuration2.minutes;
      seconds = _ES$RoundDuration2.seconds;
      milliseconds = _ES$RoundDuration2.milliseconds;
      microseconds = _ES$RoundDuration2.microseconds;
      nanoseconds = _ES$RoundDuration2.nanoseconds;
      hours = -hours;
      minutes = -minutes;
      seconds = -seconds;
      milliseconds = -milliseconds;
      microseconds = -microseconds;
      nanoseconds = -nanoseconds;

      var _ES$BalanceDuration2 = BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

      hours = _ES$BalanceDuration2.hours;
      minutes = _ES$BalanceDuration2.minutes;
      seconds = _ES$BalanceDuration2.seconds;
      milliseconds = _ES$BalanceDuration2.milliseconds;
      microseconds = _ES$BalanceDuration2.microseconds;
      nanoseconds = _ES$BalanceDuration2.nanoseconds;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "round",
    value: function round(optionsParam) {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      if (optionsParam === undefined) throw new TypeError('options parameter is required');
      var options = typeof optionsParam === 'string' ? CreateOnePropObject('smallestUnit', optionsParam) : GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, undefined, DISALLOWED_UNITS$1);
      if (smallestUnit === undefined) throw new RangeError('smallestUnit is required');
      var roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
      var roundingIncrement = ToTemporalRoundingIncrement(options, MAX_INCREMENTS[smallestUnit], false);
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);

      var _ES$RoundTime2 = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);

      hour = _ES$RoundTime2.hour;
      minute = _ES$RoundTime2.minute;
      second = _ES$RoundTime2.second;
      millisecond = _ES$RoundTime2.millisecond;
      microsecond = _ES$RoundTime2.microsecond;
      nanosecond = _ES$RoundTime2.nanosecond;
      return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalTime(otherParam);

      for (var _i = 0, _arr = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
        var slot = _arr[_i];
        var val1 = GetSlot(this, slot);
        var val2 = GetSlot(other, slot);
        if (val1 !== val2) return false;
      }

      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);

      var _ES$ToSecondsStringPr = ToSecondsStringPrecision(options),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;

      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      return TemporalTimeToString(this, precision, {
        unit: unit,
        increment: increment,
        roundingMode: roundingMode
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return TemporalTimeToString(this, 'auto');
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() or equals() to compare Temporal.PlainTime');
    }
  }, {
    key: "toPlainDateTime",
    value: function toPlainDateTime(temporalDateParam) {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      var temporalDate = ToTemporalDate(temporalDateParam);
      var year = GetSlot(temporalDate, ISO_YEAR);
      var month = GetSlot(temporalDate, ISO_MONTH);
      var day = GetSlot(temporalDate, ISO_DAY);
      var calendar = GetSlot(temporalDate, CALENDAR);
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);
      return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
  }, {
    key: "toZonedDateTime",
    value: function toZonedDateTime(item) {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');

      if (!IsObject(item)) {
        throw new TypeError('invalid argument');
      }

      var dateLike = item.plainDate;

      if (dateLike === undefined) {
        throw new TypeError('missing date property');
      }

      var temporalDate = ToTemporalDate(dateLike);
      var timeZoneLike = item.timeZone;

      if (timeZoneLike === undefined) {
        throw new TypeError('missing timeZone property');
      }

      var timeZone = ToTemporalTimeZone(timeZoneLike);
      var year = GetSlot(temporalDate, ISO_YEAR);
      var month = GetSlot(temporalDate, ISO_MONTH);
      var day = GetSlot(temporalDate, ISO_DAY);
      var calendar = GetSlot(temporalDate, CALENDAR);
      var hour = GetSlot(this, ISO_HOUR);
      var minute = GetSlot(this, ISO_MINUTE);
      var second = GetSlot(this, ISO_SECOND);
      var millisecond = GetSlot(this, ISO_MILLISECOND);
      var microsecond = GetSlot(this, ISO_MICROSECOND);
      var nanosecond = GetSlot(this, ISO_NANOSECOND);
      var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
      var dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      var instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
      return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }, {
    key: "getISOFields",
    value: function getISOFields() {
      if (!IsTemporalTime(this)) throw new TypeError('invalid receiver');
      return {
        calendar: GetSlot(this, CALENDAR),
        isoHour: GetSlot(this, ISO_HOUR),
        isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
        isoMillisecond: GetSlot(this, ISO_MILLISECOND),
        isoMinute: GetSlot(this, ISO_MINUTE),
        isoNanosecond: GetSlot(this, ISO_NANOSECOND),
        isoSecond: GetSlot(this, ISO_SECOND)
      };
    }
  }], [{
    key: "from",
    value: function from(item) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var options = GetOptionsObject(optionsParam);
      var overflow = ToTemporalOverflow(options);

      if (IsTemporalTime(item)) {
        return new PlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
      }

      return ToTemporalTime(item, overflow);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var one = ToTemporalTime(oneParam);
      var two = ToTemporalTime(twoParam);

      for (var _i2 = 0, _arr2 = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
        var slot = _arr2[_i2];
        var val1 = GetSlot(one, slot);
        var val2 = GetSlot(two, slot);
        if (val1 !== val2) return ComparisonResult(val1 - val2);
      }

      return 0;
    }
  }]);

  return PlainTime;
}();
MakeIntrinsicClass(PlainTime, 'Temporal.PlainTime');

var TimeZone = /*#__PURE__*/function () {
  function TimeZone(timeZoneIdentifierParam) {
    _classCallCheck(this, TimeZone);

    // Note: if the argument is not passed, GetCanonicalTimeZoneIdentifier(undefined) will throw.
    //       This check exists only to improve the error message.
    if (arguments.length < 1) {
      throw new RangeError('missing argument: identifier is required');
    }

    var timeZoneIdentifier = GetCanonicalTimeZoneIdentifier(timeZoneIdentifierParam);
    CreateSlots(this);
    SetSlot(this, TIMEZONE_ID, timeZoneIdentifier);

    {
      Object.defineProperty(this, '_repr_', {
        value: "".concat(this[Symbol.toStringTag], " <").concat(timeZoneIdentifier, ">"),
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }

  _createClass(TimeZone, [{
    key: "id",
    get: function get() {
      return ToString(this);
    }
  }, {
    key: "getOffsetNanosecondsFor",
    value: function getOffsetNanosecondsFor(instantParam) {
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      var instant = ToTemporalInstant(instantParam);
      var id = GetSlot(this, TIMEZONE_ID);
      var offsetNs = ParseOffsetString(id);
      if (offsetNs !== null) return offsetNs;
      return GetIANATimeZoneOffsetNanoseconds(GetSlot(instant, EPOCHNANOSECONDS), id);
    }
  }, {
    key: "getOffsetStringFor",
    value: function getOffsetStringFor(instantParam) {
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      var instant = ToTemporalInstant(instantParam);
      return BuiltinTimeZoneGetOffsetStringFor(this, instant);
    }
  }, {
    key: "getPlainDateTimeFor",
    value: function getPlainDateTimeFor(instantParam) {
      var calendarParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GetISO8601Calendar();
      var instant = ToTemporalInstant(instantParam);
      var calendar = ToTemporalCalendar(calendarParam);
      return BuiltinTimeZoneGetPlainDateTimeFor(this, instant, calendar);
    }
  }, {
    key: "getInstantFor",
    value: function getInstantFor(dateTimeParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      var dateTime = ToTemporalDateTime(dateTimeParam);
      var options = GetOptionsObject(optionsParam);
      var disambiguation = ToTemporalDisambiguation(options);
      return BuiltinTimeZoneGetInstantFor(this, dateTime, disambiguation);
    }
  }, {
    key: "getPossibleInstantsFor",
    value: function getPossibleInstantsFor(dateTimeParam) {
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      var dateTime = ToTemporalDateTime(dateTimeParam);
      var Instant = GetIntrinsic('%Temporal.Instant%');
      var id = GetSlot(this, TIMEZONE_ID);
      var offsetNs = ParseOffsetString(id);

      if (offsetNs !== null) {
        var epochNs = GetEpochFromISOParts(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
        if (epochNs === null) throw new RangeError('DateTime outside of supported range');
        return [new Instant(epochNs.minus(offsetNs))];
      }

      var possibleEpochNs = GetIANATimeZoneEpochValue(id, GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
      return possibleEpochNs.map(function (ns) {
        return new Instant(ns);
      });
    }
  }, {
    key: "getNextTransition",
    value: function getNextTransition(startingPointParam) {
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      var startingPoint = ToTemporalInstant(startingPointParam);
      var id = GetSlot(this, TIMEZONE_ID); // Offset time zones or UTC have no transitions

      if (ParseOffsetString(id) !== null || id === 'UTC') {
        return null;
      }

      var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
      var Instant = GetIntrinsic('%Temporal.Instant%');
      epochNanoseconds = GetIANATimeZoneNextTransition(epochNanoseconds, id);
      return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
    }
  }, {
    key: "getPreviousTransition",
    value: function getPreviousTransition(startingPointParam) {
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      var startingPoint = ToTemporalInstant(startingPointParam);
      var id = GetSlot(this, TIMEZONE_ID); // Offset time zones or UTC have no transitions

      if (ParseOffsetString(id) !== null || id === 'UTC') {
        return null;
      }

      var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
      var Instant = GetIntrinsic('%Temporal.Instant%');
      epochNanoseconds = GetIANATimeZonePreviousTransition(epochNanoseconds, id);
      return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
    }
  }, {
    key: "toString",
    value: function toString() {
      if (!IsTemporalTimeZone(this)) throw new TypeError('invalid receiver');
      return ToString(GetSlot(this, TIMEZONE_ID));
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return ToString(this);
    }
  }], [{
    key: "from",
    value: function from(item) {
      return ToTemporalTimeZone(item);
    }
  }]);

  return TimeZone;
}();
MakeIntrinsicClass(TimeZone, 'Temporal.TimeZone');

var ObjectCreate = Object.create;
var DISALLOWED_UNITS = ['week', 'day', 'hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'];
var PlainYearMonth = /*#__PURE__*/function () {
  function PlainYearMonth(isoYearParam, isoMonthParam) {
    var calendarParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();
    var referenceISODayParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, PlainYearMonth);

    var isoYear = ToIntegerThrowOnInfinity(isoYearParam);
    var isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
    var calendar = ToTemporalCalendar(calendarParam);
    var referenceISODay = ToIntegerThrowOnInfinity(referenceISODayParam); // Note: if the arguments are not passed,
    //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
    //       be rejected by RejectISODate in CreateTemporalYearMonthSlots. This
    //       check exists only to improve the error message.

    if (arguments.length < 2) {
      throw new RangeError('missing argument: isoYear and isoMonth are required');
    }

    CreateTemporalYearMonthSlots(this, isoYear, isoMonth, calendar, referenceISODay);
  }

  _createClass(PlainYearMonth, [{
    key: "year",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "month",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarMonth(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "monthCode",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "calendar",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, CALENDAR);
    }
  }, {
    key: "era",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarEra(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "eraYear",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarEraYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "daysInYear",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "monthsInYear",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "inLeapYear",
    get: function get() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
    }
  }, {
    key: "with",
    value: function _with(temporalYearMonthLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');

      if (!IsObject(temporalYearMonthLike)) {
        throw new TypeError('invalid argument');
      }

      RejectObjectWithCalendarOrTimeZone(temporalYearMonthLike);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['month', 'monthCode', 'year']);
      var props = ToPartialRecord(temporalYearMonthLike, fieldNames);

      if (!props) {
        throw new TypeError('invalid year-month-like');
      }

      var fields = ToTemporalYearMonthFields(this, fieldNames);
      fields = CalendarMergeFields(calendar, fields, props);
      fields = ToTemporalYearMonthFields(fields, fieldNames);
      var options = GetOptionsObject(optionsParam);
      return YearMonthFromFields(calendar, fields, options);
    }
  }, {
    key: "add",
    value: function add(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var years = duration.years,
          months = duration.months,
          weeks = duration.weeks,
          days = duration.days,
          hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;

      var _ES$BalanceDuration = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'day');

      days = _ES$BalanceDuration.days;
      var options = GetOptionsObject(optionsParam);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var fields = ToTemporalYearMonthFields(this, fieldNames);
      var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      var day = sign < 0 ? ToPositiveInteger(CalendarDaysInMonth(calendar, this)) : 1;
      var startDate = DateFromFields(calendar, _objectSpread2(_objectSpread2({}, fields), {}, {
        day: day
      }));

      var optionsCopy = _objectSpread2({}, options);

      var addedDate = CalendarDateAdd(calendar, startDate, _objectSpread2(_objectSpread2({}, duration), {}, {
        days: days
      }), options);
      var addedDateFields = ToTemporalYearMonthFields(addedDate, fieldNames);
      return YearMonthFromFields(calendar, addedDateFields, optionsCopy);
    }
  }, {
    key: "subtract",
    value: function subtract(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      duration = {
        years: -duration.years,
        months: -duration.months,
        weeks: -duration.weeks,
        days: -duration.days,
        hours: -duration.hours,
        minutes: -duration.minutes,
        seconds: -duration.seconds,
        milliseconds: -duration.milliseconds,
        microseconds: -duration.microseconds,
        nanoseconds: -duration.nanoseconds
      };
      var _duration = duration,
          years = _duration.years,
          months = _duration.months,
          weeks = _duration.weeks,
          days = _duration.days,
          hours = _duration.hours,
          minutes = _duration.minutes,
          seconds = _duration.seconds,
          milliseconds = _duration.milliseconds,
          microseconds = _duration.microseconds,
          nanoseconds = _duration.nanoseconds;

      var _ES$BalanceDuration2 = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'day');

      days = _ES$BalanceDuration2.days;
      var options = GetOptionsObject(optionsParam);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var fields = ToTemporalYearMonthFields(this, fieldNames);
      var sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
      var day = sign < 0 ? ToPositiveInteger(CalendarDaysInMonth(calendar, this)) : 1;
      var startDate = DateFromFields(calendar, _objectSpread2(_objectSpread2({}, fields), {}, {
        day: day
      }));

      var optionsCopy = _objectSpread2({}, options);

      var addedDate = CalendarDateAdd(calendar, startDate, _objectSpread2(_objectSpread2({}, duration), {}, {
        days: days
      }), options);
      var addedDateFields = ToTemporalYearMonthFields(addedDate, fieldNames);
      return YearMonthFromFields(calendar, addedDateFields, optionsCopy);
    }
  }, {
    key: "until",
    value: function until(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalYearMonth(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarID = ToString(calendar);
      var otherCalendarID = ToString(otherCalendar);

      if (calendarID !== otherCalendarID) {
        throw new RangeError("cannot compute difference between months of ".concat(calendarID, " and ").concat(otherCalendarID, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'month', DISALLOWED_UNITS);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS, 'year');
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var otherFields = ToTemporalYearMonthFields(other, fieldNames);
      var thisFields = ToTemporalYearMonthFields(this, fieldNames);
      var otherDate = DateFromFields(calendar, _objectSpread2(_objectSpread2({}, otherFields), {}, {
        day: 1
      }));
      var thisDate = DateFromFields(calendar, _objectSpread2(_objectSpread2({}, thisFields), {}, {
        day: 1
      }));

      var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
        largestUnit: largestUnit
      });

      var result = CalendarDateUntil(calendar, thisDate, otherDate, untilOptions);
      if (smallestUnit === 'month' && roundingIncrement === 1) return result;
      var years = result.years,
          months = result.months;

      var _ES$RoundDuration = RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, thisDate);

      years = _ES$RoundDuration.years;
      months = _ES$RoundDuration.months;
      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(years, months, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }, {
    key: "since",
    value: function since(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalYearMonth(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarID = ToString(calendar);
      var otherCalendarID = ToString(otherCalendar);

      if (calendarID !== otherCalendarID) {
        throw new RangeError("cannot compute difference between months of ".concat(calendarID, " and ").concat(otherCalendarID, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'month', DISALLOWED_UNITS);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS, 'year');
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var otherFields = ToTemporalYearMonthFields(other, fieldNames);
      var thisFields = ToTemporalYearMonthFields(this, fieldNames);
      var otherDate = DateFromFields(calendar, _objectSpread2(_objectSpread2({}, otherFields), {}, {
        day: 1
      }));
      var thisDate = DateFromFields(calendar, _objectSpread2(_objectSpread2({}, thisFields), {}, {
        day: 1
      }));

      var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
        largestUnit: largestUnit
      });

      var _ES$CalendarDateUntil = CalendarDateUntil(calendar, thisDate, otherDate, untilOptions),
          years = _ES$CalendarDateUntil.years,
          months = _ES$CalendarDateUntil.months;

      var Duration = GetIntrinsic('%Temporal.Duration%');

      if (smallestUnit === 'month' && roundingIncrement === 1) {
        return new Duration(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
      }

      var _ES$RoundDuration2 = RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode), thisDate);

      years = _ES$RoundDuration2.years;
      months = _ES$RoundDuration2.months;
      return new Duration(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalYearMonth(otherParam);

      for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
        var slot = _arr[_i];
        var val1 = GetSlot(this, slot);
        var val2 = GetSlot(other, slot);
        if (val1 !== val2) return false;
      }

      return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);
      var showCalendar = ToShowCalendarOption(options);
      return TemporalYearMonthToString(this, showCalendar);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return TemporalYearMonthToString(this);
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() or equals() to compare Temporal.PlainYearMonth');
    }
  }, {
    key: "toPlainDate",
    value: function toPlainDate(item) {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      if (!IsObject(item)) throw new TypeError('argument should be an object');
      var calendar = GetSlot(this, CALENDAR);
      var receiverFieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var fields = ToTemporalYearMonthFields(this, receiverFieldNames);
      var inputFieldNames = CalendarFields(calendar, ['day']);
      var inputEntries = [['day']]; // Add extra fields from the calendar at the end

      inputFieldNames.forEach(function (fieldName) {
        if (!inputEntries.some(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              name = _ref2[0];

          return name === fieldName;
        })) {
          inputEntries.push([fieldName, undefined]); // Make TS ignore extra fields
        }
      });
      var inputFields = PrepareTemporalFields(item, inputEntries);
      var mergedFields = CalendarMergeFields(calendar, fields, inputFields);

      var mergedFieldNames = _toConsumableArray(new Set([].concat(_toConsumableArray(receiverFieldNames), _toConsumableArray(inputFieldNames))));

      var mergedEntries = [];
      mergedFieldNames.forEach(function (fieldName) {
        if (!mergedEntries.some(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              name = _ref4[0];

          return name === fieldName;
        })) {
          mergedEntries.push([fieldName, undefined]);
        }
      });
      mergedFields = PrepareTemporalFields(mergedFields, mergedEntries);
      var options = ObjectCreate(null);
      options.overflow = 'reject';
      return DateFromFields(calendar, mergedFields, options);
    }
  }, {
    key: "getISOFields",
    value: function getISOFields() {
      if (!IsTemporalYearMonth(this)) throw new TypeError('invalid receiver');
      return {
        calendar: GetSlot(this, CALENDAR),
        isoDay: GetSlot(this, ISO_DAY),
        isoMonth: GetSlot(this, ISO_MONTH),
        isoYear: GetSlot(this, ISO_YEAR)
      };
    }
  }], [{
    key: "from",
    value: function from(item) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var options = GetOptionsObject(optionsParam);

      if (IsTemporalYearMonth(item)) {
        ToTemporalOverflow(options); // validate and ignore

        return CreateTemporalYearMonth(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, CALENDAR), GetSlot(item, ISO_DAY));
      }

      return ToTemporalYearMonth(item, options);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var one = ToTemporalYearMonth(oneParam);
      var two = ToTemporalYearMonth(twoParam);
      return CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
    }
  }]);

  return PlainYearMonth;
}();
MakeIntrinsicClass(PlainYearMonth, 'Temporal.PlainYearMonth');

var ArrayPrototypePush = Array.prototype.push;
var ZonedDateTime = /*#__PURE__*/function () {
  function ZonedDateTime(epochNanosecondsParam, timeZoneParam) {
    var calendarParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GetISO8601Calendar();

    _classCallCheck(this, ZonedDateTime);

    // Note: if the argument is not passed, ToBigInt(undefined) will throw. This check exists only
    //       to improve the error message.
    //       ToTemporalTimeZone(undefined) will end up calling TimeZone.from("undefined"), which
    //       could succeed.
    if (arguments.length < 1) {
      throw new TypeError('missing argument: epochNanoseconds is required');
    }

    var epochNanoseconds = ToBigInt(epochNanosecondsParam);
    var timeZone = ToTemporalTimeZone(timeZoneParam);
    var calendar = ToTemporalCalendar(calendarParam);
    CreateTemporalZonedDateTimeSlots(this, epochNanoseconds, timeZone, calendar);
  }

  _createClass(ZonedDateTime, [{
    key: "calendar",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, CALENDAR);
    }
  }, {
    key: "timeZone",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(this, TIME_ZONE);
    }
  }, {
    key: "year",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "month",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarMonth(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "monthCode",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarMonthCode(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "day",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDay(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "hour",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(dateTime(this), ISO_HOUR);
    }
  }, {
    key: "minute",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(dateTime(this), ISO_MINUTE);
    }
  }, {
    key: "second",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(dateTime(this), ISO_SECOND);
    }
  }, {
    key: "millisecond",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(dateTime(this), ISO_MILLISECOND);
    }
  }, {
    key: "microsecond",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(dateTime(this), ISO_MICROSECOND);
    }
  }, {
    key: "nanosecond",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetSlot(dateTime(this), ISO_NANOSECOND);
    }
  }, {
    key: "era",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarEra(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "eraYear",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarEraYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "epochSeconds",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var value = GetSlot(this, EPOCHNANOSECONDS);
      return +value.divide(1e9);
    }
  }, {
    key: "epochMilliseconds",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var value = GetSlot(this, EPOCHNANOSECONDS);
      return +value.divide(1e6);
    }
  }, {
    key: "epochMicroseconds",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var value = GetSlot(this, EPOCHNANOSECONDS);
      return bigIntIfAvailable$1(value.divide(1e3));
    }
  }, {
    key: "epochNanoseconds",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return bigIntIfAvailable$1(GetSlot(this, EPOCHNANOSECONDS));
    }
  }, {
    key: "dayOfWeek",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDayOfWeek(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "dayOfYear",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDayOfYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "weekOfYear",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarWeekOfYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "hoursInDay",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var dt = dateTime(this);
      var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
      var year = GetSlot(dt, ISO_YEAR);
      var month = GetSlot(dt, ISO_MONTH);
      var day = GetSlot(dt, ISO_DAY);
      var today = new DateTime(year, month, day, 0, 0, 0, 0, 0, 0);
      var tomorrowFields = AddISODate(year, month, day, 0, 0, 0, 1, 'reject');
      var tomorrow = new DateTime(tomorrowFields.year, tomorrowFields.month, tomorrowFields.day, 0, 0, 0, 0, 0, 0);
      var timeZone = GetSlot(this, TIME_ZONE);
      var todayNs = GetSlot(BuiltinTimeZoneGetInstantFor(timeZone, today, 'compatible'), EPOCHNANOSECONDS);
      var tomorrowNs = GetSlot(BuiltinTimeZoneGetInstantFor(timeZone, tomorrow, 'compatible'), EPOCHNANOSECONDS);
      return tomorrowNs.subtract(todayNs).toJSNumber() / 3.6e12;
    }
  }, {
    key: "daysInWeek",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInWeek(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInMonth(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "daysInYear",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarDaysInYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "monthsInYear",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarMonthsInYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "inLeapYear",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return CalendarInLeapYear(GetSlot(this, CALENDAR), dateTime(this));
    }
  }, {
    key: "offset",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return BuiltinTimeZoneGetOffsetStringFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
    }
  }, {
    key: "offsetNanoseconds",
    get: function get() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return GetOffsetNanosecondsFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
    }
  }, {
    key: "with",
    value: function _with(temporalZonedDateTimeLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');

      if (!IsObject(temporalZonedDateTimeLike)) {
        throw new TypeError('invalid zoned-date-time-like');
      }

      RejectObjectWithCalendarOrTimeZone(temporalZonedDateTimeLike);
      var options = GetOptionsObject(optionsParam);
      var disambiguation = ToTemporalDisambiguation(options);
      var offset = ToTemporalOffset(options, 'prefer');
      var timeZone = GetSlot(this, TIME_ZONE);
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'hour', 'microsecond', 'millisecond', 'minute', 'month', 'monthCode', 'nanosecond', 'second', 'year']);
      ArrayPrototypePush.call(fieldNames, 'offset');
      var props = ToPartialRecord(temporalZonedDateTimeLike, fieldNames);

      if (!props) {
        throw new TypeError('invalid zoned-date-time-like');
      } // Unlike ToTemporalZonedDateTimeFields, the offset property will be required.


      var entries = [['day', undefined], ['hour', 0], ['microsecond', 0], ['millisecond', 0], ['minute', 0], ['month', undefined], ['monthCode', undefined], ['nanosecond', 0], ['second', 0], ['year', undefined], ['offset'], ['timeZone']]; // Add extra fields from the calendar at the end

      fieldNames.forEach(function (fieldName) {
        if (!entries.some(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              name = _ref2[0];

          return name === fieldName;
        })) {
          entries.push([fieldName, undefined]);
        }
      });
      var fields = PrepareTemporalFields(this, entries);
      fields = CalendarMergeFields(calendar, fields, props);
      fields = PrepareTemporalFields(fields, entries);

      var _ES$InterpretTemporal = InterpretTemporalDateTimeFields(calendar, fields, options),
          year = _ES$InterpretTemporal.year,
          month = _ES$InterpretTemporal.month,
          day = _ES$InterpretTemporal.day,
          hour = _ES$InterpretTemporal.hour,
          minute = _ES$InterpretTemporal.minute,
          second = _ES$InterpretTemporal.second,
          millisecond = _ES$InterpretTemporal.millisecond,
          microsecond = _ES$InterpretTemporal.microsecond,
          nanosecond = _ES$InterpretTemporal.nanosecond;

      var offsetNs = ParseOffsetString(fields.offset);
      var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, 'option', offsetNs, timeZone, disambiguation, offset,
      /* matchMinute = */
      false);
      return CreateTemporalZonedDateTime(epochNanoseconds, GetSlot(this, TIME_ZONE), calendar);
    }
  }, {
    key: "withPlainDate",
    value: function withPlainDate(temporalDateParam) {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var temporalDate = ToTemporalDate(temporalDateParam);
      var year = GetSlot(temporalDate, ISO_YEAR);
      var month = GetSlot(temporalDate, ISO_MONTH);
      var day = GetSlot(temporalDate, ISO_DAY);
      var calendar = GetSlot(temporalDate, CALENDAR);
      var thisDt = dateTime(this);
      var hour = GetSlot(thisDt, ISO_HOUR);
      var minute = GetSlot(thisDt, ISO_MINUTE);
      var second = GetSlot(thisDt, ISO_SECOND);
      var millisecond = GetSlot(thisDt, ISO_MILLISECOND);
      var microsecond = GetSlot(thisDt, ISO_MICROSECOND);
      var nanosecond = GetSlot(thisDt, ISO_NANOSECOND);
      calendar = ConsolidateCalendars(GetSlot(this, CALENDAR), calendar);
      var timeZone = GetSlot(this, TIME_ZONE);
      var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
      var dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      var instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
      return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }, {
    key: "withPlainTime",
    value: function withPlainTime() {
      var temporalTimeParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var PlainTime = GetIntrinsic('%Temporal.PlainTime%');
      var temporalTime = temporalTimeParam == undefined ? new PlainTime() : ToTemporalTime(temporalTimeParam);
      var thisDt = dateTime(this);
      var year = GetSlot(thisDt, ISO_YEAR);
      var month = GetSlot(thisDt, ISO_MONTH);
      var day = GetSlot(thisDt, ISO_DAY);
      var calendar = GetSlot(this, CALENDAR);
      var hour = GetSlot(temporalTime, ISO_HOUR);
      var minute = GetSlot(temporalTime, ISO_MINUTE);
      var second = GetSlot(temporalTime, ISO_SECOND);
      var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
      var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
      var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
      var timeZone = GetSlot(this, TIME_ZONE);
      var PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
      var dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
      var instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
      return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }, {
    key: "withTimeZone",
    value: function withTimeZone(timeZoneParam) {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var timeZone = ToTemporalTimeZone(timeZoneParam);
      return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
    }
  }, {
    key: "withCalendar",
    value: function withCalendar(calendarParam) {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var calendar = ToTemporalCalendar(calendarParam);
      return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), GetSlot(this, TIME_ZONE), calendar);
    }
  }, {
    key: "add",
    value: function add(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var years = duration.years,
          months = duration.months,
          weeks = duration.weeks,
          days = duration.days,
          hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;
      var options = GetOptionsObject(optionsParam);
      var timeZone = GetSlot(this, TIME_ZONE);
      var calendar = GetSlot(this, CALENDAR);
      var epochNanoseconds = AddZonedDateTime(GetSlot(this, INSTANT), timeZone, calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options);
      return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
    }
  }, {
    key: "subtract",
    value: function subtract(temporalDurationLike) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var duration = ToLimitedTemporalDuration(temporalDurationLike);
      var years = duration.years,
          months = duration.months,
          weeks = duration.weeks,
          days = duration.days,
          hours = duration.hours,
          minutes = duration.minutes,
          seconds = duration.seconds,
          milliseconds = duration.milliseconds,
          microseconds = duration.microseconds,
          nanoseconds = duration.nanoseconds;
      var options = GetOptionsObject(optionsParam);
      var timeZone = GetSlot(this, TIME_ZONE);
      var calendar = GetSlot(this, CALENDAR);
      var epochNanoseconds = AddZonedDateTime(GetSlot(this, INSTANT), timeZone, calendar, -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, options);
      return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
    }
  }, {
    key: "until",
    value: function until(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalZonedDateTime(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarId = ToString(calendar);
      var otherCalendarId = ToString(otherCalendar);

      if (calendarId !== otherCalendarId) {
        throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
      var defaultLargestUnit = LargerOfTwoTemporalUnits('hour', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
      var ns1 = GetSlot(this, EPOCHNANOSECONDS);
      var ns2 = GetSlot(other, EPOCHNANOSECONDS);
      var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;

      if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
        // The user is only asking for a time difference, so return difference of instants.
        years = 0;
        months = 0;
        weeks = 0;
        days = 0;

        var _ES$DifferenceInstant = DifferenceInstant(ns1, ns2, roundingIncrement, smallestUnit, roundingMode);

        seconds = _ES$DifferenceInstant.seconds;
        milliseconds = _ES$DifferenceInstant.milliseconds;
        microseconds = _ES$DifferenceInstant.microseconds;
        nanoseconds = _ES$DifferenceInstant.nanoseconds;

        var _ES$BalanceDuration = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        hours = _ES$BalanceDuration.hours;
        minutes = _ES$BalanceDuration.minutes;
        seconds = _ES$BalanceDuration.seconds;
        milliseconds = _ES$BalanceDuration.milliseconds;
        microseconds = _ES$BalanceDuration.microseconds;
        nanoseconds = _ES$BalanceDuration.nanoseconds;
      } else {
        var timeZone = GetSlot(this, TIME_ZONE);

        if (!TimeZoneEquals(timeZone, GetSlot(other, TIME_ZONE))) {
          throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' " + 'or smaller because day lengths can vary between time zones due to DST or time zone offset changes.');
        }

        var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
          largestUnit: largestUnit
        });

        var _ES$DifferenceZonedDa = DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, untilOptions);

        years = _ES$DifferenceZonedDa.years;
        months = _ES$DifferenceZonedDa.months;
        weeks = _ES$DifferenceZonedDa.weeks;
        days = _ES$DifferenceZonedDa.days;
        hours = _ES$DifferenceZonedDa.hours;
        minutes = _ES$DifferenceZonedDa.minutes;
        seconds = _ES$DifferenceZonedDa.seconds;
        milliseconds = _ES$DifferenceZonedDa.milliseconds;
        microseconds = _ES$DifferenceZonedDa.microseconds;
        nanoseconds = _ES$DifferenceZonedDa.nanoseconds;

        var _ES$RoundDuration = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);

        years = _ES$RoundDuration.years;
        months = _ES$RoundDuration.months;
        weeks = _ES$RoundDuration.weeks;
        days = _ES$RoundDuration.days;
        hours = _ES$RoundDuration.hours;
        minutes = _ES$RoundDuration.minutes;
        seconds = _ES$RoundDuration.seconds;
        milliseconds = _ES$RoundDuration.milliseconds;
        microseconds = _ES$RoundDuration.microseconds;
        nanoseconds = _ES$RoundDuration.nanoseconds;

        var _ES$AdjustRoundedDura = AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);

        years = _ES$AdjustRoundedDura.years;
        months = _ES$AdjustRoundedDura.months;
        weeks = _ES$AdjustRoundedDura.weeks;
        days = _ES$AdjustRoundedDura.days;
        hours = _ES$AdjustRoundedDura.hours;
        minutes = _ES$AdjustRoundedDura.minutes;
        seconds = _ES$AdjustRoundedDura.seconds;
        milliseconds = _ES$AdjustRoundedDura.milliseconds;
        microseconds = _ES$AdjustRoundedDura.microseconds;
        nanoseconds = _ES$AdjustRoundedDura.nanoseconds;
      }

      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
  }, {
    key: "since",
    value: function since(otherParam) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalZonedDateTime(otherParam);
      var calendar = GetSlot(this, CALENDAR);
      var otherCalendar = GetSlot(other, CALENDAR);
      var calendarId = ToString(calendar);
      var otherCalendarId = ToString(otherCalendar);

      if (calendarId !== otherCalendarId) {
        throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
      }

      var options = GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
      var defaultLargestUnit = LargerOfTwoTemporalUnits('hour', smallestUnit);
      var largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
      ValidateTemporalUnitRange(largestUnit, smallestUnit);
      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      roundingMode = NegateTemporalRoundingMode(roundingMode);
      var roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
      var ns1 = GetSlot(this, EPOCHNANOSECONDS);
      var ns2 = GetSlot(other, EPOCHNANOSECONDS);
      var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;

      if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
        // The user is only asking for a time difference, so return difference of instants.
        years = 0;
        months = 0;
        weeks = 0;
        days = 0;

        var _ES$DifferenceInstant2 = DifferenceInstant(ns1, ns2, roundingIncrement, smallestUnit, roundingMode);

        seconds = _ES$DifferenceInstant2.seconds;
        milliseconds = _ES$DifferenceInstant2.milliseconds;
        microseconds = _ES$DifferenceInstant2.microseconds;
        nanoseconds = _ES$DifferenceInstant2.nanoseconds;

        var _ES$BalanceDuration2 = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);

        hours = _ES$BalanceDuration2.hours;
        minutes = _ES$BalanceDuration2.minutes;
        seconds = _ES$BalanceDuration2.seconds;
        milliseconds = _ES$BalanceDuration2.milliseconds;
        microseconds = _ES$BalanceDuration2.microseconds;
        nanoseconds = _ES$BalanceDuration2.nanoseconds;
      } else {
        var timeZone = GetSlot(this, TIME_ZONE);

        if (!TimeZoneEquals(timeZone, GetSlot(other, TIME_ZONE))) {
          throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' " + 'or smaller because day lengths can vary between time zones due to DST or time zone offset changes.');
        }

        var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
          largestUnit: largestUnit
        });

        var _ES$DifferenceZonedDa2 = DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, untilOptions);

        years = _ES$DifferenceZonedDa2.years;
        months = _ES$DifferenceZonedDa2.months;
        weeks = _ES$DifferenceZonedDa2.weeks;
        days = _ES$DifferenceZonedDa2.days;
        hours = _ES$DifferenceZonedDa2.hours;
        minutes = _ES$DifferenceZonedDa2.minutes;
        seconds = _ES$DifferenceZonedDa2.seconds;
        milliseconds = _ES$DifferenceZonedDa2.milliseconds;
        microseconds = _ES$DifferenceZonedDa2.microseconds;
        nanoseconds = _ES$DifferenceZonedDa2.nanoseconds;

        var _ES$RoundDuration2 = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);

        years = _ES$RoundDuration2.years;
        months = _ES$RoundDuration2.months;
        weeks = _ES$RoundDuration2.weeks;
        days = _ES$RoundDuration2.days;
        hours = _ES$RoundDuration2.hours;
        minutes = _ES$RoundDuration2.minutes;
        seconds = _ES$RoundDuration2.seconds;
        milliseconds = _ES$RoundDuration2.milliseconds;
        microseconds = _ES$RoundDuration2.microseconds;
        nanoseconds = _ES$RoundDuration2.nanoseconds;

        var _ES$AdjustRoundedDura2 = AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);

        years = _ES$AdjustRoundedDura2.years;
        months = _ES$AdjustRoundedDura2.months;
        weeks = _ES$AdjustRoundedDura2.weeks;
        days = _ES$AdjustRoundedDura2.days;
        hours = _ES$AdjustRoundedDura2.hours;
        minutes = _ES$AdjustRoundedDura2.minutes;
        seconds = _ES$AdjustRoundedDura2.seconds;
        milliseconds = _ES$AdjustRoundedDura2.milliseconds;
        microseconds = _ES$AdjustRoundedDura2.microseconds;
        nanoseconds = _ES$AdjustRoundedDura2.nanoseconds;
      }

      var Duration = GetIntrinsic('%Temporal.Duration%');
      return new Duration(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
    }
  }, {
    key: "round",
    value: function round(optionsParam) {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      if (optionsParam === undefined) throw new TypeError('options parameter is required');
      var options = typeof optionsParam === 'string' ? CreateOnePropObject('smallestUnit', optionsParam) : GetOptionsObject(optionsParam);
      var smallestUnit = ToSmallestTemporalUnit(options, undefined, ['year', 'month', 'week']);
      if (smallestUnit === undefined) throw new RangeError('smallestUnit is required');
      var roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
      var maximumIncrements = {
        day: 1,
        hour: 24,
        minute: 60,
        second: 60,
        millisecond: 1000,
        microsecond: 1000,
        nanosecond: 1000
      };
      var roundingIncrement = ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false); // first, round the underlying DateTime fields

      var dt = dateTime(this);
      var year = GetSlot(dt, ISO_YEAR);
      var month = GetSlot(dt, ISO_MONTH);
      var day = GetSlot(dt, ISO_DAY);
      var hour = GetSlot(dt, ISO_HOUR);
      var minute = GetSlot(dt, ISO_MINUTE);
      var second = GetSlot(dt, ISO_SECOND);
      var millisecond = GetSlot(dt, ISO_MILLISECOND);
      var microsecond = GetSlot(dt, ISO_MICROSECOND);
      var nanosecond = GetSlot(dt, ISO_NANOSECOND);
      var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
      var timeZone = GetSlot(this, TIME_ZONE);
      var calendar = GetSlot(this, CALENDAR);
      var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0);
      var instantStart = BuiltinTimeZoneGetInstantFor(timeZone, dtStart, 'compatible');
      var endNs = AddZonedDateTime(instantStart, timeZone, calendar, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
      var dayLengthNs = endNs.subtract(GetSlot(instantStart, EPOCHNANOSECONDS));

      if (dayLengthNs.isZero()) {
        throw new RangeError('cannot round a ZonedDateTime in a calendar with zero-length days');
      }

      var _ES$RoundISODateTime = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode, // Days are guaranteed to be shorter than Number.MAX_SAFE_INTEGER
      // (which can hold up to 104 days in nanoseconds)
      dayLengthNs.toJSNumber());

      year = _ES$RoundISODateTime.year;
      month = _ES$RoundISODateTime.month;
      day = _ES$RoundISODateTime.day;
      hour = _ES$RoundISODateTime.hour;
      minute = _ES$RoundISODateTime.minute;
      second = _ES$RoundISODateTime.second;
      millisecond = _ES$RoundISODateTime.millisecond;
      microsecond = _ES$RoundISODateTime.microsecond;
      nanosecond = _ES$RoundISODateTime.nanosecond;
      // Now reset all DateTime fields but leave the TimeZone. The offset will
      // also be retained if the new date/time values are still OK with the old
      // offset. Otherwise the offset will be changed to be compatible with the
      // new date/time values. If DST disambiguation is required, the `compatible`
      // disambiguation algorithm will be used.
      var offsetNs = GetOffsetNanosecondsFor(timeZone, GetSlot(this, INSTANT));
      var epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, 'option', offsetNs, timeZone, 'compatible', 'prefer',
      /* matchMinute = */
      false);
      return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, GetSlot(this, CALENDAR));
    }
  }, {
    key: "equals",
    value: function equals(otherParam) {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var other = ToTemporalZonedDateTime(otherParam);
      var one = GetSlot(this, EPOCHNANOSECONDS);
      var two = GetSlot(other, EPOCHNANOSECONDS);
      if (!bigInt(one).equals(two)) return false;
      if (!TimeZoneEquals(GetSlot(this, TIME_ZONE), GetSlot(other, TIME_ZONE))) return false;
      return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
  }, {
    key: "toString",
    value: function toString() {
      var optionsParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var options = GetOptionsObject(optionsParam);

      var _ES$ToSecondsStringPr = ToSecondsStringPrecision(options),
          precision = _ES$ToSecondsStringPr.precision,
          unit = _ES$ToSecondsStringPr.unit,
          increment = _ES$ToSecondsStringPr.increment;

      var roundingMode = ToTemporalRoundingMode(options, 'trunc');
      var showCalendar = ToShowCalendarOption(options);
      var showTimeZone = ToShowTimeZoneNameOption(options);
      var showOffset = ToShowOffsetOption(options);
      return TemporalZonedDateTimeToString(this, precision, showCalendar, showTimeZone, showOffset, {
        unit: unit,
        increment: increment,
        roundingMode: roundingMode
      });
    }
  }, {
    key: "toLocaleString",
    value: function toLocaleString() {
      var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return new DateTimeFormat(locales, options).format(this);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return TemporalZonedDateTimeToString(this, 'auto');
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      throw new TypeError('use compare() or equals() to compare Temporal.ZonedDateTime');
    }
  }, {
    key: "startOfDay",
    value: function startOfDay() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var dt = dateTime(this);
      var DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
      var calendar = GetSlot(this, CALENDAR);
      var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar);
      var timeZone = GetSlot(this, TIME_ZONE);
      var instant = BuiltinTimeZoneGetInstantFor(timeZone, dtStart, 'compatible');
      return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
  }, {
    key: "toInstant",
    value: function toInstant() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var TemporalInstant = GetIntrinsic('%Temporal.Instant%');
      return new TemporalInstant(GetSlot(this, EPOCHNANOSECONDS));
    }
  }, {
    key: "toPlainDate",
    value: function toPlainDate() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return TemporalDateTimeToDate(dateTime(this));
    }
  }, {
    key: "toPlainTime",
    value: function toPlainTime() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return TemporalDateTimeToTime(dateTime(this));
    }
  }, {
    key: "toPlainDateTime",
    value: function toPlainDateTime() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      return dateTime(this);
    }
  }, {
    key: "toPlainYearMonth",
    value: function toPlainYearMonth() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
      var fields = ToTemporalYearMonthFields(this, fieldNames);
      return YearMonthFromFields(calendar, fields);
    }
  }, {
    key: "toPlainMonthDay",
    value: function toPlainMonthDay() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var calendar = GetSlot(this, CALENDAR);
      var fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
      var fields = ToTemporalMonthDayFields(this, fieldNames);
      return MonthDayFromFields(calendar, fields);
    }
  }, {
    key: "getISOFields",
    value: function getISOFields() {
      if (!IsTemporalZonedDateTime(this)) throw new TypeError('invalid receiver');
      var dt = dateTime(this);
      var tz = GetSlot(this, TIME_ZONE);
      return {
        calendar: GetSlot(this, CALENDAR),
        isoDay: GetSlot(dt, ISO_DAY),
        isoHour: GetSlot(dt, ISO_HOUR),
        isoMicrosecond: GetSlot(dt, ISO_MICROSECOND),
        isoMillisecond: GetSlot(dt, ISO_MILLISECOND),
        isoMinute: GetSlot(dt, ISO_MINUTE),
        isoMonth: GetSlot(dt, ISO_MONTH),
        isoNanosecond: GetSlot(dt, ISO_NANOSECOND),
        isoSecond: GetSlot(dt, ISO_SECOND),
        isoYear: GetSlot(dt, ISO_YEAR),
        offset: BuiltinTimeZoneGetOffsetStringFor(tz, GetSlot(this, INSTANT)),
        timeZone: tz
      };
    }
  }], [{
    key: "from",
    value: function from(item) {
      var optionsParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var options = GetOptionsObject(optionsParam);

      if (IsTemporalZonedDateTime(item)) {
        ToTemporalOverflow(options); // validate and ignore

        ToTemporalDisambiguation(options);
        ToTemporalOffset(options, 'reject');
        return CreateTemporalZonedDateTime(GetSlot(item, EPOCHNANOSECONDS), GetSlot(item, TIME_ZONE), GetSlot(item, CALENDAR));
      }

      return ToTemporalZonedDateTime(item, options);
    }
  }, {
    key: "compare",
    value: function compare(oneParam, twoParam) {
      var one = ToTemporalZonedDateTime(oneParam);
      var two = ToTemporalZonedDateTime(twoParam);
      var ns1 = GetSlot(one, EPOCHNANOSECONDS);
      var ns2 = GetSlot(two, EPOCHNANOSECONDS);
      if (bigInt(ns1).lesser(ns2)) return -1;
      if (bigInt(ns1).greater(ns2)) return 1;
      return 0;
    }
  }]);

  return ZonedDateTime;
}();
MakeIntrinsicClass(ZonedDateTime, 'Temporal.ZonedDateTime');

function bigIntIfAvailable$1(wrapper) {
  return typeof globalThis.BigInt === 'undefined' ? wrapper : wrapper.value;
}

function dateTime(zdt) {
  return BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(zdt, TIME_ZONE), GetSlot(zdt, INSTANT), GetSlot(zdt, CALENDAR));
}

var temporal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Instant: Instant,
  Calendar: Calendar,
  PlainDate: PlainDate,
  PlainDateTime: PlainDateTime,
  Duration: Duration,
  PlainMonthDay: PlainMonthDay,
  Now: Now,
  PlainTime: PlainTime,
  TimeZone: TimeZone,
  PlainYearMonth: PlainYearMonth,
  ZonedDateTime: ZonedDateTime
});

function toTemporalInstant() {
  // Observable access to valueOf is not correct here, but unavoidable
  var epochNanoseconds = bigInt(+this).multiply(1e6);
  return new Instant(bigIntIfAvailable(epochNanoseconds));
}

function bigIntIfAvailable(wrapper) {
  return typeof globalThis.BigInt === 'undefined' ? wrapper : wrapper.value;
}

export { intl as Intl, temporal as Temporal, toTemporalInstant };
