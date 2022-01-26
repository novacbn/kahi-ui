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


import bigInt from 'big-integer';

const INTRINSICS = {};
const customUtilInspectFormatters = {
    ['Temporal.Duration'](depth, options) {
        const descr = options.stylize(`${this[Symbol.toStringTag]} <${this}>`, 'special');
        if (depth < 1)
            return descr;
        const entries = [];
        for (const prop of [
            'years',
            'months',
            'weeks',
            'days',
            'hours',
            'minutes',
            'seconds',
            'milliseconds',
            'microseconds',
            'nanoseconds'
        ]) {
            if (this[prop] !== 0)
                entries.push(`  ${prop}: ${options.stylize(this[prop], 'number')}`);
        }
        return descr + ' {\n' + entries.join(',\n') + '\n}';
    }
};
function defaultUtilInspectFormatter(depth, options) {
    return options.stylize(`${this[Symbol.toStringTag]} <${this}>`, 'special');
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
    for (const prop of Object.getOwnPropertyNames(Class)) {
        const desc = Object.getOwnPropertyDescriptor(Class, prop);
        if (!desc.configurable || !desc.enumerable)
            continue;
        desc.enumerable = false;
        Object.defineProperty(Class, prop, desc);
    }
    for (const prop of Object.getOwnPropertyNames(Class.prototype)) {
        const desc = Object.getOwnPropertyDescriptor(Class.prototype, prop);
        if (!desc.configurable || !desc.enumerable)
            continue;
        desc.enumerable = false;
        Object.defineProperty(Class.prototype, prop, desc);
    }
    DefineIntrinsic(name, Class);
    DefineIntrinsic(`${name}.prototype`, Class.prototype);
}
function DefineIntrinsic(name, value) {
    const key = `%${name}%`;
    if (INTRINSICS[key] !== undefined)
        throw new Error(`intrinsic ${name} already exists`);
    INTRINSICS[key] = value;
}
function GetIntrinsic(intrinsic) {
    return INTRINSICS[intrinsic];
}

// Instant
const EPOCHNANOSECONDS = 'slot-epochNanoSeconds';
// TimeZone
const TIMEZONE_ID = 'slot-timezone-identifier';
// DateTime, Date, Time, YearMonth, MonthDay
const ISO_YEAR = 'slot-year';
const ISO_MONTH = 'slot-month';
const ISO_DAY = 'slot-day';
const ISO_HOUR = 'slot-hour';
const ISO_MINUTE = 'slot-minute';
const ISO_SECOND = 'slot-second';
const ISO_MILLISECOND = 'slot-millisecond';
const ISO_MICROSECOND = 'slot-microsecond';
const ISO_NANOSECOND = 'slot-nanosecond';
const CALENDAR = 'slot-calendar';
// Date, YearMonth, and MonthDay all have the same slots, disambiguation needed:
const DATE_BRAND = 'slot-date-brand';
const YEAR_MONTH_BRAND = 'slot-year-month-brand';
const MONTH_DAY_BRAND = 'slot-month-day-brand';
// ZonedDateTime
const INSTANT = 'slot-cached-instant';
const TIME_ZONE = 'slot-time-zone';
// Duration
const YEARS = 'slot-years';
const MONTHS = 'slot-months';
const WEEKS = 'slot-weeks';
const DAYS = 'slot-days';
const HOURS = 'slot-hours';
const MINUTES = 'slot-minutes';
const SECONDS = 'slot-seconds';
const MILLISECONDS = 'slot-milliseconds';
const MICROSECONDS = 'slot-microseconds';
const NANOSECONDS = 'slot-nanoseconds';
// Calendar
const CALENDAR_ID = 'slot-calendar-identifier';
const slots = new WeakMap();
function CreateSlots(container) {
    slots.set(container, Object.create(null));
}
function GetSlots(container) {
    return slots.get(container);
}
function HasSlot(container, ...ids) {
    if (!container || 'object' !== typeof container)
        return false;
    const myslots = GetSlots(container);
    return !!myslots && ids.reduce((all, id) => all && id in myslots, true);
}
function GetSlot(container, id) {
    const value = GetSlots(container)[id];
    if (value === undefined)
        throw new TypeError(`Missing internal slot ${id}`);
    return value;
}
function SetSlot(container, id, value) {
    GetSlots(container)[id] = value;
}

const ArrayIncludes = Array.prototype.includes;
const ArrayPrototypePush$2 = Array.prototype.push;
const IntlDateTimeFormat$2 = globalThis.Intl.DateTimeFormat;
const MathAbs$1 = Math.abs;
const MathFloor$1 = Math.floor;
const ObjectAssign$2 = Object.assign;
const ObjectEntries = Object.entries;
const ObjectKeys = Object.keys;
const ReflectApply$2 = Reflect.apply;
const impl = {};
class Calendar {
    constructor(idParam) {
        // Note: if the argument is not passed, IsBuiltinCalendar("undefined") will fail. This check
        //       exists only to improve the error message.
        if (arguments.length < 1) {
            throw new RangeError('missing argument: id is required');
        }
        const id = ToString(idParam);
        if (!IsBuiltinCalendar(id))
            throw new RangeError(`invalid calendar identifier ${id}`);
        CreateSlots(this);
        SetSlot(this, CALENDAR_ID, id);
        {
            Object.defineProperty(this, '_repr_', {
                value: `${this[Symbol.toStringTag]} <${id}>`,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
    }
    get id() {
        return ToString(this);
    }
    dateFromFields(fields, optionsParam = undefined) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(fields))
            throw new TypeError('invalid fields');
        const options = GetOptionsObject(optionsParam);
        return impl[GetSlot(this, CALENDAR_ID)].dateFromFields(fields, options, this);
    }
    yearMonthFromFields(fields, optionsParam = undefined) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(fields))
            throw new TypeError('invalid fields');
        const options = GetOptionsObject(optionsParam);
        return impl[GetSlot(this, CALENDAR_ID)].yearMonthFromFields(fields, options, this);
    }
    monthDayFromFields(fields, optionsParam = undefined) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(fields))
            throw new TypeError('invalid fields');
        const options = GetOptionsObject(optionsParam);
        return impl[GetSlot(this, CALENDAR_ID)].monthDayFromFields(fields, options, this);
    }
    fields(fields) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const fieldsArray = [];
        const allowed = new Set([
            'year',
            'month',
            'monthCode',
            'day',
            'hour',
            'minute',
            'second',
            'millisecond',
            'microsecond',
            'nanosecond'
        ]);
        for (const name of fields) {
            if (typeof name !== 'string')
                throw new TypeError('invalid fields');
            if (!allowed.has(name))
                throw new RangeError(`invalid field name ${name}`);
            allowed.delete(name);
            ArrayPrototypePush$2.call(fieldsArray, name);
        }
        return impl[GetSlot(this, CALENDAR_ID)].fields(fieldsArray);
    }
    mergeFields(fields, additionalFields) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        return impl[GetSlot(this, CALENDAR_ID)].mergeFields(fields, additionalFields);
    }
    dateAdd(dateParam, durationParam, optionsParam = undefined) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const date = ToTemporalDate(dateParam);
        const duration = ToTemporalDuration(durationParam);
        const options = GetOptionsObject(optionsParam);
        const overflow = ToTemporalOverflow(options);
        const { days } = BalanceDuration(GetSlot(duration, DAYS), GetSlot(duration, HOURS), GetSlot(duration, MINUTES), GetSlot(duration, SECONDS), GetSlot(duration, MILLISECONDS), GetSlot(duration, MICROSECONDS), GetSlot(duration, NANOSECONDS), 'day');
        return impl[GetSlot(this, CALENDAR_ID)].dateAdd(date, GetSlot(duration, YEARS), GetSlot(duration, MONTHS), GetSlot(duration, WEEKS), days, overflow, this);
    }
    dateUntil(oneParam, twoParam, optionsParam = undefined) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const one = ToTemporalDate(oneParam);
        const two = ToTemporalDate(twoParam);
        const options = GetOptionsObject(optionsParam);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'], 'day');
        const { years, months, weeks, days } = impl[GetSlot(this, CALENDAR_ID)].dateUntil(one, two, largestUnit);
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    }
    year(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].year(date);
    }
    month(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (IsTemporalMonthDay(date))
            throw new TypeError('use monthCode on PlainMonthDay instead');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].month(date);
    }
    monthCode(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date) && !IsTemporalMonthDay(date))
            date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].monthCode(date);
    }
    day(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalMonthDay(date))
            date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].day(date);
    }
    era(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].era(date);
    }
    eraYear(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        return impl[GetSlot(this, CALENDAR_ID)].eraYear(date);
    }
    dayOfWeek(dateParam) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const date = ToTemporalDate(dateParam);
        return impl[GetSlot(this, CALENDAR_ID)].dayOfWeek(date);
    }
    dayOfYear(dateParam) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const date = ToTemporalDate(dateParam);
        return impl[GetSlot(this, CALENDAR_ID)].dayOfYear(date);
    }
    weekOfYear(dateParam) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const date = ToTemporalDate(dateParam);
        return impl[GetSlot(this, CALENDAR_ID)].weekOfYear(date);
    }
    daysInWeek(dateParam) {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        const date = ToTemporalDate(dateParam);
        return impl[GetSlot(this, CALENDAR_ID)].daysInWeek(date);
    }
    daysInMonth(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        // TODO: is the cast below (here and in other methods) safe?  What if it's
        // a PlainYearMonth?
        return impl[GetSlot(this, CALENDAR_ID)].daysInMonth(date);
    }
    daysInYear(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        // TODO: is the cast below (here and in other methods) safe?  What if it's
        // a PlainYearMonth?
        return impl[GetSlot(this, CALENDAR_ID)].daysInYear(date);
    }
    monthsInYear(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        // TODO: is the cast below (here and in other methods) safe?  What if it's
        // a PlainYearMonth?
        return impl[GetSlot(this, CALENDAR_ID)].monthsInYear(date);
    }
    inLeapYear(dateParam) {
        let date = dateParam;
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        if (!IsTemporalYearMonth(date))
            date = ToTemporalDate(date);
        // TODO: is the cast below (here and in other methods) safe?  What if it's
        // a PlainYearMonth?
        return impl[GetSlot(this, CALENDAR_ID)].inLeapYear(date);
    }
    toString() {
        if (!IsTemporalCalendar(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR_ID);
    }
    toJSON() {
        return ToString(this);
    }
    static from(item) {
        return ToTemporalCalendar(item);
    }
}
MakeIntrinsicClass(Calendar, 'Temporal.Calendar');
DefineIntrinsic('Temporal.Calendar.from', Calendar.from);
impl['iso8601'] = {
    dateFromFields(fieldsParam, options, calendar) {
        const overflow = ToTemporalOverflow(options);
        let fields = PrepareTemporalFields(fieldsParam, [
            ['day'],
            ['month', undefined],
            ['monthCode', undefined],
            ['year']
        ]);
        fields = resolveNonLunisolarMonth(fields);
        let { year, month, day } = fields;
        ({ year, month, day } = RegulateISODate(year, month, day, overflow));
        return CreateTemporalDate(year, month, day, calendar);
    },
    yearMonthFromFields(fieldsParam, options, calendar) {
        const overflow = ToTemporalOverflow(options);
        let fields = PrepareTemporalFields(fieldsParam, [
            ['month', undefined],
            ['monthCode', undefined],
            ['year']
        ]);
        fields = resolveNonLunisolarMonth(fields);
        let { year, month } = fields;
        ({ year, month } = RegulateISOYearMonth(year, month, overflow));
        return CreateTemporalYearMonth(year, month, calendar, /* referenceISODay = */ 1);
    },
    monthDayFromFields(fieldsParam, options, calendar) {
        const overflow = ToTemporalOverflow(options);
        let fields = PrepareTemporalFields(fieldsParam, [
            ['day'],
            ['month', undefined],
            ['monthCode', undefined],
            ['year', undefined]
        ]);
        if (fields.month !== undefined && fields.year === undefined && fields.monthCode === undefined) {
            throw new TypeError('either year or monthCode required with month');
        }
        const useYear = fields.monthCode === undefined;
        const referenceISOYear = 1972;
        fields = resolveNonLunisolarMonth(fields);
        let { month, day, year } = fields;
        ({ month, day } = RegulateISODate(useYear ? year : referenceISOYear, month, day, overflow));
        return CreateTemporalMonthDay(month, day, calendar, referenceISOYear);
    },
    fields(fields) {
        return fields;
    },
    mergeFields(fields, additionalFields) {
        const merged = {};
        for (const nextKey of ObjectKeys(fields)) {
            if (nextKey === 'month' || nextKey === 'monthCode')
                continue;
            merged[nextKey] = fields[nextKey];
        }
        const newKeys = ObjectKeys(additionalFields);
        for (const nextKey of newKeys) {
            merged[nextKey] = additionalFields[nextKey];
        }
        if (!ArrayIncludes.call(newKeys, 'month') && !ArrayIncludes.call(newKeys, 'monthCode')) {
            const { month, monthCode } = fields;
            if (month !== undefined)
                merged.month = month;
            if (monthCode !== undefined)
                merged.monthCode = monthCode;
        }
        return merged;
    },
    dateAdd(date, years, months, weeks, days, overflow, calendar) {
        let year = GetSlot(date, ISO_YEAR);
        let month = GetSlot(date, ISO_MONTH);
        let day = GetSlot(date, ISO_DAY);
        ({ year, month, day } = AddISODate(year, month, day, years, months, weeks, days, overflow));
        return CreateTemporalDate(year, month, day, calendar);
    },
    dateUntil(one, two, largestUnit) {
        return DifferenceISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY), largestUnit);
    },
    year(date) {
        return GetSlot(date, ISO_YEAR);
    },
    era() {
        return undefined;
    },
    eraYear() {
        return undefined;
    },
    month(date) {
        return GetSlot(date, ISO_MONTH);
    },
    monthCode(date) {
        return buildMonthCode(GetSlot(date, ISO_MONTH));
    },
    day(date) {
        return GetSlot(date, ISO_DAY);
    },
    dayOfWeek(date) {
        return DayOfWeek(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
    },
    dayOfYear(date) {
        return DayOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
    },
    weekOfYear(date) {
        return WeekOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
    },
    daysInWeek() {
        return 7;
    },
    daysInMonth(date) {
        return ISODaysInMonth(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH));
    },
    daysInYear(dateParam) {
        let date = dateParam;
        if (!HasSlot(date, ISO_YEAR))
            date = ToTemporalDate(date);
        return LeapYear(GetSlot(date, ISO_YEAR)) ? 366 : 365;
    },
    monthsInYear() {
        return 12;
    },
    inLeapYear(dateParam) {
        let date = dateParam;
        if (!HasSlot(date, ISO_YEAR))
            date = ToTemporalDate(date);
        return LeapYear(GetSlot(date, ISO_YEAR));
    }
};
// Note: other built-in calendars than iso8601 are not part of the Temporal
// proposal for ECMA-262. These calendars will be standardized as part of
// ECMA-402.
function monthCodeNumberPart(monthCode) {
    if (!monthCode.startsWith('M')) {
        throw new RangeError(`Invalid month code: ${monthCode}.  Month codes must start with M.`);
    }
    const month = +monthCode.slice(1);
    if (isNaN(month))
        throw new RangeError(`Invalid month code: ${monthCode}`);
    return month;
}
function buildMonthCode(month, leap = false) {
    return `M${month.toString().padStart(2, '0')}${leap ? 'L' : ''}`;
}
/**
 * Safely merge a month, monthCode pair into an integer month.
 * If both are present, make sure they match.
 * This logic doesn't work for lunisolar calendars!
 * */
function resolveNonLunisolarMonth(calendarDate, overflow = undefined, monthsPerYear = 12) {
    let { month, monthCode } = calendarDate;
    if (monthCode === undefined) {
        if (month === undefined)
            throw new TypeError('Either month or monthCode are required');
        // The ISO calendar uses the default (undefined) value because it does
        // constrain/reject after this method returns. Non-ISO calendars, however,
        // rely on this function to constrain/reject out-of-range `month` values.
        if (overflow === 'reject')
            RejectToRange(month, 1, monthsPerYear);
        if (overflow === 'constrain')
            month = ConstrainToRange(month, 1, monthsPerYear);
        monthCode = buildMonthCode(month);
    }
    else {
        const numberPart = monthCodeNumberPart(monthCode);
        if (month !== undefined && month !== numberPart) {
            throw new RangeError(`monthCode ${monthCode} and month ${month} must match if both are present`);
        }
        if (monthCode !== buildMonthCode(numberPart)) {
            throw new RangeError(`Invalid month code: ${monthCode}`);
        }
        month = numberPart;
        if (month < 1 || month > monthsPerYear)
            throw new RangeError(`Invalid monthCode: ${monthCode}`);
    }
    return { ...calendarDate, month, monthCode };
}
/**
 * This prototype implementation of non-ISO calendars makes many repeated calls
 * to Intl APIs which may be slow (e.g. >0.2ms). This trivial cache will speed
 * up these repeat accesses. Each cache instance is associated (via a WeakMap)
 * to a specific Temporal object, which speeds up multiple calendar calls on the
 * same Temporal object instance.  No invalidation or pruning is necessary
 * because each object's cache is thrown away when the object is GC-ed.
 */
class OneObjectCache {
    constructor(cacheToClone = undefined) {
        this.map = new Map();
        this.calls = 0;
        this.hits = 0;
        this.misses = 0;
        this.now = globalThis.performance ? globalThis.performance.now() : Date.now();
        if (cacheToClone !== undefined) {
            let i = 0; // TODO why was this originally cacheToClone.length ?
            for (const entry of cacheToClone.map.entries()) {
                if (++i > OneObjectCache.MAX_CACHE_ENTRIES)
                    break;
                this.map.set(...entry);
            }
        }
    }
    get(key) {
        const result = this.map.get(key);
        if (result) {
            this.hits++;
            this.report();
        }
        this.calls++;
        return result;
    }
    set(key, value) {
        this.map.set(key, value);
        this.misses++;
        this.report();
    }
    report() {
        /*
        if (this.calls === 0) return;
        const ms = (globalThis.performance ? globalThis.performance.now() : Date.now()) - this.now;
        const hitRate = ((100 * this.hits) / this.calls).toFixed(0);
        console.log(`${this.calls} calls in ${ms.toFixed(2)}ms. Hits: ${this.hits} (${hitRate}%). Misses: ${this.misses}.`);
        */
    }
    setObject(obj) {
        if (OneObjectCache.objectMap.get(obj))
            throw new RangeError('object already cached');
        OneObjectCache.objectMap.set(obj, this);
        this.report();
    }
    /**
     * Returns a WeakMap-backed cache that's used to store expensive results
     * that are associated with a particular Temporal object instance.
     *
     * @param obj - object to associate with the cache
     */
    static getCacheForObject(obj) {
        let cache = OneObjectCache.objectMap.get(obj);
        if (!cache) {
            cache = new OneObjectCache();
            OneObjectCache.objectMap.set(obj, cache);
        }
        return cache;
    }
}
OneObjectCache.objectMap = new WeakMap();
OneObjectCache.MAX_CACHE_ENTRIES = 1000;
function toUtcIsoDateString({ isoYear, isoMonth, isoDay }) {
    const yearString = ISOYearString(isoYear);
    const monthString = ISODateTimePartString(isoMonth);
    const dayString = ISODateTimePartString(isoDay);
    return `${yearString}-${monthString}-${dayString}T00:00Z`;
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
const nonIsoHelperBase = {
    // The properties and methods below here should be the same for all lunar/lunisolar calendars.
    getFormatter() {
        // `new Intl.DateTimeFormat()` is amazingly slow and chews up RAM. Per
        // https://bugs.chromium.org/p/v8/issues/detail?id=6528#c4, we cache one
        // DateTimeFormat instance per calendar. Caching is lazy so we only pay for
        // calendars that are used. Note that the nonIsoHelperBase object is spread
        // into each each calendar's implementation before any cache is created, so
        // each calendar gets its own separate cached formatter.
        if (typeof this.formatter === 'undefined') {
            this.formatter = new IntlDateTimeFormat$2(`en-US-u-ca-${this.id}`, {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                era: this.eraLength,
                timeZone: 'UTC'
            });
        }
        return this.formatter;
    },
    isoToCalendarDate(isoDate, cache) {
        const { year: isoYear, month: isoMonth, day: isoDay } = isoDate;
        const key = JSON.stringify({ func: 'isoToCalendarDate', isoYear, isoMonth, isoDay, id: this.id });
        const cached = cache.get(key);
        if (cached)
            return cached;
        const dateTimeFormat = this.getFormatter();
        let parts, isoString;
        try {
            isoString = toUtcIsoDateString({ isoYear, isoMonth, isoDay });
            parts = dateTimeFormat.formatToParts(new Date(isoString));
        }
        catch (e) {
            throw new RangeError(`Invalid ISO date: ${JSON.stringify({ isoYear, isoMonth, isoDay })}`);
        }
        const result = {};
        for (let { type, value } of parts) {
            if (type === 'year')
                result.eraYear = +value;
            // TODO: remove this type annotation when this value gets into TS lib types
            if (type === 'relatedYear')
                result.eraYear = +value;
            if (type === 'month') {
                const matches = /^([-0-9.]+)(.*?)$/.exec(value);
                if (!matches || matches.length != 3)
                    throw new RangeError(`Unexpected month: ${value}`);
                result.month = +matches[1];
                if (result.month < 1) {
                    throw new RangeError(`Invalid month ${value} from ${isoString}[u-ca-${this.id}]` +
                        ' (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)');
                }
                if (result.month > 13) {
                    throw new RangeError(`Invalid month ${value} from ${isoString}[u-ca-${this.id}]` +
                        ' (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)');
                }
                if (matches[2])
                    result.monthExtra = matches[2];
            }
            if (type === 'day')
                result.day = +value;
            if (this.hasEra && type === 'era' && value != null && value !== '') {
                // The convention for Temporal era values is lowercase, so following
                // that convention in this prototype. Punctuation is removed, accented
                // letters are normalized, and spaces are replaced with dashes.
                // E.g.: "ERA0" => "era0", "Before R.O.C." => "before-roc", "En’ō" => "eno"
                // The call to normalize() and the replacement regex deals with era
                // names that contain non-ASCII characters like Japanese eras. Also
                // ignore extra content in parentheses like JPN era date ranges.
                value = value.split(' (')[0];
                result.era = value
                    .normalize('NFD')
                    .replace(/[^-0-9 \p{L}]/gu, '')
                    .replace(' ', '-')
                    .toLowerCase();
            }
        }
        if (result.eraYear === undefined) {
            // Node 12 has outdated ICU data that lacks the `relatedYear` field in the
            // output of Intl.DateTimeFormat.formatToParts.
            throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
        }
        // Translate eras that may be handled differently by Temporal vs. by Intl
        // (e.g. Japanese pre-Meiji eras). See #526 for details.
        if (this.reviseIntlEra) {
            const { era, eraYear } = this.reviseIntlEra(result, isoDate);
            result.era = era;
            result.eraYear = eraYear;
        }
        if (this.checkIcuBugs)
            this.checkIcuBugs(result, isoDate);
        const calendarDate = this.adjustCalendarDate(result, cache, 'constrain', true);
        if (calendarDate.year === undefined)
            throw new RangeError(`Missing year converting ${JSON.stringify(isoDate)}`);
        if (calendarDate.month === undefined)
            throw new RangeError(`Missing month converting ${JSON.stringify(isoDate)}`);
        if (calendarDate.day === undefined)
            throw new RangeError(`Missing day converting ${JSON.stringify(isoDate)}`);
        cache.set(key, calendarDate);
        // Also cache the reverse mapping
        ['constrain', 'reject'].forEach((overflow) => {
            const keyReverse = JSON.stringify({
                func: 'calendarToIsoDate',
                year: calendarDate.year,
                month: calendarDate.month,
                day: calendarDate.day,
                overflow,
                id: this.id
            });
            cache.set(keyReverse, isoDate);
        });
        return calendarDate;
    },
    validateCalendarDate(calendarDate) {
        const { era, month, year, day, eraYear, monthCode, monthExtra } = calendarDate;
        // When there's a suffix (e.g. "5bis" for a leap month in Chinese calendar)
        // the derived class must deal with it.
        if (monthExtra !== undefined)
            throw new RangeError('Unexpected `monthExtra` value');
        if (year === undefined && eraYear === undefined)
            throw new TypeError('year or eraYear is required');
        if (month === undefined && monthCode === undefined)
            throw new TypeError('month or monthCode is required');
        if (day === undefined)
            throw new RangeError('Missing day');
        if (monthCode !== undefined) {
            if (typeof monthCode !== 'string') {
                throw new RangeError(`monthCode must be a string, not ${typeof monthCode}`);
            }
            if (!/^M([01]?\d)(L?)$/.test(monthCode))
                throw new RangeError(`Invalid monthCode: ${monthCode}`);
        }
        if (this.constantEra) {
            if (era !== undefined && era !== this.constantEra) {
                throw new RangeError(`era must be ${this.constantEra}, not ${era}`);
            }
            if (eraYear !== undefined && year !== undefined && eraYear !== year) {
                throw new RangeError(`eraYear ${eraYear} does not match year ${year}`);
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
    adjustCalendarDate(calendarDateParam, cache, overflow /*, fromLegacyDate = false */) {
        if (this.calendarType === 'lunisolar')
            throw new RangeError('Override required for lunisolar calendars');
        let calendarDate = calendarDateParam;
        this.validateCalendarDate(calendarDate);
        const largestMonth = this.monthsInYear(calendarDate, cache);
        let { month, year, eraYear, monthCode } = calendarDate;
        // For calendars that always use the same era, set it here so that derived
        // calendars won't need to implement this method simply to set the era.
        if (this.constantEra) {
            // year and eraYear always match when there's only one possible era
            if (year === undefined)
                year = eraYear;
            if (eraYear === undefined)
                eraYear = year;
            calendarDate = { ...calendarDate, era: this.constantEra, year, eraYear };
        }
        ({ month, monthCode } = resolveNonLunisolarMonth(calendarDate, overflow, largestMonth));
        return { ...calendarDate, month, monthCode };
    },
    regulateMonthDayNaive(calendarDate, overflow, cache) {
        const largestMonth = this.monthsInYear(calendarDate, cache);
        let { month, day } = calendarDate;
        if (overflow === 'reject') {
            RejectToRange(month, 1, largestMonth);
            RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
        }
        else {
            month = ConstrainToRange(month, 1, largestMonth);
            day = ConstrainToRange(day, 1, this.maximumMonthLength({ ...calendarDate, month }));
        }
        return { ...calendarDate, month, day };
    },
    calendarToIsoDate(dateParam, overflow = 'constrain', cache) {
        const originalDate = dateParam;
        // First, normalize the calendar date to ensure that (year, month, day)
        // are all present, converting monthCode and eraYear if needed.
        let date = this.adjustCalendarDate(dateParam, cache, overflow, false);
        // Fix obviously out-of-bounds values. Values that are valid generally, but
        // not in this particular year, may not be caught here for some calendars.
        // If so, these will be handled lower below.
        date = this.regulateMonthDayNaive(date, overflow, cache);
        const { year, month, day } = date;
        const key = JSON.stringify({ func: 'calendarToIsoDate', year, month, day, overflow, id: this.id });
        let cached = cache.get(key);
        if (cached)
            return cached;
        // If YMD are present in the input but the input has been constrained
        // already, then cache both the original value and the constrained value.
        let keyOriginal;
        if (originalDate.year !== undefined &&
            originalDate.month !== undefined &&
            originalDate.day !== undefined &&
            (originalDate.year !== date.year || originalDate.month !== date.month || originalDate.day !== date.day)) {
            keyOriginal = JSON.stringify({
                func: 'calendarToIsoDate',
                year: originalDate.year,
                month: originalDate.month,
                day: originalDate.day,
                overflow,
                id: this.id
            });
            cached = cache.get(keyOriginal);
            if (cached)
                return cached;
        }
        // First, try to roughly guess the result
        let isoEstimate = this.estimateIsoDate({ year, month, day });
        const calculateSameMonthResult = (diffDays) => {
            // If the estimate is in the same year & month as the target, then we can
            // calculate the result exactly and short-circuit any additional logic.
            // This optimization assumes that months are continuous. It would break if
            // a calendar skipped days, like the Julian->Gregorian switchover. But the
            // only ICU calendars that currently skip days (japanese/roc/buddhist) is
            // a bug (https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)
            // that's currently detected by `checkIcuBugs()` which will throw. So
            // this optimization should be safe for all ICU calendars.
            let testIsoEstimate = this.addDaysIso(isoEstimate, diffDays);
            if (date.day > this.minimumMonthLength(date)) {
                // There's a chance that the calendar date is out of range. Throw or
                // constrain if so.
                let testCalendarDate = this.isoToCalendarDate(testIsoEstimate, cache);
                while (testCalendarDate.month !== month || testCalendarDate.year !== year) {
                    if (overflow === 'reject') {
                        throw new RangeError(`day ${day} does not exist in month ${month} of year ${year}`);
                    }
                    // Back up a day at a time until we're not hanging over the month end
                    testIsoEstimate = this.addDaysIso(testIsoEstimate, -1);
                    testCalendarDate = this.isoToCalendarDate(testIsoEstimate, cache);
                }
            }
            return testIsoEstimate;
        };
        let sign = 0;
        let roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
        let diff = simpleDateDiff(date, roundtripEstimate);
        if (diff.years !== 0 || diff.months !== 0 || diff.days !== 0) {
            const diffTotalDaysEstimate = diff.years * 365 + diff.months * 30 + diff.days;
            isoEstimate = this.addDaysIso(isoEstimate, diffTotalDaysEstimate);
            roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
            diff = simpleDateDiff(date, roundtripEstimate);
            if (diff.years === 0 && diff.months === 0) {
                isoEstimate = calculateSameMonthResult(diff.days);
            }
            else {
                sign = this.compareCalendarDates(date, roundtripEstimate);
            }
        }
        // If the initial guess is not in the same month, then then bisect the
        // distance to the target, starting with 8 days per step.
        let increment = 8;
        let maybeConstrained = false;
        while (sign) {
            isoEstimate = this.addDaysIso(isoEstimate, sign * increment);
            const oldRoundtripEstimate = roundtripEstimate;
            roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
            const oldSign = sign;
            sign = this.compareCalendarDates(date, roundtripEstimate);
            if (sign) {
                diff = simpleDateDiff(date, roundtripEstimate);
                if (diff.years === 0 && diff.months === 0) {
                    isoEstimate = calculateSameMonthResult(diff.days);
                    // Signal the loop condition that there's a match.
                    sign = 0;
                    // If the calendar day is larger than the minimal length for this
                    // month, then it might be larger than the actual length of the month.
                    // So we won't cache it as the correct calendar date for this ISO
                    // date.
                    maybeConstrained = date.day > this.minimumMonthLength(date);
                }
                else if (oldSign && sign !== oldSign) {
                    if (increment > 1) {
                        // If the estimate overshot the target, try again with a smaller increment
                        // in the reverse direction.
                        increment /= 2;
                    }
                    else {
                        // Increment is 1, and neither the previous estimate nor the new
                        // estimate is correct. The only way that can happen is if the
                        // original date was an invalid value that will be constrained or
                        // rejected here.
                        if (overflow === 'reject') {
                            throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({ ...originalDate })}`);
                        }
                        else {
                            // To constrain, pick the earliest value
                            const order = this.compareCalendarDates(roundtripEstimate, oldRoundtripEstimate);
                            // If current value is larger, then back up to the previous value.
                            if (order > 0)
                                isoEstimate = this.addDaysIso(isoEstimate, -1);
                            maybeConstrained = true;
                            sign = 0;
                        }
                    }
                }
            }
        }
        cache.set(key, isoEstimate);
        if (keyOriginal)
            cache.set(keyOriginal, isoEstimate);
        if (date.year === undefined ||
            date.month === undefined ||
            date.day === undefined ||
            date.monthCode === undefined ||
            (this.hasEra && (date.era === undefined || date.eraYear === undefined))) {
            throw new RangeError('Unexpected missing property');
        }
        if (!maybeConstrained) {
            // Also cache the reverse mapping
            const keyReverse = JSON.stringify({
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
    temporalToCalendarDate(date, cache) {
        const isoDate = { year: GetSlot(date, ISO_YEAR), month: GetSlot(date, ISO_MONTH), day: GetSlot(date, ISO_DAY) };
        const result = this.isoToCalendarDate(isoDate, cache);
        return result;
    },
    compareCalendarDates(date1Param, date2Param) {
        // `date1` and `date2` are already records. The calls below simply validate
        // that all three required fields are present.
        const date1 = PrepareTemporalFields(date1Param, [['day'], ['month'], ['year']]);
        const date2 = PrepareTemporalFields(date2Param, [['day'], ['month'], ['year']]);
        if (date1.year !== date2.year)
            return ComparisonResult(date1.year - date2.year);
        if (date1.month !== date2.month)
            return ComparisonResult(date1.month - date2.month);
        if (date1.day !== date2.day)
            return ComparisonResult(date1.day - date2.day);
        return 0;
    },
    /** Ensure that a calendar date actually exists. If not, return the closest earlier date. */
    regulateDate(calendarDate, overflow = 'constrain', cache) {
        const isoDate = this.calendarToIsoDate(calendarDate, overflow, cache);
        return this.isoToCalendarDate(isoDate, cache);
    },
    addDaysIso(isoDate, days) {
        const added = AddISODate(isoDate.year, isoDate.month, isoDate.day, 0, 0, 0, days, 'constrain');
        return added;
    },
    addDaysCalendar(calendarDate, days, cache) {
        const isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
        const addedIso = this.addDaysIso(isoDate, days);
        const addedCalendar = this.isoToCalendarDate(addedIso, cache);
        return addedCalendar;
    },
    addMonthsCalendar(calendarDateParam, months, overflow, cache) {
        let calendarDate = calendarDateParam;
        const { day } = calendarDate;
        for (let i = 0, absMonths = MathAbs$1(months); i < absMonths; i++) {
            const { month } = calendarDate;
            const oldCalendarDate = calendarDate;
            const days = months < 0
                ? -Math.max(day, this.daysInPreviousMonth(calendarDate, cache))
                : this.daysInMonth(calendarDate, cache);
            const isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
            let addedIso = this.addDaysIso(isoDate, days, cache);
            calendarDate = this.isoToCalendarDate(addedIso, cache);
            // Normally, we can advance one month by adding the number of days in the
            // current month. However, if we're at the end of the current month and
            // the next month has fewer days, then we rolled over to the after-next
            // month. Below we detect this condition and back up until we're back in
            // the desired month.
            if (months > 0) {
                const monthsInOldYear = this.monthsInYear(oldCalendarDate, cache);
                while (calendarDate.month - 1 !== month % monthsInOldYear) {
                    addedIso = this.addDaysIso(addedIso, -1, cache);
                    calendarDate = this.isoToCalendarDate(addedIso, cache);
                }
            }
            if (calendarDate.day !== day) {
                // try to retain the original day-of-month, if possible
                calendarDate = this.regulateDate({ ...calendarDate, day }, 'constrain', cache);
            }
        }
        if (overflow === 'reject' && calendarDate.day !== day) {
            throw new RangeError(`Day ${day} does not exist in resulting calendar month`);
        }
        return calendarDate;
    },
    addCalendar(calendarDate, { years = 0, months = 0, weeks = 0, days = 0 }, overflow, cache) {
        const { year, month, day } = calendarDate;
        const addedMonths = this.addMonthsCalendar({ year: year + years, month, day }, months, overflow, cache);
        const initialDays = days + weeks * 7;
        const addedDays = this.addDaysCalendar(addedMonths, initialDays, cache);
        return addedDays;
    },
    untilCalendar(calendarOne, calendarTwo, largestUnit, cache) {
        let days = 0;
        let weeks = 0;
        let months = 0;
        let years = 0;
        switch (largestUnit) {
            case 'day':
                days = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
                break;
            case 'week': {
                const totalDays = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
                days = totalDays % 7;
                weeks = (totalDays - days) / 7;
                break;
            }
            case 'month':
            case 'year': {
                const diffYears = calendarTwo.year - calendarOne.year;
                const diffMonths = calendarTwo.month - calendarOne.month;
                const diffDays = calendarTwo.day - calendarOne.day;
                const sign = this.compareCalendarDates(calendarTwo, calendarOne);
                if (largestUnit === 'year' && diffYears) {
                    const isOneFurtherInYear = diffMonths * sign < 0 || (diffMonths === 0 && diffDays * sign < 0);
                    years = isOneFurtherInYear ? diffYears - sign : diffYears;
                }
                const yearsAdded = years ? this.addCalendar(calendarOne, { years }, 'constrain', cache) : calendarOne;
                // Now we have less than one year remaining. Add one month at a time
                // until we go over the target, then back up one month and calculate
                // remaining days and weeks.
                let current;
                let next = yearsAdded;
                do {
                    months += sign;
                    current = next;
                    next = this.addMonthsCalendar(current, sign, 'constrain', cache);
                    if (next.day !== calendarOne.day) {
                        // In case the day was constrained down, try to un-constrain it
                        next = this.regulateDate({ ...next, day: calendarOne.day }, 'constrain', cache);
                    }
                } while (this.compareCalendarDates(calendarTwo, next) * sign >= 0);
                months -= sign; // correct for loop above which overshoots by 1
                const remainingDays = this.calendarDaysUntil(current, calendarTwo, cache);
                days = remainingDays;
                break;
            }
        }
        return { years, months, weeks, days };
    },
    daysInMonth(calendarDate, cache) {
        // Add enough days to roll over to the next month. One we're in the next
        // month, we can calculate the length of the current month. NOTE: This
        // algorithm assumes that months are continuous. It would break if a
        // calendar skipped days, like the Julian->Gregorian switchover. But the
        // only ICU calendars that currently skip days (japanese/roc/buddhist) is a
        // bug (https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)
        // that's currently detected by `checkIcuBugs()` which will throw. So this
        // code should be safe for all ICU calendars.
        const { day } = calendarDate;
        const max = this.maximumMonthLength(calendarDate);
        const min = this.minimumMonthLength(calendarDate);
        // easiest case: we already know the month length if min and max are the same.
        if (min === max)
            return min;
        // Add enough days to get into the next month, without skipping it
        const increment = day <= max - min ? max : min;
        const isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
        const addedIsoDate = this.addDaysIso(isoDate, increment);
        const addedCalendarDate = this.isoToCalendarDate(addedIsoDate, cache);
        // Now back up to the last day of the original month
        const endOfMonthIso = this.addDaysIso(addedIsoDate, -addedCalendarDate.day);
        const endOfMonthCalendar = this.isoToCalendarDate(endOfMonthIso, cache);
        return endOfMonthCalendar.day;
    },
    daysInPreviousMonth(calendarDate, cache) {
        const { day, month, year } = calendarDate;
        // Check to see if we already know the month length, and return it if so
        const previousMonthYear = month > 1 ? year : year - 1;
        let previousMonthDate = { year: previousMonthYear, month, day: 1 };
        const previousMonth = month > 1 ? month - 1 : this.monthsInYear(previousMonthDate, cache);
        previousMonthDate = { ...previousMonthDate, month: previousMonth };
        const min = this.minimumMonthLength(previousMonthDate);
        const max = this.maximumMonthLength(previousMonthDate);
        if (min === max)
            return max;
        const isoDate = this.calendarToIsoDate(calendarDate, 'constrain', cache);
        const lastDayOfPreviousMonthIso = this.addDaysIso(isoDate, -day);
        const lastDayOfPreviousMonthCalendar = this.isoToCalendarDate(lastDayOfPreviousMonthIso, cache);
        return lastDayOfPreviousMonthCalendar.day;
    },
    startOfCalendarYear(calendarDate) {
        return { year: calendarDate.year, month: 1, day: 1 };
    },
    startOfCalendarMonth(calendarDate) {
        return { year: calendarDate.year, month: calendarDate.month, day: 1 };
    },
    calendarDaysUntil(calendarOne, calendarTwo, cache) {
        const oneIso = this.calendarToIsoDate(calendarOne, 'constrain', cache);
        const twoIso = this.calendarToIsoDate(calendarTwo, 'constrain', cache);
        return this.isoDaysUntil(oneIso, twoIso);
    },
    isoDaysUntil(oneIso, twoIso) {
        const duration = DifferenceISODate(oneIso.year, oneIso.month, oneIso.day, twoIso.year, twoIso.month, twoIso.day, 'day');
        return duration.days;
    },
    // The short era format works for all calendars except Japanese, which will
    // override.
    eraLength: 'short',
    // All built-in calendars except Chinese/Dangi and Hebrew use an era
    hasEra: true,
    monthDayFromFields(fields, overflow, cache) {
        let { year, month, monthCode, day, era, eraYear } = fields;
        if (monthCode === undefined) {
            if (year === undefined && (era === undefined || eraYear === undefined)) {
                throw new TypeError('`monthCode`, `year`, or `era` and `eraYear` is required');
            }
            ({ monthCode, year } = this.adjustCalendarDate({ year, month, monthCode, day, era, eraYear }, cache, overflow));
        }
        let isoYear, isoMonth, isoDay;
        let closestCalendar, closestIso;
        // Look backwards starting from the calendar year of 1972-01-01 up to 100
        // calendar years to find a year that has this month and day. Normal months
        // and days will match immediately, but for leap days and leap months we may
        // have to look for a while.
        const startDateIso = { year: 1972, month: 1, day: 1 };
        const { year: calendarYear } = this.isoToCalendarDate(startDateIso, cache);
        for (let i = 0; i < 100; i++) {
            const testCalendarDate = this.adjustCalendarDate({ day, monthCode, year: calendarYear - i }, cache);
            const isoDate = this.calendarToIsoDate(testCalendarDate, 'constrain', cache);
            const roundTripCalendarDate = this.isoToCalendarDate(isoDate, cache);
            ({ year: isoYear, month: isoMonth, day: isoDay } = isoDate);
            if (roundTripCalendarDate.monthCode === monthCode && roundTripCalendarDate.day === day) {
                return { month: isoMonth, day: isoDay, year: isoYear };
            }
            else if (overflow === 'constrain') {
                // non-ISO constrain algorithm tries to find the closest date in a matching month
                if (closestCalendar === undefined ||
                    (roundTripCalendarDate.monthCode === closestCalendar.monthCode &&
                        roundTripCalendarDate.day > closestCalendar.day)) {
                    closestCalendar = roundTripCalendarDate;
                    closestIso = isoDate;
                }
            }
        }
        if (overflow === 'constrain' && closestIso !== undefined)
            return closestIso;
        throw new RangeError(`No recent ${this.id} year with monthCode ${monthCode} and day ${day}`);
    }
};
const helperHebrew = ObjectAssign$2({}, nonIsoHelperBase, {
    id: 'hebrew',
    calendarType: 'lunisolar',
    inLeapYear(calendarDate /*, cache */) {
        const { year } = calendarDate;
        // FYI: In addition to adding a month in leap years, the Hebrew calendar
        // also has per-year changes to the number of days of Heshvan and Kislev.
        // Given that these can be calculated by counting the number of days in
        // those months, I assume that these DO NOT need to be exposed as
        // Hebrew-only prototype fields or methods.
        return (7 * year + 1) % 19 < 7;
    },
    monthsInYear(calendarDate) {
        return this.inLeapYear(calendarDate) ? 13 : 12;
    },
    minimumMonthLength(calendarDate) {
        return this.minMaxMonthLength(calendarDate, 'min');
    },
    maximumMonthLength(calendarDate) {
        return this.minMaxMonthLength(calendarDate, 'max');
    },
    minMaxMonthLength(calendarDate, minOrMax) {
        const { month, year } = calendarDate;
        const monthCode = this.getMonthCode(year, month);
        const monthInfo = ObjectEntries(this.months).find((m) => m[1].monthCode === monthCode);
        if (monthInfo === undefined)
            throw new RangeError(`unmatched Hebrew month: ${month}`);
        const daysInMonth = monthInfo[1].days;
        return typeof daysInMonth === 'number' ? daysInMonth : daysInMonth[minOrMax];
    },
    /** Take a guess at what ISO date a particular calendar date corresponds to */
    estimateIsoDate(calendarDate) {
        const { year } = calendarDate;
        return { year: year - 3760, month: 1, day: 1 };
    },
    months: {
        Tishri: { leap: 1, regular: 1, monthCode: 'M01', days: 30 },
        Heshvan: { leap: 2, regular: 2, monthCode: 'M02', days: { min: 29, max: 30 } },
        Kislev: { leap: 3, regular: 3, monthCode: 'M03', days: { min: 29, max: 30 } },
        Tevet: { leap: 4, regular: 4, monthCode: 'M04', days: 29 },
        Shevat: { leap: 5, regular: 5, monthCode: 'M05', days: 30 },
        Adar: { leap: undefined, regular: 6, monthCode: 'M06', days: 29 },
        'Adar I': { leap: 6, regular: undefined, monthCode: 'M05L', days: 30 },
        'Adar II': { leap: 7, regular: undefined, monthCode: 'M06', days: 29 },
        Nisan: { leap: 8, regular: 7, monthCode: 'M07', days: 30 },
        Iyar: { leap: 9, regular: 8, monthCode: 'M08', days: 29 },
        Sivan: { leap: 10, regular: 9, monthCode: 'M09', days: 30 },
        Tamuz: { leap: 11, regular: 10, monthCode: 'M10', days: 29 },
        Av: { leap: 12, regular: 11, monthCode: 'M11', days: 30 },
        Elul: { leap: 13, regular: 12, monthCode: 'M12', days: 29 }
    },
    getMonthCode(year, month) {
        if (this.inLeapYear({ year })) {
            return month === 6 ? buildMonthCode(5, true) : buildMonthCode(month < 6 ? month : month - 1);
        }
        else {
            return buildMonthCode(month);
        }
    },
    adjustCalendarDate(calendarDate, cache, overflow = 'constrain', fromLegacyDate = false) {
        let { year, eraYear, month, monthCode, day, monthExtra } = calendarDate;
        if (year === undefined)
            year = eraYear;
        if (eraYear === undefined)
            eraYear = year;
        if (fromLegacyDate) {
            // In Pre Node-14 V8, DateTimeFormat.formatToParts `month: 'numeric'`
            // output returns the numeric equivalent of `month` as a string, meaning
            // that `'6'` in a leap year is Adar I, while `'6'` in a non-leap year
            // means Adar. In this case, `month` will already be correct and no action
            // is needed. However, in Node 14 and later formatToParts returns the name
            // of the Hebrew month (e.g. "Tevet"), so we'll need to look up the
            // correct `month` using the string name as a key.
            if (monthExtra) {
                const monthInfo = this.months[monthExtra];
                if (!monthInfo)
                    throw new RangeError(`Unrecognized month from formatToParts: ${monthExtra}`);
                month = this.inLeapYear({ year }) ? monthInfo.leap : monthInfo.regular;
            }
            monthCode = this.getMonthCode(year, month);
            const result = { year, month, day, era: undefined, eraYear, monthCode };
            return result;
        }
        else {
            // When called without input coming from legacy Date output, simply ensure
            // that all fields are present.
            this.validateCalendarDate(calendarDate);
            if (month === undefined) {
                if (monthCode.endsWith('L')) {
                    if (monthCode !== 'M05L') {
                        throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${monthCode}`);
                    }
                    month = 6;
                    if (!this.inLeapYear({ year })) {
                        if (overflow === 'reject') {
                            throw new RangeError(`Hebrew monthCode M05L is invalid in year ${year} which is not a leap year`);
                        }
                        else {
                            // constrain to last day of previous month (Av)
                            month = 5;
                            day = 30;
                            monthCode = 'M05';
                        }
                    }
                }
                else {
                    month = monthCodeNumberPart(monthCode);
                    // if leap month is before this one, the month index is one more than the month code
                    if (this.inLeapYear({ year }) && month > 6)
                        month++;
                    const largestMonth = this.monthsInYear({ year });
                    if (month < 1 || month > largestMonth)
                        throw new RangeError(`Invalid monthCode: ${monthCode}`);
                }
            }
            else {
                if (overflow === 'reject') {
                    RejectToRange(month, 1, this.monthsInYear({ year }));
                    RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
                }
                else {
                    month = ConstrainToRange(month, 1, this.monthsInYear({ year }));
                    day = ConstrainToRange(day, 1, this.maximumMonthLength({ ...calendarDate, month }));
                }
                if (monthCode === undefined) {
                    monthCode = this.getMonthCode(year, month);
                }
                else {
                    const calculatedMonthCode = this.getMonthCode(year, month);
                    if (calculatedMonthCode !== monthCode) {
                        throw new RangeError(`monthCode ${monthCode} doesn't correspond to month ${month} in Hebrew year ${year}`);
                    }
                }
            }
            return { ...calendarDate, day, month, monthCode, year, eraYear };
        }
    },
    // All built-in calendars except Chinese/Dangi and Hebrew use an era
    hasEra: false
});
/**
 * For Temporal purposes, the Islamic calendar is simple because it's always the
 * same 12 months in the same order.
 */
const helperIslamic = ObjectAssign$2({}, nonIsoHelperBase, {
    id: 'islamic',
    calendarType: 'lunar',
    inLeapYear(calendarDate, cache) {
        // In leap years, the 12th month has 30 days. In non-leap years: 29.
        const days = this.daysInMonth({ year: calendarDate.year, month: 12, day: 1 }, cache);
        return days === 30;
    },
    monthsInYear( /* calendarYear, cache */) {
        return 12;
    },
    minimumMonthLength: ( /* calendarDate */) => 29,
    maximumMonthLength: ( /* calendarDate */) => 30,
    DAYS_PER_ISLAMIC_YEAR: 354 + 11 / 30,
    DAYS_PER_ISO_YEAR: 365.2425,
    constantEra: 'ah',
    estimateIsoDate(calendarDate) {
        const { year } = this.adjustCalendarDate(calendarDate);
        return { year: MathFloor$1((year * this.DAYS_PER_ISLAMIC_YEAR) / this.DAYS_PER_ISO_YEAR) + 622, month: 1, day: 1 };
    }
});
const helperPersian = ObjectAssign$2({}, nonIsoHelperBase, {
    id: 'persian',
    calendarType: 'solar',
    inLeapYear(calendarDate, cache) {
        // Same logic (count days in the last month) for Persian as for Islamic,
        // even though Persian is solar and Islamic is lunar.
        return helperIslamic.inLeapYear(calendarDate, cache);
    },
    monthsInYear( /* calendarYear, cache */) {
        return 12;
    },
    minimumMonthLength(calendarDate) {
        const { month } = calendarDate;
        if (month === 12)
            return 29;
        return month <= 6 ? 31 : 30;
    },
    maximumMonthLength(calendarDate) {
        const { month } = calendarDate;
        if (month === 12)
            return 30;
        return month <= 6 ? 31 : 30;
    },
    constantEra: 'ap',
    estimateIsoDate(calendarDate) {
        const { year } = this.adjustCalendarDate(calendarDate);
        return { year: year + 621, month: 1, day: 1 };
    }
});
const helperIndian = ObjectAssign$2({}, nonIsoHelperBase, {
    id: 'indian',
    calendarType: 'solar',
    inLeapYear(calendarDate /*, cache*/) {
        // From https://en.wikipedia.org/wiki/Indian_national_calendar:
        // Years are counted in the Saka era, which starts its year 0 in the year 78
        // of the Common Era. To determine leap years, add 78 to the Saka year – if
        // the result is a leap year in the Gregorian calendar, then the Saka year
        // is a leap year as well.
        return isGregorianLeapYear(calendarDate.year + 78);
    },
    monthsInYear( /* calendarYear, cache */) {
        return 12;
    },
    minimumMonthLength(calendarDate) {
        return this.getMonthInfo(calendarDate).length;
    },
    maximumMonthLength(calendarDate) {
        return this.getMonthInfo(calendarDate).length;
    },
    constantEra: 'saka',
    // Indian months always start at the same well-known Gregorian month and
    // day. So this conversion is easy and fast. See
    // https://en.wikipedia.org/wiki/Indian_national_calendar
    months: {
        1: { length: 30, month: 3, day: 22, leap: { length: 31, month: 3, day: 21 } },
        2: { length: 31, month: 4, day: 21 },
        3: { length: 31, month: 5, day: 22 },
        4: { length: 31, month: 6, day: 22 },
        5: { length: 31, month: 7, day: 23 },
        6: { length: 31, month: 8, day: 23 },
        7: { length: 30, month: 9, day: 23 },
        8: { length: 30, month: 10, day: 23 },
        9: { length: 30, month: 11, day: 22 },
        10: { length: 30, month: 12, day: 22 },
        11: { length: 30, month: 1, nextYear: true, day: 21 },
        12: { length: 30, month: 2, nextYear: true, day: 20 }
    },
    getMonthInfo(calendarDate) {
        const { month } = calendarDate;
        let monthInfo = this.months[month];
        if (monthInfo === undefined)
            throw new RangeError(`Invalid month: ${month}`);
        if (this.inLeapYear(calendarDate) && monthInfo.leap)
            monthInfo = monthInfo.leap;
        return monthInfo;
    },
    estimateIsoDate(calendarDateParam) {
        // FYI, this "estimate" is always the exact ISO date, which makes the Indian
        // calendar fast!
        const calendarDate = this.adjustCalendarDate(calendarDateParam);
        const monthInfo = this.getMonthInfo(calendarDate);
        const isoYear = calendarDate.year + 78 + (monthInfo.nextYear ? 1 : 0);
        const isoMonth = monthInfo.month;
        const isoDay = monthInfo.day;
        const isoDate = AddISODate(isoYear, isoMonth, isoDay, 0, 0, 0, calendarDate.day - 1, 'constrain');
        return isoDate;
    },
    // https://bugs.chromium.org/p/v8/issues/detail?id=10529 causes Intl's Indian
    // calendar output to fail for all dates before 0001-01-01 ISO.  For example,
    // in Node 12 0000-01-01 is calculated as 6146/12/-583 instead of 10/11/-79 as
    // expected.
    vulnerableToBceBug: new Date('0000-01-01T00:00Z').toLocaleDateString('en-US-u-ca-indian', { timeZone: 'UTC' }) !== '10/11/-79 Saka',
    checkIcuBugs(calendarDate, isoDate) {
        if (this.vulnerableToBceBug && isoDate.year < 1) {
            throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01` +
                ' (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)');
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
    let eras = erasParam;
    if (eras.length === 0) {
        throw new RangeError('Invalid era data: eras are required');
    }
    if (eras.length === 1 && eras[0].reverseOf) {
        throw new RangeError('Invalid era data: anchor era cannot count years backwards');
    }
    if (eras.length === 1 && !eras[0].name) {
        throw new RangeError('Invalid era data: at least one named era is required');
    }
    if (eras.filter((e) => e.reverseOf != null).length > 1) {
        throw new RangeError('Invalid era data: only one era can count years backwards');
    }
    // Find the "anchor era" which is the era used for (era-less) `year`. Reversed
    // eras can never be anchors. The era without an `anchorEpoch` property is the
    // anchor.
    let anchorEra;
    eras.forEach((e) => {
        if (e.isAnchor || (!e.anchorEpoch && !e.reverseOf)) {
            if (anchorEra)
                throw new RangeError('Invalid era data: cannot have multiple anchor eras');
            anchorEra = e;
            e.anchorEpoch = { year: e.hasYearZero ? 0 : 1 };
        }
        else if (!e.name) {
            throw new RangeError('If era name is blank, it must be the anchor era');
        }
    });
    // If the era name is undefined, then it's an anchor that doesn't interact
    // with eras at all. For example, Japanese `year` is always the same as ISO
    // `year`.  So this "era" is the anchor era but isn't used for era matching.
    // Strip it from the list that's returned.
    eras = eras.filter((e) => e.name);
    eras.forEach((e) => {
        // Some eras are mirror images of another era e.g. B.C. is the reverse of A.D.
        // Replace the string-valued "reverseOf" property with the actual era object
        // that's reversed.
        const { reverseOf } = e;
        if (reverseOf) {
            const reversedEra = eras.find((era) => era.name === reverseOf);
            if (reversedEra === undefined)
                throw new RangeError(`Invalid era data: unmatched reverseOf era: ${reverseOf}`);
            e.reverseOf = reversedEra;
            e.anchorEpoch = reversedEra.anchorEpoch;
            e.isoEpoch = reversedEra.isoEpoch;
        }
        if (e.anchorEpoch.month === undefined)
            e.anchorEpoch.month = 1;
        if (e.anchorEpoch.day === undefined)
            e.anchorEpoch.day = 1;
    });
    // Ensure that the latest epoch is first in the array. This lets us try to
    // match eras in index order, with the last era getting the remaining older
    // years. Any reverse-signed era must be at the end.
    eras.sort((e1, e2) => {
        if (e1.reverseOf)
            return 1;
        if (e2.reverseOf)
            return -1;
        return e2.isoEpoch.year - e1.isoEpoch.year;
    });
    // If there's a reversed era, then the one before it must be the era that's
    // being reversed.
    const lastEraReversed = eras[eras.length - 1].reverseOf;
    if (lastEraReversed) {
        if (lastEraReversed !== eras[eras.length - 2])
            throw new RangeError('Invalid era data: invalid reverse-sign era');
    }
    // Finally, add a "genericName" property in the format "era{n} where `n` is
    // zero-based index, with the oldest era being zero. This format is used by
    // older versions of ICU data.
    eras.forEach((e, i) => {
        e.genericName = `era${eras.length - 1 - i}`;
    });
    return { eras: eras, anchorEra: (anchorEra || eras[0]) };
}
function isGregorianLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
/** Base for all Gregorian-like calendars. */
const makeHelperGregorian = (id, originalEras) => {
    const { eras, anchorEra } = adjustEras(originalEras);
    const helperGregorian = ObjectAssign$2({}, nonIsoHelperBase, {
        id,
        eras,
        anchorEra,
        calendarType: 'solar',
        inLeapYear(calendarDate /*, cache */) {
            const { year } = this.estimateIsoDate(calendarDate);
            return isGregorianLeapYear(year);
        },
        monthsInYear( /* calendarDate */) {
            return 12;
        },
        minimumMonthLength(calendarDate) {
            const { month } = calendarDate;
            if (month === 2)
                return this.inLeapYear(calendarDate) ? 29 : 28;
            return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
        },
        maximumMonthLength(calendarDate) {
            return this.minimumMonthLength(calendarDate);
        },
        /** Fill in missing parts of the (year, era, eraYear) tuple */
        completeEraYear(calendarDate) {
            const checkField = (name, value) => {
                const currentValue = calendarDate[name];
                if (currentValue != null && currentValue != value) {
                    throw new RangeError(`Input ${name} ${currentValue} doesn't match calculated value ${value}`);
                }
            };
            const eraFromYear = (year) => {
                let eraYear;
                const adjustedCalendarDate = { ...calendarDate, year };
                const matchingEra = this.eras.find((e, i) => {
                    if (i === this.eras.length - 1) {
                        if (e.reverseOf) {
                            // This is a reverse-sign era (like BCE) which must be the oldest
                            // era. Count years backwards.
                            if (year > 0)
                                throw new RangeError(`Signed year ${year} is invalid for era ${e.name}`);
                            eraYear = e.anchorEpoch.year - year;
                            return true;
                        }
                        // last era always gets all "leftover" (older than epoch) years,
                        // so no need for a comparison like below.
                        eraYear = year - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
                        return true;
                    }
                    const comparison = nonIsoHelperBase.compareCalendarDates(adjustedCalendarDate, e.anchorEpoch);
                    if (comparison >= 0) {
                        eraYear = year - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
                        return true;
                    }
                    return false;
                });
                if (!matchingEra)
                    throw new RangeError(`Year ${year} was not matched by any era`);
                return { eraYear, era: matchingEra.name };
            };
            let { year, eraYear, era } = calendarDate;
            if (year != null) {
                ({ eraYear, era } = eraFromYear(year));
                checkField('era', era);
                checkField('eraYear', eraYear);
            }
            else if (eraYear != null) {
                const matchingEra = era === undefined ? undefined : this.eras.find((e) => e.name === era || e.genericName === era);
                if (!matchingEra)
                    throw new RangeError(`Era ${era} (ISO year ${eraYear}) was not matched by any era`);
                if (eraYear < 1 && matchingEra.reverseOf) {
                    throw new RangeError(`Years in ${era} era must be positive, not ${year}`);
                }
                if (matchingEra.reverseOf) {
                    year = matchingEra.anchorEpoch.year - eraYear;
                }
                else {
                    year = eraYear + matchingEra.anchorEpoch.year - (matchingEra.hasYearZero ? 0 : 1);
                }
                checkField('year', year);
                // We'll accept dates where the month/day is earlier than the start of
                // the era or after its end as long as it's in the same year. If that
                // happens, we'll adjust the era/eraYear pair to be the correct era for
                // the `year`.
                ({ eraYear, era } = eraFromYear(year));
            }
            else {
                throw new RangeError('Either `year` or `eraYear` and `era` are required');
            }
            return { ...calendarDate, year, eraYear, era };
        },
        adjustCalendarDate(calendarDateParam, cache, overflow /*, fromLegacyDate = false */) {
            let calendarDate = calendarDateParam;
            // Because this is not a lunisolar calendar, it's safe to convert monthCode to a number
            const { month, monthCode } = calendarDate;
            if (month === undefined)
                calendarDate = { ...calendarDate, month: monthCodeNumberPart(monthCode) };
            this.validateCalendarDate(calendarDate);
            calendarDate = this.completeEraYear(calendarDate);
            // TODO this can become `super` later.
            calendarDate = ReflectApply$2(nonIsoHelperBase.adjustCalendarDate, this, [calendarDate, cache, overflow]);
            return calendarDate;
        },
        estimateIsoDate(calendarDateParam) {
            const calendarDate = this.adjustCalendarDate(calendarDateParam);
            const { year, month, day } = calendarDate;
            const { anchorEra } = this;
            const isoYearEstimate = year + anchorEra.isoEpoch.year - (anchorEra.hasYearZero ? 0 : 1);
            return RegulateISODate(isoYearEstimate, month, day, 'constrain');
        },
        // Several calendars based on the Gregorian calendar use Julian dates (not
        // proleptic Gregorian dates) before the Julian switchover in Oct 1582. See
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1173158.
        v8IsVulnerableToJulianBug: new Date('+001001-01-01T00:00Z')
            .toLocaleDateString('en-US-u-ca-japanese', { timeZone: 'UTC' })
            .startsWith('12'),
        calendarIsVulnerableToJulianBug: false,
        checkIcuBugs(calendarDate, isoDate) {
            if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug) {
                const beforeJulianSwitch = CompareISODate(isoDate.year, isoDate.month, isoDate.day, 1582, 10, 15) < 0;
                if (beforeJulianSwitch) {
                    throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 1582-10-15` +
                        ' (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)');
                }
            }
        }
    });
    return helperGregorian;
};
const makeHelperOrthodox = (id, originalEras) => {
    const base = makeHelperGregorian(id, originalEras);
    return ObjectAssign$2(base, {
        inLeapYear(calendarDate /*, cache */) {
            // Leap years happen one year before the Julian leap year. Note that this
            // calendar is based on the Julian calendar which has a leap year every 4
            // years, unlike the Gregorian calendar which doesn't have leap years on
            // years divisible by 100 except years divisible by 400.
            //
            // Note that we're assuming that leap years in before-epoch times match
            // how leap years are defined now. This is probably not accurate but I'm
            // not sure how better to do it.
            const { year } = calendarDate;
            return (year + 1) % 4 === 0;
        },
        monthsInYear( /* calendarDate */) {
            return 13;
        },
        minimumMonthLength(calendarDate) {
            const { month } = calendarDate;
            // Ethiopian/Coptic calendars have 12 30-day months and an extra 5-6 day 13th month.
            if (month === 13)
                return this.inLeapYear(calendarDate) ? 6 : 5;
            return 30;
        },
        maximumMonthLength(calendarDate) {
            return this.minimumMonthLength(calendarDate);
        }
    });
};
// `coptic` and `ethiopic` calendars are very similar to `ethioaa` calendar,
// with the following differences:
// - Coptic uses BCE-like positive numbers for years before its epoch (the other
//   two use negative year numbers before epoch)
// - Coptic has a different epoch date
// - Ethiopic has an additional second era that starts at the same date as the
//   zero era of ethioaa.
const helperEthioaa = makeHelperOrthodox('ethioaa', [{ name: 'era0', isoEpoch: { year: -5492, month: 7, day: 17 } }]);
const helperCoptic = makeHelperOrthodox('coptic', [
    { name: 'era1', isoEpoch: { year: 284, month: 8, day: 29 } },
    { name: 'era0', reverseOf: 'era1' }
]);
// Anchor is currently the older era to match ethioaa, but should it be the newer era?
// See https://github.com/tc39/ecma402/issues/534 for discussion.
const helperEthiopic = makeHelperOrthodox('ethiopic', [
    { name: 'era0', isoEpoch: { year: -5492, month: 7, day: 17 } },
    { name: 'era1', isoEpoch: { year: 8, month: 8, day: 27 }, anchorEpoch: { year: 5501 } }
]);
const helperRoc = ObjectAssign$2({}, makeHelperGregorian('roc', [
    { name: 'minguo', isoEpoch: { year: 1912, month: 1, day: 1 } },
    { name: 'before-roc', reverseOf: 'minguo' }
]), {
    calendarIsVulnerableToJulianBug: true
});
const helperBuddhist = ObjectAssign$2({}, makeHelperGregorian('buddhist', [{ name: 'be', hasYearZero: true, isoEpoch: { year: -543, month: 1, day: 1 } }]), {
    calendarIsVulnerableToJulianBug: true
});
const helperGregory = ObjectAssign$2({}, makeHelperGregorian('gregory', [
    { name: 'ce', isoEpoch: { year: 1, month: 1, day: 1 } },
    { name: 'bce', reverseOf: 'ce' }
]), {
    reviseIntlEra(calendarDate /*, isoDate*/) {
        let { era, eraYear } = calendarDate;
        if (era === 'bc')
            era = 'bce';
        if (era === 'ad')
            era = 'ce';
        return { era, eraYear };
    }
});
const helperJapanese = ObjectAssign$2({}, 
// NOTE: Only the 5 modern eras (Meiji and later) are included. For dates
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
makeHelperGregorian('japanese', [
    // The Japanese calendar `year` is just the ISO year, because (unlike other
    // ICU calendars) there's no obvious "default era", we use the ISO year.
    { name: 'reiwa', isoEpoch: { year: 2019, month: 5, day: 1 }, anchorEpoch: { year: 2019, month: 5, day: 1 } },
    { name: 'heisei', isoEpoch: { year: 1989, month: 1, day: 8 }, anchorEpoch: { year: 1989, month: 1, day: 8 } },
    { name: 'showa', isoEpoch: { year: 1926, month: 12, day: 25 }, anchorEpoch: { year: 1926, month: 12, day: 25 } },
    { name: 'taisho', isoEpoch: { year: 1912, month: 7, day: 30 }, anchorEpoch: { year: 1912, month: 7, day: 30 } },
    { name: 'meiji', isoEpoch: { year: 1868, month: 9, day: 8 }, anchorEpoch: { year: 1868, month: 9, day: 8 } },
    { name: 'ce', isoEpoch: { year: 1, month: 1, day: 1 } },
    { name: 'bce', reverseOf: 'ce' }
]), {
    // The last 3 Japanese eras confusingly return only one character in the
    // default "short" era, so need to use the long format.
    eraLength: 'long',
    calendarIsVulnerableToJulianBug: true,
    reviseIntlEra(calendarDate, isoDate) {
        const { era, eraYear } = calendarDate;
        const { year: isoYear } = isoDate;
        if (this.eras.find((e) => e.name === era))
            return { era, eraYear };
        return isoYear < 1 ? { era: 'bce', eraYear: 1 - isoYear } : { era: 'ce', eraYear: isoYear };
    }
});
const helperChinese = ObjectAssign$2({}, nonIsoHelperBase, {
    id: 'chinese',
    calendarType: 'lunisolar',
    inLeapYear(calendarDate, cache) {
        const months = this.getMonthList(calendarDate.year, cache);
        return ObjectEntries(months).length === 13;
    },
    monthsInYear(calendarDate, cache) {
        return this.inLeapYear(calendarDate, cache) ? 13 : 12;
    },
    minimumMonthLength: ( /* calendarDate */) => 29,
    maximumMonthLength: ( /* calendarDate */) => 30,
    getMonthList(calendarYear, cache) {
        if (calendarYear === undefined) {
            throw new TypeError('Missing year');
        }
        const key = JSON.stringify({ func: 'getMonthList', calendarYear, id: this.id });
        const cached = cache.get(key);
        if (cached)
            return cached;
        const dateTimeFormat = this.getFormatter();
        const getCalendarDate = (isoYear, daysPastFeb1) => {
            const isoStringFeb1 = toUtcIsoDateString({ isoYear, isoMonth: 2, isoDay: 1 });
            const legacyDate = new Date(isoStringFeb1);
            // Now add the requested number of days, which may wrap to the next month.
            legacyDate.setUTCDate(daysPastFeb1 + 1);
            const newYearGuess = dateTimeFormat.formatToParts(legacyDate);
            const calendarMonthString = newYearGuess.find((tv) => tv.type === 'month').value;
            const calendarDay = +newYearGuess.find((tv) => tv.type === 'day').value;
            let calendarYearToVerify = newYearGuess.find((tv) => tv.type === 'relatedYear');
            if (calendarYearToVerify !== undefined) {
                calendarYearToVerify = +calendarYearToVerify.value;
            }
            else {
                // Node 12 has outdated ICU data that lacks the `relatedYear` field in the
                // output of Intl.DateTimeFormat.formatToParts.
                throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
            }
            return { calendarMonthString, calendarDay, calendarYearToVerify };
        };
        // First, find a date close to Chinese New Year. Feb 17 will either be in
        // the first month or near the end of the last month of the previous year.
        let isoDaysDelta = 17;
        let { calendarMonthString, calendarDay, calendarYearToVerify } = getCalendarDate(calendarYear, isoDaysDelta);
        // If we didn't guess the first month correctly, add (almost in some months)
        // a lunar month
        if (calendarMonthString !== '1') {
            isoDaysDelta += 29;
            ({ calendarMonthString, calendarDay } = getCalendarDate(calendarYear, isoDaysDelta));
        }
        // Now back up to near the start of the first month, but not too near that
        // off-by-one issues matter.
        isoDaysDelta -= calendarDay - 5;
        const result = {}; // TODO: type the month list result
        let monthIndex = 1;
        let oldCalendarDay;
        let oldMonthString;
        let done = false;
        do {
            ({ calendarMonthString, calendarDay, calendarYearToVerify } = getCalendarDate(calendarYear, isoDaysDelta));
            if (oldCalendarDay) {
                result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
            }
            if (calendarYearToVerify !== calendarYear) {
                done = true;
            }
            else {
                result[calendarMonthString] = { monthIndex: monthIndex++ };
                // Move to the next month. Because months are sometimes 29 days, the day of the
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
    estimateIsoDate(calendarDate) {
        const { year, month } = calendarDate;
        return { year, month: month >= 12 ? 12 : month + 1, day: 1 };
    },
    adjustCalendarDate(calendarDate, cache, overflow = 'constrain', fromLegacyDate = false) {
        let { year, month, monthExtra, day, monthCode, eraYear } = calendarDate;
        if (fromLegacyDate) {
            // Legacy Date output returns a string that's an integer with an optional
            // "bis" suffix used only by the Chinese/Dangi calendar to indicate a leap
            // month. Below we'll normalize the output.
            year = eraYear;
            if (monthExtra && monthExtra !== 'bis')
                throw new RangeError(`Unexpected leap month suffix: ${monthExtra}`);
            const monthCode = buildMonthCode(month, monthExtra !== undefined);
            const monthString = `${month}${monthExtra || ''}`;
            const months = this.getMonthList(year, cache);
            const monthInfo = months[monthString];
            if (monthInfo === undefined)
                throw new RangeError(`Unmatched month ${monthString} in Chinese year ${year}`);
            month = monthInfo.monthIndex;
            return { year, month, day, era: undefined, eraYear, monthCode };
        }
        else {
            // When called without input coming from legacy Date output,
            // simply ensure that all fields are present.
            this.validateCalendarDate(calendarDate);
            if (year === undefined)
                year = eraYear;
            if (eraYear === undefined)
                eraYear = year;
            if (month === undefined) {
                const months = this.getMonthList(year, cache);
                let numberPart = monthCode.replace('L', 'bis').slice(1);
                if (numberPart[0] === '0')
                    numberPart = numberPart.slice(1);
                let monthInfo = months[numberPart];
                month = monthInfo && monthInfo.monthIndex;
                // If this leap month isn't present in this year, constrain down to the last day of the previous month.
                if (month === undefined &&
                    monthCode.endsWith('L') &&
                    !['M01L', 'M12L', 'M13L'].includes(monthCode) &&
                    overflow === 'constrain') {
                    let withoutML = monthCode.slice(1, -1);
                    if (withoutML[0] === '0')
                        withoutML = withoutML.slice(1);
                    monthInfo = months[withoutML];
                    if (monthInfo) {
                        ({ daysInMonth: day, monthIndex: month } = monthInfo);
                        monthCode = buildMonthCode(withoutML);
                    }
                }
                if (month === undefined) {
                    throw new RangeError(`Unmatched month ${monthCode} in Chinese year ${year}`);
                }
            }
            else if (monthCode === undefined) {
                const months = this.getMonthList(year, cache);
                const monthEntries = ObjectEntries(months);
                const largestMonth = monthEntries.length;
                if (overflow === 'reject') {
                    RejectToRange(month, 1, largestMonth);
                    RejectToRange(day, 1, this.maximumMonthLength());
                }
                else {
                    month = ConstrainToRange(month, 1, largestMonth);
                    day = ConstrainToRange(day, 1, this.maximumMonthLength());
                }
                const matchingMonthEntry = monthEntries.find(([, v]) => v.monthIndex === month);
                if (matchingMonthEntry === undefined) {
                    throw new RangeError(`Invalid month ${month} in Chinese year ${year}`);
                }
                monthCode = buildMonthCode(matchingMonthEntry[0].replace('bis', ''), matchingMonthEntry[0].indexOf('bis') !== -1);
            }
            else {
                // Both month and monthCode are present. Make sure they don't conflict.
                const months = this.getMonthList(year, cache);
                let numberPart = monthCode.replace('L', 'bis').slice(1);
                if (numberPart[0] === '0')
                    numberPart = numberPart.slice(1);
                const monthInfo = months[numberPart];
                if (!monthInfo)
                    throw new RangeError(`Unmatched monthCode ${monthCode} in Chinese year ${year}`);
                if (month !== monthInfo.monthIndex) {
                    throw new RangeError(`monthCode ${monthCode} doesn't correspond to month ${month} in Chinese year ${year}`);
                }
            }
            return { ...calendarDate, year, eraYear, month, monthCode, day };
        }
    },
    // All built-in calendars except Chinese/Dangi and Hebrew use an era
    hasEra: false
});
// Dangi (Korean) calendar has same implementation as Chinese
const helperDangi = ObjectAssign$2({}, { ...helperChinese, id: 'dangi' });
/**
 * Common implementation of all non-ISO calendars.
 * Per-calendar id and logic live in `id` and `helper` properties attached later.
 * This split allowed an easy separation between code that was similar between
 * ISO and non-ISO implementations vs. code that was very different.
 */
const nonIsoGeneralImpl = {
    dateFromFields(fieldsParam, options, calendar) {
        const overflow = ToTemporalOverflow(options);
        const cache = new OneObjectCache();
        // Intentionally alphabetical
        const fields = PrepareTemporalFields(fieldsParam, [
            ['day'],
            ['era', undefined],
            ['eraYear', undefined],
            ['month', undefined],
            ['monthCode', undefined],
            ['year', undefined]
        ]);
        const { year, month, day } = this.helper.calendarToIsoDate(fields, overflow, cache);
        const result = CreateTemporalDate(year, month, day, calendar);
        cache.setObject(result);
        return result;
    },
    yearMonthFromFields(fieldsParam, options, calendar) {
        const overflow = ToTemporalOverflow(options);
        const cache = new OneObjectCache();
        // Intentionally alphabetical
        const fields = PrepareTemporalFields(fieldsParam, [
            ['era', undefined],
            ['eraYear', undefined],
            ['month', undefined],
            ['monthCode', undefined],
            ['year', undefined]
        ]);
        const { year, month, day } = this.helper.calendarToIsoDate({ ...fields, day: 1 }, overflow, cache);
        const result = CreateTemporalYearMonth(year, month, calendar, /* referenceISODay = */ day);
        cache.setObject(result);
        return result;
    },
    monthDayFromFields(fieldsParam, options, calendar) {
        const overflow = ToTemporalOverflow(options);
        // All built-in calendars require `day`, but some allow other fields to be
        // substituted for `month`. And for lunisolar calendars, either `monthCode`
        // or `year` must be provided because `month` is ambiguous without a year or
        // a code.
        const cache = new OneObjectCache();
        const fields = PrepareTemporalFields(fieldsParam, [
            ['day'],
            ['era', undefined],
            ['eraYear', undefined],
            ['month', undefined],
            ['monthCode', undefined],
            ['year', undefined]
        ]);
        const { year, month, day } = this.helper.monthDayFromFields(fields, overflow, cache);
        // `year` is a reference year where this month/day exists in this calendar
        const result = CreateTemporalMonthDay(month, day, calendar, /* referenceISOYear = */ year);
        cache.setObject(result);
        return result;
    },
    fields(fieldsParam) {
        let fields = fieldsParam;
        if (fields.includes('year'))
            fields = [...fields, 'era', 'eraYear'];
        return fields;
    },
    mergeFields(fields, additionalFields) {
        const fieldsCopy = { ...fields };
        const additionalFieldsCopy = { ...additionalFields };
        // era and eraYear are intentionally unused
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { month, monthCode, year, era, eraYear, ...original } = fieldsCopy;
        const { month: newMonth, monthCode: newMonthCode, year: newYear, era: newEra, eraYear: newEraYear } = additionalFieldsCopy;
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
        return { ...original, ...additionalFieldsCopy };
    },
    dateAdd(date, years, months, weeks, days, overflow, calendar) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        const added = this.helper.addCalendar(calendarDate, { years, months, weeks, days }, overflow, cache);
        const isoAdded = this.helper.calendarToIsoDate(added, 'constrain', cache);
        const { year, month, day } = isoAdded;
        const newTemporalObject = CreateTemporalDate(year, month, day, calendar);
        // The new object's cache starts with the cache of the old object
        const newCache = new OneObjectCache(cache);
        newCache.setObject(newTemporalObject);
        return newTemporalObject;
    },
    dateUntil(one, two, largestUnit) {
        const cacheOne = OneObjectCache.getCacheForObject(one);
        const cacheTwo = OneObjectCache.getCacheForObject(two);
        const calendarOne = this.helper.temporalToCalendarDate(one, cacheOne);
        const calendarTwo = this.helper.temporalToCalendarDate(two, cacheTwo);
        const result = this.helper.untilCalendar(calendarOne, calendarTwo, largestUnit, cacheOne);
        return result;
    },
    year(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.year;
    },
    month(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.month;
    },
    day(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.day;
    },
    era(date) {
        if (!this.helper.hasEra)
            return undefined;
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.era;
    },
    eraYear(date) {
        if (!this.helper.hasEra)
            return undefined;
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.eraYear;
    },
    monthCode(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.monthCode;
    },
    dayOfWeek(date) {
        return impl['iso8601'].dayOfWeek(date);
    },
    dayOfYear(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.isoToCalendarDate(date, cache);
        const startOfYear = this.helper.startOfCalendarYear(calendarDate);
        const diffDays = this.helper.calendarDaysUntil(startOfYear, calendarDate, cache);
        return diffDays + 1;
    },
    weekOfYear(date) {
        return impl['iso8601'].weekOfYear(date);
    },
    daysInWeek(date) {
        return impl['iso8601'].daysInWeek(date);
    },
    daysInMonth(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        // Easy case: if the helper knows the length without any heavy calculation.
        const max = this.helper.maximumMonthLength(calendarDate);
        const min = this.helper.minimumMonthLength(calendarDate);
        if (max === min)
            return max;
        // The harder case is where months vary every year, e.g. islamic calendars.
        // Find the answer by calculating the difference in days between the first
        // day of the current month and the first day of the next month.
        const startOfMonthCalendar = this.helper.startOfCalendarMonth(calendarDate);
        const startOfNextMonthCalendar = this.helper.addMonthsCalendar(startOfMonthCalendar, 1, 'constrain', cache);
        const result = this.helper.calendarDaysUntil(startOfMonthCalendar, startOfNextMonthCalendar, cache);
        return result;
    },
    daysInYear(dateParam) {
        let date = dateParam;
        if (!HasSlot(date, ISO_YEAR))
            date = ToTemporalDate(date);
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        const startOfYearCalendar = this.helper.startOfCalendarYear(calendarDate);
        const startOfNextYearCalendar = this.helper.addCalendar(startOfYearCalendar, { years: 1 }, 'constrain', cache);
        const result = this.helper.calendarDaysUntil(startOfYearCalendar, startOfNextYearCalendar, cache);
        return result;
    },
    monthsInYear(date) {
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        const result = this.helper.monthsInYear(calendarDate, cache);
        return result;
    },
    inLeapYear(dateParam) {
        let date = dateParam;
        if (!HasSlot(date, ISO_YEAR))
            date = ToTemporalDate(date);
        const cache = OneObjectCache.getCacheForObject(date);
        const calendarDate = this.helper.temporalToCalendarDate(date, cache);
        const result = this.helper.inLeapYear(calendarDate, cache);
        return result;
    }
};
impl['hebrew'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperHebrew });
impl['islamic'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperIslamic });
['islamic-umalqura', 'islamic-tbla', 'islamic-civil', 'islamic-rgsa', 'islamicc'].forEach((id) => {
    impl[id] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: { ...helperIslamic, id } });
});
impl['persian'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperPersian });
impl['ethiopic'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperEthiopic });
impl['ethioaa'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperEthioaa });
impl['coptic'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperCoptic });
impl['chinese'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperChinese });
impl['dangi'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperDangi });
impl['roc'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperRoc });
impl['indian'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperIndian });
impl['buddhist'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperBuddhist });
impl['japanese'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperJapanese });
impl['gregory'] = ObjectAssign$2({}, nonIsoGeneralImpl, { helper: helperGregory });
const BUILTIN_CALENDAR_IDS = Object.keys(impl);
function IsBuiltinCalendar(id) {
    return ArrayIncludes.call(BUILTIN_CALENDAR_IDS, id);
}

const tzComponent = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
const offsetNoCapture = /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/;
const timeZoneID = new RegExp(`(?:(?:${tzComponent.source})(?:\\/(?:${tzComponent.source}))*|Etc/GMT[-+]\\d{1,2}|${offsetNoCapture.source})`);
const calComponent = /[A-Za-z0-9]{3,8}/;
const calendarID = new RegExp(`(?:${calComponent.source}(?:-${calComponent.source})*)`);
const yearpart = /(?:[+\u2212-]\d{6}|\d{4})/;
const monthpart = /(?:0[1-9]|1[0-2])/;
const daypart = /(?:0[1-9]|[12]\d|3[01])/;
const datesplit = new RegExp(`(${yearpart.source})(?:-(${monthpart.source})-(${daypart.source})|(${monthpart.source})(${daypart.source}))`);
const timesplit = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
const offset = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
const zonesplit = new RegExp(`(?:([zZ])|(?:${offset.source})?)(?:\\[(${timeZoneID.source})\\])?`);
const calendar = new RegExp(`\\[u-ca=(${calendarID.source})\\]`);
const instant$1 = new RegExp(`^${datesplit.source}(?:(?:T|\\s+)${timesplit.source})?${zonesplit.source}(?:${calendar.source})?$`, 'i');
const datetime = new RegExp(`^${datesplit.source}(?:(?:T|\\s+)${timesplit.source})?(?:${zonesplit.source})?(?:${calendar.source})?$`, 'i');
const time = new RegExp(`^${timesplit.source}(?:${zonesplit.source})?(?:${calendar.source})?$`, 'i');
// The short forms of YearMonth and MonthDay are only for the ISO calendar.
// Non-ISO calendar YearMonth and MonthDay have to parse as a Temporal.PlainDate,
// with the reference fields.
// YYYYMM forbidden by ISO 8601, but since it is not ambiguous with anything
// else we could parse in a YearMonth context, we allow it
const yearmonth = new RegExp(`^(${yearpart.source})-?(${monthpart.source})$`);
const monthday = new RegExp(`^(?:--)?(${monthpart.source})-?(${daypart.source})$`);
const fraction = /(\d+)(?:[.,](\d{1,9}))?/;
const durationDate = /(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/;
const durationTime = new RegExp(`(?:${fraction.source}H)?(?:${fraction.source}M)?(?:${fraction.source}S)?`);
const duration = new RegExp(`^([+\u2212-])?P${durationDate.source}(?:T(?!$)${durationTime.source})?$`, 'i');

const ArrayPrototypePush$1 = Array.prototype.push;
const IntlDateTimeFormat$1 = globalThis.Intl.DateTimeFormat;
const MathMin = Math.min;
const MathMax = Math.max;
const MathAbs = Math.abs;
const MathFloor = Math.floor;
const MathSign = Math.sign;
const MathTrunc = Math.trunc;
const NumberIsNaN = Number.isNaN;
const NumberIsFinite = Number.isFinite;
const NumberCtor = Number;
const StringCtor = String;
const NumberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
const ObjectCreate$2 = Object.create;
const ObjectDefineProperty = Object.defineProperty;
const ObjectIs = Object.is;
const ReflectApply$1 = Reflect.apply;
const DAY_SECONDS = 86400;
const DAY_NANOS = bigInt(DAY_SECONDS).multiply(1e9);
const NS_MIN = bigInt(-DAY_SECONDS).multiply(1e17);
const NS_MAX = bigInt(DAY_SECONDS).multiply(1e17);
const YEAR_MIN = -271821;
const YEAR_MAX = 275760;
const BEFORE_FIRST_DST = bigInt(-388152).multiply(1e13); // 1847-01-01T00:00:00Z
function IsInteger(value) {
    if (typeof value !== 'number' || !NumberIsFinite(value))
        return false;
    const abs = MathAbs(value);
    return MathFloor(abs) === abs;
}
function IsObject(value) {
    return (typeof value === 'object' && value !== null) || typeof value === 'function';
}
function ToNumber(value) {
    if (typeof value === 'bigint')
        throw new TypeError('Cannot convert BigInt to number');
    return NumberCtor(value);
}
function ToInteger(value) {
    const num = ToNumber(value);
    if (NumberIsNaN(num))
        return 0;
    const integer = MathTrunc(num);
    if (num === 0)
        return 0;
    return integer;
}
function ToString(value) {
    if (typeof value === 'symbol') {
        throw new TypeError('Cannot convert a Symbol value to a String');
    }
    return StringCtor(value);
}
function ToIntegerThrowOnInfinity(value) {
    const integer = ToInteger(value);
    if (!NumberIsFinite(integer)) {
        throw new RangeError('infinity is out of range');
    }
    return integer;
}
function ToPositiveInteger(valueParam, property) {
    const value = ToInteger(valueParam);
    if (!NumberIsFinite(value)) {
        throw new RangeError('infinity is out of range');
    }
    if (value < 1) {
        if (property !== undefined) {
            throw new RangeError(`property '${property}' cannot be a a number less than one`);
        }
        throw new RangeError('Cannot convert a number less than one to a positive integer');
    }
    return value;
}
function ToIntegerWithoutRounding(valueParam) {
    const value = ToNumber(valueParam);
    if (NumberIsNaN(value))
        return 0;
    if (!NumberIsFinite(value)) {
        throw new RangeError('infinity is out of range');
    }
    if (!IsInteger(value)) {
        throw new RangeError(`unsupported fractional value ${value}`);
    }
    return ToInteger(value); // ℝ(value) in spec text; converts -0 to 0
}
const BUILTIN_CASTS = new Map([
    ['year', ToIntegerThrowOnInfinity],
    ['month', ToPositiveInteger],
    ['monthCode', ToString],
    ['day', ToPositiveInteger],
    ['hour', ToIntegerThrowOnInfinity],
    ['minute', ToIntegerThrowOnInfinity],
    ['second', ToIntegerThrowOnInfinity],
    ['millisecond', ToIntegerThrowOnInfinity],
    ['microsecond', ToIntegerThrowOnInfinity],
    ['nanosecond', ToIntegerThrowOnInfinity],
    ['years', ToIntegerWithoutRounding],
    ['months', ToIntegerWithoutRounding],
    ['weeks', ToIntegerWithoutRounding],
    ['days', ToIntegerWithoutRounding],
    ['hours', ToIntegerWithoutRounding],
    ['minutes', ToIntegerWithoutRounding],
    ['seconds', ToIntegerWithoutRounding],
    ['milliseconds', ToIntegerWithoutRounding],
    ['microseconds', ToIntegerWithoutRounding],
    ['nanoseconds', ToIntegerWithoutRounding],
    ['era', ToString],
    ['eraYear', ToInteger],
    ['offset', ToString]
]);
const ALLOWED_UNITS = [
    'year',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
    'microsecond',
    'nanosecond'
];
const SINGULAR_PLURAL_UNITS = [
    ['years', 'year'],
    ['months', 'month'],
    ['weeks', 'week'],
    ['days', 'day'],
    ['hours', 'hour'],
    ['minutes', 'minute'],
    ['seconds', 'second'],
    ['milliseconds', 'millisecond'],
    ['microseconds', 'microsecond'],
    ['nanoseconds', 'nanosecond']
];
const IntlDateTimeFormatEnUsCache = new Map();
function getIntlDateTimeFormatEnUsForTimeZone(timeZoneIdentifier) {
    let instance = IntlDateTimeFormatEnUsCache.get(timeZoneIdentifier);
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
    return (HasSlot(item, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND) &&
        !HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY));
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
    let { ianaName, offset, z } = ParseTemporalTimeZoneString(stringIdent);
    if (ianaName)
        return ianaName;
    if (z)
        return 'UTC';
    return offset;
}
function FormatCalendarAnnotation(id, showCalendar) {
    if (showCalendar === 'never')
        return '';
    if (showCalendar === 'auto' && id === 'iso8601')
        return '';
    return `[u-ca=${id}]`;
}
function ParseISODateTime(isoString, { zoneRequired }) {
    const regex = zoneRequired ? instant$1 : datetime;
    const match = regex.exec(isoString);
    if (!match)
        throw new RangeError(`invalid ISO 8601 string: ${isoString}`);
    let yearString = match[1];
    if (yearString[0] === '\u2212')
        yearString = `-${yearString.slice(1)}`;
    const year = ToInteger(yearString);
    const month = ToInteger(match[2] || match[4]);
    const day = ToInteger(match[3] || match[5]);
    const hour = ToInteger(match[6]);
    const minute = ToInteger(match[7] || match[10]);
    let second = ToInteger(match[8] || match[11]);
    if (second === 60)
        second = 59;
    const fraction = (match[9] || match[12]) + '000000000';
    const millisecond = ToInteger(fraction.slice(0, 3));
    const microsecond = ToInteger(fraction.slice(3, 6));
    const nanosecond = ToInteger(fraction.slice(6, 9));
    let offset;
    let z = false;
    if (match[13]) {
        offset = undefined;
        z = true;
    }
    else if (match[14] && match[15]) {
        const offsetSign = match[14] === '-' || match[14] === '\u2212' ? '-' : '+';
        const offsetHours = match[15] || '00';
        const offsetMinutes = match[16] || '00';
        const offsetSeconds = match[17] || '00';
        let offsetFraction = match[18] || '0';
        offset = `${offsetSign}${offsetHours}:${offsetMinutes}`;
        if (+offsetFraction) {
            while (offsetFraction.endsWith('0'))
                offsetFraction = offsetFraction.slice(0, -1);
            offset += `:${offsetSeconds}.${offsetFraction}`;
        }
        else if (+offsetSeconds) {
            offset += `:${offsetSeconds}`;
        }
        if (offset === '-00:00')
            offset = '+00:00';
    }
    let ianaName = match[19];
    if (ianaName) {
        try {
            // Canonicalize name if it is an IANA link name or is capitalized wrong
            ianaName = GetCanonicalTimeZoneIdentifier(ianaName).toString();
        }
        catch {
            // Not an IANA name, may be a custom ID, pass through unchanged
        }
    }
    const calendar = match[20];
    return {
        year,
        month,
        day,
        hour,
        minute,
        second,
        millisecond,
        microsecond,
        nanosecond,
        ianaName,
        offset,
        z,
        calendar
    };
}
function ParseTemporalInstantString(isoString) {
    return ParseISODateTime(isoString, { zoneRequired: true });
}
function ParseTemporalZonedDateTimeString(isoString) {
    return ParseISODateTime(isoString, { zoneRequired: true });
}
function ParseTemporalDateTimeString(isoString) {
    return ParseISODateTime(isoString, { zoneRequired: false });
}
function ParseTemporalDateString(isoString) {
    return ParseISODateTime(isoString, { zoneRequired: false });
}
function ParseTemporalTimeString(isoString) {
    const match = time.exec(isoString);
    let hour, minute, second, millisecond, microsecond, nanosecond, calendar;
    if (match) {
        hour = ToInteger(match[1]);
        minute = ToInteger(match[2] || match[5]);
        second = ToInteger(match[3] || match[6]);
        if (second === 60)
            second = 59;
        const fraction = (match[4] || match[7]) + '000000000';
        millisecond = ToInteger(fraction.slice(0, 3));
        microsecond = ToInteger(fraction.slice(3, 6));
        nanosecond = ToInteger(fraction.slice(6, 9));
        calendar = match[15];
    }
    else {
        let z;
        ({ hour, minute, second, millisecond, microsecond, nanosecond, calendar, z } = ParseISODateTime(isoString, {
            zoneRequired: false
        }));
        if (z)
            throw new RangeError('Z designator not supported for PlainTime');
    }
    return { hour, minute, second, millisecond, microsecond, nanosecond, calendar };
}
function ParseTemporalYearMonthString(isoString) {
    const match = yearmonth.exec(isoString);
    let year, month, calendar, referenceISODay;
    if (match) {
        let yearString = match[1];
        if (yearString[0] === '\u2212')
            yearString = `-${yearString.slice(1)}`;
        year = ToInteger(yearString);
        month = ToInteger(match[2]);
        calendar = match[3];
    }
    else {
        let z;
        ({ year, month, calendar, day: referenceISODay, z } = ParseISODateTime(isoString, { zoneRequired: false }));
        if (z)
            throw new RangeError('Z designator not supported for PlainYearMonth');
    }
    return { year, month, calendar, referenceISODay };
}
function ParseTemporalMonthDayString(isoString) {
    const match = monthday.exec(isoString);
    let month, day, calendar, referenceISOYear;
    if (match) {
        month = ToInteger(match[1]);
        day = ToInteger(match[2]);
    }
    else {
        let z;
        ({ month, day, calendar, year: referenceISOYear, z } = ParseISODateTime(isoString, { zoneRequired: false }));
        if (z)
            throw new RangeError('Z designator not supported for PlainMonthDay');
    }
    return { month, day, calendar, referenceISOYear };
}
function ParseTemporalTimeZoneString(stringIdent) {
    try {
        let canonicalIdent = GetCanonicalTimeZoneIdentifier(stringIdent);
        if (canonicalIdent) {
            canonicalIdent = canonicalIdent.toString();
            if (ParseOffsetString(canonicalIdent) !== null)
                return { offset: canonicalIdent };
            return { ianaName: canonicalIdent };
        }
    }
    catch {
        // fall through
    }
    try {
        // Try parsing ISO string instead
        return ParseISODateTime(stringIdent, { zoneRequired: true });
    }
    catch {
        throw new RangeError(`Invalid time zone: ${stringIdent}`);
    }
}
function ParseTemporalDurationString(isoString) {
    const match = duration.exec(isoString);
    if (!match)
        throw new RangeError(`invalid duration: ${isoString}`);
    if (match.slice(2).every((element) => element === undefined)) {
        throw new RangeError(`invalid duration: ${isoString}`);
    }
    const sign = match[1] === '-' || match[1] === '\u2212' ? -1 : 1;
    const years = ToInteger(match[2]) * sign;
    const months = ToInteger(match[3]) * sign;
    const weeks = ToInteger(match[4]) * sign;
    const days = ToInteger(match[5]) * sign;
    const hours = ToInteger(match[6]) * sign;
    let fHours = match[7];
    let minutes = ToInteger(match[8]) * sign;
    let fMinutes = match[9];
    let seconds = ToInteger(match[10]) * sign;
    const fSeconds = match[11] + '000000000';
    let milliseconds = ToInteger(fSeconds.slice(0, 3)) * sign;
    let microseconds = ToInteger(fSeconds.slice(3, 6)) * sign;
    let nanoseconds = ToInteger(fSeconds.slice(6, 9)) * sign;
    fHours = fHours ? (sign * ToInteger(fHours)) / 10 ** fHours.length : 0;
    fMinutes = fMinutes ? (sign * ToInteger(fMinutes)) / 10 ** fMinutes.length : 0;
    ({ minutes, seconds, milliseconds, microseconds, nanoseconds } = DurationHandleFractions(fHours, minutes, fMinutes, seconds, milliseconds, microseconds, nanoseconds));
    return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function ParseTemporalInstant(isoString) {
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset, z } = ParseTemporalInstantString(isoString);
    const epochNs = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (epochNs === null)
        throw new RangeError('DateTime outside of supported range');
    if (!z && !offset)
        throw new RangeError('Temporal.Instant requires a time zone offset');
    const offsetNs = z ? 0 : ParseOffsetString(offset);
    return epochNs.subtract(offsetNs);
}
function RegulateISODate(yearParam, monthParam, dayParam, overflow) {
    let year = yearParam;
    let month = monthParam;
    let day = dayParam;
    switch (overflow) {
        case 'reject':
            RejectISODate(year, month, day);
            break;
        case 'constrain':
            ({ year, month, day } = ConstrainISODate(year, month, day));
            break;
    }
    return { year, month, day };
}
function RegulateTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, overflow) {
    let hour = hourParam;
    let minute = minuteParam;
    let second = secondParam;
    let millisecond = millisecondParam;
    let microsecond = microsecondParam;
    let nanosecond = nanosecondParam;
    switch (overflow) {
        case 'reject':
            RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
            break;
        case 'constrain':
            ({ hour, minute, second, millisecond, microsecond, nanosecond } = ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond));
            break;
    }
    return { hour, minute, second, millisecond, microsecond, nanosecond };
}
function RegulateISOYearMonth(yearParam, monthParam, overflow) {
    let year = yearParam;
    let month = monthParam;
    const referenceISODay = 1;
    switch (overflow) {
        case 'reject':
            RejectISODate(year, month, referenceISODay);
            break;
        case 'constrain':
            ({ year, month } = ConstrainISODate(year, month));
            break;
    }
    return { year, month };
}
function DurationHandleFractions(fHoursParam, minutesParam, fMinutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam) {
    let fHours = fHoursParam;
    let minutes = minutesParam;
    let fMinutes = fMinutesParam;
    let seconds = secondsParam;
    let milliseconds = millisecondsParam;
    let microseconds = microsecondsParam;
    let nanoseconds = nanosecondsParam;
    if (fHours !== 0) {
        [minutes, fMinutes, seconds, milliseconds, microseconds, nanoseconds].forEach((val) => {
            if (val !== 0)
                throw new RangeError('only the smallest unit can be fractional');
        });
        const mins = fHours * 60;
        minutes = MathTrunc(mins);
        fMinutes = mins % 1;
    }
    if (fMinutes !== 0) {
        [seconds, milliseconds, microseconds, nanoseconds].forEach((val) => {
            if (val !== 0)
                throw new RangeError('only the smallest unit can be fractional');
        });
        const secs = fMinutes * 60;
        seconds = MathTrunc(secs);
        const fSeconds = secs % 1;
        if (fSeconds !== 0) {
            const mils = fSeconds * 1000;
            milliseconds = MathTrunc(mils);
            const fMilliseconds = mils % 1;
            if (fMilliseconds !== 0) {
                const mics = fMilliseconds * 1000;
                microseconds = MathTrunc(mics);
                const fMicroseconds = mics % 1;
                if (fMicroseconds !== 0) {
                    const nans = fMicroseconds * 1000;
                    nanoseconds = MathTrunc(nans);
                }
            }
        }
    }
    return { minutes, seconds, milliseconds, microseconds, nanoseconds };
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
    const props = ToPartialRecord(item, [
        'days',
        'hours',
        'microseconds',
        'milliseconds',
        'minutes',
        'months',
        'nanoseconds',
        'seconds',
        'weeks',
        'years'
    ]);
    if (!props)
        throw new TypeError('invalid duration-like');
    const { years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0 } = props;
    return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function ToLimitedTemporalDuration(item, disallowedProperties = []) {
    let record;
    if (IsObject(item)) {
        record = ToTemporalDurationRecord(item);
    }
    else {
        const str = ToString(item);
        record = ParseTemporalDurationString(str);
    }
    const { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = record;
    RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    for (const property of disallowedProperties) {
        if (record[property] !== 0) {
            throw new RangeError(`Duration field ${property} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);
        }
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
    let maximum = Infinity;
    if (dividend !== undefined)
        maximum = dividend;
    if (!inclusive && dividend !== undefined)
        maximum = dividend > 1 ? dividend - 1 : 1;
    const increment = GetNumberOption(options, 'roundingIncrement', 1, maximum, 1);
    if (dividend !== undefined && dividend % increment !== 0) {
        throw new RangeError(`Rounding increment must divide evenly into ${dividend}`);
    }
    return increment;
}
function ToTemporalDateTimeRoundingIncrement(options, smallestUnit) {
    const maximumIncrements = {
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
    const smallestUnit = ToSmallestTemporalUnit(options, undefined, ['year', 'month', 'week', 'day', 'hour']);
    switch (smallestUnit) {
        case 'minute':
            return { precision: 'minute', unit: 'minute', increment: 1 };
        case 'second':
            return { precision: 0, unit: 'second', increment: 1 };
        case 'millisecond':
            return { precision: 3, unit: 'millisecond', increment: 1 };
        case 'microsecond':
            return { precision: 6, unit: 'microsecond', increment: 1 };
        case 'nanosecond':
            return { precision: 9, unit: 'nanosecond', increment: 1 };
    }
    let digits = options.fractionalSecondDigits;
    if (digits === undefined)
        digits = 'auto';
    if (typeof digits !== 'number') {
        const stringDigits = ToString(digits);
        if (stringDigits === 'auto')
            return { precision: 'auto', unit: 'nanosecond', increment: 1 };
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${stringDigits}`);
    }
    if (NumberIsNaN(digits) || digits < 0 || digits > 9) {
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${digits}`);
    }
    const precision = MathFloor(digits);
    switch (precision) {
        case 0:
            return { precision, unit: 'second', increment: 1 };
        case 1:
        case 2:
        case 3:
            return { precision, unit: 'millisecond', increment: 10 ** (3 - precision) };
        case 4:
        case 5:
        case 6:
            return { precision, unit: 'microsecond', increment: 10 ** (6 - precision) };
        case 7:
        case 8:
        case 9:
            return { precision, unit: 'nanosecond', increment: 10 ** (9 - precision) };
        default:
            throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${digits}`);
    }
}
function ToLargestTemporalUnit(options, fallback, disallowedStrings = [], autoValue) {
    const singular = new Map(SINGULAR_PLURAL_UNITS.filter(([, sing]) => !disallowedStrings.includes(sing)));
    const allowed = new Set(ALLOWED_UNITS);
    for (const s of disallowedStrings) {
        allowed.delete(s);
    }
    const retval = GetOption(options, 'largestUnit', ['auto', ...allowed, ...singular.keys()], fallback);
    if (retval === 'auto' && autoValue !== undefined)
        return autoValue;
    if (singular.has(retval)) {
        return singular.get(retval);
    }
    return retval;
}
function ToSmallestTemporalUnit(options, fallback, disallowedStrings = []) {
    const singular = new Map(SINGULAR_PLURAL_UNITS.filter(([, sing]) => !disallowedStrings.includes(sing)));
    const allowed = new Set(ALLOWED_UNITS);
    for (const s of disallowedStrings) {
        allowed.delete(s);
    }
    const value = GetOption(options, 'smallestUnit', [...allowed, ...singular.keys()], fallback);
    if (singular.has(value))
        return singular.get(value);
    return value;
}
function ToTemporalDurationTotalUnit(options) {
    // This AO is identical to ToSmallestTemporalUnit, except:
    // - default is always `undefined` (caller will throw if omitted)
    // - option is named `unit` (not `smallestUnit`)
    // - all units are valid (no `disallowedStrings`)
    const singular = new Map(SINGULAR_PLURAL_UNITS);
    const value = GetOption(options, 'unit', [...singular.values(), ...singular.keys()], undefined);
    if (singular.has(value)) {
        return singular.get(value);
    }
    return value;
}
function ToRelativeTemporalObject(options) {
    const relativeTo = options.relativeTo;
    // TODO: `as undefined` below should not be needed.  Verify that it can be
    // removed after strictNullChecks is enabled.
    if (relativeTo === undefined)
        return relativeTo;
    let offsetBehaviour = 'option';
    let matchMinutes = false;
    let year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, timeZone, offset;
    if (IsObject(relativeTo)) {
        if (IsTemporalZonedDateTime(relativeTo) || IsTemporalDate(relativeTo))
            return relativeTo;
        if (IsTemporalDateTime(relativeTo))
            return TemporalDateTimeToDate(relativeTo);
        calendar = GetTemporalCalendarWithISODefault(relativeTo);
        const fieldNames = CalendarFields(calendar, [
            'day',
            'hour',
            'microsecond',
            'millisecond',
            'minute',
            'month',
            'monthCode',
            'nanosecond',
            'second',
            'year'
        ]);
        const fields = ToTemporalDateTimeFields(relativeTo, fieldNames);
        const dateOptions = ObjectCreate$2(null);
        dateOptions.overflow = 'constrain';
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = InterpretTemporalDateTimeFields(calendar, fields, dateOptions));
        // The `offset` and `timeZone` properties only exist on ZonedDateTime (or
        // ZonedDateTimeLike-property bags). The assertions below are used to avoid
        // TS errors while not diverging runtime code from proposal-temporal.
        offset = relativeTo.offset;
        if (offset === undefined)
            offsetBehaviour = 'wall';
        timeZone = relativeTo.timeZone;
    }
    else {
        let ianaName, z;
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, ianaName, offset, z } =
            ParseISODateTime(ToString(relativeTo), { zoneRequired: false }));
        if (ianaName)
            timeZone = ianaName;
        if (z) {
            offsetBehaviour = 'exact';
        }
        else if (!offset) {
            offsetBehaviour = 'wall';
        }
        if (!calendar)
            calendar = GetISO8601Calendar();
        calendar = ToTemporalCalendar(calendar);
        matchMinutes = true;
    }
    if (timeZone) {
        timeZone = ToTemporalTimeZone(timeZone);
        let offsetNs = 0;
        if (offsetBehaviour === 'option')
            offsetNs = ParseOffsetString(ToString(offset));
        const epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, 'compatible', 'reject', matchMinutes);
        return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
    }
    return CreateTemporalDate(year, month, day, calendar);
}
function ValidateTemporalUnitRange(largestUnit, smallestUnit) {
    if (ALLOWED_UNITS.indexOf(largestUnit) > ALLOWED_UNITS.indexOf(smallestUnit)) {
        throw new RangeError(`largestUnit ${largestUnit} cannot be smaller than smallestUnit ${smallestUnit}`);
    }
}
function DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
    const singular = new Map(SINGULAR_PLURAL_UNITS);
    for (const [prop, v] of [
        ['years', years],
        ['months', months],
        ['weeks', weeks],
        ['days', days],
        ['hours', hours],
        ['minutes', minutes],
        ['seconds', seconds],
        ['milliseconds', milliseconds],
        ['microseconds', microseconds],
        ['nanoseconds', nanoseconds]
    ]) {
        if (v !== 0)
            return singular.get(prop);
    }
    return 'nanosecond';
}
function LargerOfTwoTemporalUnits(unit1, unit2) {
    if (ALLOWED_UNITS.indexOf(unit1) > ALLOWED_UNITS.indexOf(unit2))
        return unit2;
    return unit1;
}
function ToPartialRecord(bag, fields, callerCast) {
    if (!IsObject(bag))
        return false;
    let any;
    for (const property of fields) {
        const value = bag[property];
        if (value !== undefined) {
            any = any || {};
            if (callerCast === undefined && BUILTIN_CASTS.has(property)) {
                any[property] = BUILTIN_CASTS.get(property)(value);
            }
            else if (callerCast !== undefined) {
                any[property] = callerCast(value);
            }
            else {
                any[property] = value;
            }
        }
    }
    return any ? any : false;
}
function PrepareTemporalFields(bag, fields) {
    if (!IsObject(bag))
        return undefined;
    const result = {};
    let any = false;
    for (const fieldRecord of fields) {
        const [property, defaultValue] = fieldRecord;
        let value = bag[property];
        if (value === undefined) {
            if (fieldRecord.length === 1) {
                throw new TypeError(`required property '${property}' missing or undefined`);
            }
            // TODO: two TS issues here:
            // 1. `undefined` was stripped from the type of `defaultValue`. Will it
            //    come back when strictNullChecks is enabled?
            // 2. Can types be improved to remove the need for the type assertion?
            value = defaultValue;
        }
        else {
            any = true;
            if (BUILTIN_CASTS.has(property)) {
                value = BUILTIN_CASTS.get(property)(value);
            }
        }
        result[property] = value;
    }
    if (!any) {
        throw new TypeError('no supported properties found');
    }
    if ((result['era'] === undefined) !==
        (result['eraYear'] === undefined)) {
        throw new RangeError("properties 'era' and 'eraYear' must be provided together");
    }
    return result;
}
// field access in the following operations is intentionally alphabetical
function ToTemporalDateFields(bag, fieldNames) {
    const entries = [
        ['day', undefined],
        ['month', undefined],
        ['monthCode', undefined],
        ['year', undefined]
    ];
    // Add extra fields from the calendar at the end
    fieldNames.forEach((fieldName) => {
        if (!entries.some(([name]) => name === fieldName)) {
            entries.push([fieldName, undefined]);
        }
    });
    return PrepareTemporalFields(bag, entries);
}
function ToTemporalDateTimeFields(bag, fieldNames) {
    const entries = [
        ['day', undefined],
        ['hour', 0],
        ['microsecond', 0],
        ['millisecond', 0],
        ['minute', 0],
        ['month', undefined],
        ['monthCode', undefined],
        ['nanosecond', 0],
        ['second', 0],
        ['year', undefined]
    ];
    // Add extra fields from the calendar at the end
    fieldNames.forEach((fieldName) => {
        if (!entries.some(([name]) => name === fieldName)) {
            entries.push([fieldName, undefined]);
        }
    });
    return PrepareTemporalFields(bag, entries);
}
function ToTemporalMonthDayFields(bag, fieldNames) {
    const entries = [
        ['day', undefined],
        ['month', undefined],
        ['monthCode', undefined],
        ['year', undefined]
    ];
    // Add extra fields from the calendar at the end
    fieldNames.forEach((fieldName) => {
        if (!entries.some(([name]) => name === fieldName)) {
            entries.push([fieldName, undefined]);
        }
    });
    return PrepareTemporalFields(bag, entries);
}
function ToTemporalTimeRecord(bag) {
    return PrepareTemporalFields(bag, [
        ['hour', 0],
        ['microsecond', 0],
        ['millisecond', 0],
        ['minute', 0],
        ['nanosecond', 0],
        ['second', 0]
    ]);
}
function ToTemporalYearMonthFields(bag, fieldNames) {
    const entries = [
        ['month', undefined],
        ['monthCode', undefined],
        ['year', undefined]
    ];
    // Add extra fields from the calendar at the end
    fieldNames.forEach((fieldName) => {
        if (!entries.some(([name]) => name === fieldName)) {
            entries.push([fieldName, undefined]);
        }
    });
    return PrepareTemporalFields(bag, entries);
}
function ToTemporalZonedDateTimeFields(bag, fieldNames) {
    const entries = [
        ['day', undefined],
        ['hour', 0],
        ['microsecond', 0],
        ['millisecond', 0],
        ['minute', 0],
        ['month', undefined],
        ['monthCode', undefined],
        ['nanosecond', 0],
        ['second', 0],
        ['year', undefined],
        ['offset', undefined],
        ['timeZone']
    ];
    // Add extra fields from the calendar at the end
    fieldNames.forEach((fieldName) => {
        if (!entries.some(([name]) => name === fieldName)) {
            entries.push([fieldName, undefined]);
        }
    });
    return PrepareTemporalFields(bag, entries);
}
function ToTemporalDate(itemParam, options = ObjectCreate$2(null)) {
    let item = itemParam;
    if (IsObject(item)) {
        if (IsTemporalDate(item))
            return item;
        if (IsTemporalZonedDateTime(item)) {
            item = BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
        }
        if (IsTemporalDateTime(item)) {
            return CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
        }
        const calendar = GetTemporalCalendarWithISODefault(item);
        const fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
        const fields = ToTemporalDateFields(item, fieldNames);
        return DateFromFields(calendar, fields, options);
    }
    ToTemporalOverflow(options); // validate and ignore
    const { year, month, day, calendar, z } = ParseTemporalDateString(ToString(item));
    if (z)
        throw new RangeError('Z designator not supported for PlainDate');
    const TemporalPlainDate = GetIntrinsic('%Temporal.PlainDate%');
    return new TemporalPlainDate(year, month, day, calendar); // include validation
}
function InterpretTemporalDateTimeFields(calendar, fields, options) {
    let { hour, minute, second, millisecond, microsecond, nanosecond } = ToTemporalTimeRecord(fields);
    const overflow = ToTemporalOverflow(options);
    const date = DateFromFields(calendar, fields, options);
    const year = GetSlot(date, ISO_YEAR);
    const month = GetSlot(date, ISO_MONTH);
    const day = GetSlot(date, ISO_DAY);
    ({ hour, minute, second, millisecond, microsecond, nanosecond } = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow));
    return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond };
}
function ToTemporalDateTime(item, options = ObjectCreate$2(null)) {
    let year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar;
    if (IsObject(item)) {
        if (IsTemporalDateTime(item))
            return item;
        if (IsTemporalZonedDateTime(item)) {
            return BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
        }
        if (IsTemporalDate(item)) {
            return CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(item, CALENDAR));
        }
        calendar = GetTemporalCalendarWithISODefault(item);
        const fieldNames = CalendarFields(calendar, [
            'day',
            'hour',
            'microsecond',
            'millisecond',
            'minute',
            'month',
            'monthCode',
            'nanosecond',
            'second',
            'year'
        ]);
        const fields = ToTemporalDateTimeFields(item, fieldNames);
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = InterpretTemporalDateTimeFields(calendar, fields, options));
    }
    else {
        ToTemporalOverflow(options); // validate and ignore
        let z;
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, z } =
            ParseTemporalDateTimeString(ToString(item)));
        if (z)
            throw new RangeError('Z designator not supported for PlainDateTime');
        RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
        if (calendar === undefined)
            calendar = GetISO8601Calendar();
        calendar = ToTemporalCalendar(calendar);
    }
    return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
}
function ToTemporalDuration(item) {
    let years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
    if (IsObject(item)) {
        if (IsTemporalDuration(item))
            return item;
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
            ToTemporalDurationRecord(item));
    }
    else {
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
            ParseTemporalDurationString(ToString(item)));
    }
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    return new TemporalDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
}
function ToTemporalInstant(item) {
    if (IsTemporalInstant(item))
        return item;
    if (IsTemporalZonedDateTime(item)) {
        const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
        return new TemporalInstant(GetSlot(item, EPOCHNANOSECONDS));
    }
    const ns = ParseTemporalInstant(ToString(item));
    const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    return new TemporalInstant(ns);
}
function ToTemporalMonthDay(item, options = ObjectCreate$2(null)) {
    if (IsObject(item)) {
        if (IsTemporalMonthDay(item))
            return item;
        let calendar, calendarAbsent;
        if (HasSlot(item, CALENDAR)) {
            calendar = GetSlot(item, CALENDAR);
            calendarAbsent = false;
        }
        else {
            let maybeStringCalendar = item.calendar;
            calendarAbsent = maybeStringCalendar === undefined;
            if (maybeStringCalendar === undefined)
                maybeStringCalendar = GetISO8601Calendar();
            calendar = ToTemporalCalendar(maybeStringCalendar);
        }
        const fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
        const fields = ToTemporalMonthDayFields(item, fieldNames);
        // Callers who omit the calendar are not writing calendar-independent
        // code. In that case, `monthCode`/`year` can be omitted; `month` and
        // `day` are sufficient. Add a `year` to satisfy calendar validation.
        if (calendarAbsent && fields.month !== undefined && fields.monthCode === undefined && fields.year === undefined) {
            fields.year = 1972;
        }
        return MonthDayFromFields(calendar, fields, options);
    }
    ToTemporalOverflow(options); // validate and ignore
    let { month, day, referenceISOYear, calendar: maybeStringCalendar } = ParseTemporalMonthDayString(ToString(item));
    // TODO: should this be a ternary?
    let calendar = maybeStringCalendar;
    if (calendar === undefined)
        calendar = GetISO8601Calendar();
    calendar = ToTemporalCalendar(calendar);
    if (referenceISOYear === undefined) {
        RejectISODate(1972, month, day);
        return CreateTemporalMonthDay(month, day, calendar);
    }
    const result = CreateTemporalMonthDay(month, day, calendar, referenceISOYear);
    const canonicalOptions = ObjectCreate$2(null);
    return MonthDayFromFields(calendar, result, canonicalOptions);
}
function ToTemporalTime(itemParam, overflow = 'constrain') {
    let item = itemParam;
    let hour, minute, second, millisecond, microsecond, nanosecond, calendar;
    if (IsObject(item)) {
        if (IsTemporalTime(item))
            return item;
        if (IsTemporalZonedDateTime(item)) {
            item = BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
        }
        if (IsTemporalDateTime(item)) {
            const TemporalPlainTime = GetIntrinsic('%Temporal.PlainTime%');
            return new TemporalPlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
        }
        calendar = GetTemporalCalendarWithISODefault(item);
        if (ToString(calendar) !== 'iso8601') {
            throw new RangeError('PlainTime can only have iso8601 calendar');
        }
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = ToTemporalTimeRecord(item));
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow));
    }
    else {
        ({ hour, minute, second, millisecond, microsecond, nanosecond, calendar } = ParseTemporalTimeString(ToString(item)));
        RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
        if (calendar !== undefined && calendar !== 'iso8601') {
            throw new RangeError('PlainTime can only have iso8601 calendar');
        }
    }
    const TemporalPlainTime = GetIntrinsic('%Temporal.PlainTime%');
    return new TemporalPlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
}
function ToTemporalYearMonth(item, options = ObjectCreate$2(null)) {
    if (IsObject(item)) {
        if (IsTemporalYearMonth(item))
            return item;
        const calendar = GetTemporalCalendarWithISODefault(item);
        const fieldNames = CalendarFields(calendar, ['month', 'monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(item, fieldNames);
        return YearMonthFromFields(calendar, fields, options);
    }
    ToTemporalOverflow(options); // validate and ignore
    let { year, month, referenceISODay, calendar: maybeStringCalendar } = ParseTemporalYearMonthString(ToString(item));
    // TODO: replace with ternary?
    let calendar = maybeStringCalendar;
    if (calendar === undefined)
        calendar = GetISO8601Calendar();
    calendar = ToTemporalCalendar(calendar);
    if (referenceISODay === undefined) {
        RejectISODate(year, month, 1);
        return CreateTemporalYearMonth(year, month, calendar);
    }
    const result = CreateTemporalYearMonth(year, month, calendar, referenceISODay);
    const canonicalOptions = ObjectCreate$2(null);
    return YearMonthFromFields(calendar, result, canonicalOptions);
}
function InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, disambiguation, offsetOpt, matchMinute) {
    const DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
    const dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (offsetBehaviour === 'wall' || offsetOpt === 'ignore') {
        // Simple case: ISO string without a TZ offset (or caller wants to ignore
        // the offset), so just convert DateTime to Instant in the given time zone
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, disambiguation);
        return GetSlot(instant, EPOCHNANOSECONDS);
    }
    // The caller wants the offset to always win ('use') OR the caller is OK
    // with the offset winning ('prefer' or 'reject') as long as it's valid
    // for this timezone and date/time.
    if (offsetBehaviour === 'exact' || offsetOpt === 'use') {
        // Calculate the instant for the input's date/time and offset
        const epochNs = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
        if (epochNs === null)
            throw new RangeError('ZonedDateTime outside of supported range');
        return epochNs.minus(offsetNs);
    }
    // "prefer" or "reject"
    const possibleInstants = GetPossibleInstantsFor(timeZone, dt);
    for (const candidate of possibleInstants) {
        const candidateOffset = GetOffsetNanosecondsFor(timeZone, candidate);
        const roundedCandidateOffset = RoundNumberToIncrement(bigInt(candidateOffset), 60e9, 'halfExpand').toJSNumber();
        if (candidateOffset === offsetNs || (matchMinute && roundedCandidateOffset === offsetNs)) {
            return GetSlot(candidate, EPOCHNANOSECONDS);
        }
    }
    // the user-provided offset doesn't match any instants for this time
    // zone and date/time.
    if (offsetOpt === 'reject') {
        const offsetStr = FormatTimeZoneOffsetString(offsetNs);
        const timeZoneString = IsTemporalTimeZone(timeZone) ? GetSlot(timeZone, TIMEZONE_ID) : 'time zone';
        // The tsc emit for this line rewrites to invoke the PlainDateTime's valueOf method, NOT
        // toString (which is invoked by Node when using template literals directly).
        // See https://github.com/microsoft/TypeScript/issues/39744 for the proposed fix in tsc emit
        throw new RangeError(`Offset ${offsetStr} is invalid for ${dt.toString()} in ${timeZoneString}`);
    }
    // fall through: offsetOpt === 'prefer', but the offset doesn't match
    // so fall back to use the time zone instead.
    const instant = DisambiguatePossibleInstants(possibleInstants, timeZone, dt, disambiguation);
    return GetSlot(instant, EPOCHNANOSECONDS);
}
function ToTemporalZonedDateTime(item, options = ObjectCreate$2(null)) {
    let year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone, offset, calendar;
    let matchMinute = false;
    let offsetBehaviour = 'option';
    if (IsObject(item)) {
        if (IsTemporalZonedDateTime(item))
            return item;
        calendar = GetTemporalCalendarWithISODefault(item);
        const fieldNames = CalendarFields(calendar, [
            'day',
            'hour',
            'microsecond',
            'millisecond',
            'minute',
            'month',
            'monthCode',
            'nanosecond',
            'second',
            'year'
        ]);
        const fields = ToTemporalZonedDateTimeFields(item, fieldNames);
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = InterpretTemporalDateTimeFields(calendar, fields, options));
        timeZone = ToTemporalTimeZone(fields.timeZone);
        offset = fields.offset;
        if (offset === undefined) {
            offsetBehaviour = 'wall';
        }
        else {
            offset = ToString(offset);
        }
    }
    else {
        ToTemporalOverflow(options); // validate and ignore
        let ianaName, z;
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, ianaName, offset, z, calendar } =
            ParseTemporalZonedDateTimeString(ToString(item)));
        if (!ianaName)
            throw new RangeError('time zone ID required in brackets');
        if (z) {
            offsetBehaviour = 'exact';
        }
        else if (!offset) {
            offsetBehaviour = 'wall';
        }
        const TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
        timeZone = new TemporalTimeZone(ianaName);
        if (!calendar)
            calendar = GetISO8601Calendar();
        calendar = ToTemporalCalendar(calendar);
        matchMinute = true; // ISO strings may specify offset with less precision
    }
    let offsetNs = 0;
    if (offsetBehaviour === 'option')
        offsetNs = ParseOffsetString(offset);
    const disambiguation = ToTemporalDisambiguation(options);
    const offsetOpt = ToTemporalOffset(options, 'reject');
    const epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetBehaviour, offsetNs, timeZone, disambiguation, offsetOpt, matchMinute);
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
            value: `${result[Symbol.toStringTag]} <${TemporalDateToString(result)}>`,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
}
function CreateTemporalDate(isoYear, isoMonth, isoDay, calendar = GetISO8601Calendar()) {
    const TemporalPlainDate = GetIntrinsic('%Temporal.PlainDate%');
    const result = ObjectCreate$2(TemporalPlainDate.prototype);
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
            value: `${result[Symbol.toStringTag]} <${TemporalDateTimeToString(result, 'auto')}>`,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
}
function CreateTemporalDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, µs, ns, calendar = GetISO8601Calendar()) {
    const TemporalPlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
    const result = ObjectCreate$2(TemporalPlainDateTime.prototype);
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
            value: `${result[Symbol.toStringTag]} <${TemporalMonthDayToString(result)}>`,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
}
function CreateTemporalMonthDay(isoMonth, isoDay, calendar = GetISO8601Calendar(), referenceISOYear = 1972) {
    const TemporalPlainMonthDay = GetIntrinsic('%Temporal.PlainMonthDay%');
    const result = ObjectCreate$2(TemporalPlainMonthDay.prototype);
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
            value: `${result[Symbol.toStringTag]} <${TemporalYearMonthToString(result)}>`,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
}
function CreateTemporalYearMonth(isoYear, isoMonth, calendar = GetISO8601Calendar(), referenceISODay = 1) {
    const TemporalPlainYearMonth = GetIntrinsic('%Temporal.PlainYearMonth%');
    const result = ObjectCreate$2(TemporalPlainYearMonth.prototype);
    CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar, referenceISODay);
    return result;
}
function CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone, calendar) {
    ValidateEpochNanoseconds(epochNanoseconds);
    CreateSlots(result);
    SetSlot(result, EPOCHNANOSECONDS, epochNanoseconds);
    SetSlot(result, TIME_ZONE, timeZone);
    SetSlot(result, CALENDAR, calendar);
    const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    const instant = new TemporalInstant(GetSlot(result, EPOCHNANOSECONDS));
    SetSlot(result, INSTANT, instant);
    {
        Object.defineProperty(result, '_repr_', {
            value: `${result[Symbol.toStringTag]} <${TemporalZonedDateTimeToString(result, 'auto')}>`,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
}
function CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar = GetISO8601Calendar()) {
    const TemporalZonedDateTime = GetIntrinsic('%Temporal.ZonedDateTime%');
    const result = ObjectCreate$2(TemporalZonedDateTime.prototype);
    CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone, calendar);
    return result;
}
function GetISO8601Calendar() {
    const TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
    return new TemporalCalendar('iso8601');
}
// TODO: should (can?) we make this generic so the field names are checked
// against the type that the calendar is a property of?
function CalendarFields(calendar, fieldNamesParam) {
    let fieldNames = fieldNamesParam;
    if (calendar.fields) {
        fieldNames = calendar.fields(fieldNames);
    }
    const result = [];
    for (const name of fieldNames) {
        if (typeof name !== 'string')
            throw new TypeError('bad return from calendar.fields()');
        ArrayPrototypePush$1.call(result, name);
    }
    return result;
}
function CalendarMergeFields(calendar, fields, additionalFields) {
    const calMergeFields = calendar.mergeFields;
    if (!calMergeFields) {
        return { ...fields, ...additionalFields };
    }
    const result = Reflect.apply(calMergeFields, calendar, [fields, additionalFields]);
    if (!IsObject(result))
        throw new TypeError('bad return from calendar.mergeFields()');
    return result;
}
function CalendarDateAdd(calendar, date, duration, options, dateAddParam) {
    let dateAdd = dateAddParam;
    if (dateAdd === undefined) {
        dateAdd = calendar.dateAdd;
    }
    const result = ReflectApply$1(dateAdd, calendar, [date, duration, options]);
    if (!IsTemporalDate(result))
        throw new TypeError('invalid result');
    return result;
}
function CalendarDateUntil(calendar, date, otherDate, options, dateUntilParam) {
    let dateUntil = dateUntilParam;
    if (dateUntil === undefined) {
        dateUntil = calendar.dateUntil;
    }
    const result = ReflectApply$1(dateUntil, calendar, [date, otherDate, options]);
    if (!IsTemporalDuration(result))
        throw new TypeError('invalid result');
    return result;
}
function CalendarYear(calendar, dateLike) {
    const result = calendar.year(dateLike);
    if (result === undefined) {
        throw new RangeError('calendar year result must be an integer');
    }
    return ToIntegerThrowOnInfinity(result);
}
function CalendarMonth(calendar, dateLike) {
    const result = calendar.month(dateLike);
    if (result === undefined) {
        throw new RangeError('calendar month result must be a positive integer');
    }
    return ToPositiveInteger(result);
}
function CalendarMonthCode(calendar, dateLike) {
    const result = calendar.monthCode(dateLike);
    if (result === undefined) {
        throw new RangeError('calendar monthCode result must be a string');
    }
    return ToString(result);
}
function CalendarDay(calendar, dateLike) {
    const result = calendar.day(dateLike);
    if (result === undefined) {
        throw new RangeError('calendar day result must be a positive integer');
    }
    return ToPositiveInteger(result);
}
function CalendarEra(calendar, dateLike) {
    let result = calendar.era(dateLike);
    if (result !== undefined) {
        result = ToString(result);
    }
    return result;
}
function CalendarEraYear(calendar, dateLike) {
    let result = calendar.eraYear(dateLike);
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
    let calendarLike = calendarLikeParam;
    if (IsObject(calendarLike)) {
        if (HasSlot(calendarLike, CALENDAR))
            return GetSlot(calendarLike, CALENDAR);
        if (!('calendar' in calendarLike))
            return calendarLike;
        calendarLike = calendarLike.calendar;
        if (IsObject(calendarLike) && !('calendar' in calendarLike))
            return calendarLike;
    }
    const identifier = ToString(calendarLike);
    const TemporalCalendar = GetIntrinsic('%Temporal.Calendar%');
    if (IsBuiltinCalendar(identifier))
        return new TemporalCalendar(identifier);
    let calendar;
    try {
        ({ calendar } = ParseISODateTime(identifier, { zoneRequired: false }));
    }
    catch {
        throw new RangeError(`Invalid calendar: ${identifier}`);
    }
    if (!calendar)
        calendar = 'iso8601';
    return new TemporalCalendar(calendar);
}
function GetTemporalCalendarWithISODefault(item) {
    if (HasSlot(item, CALENDAR))
        return GetSlot(item, CALENDAR);
    const { calendar } = item;
    if (calendar === undefined)
        return GetISO8601Calendar();
    return ToTemporalCalendar(calendar);
}
function CalendarEquals(one, two) {
    if (one === two)
        return true;
    const cal1 = ToString(one);
    const cal2 = ToString(two);
    return cal1 === cal2;
}
function ConsolidateCalendars(one, two) {
    if (one === two)
        return two;
    const sOne = ToString(one);
    const sTwo = ToString(two);
    if (sOne === sTwo || sOne === 'iso8601') {
        return two;
    }
    else if (sTwo === 'iso8601') {
        return one;
    }
    else {
        throw new RangeError('irreconcilable calendars');
    }
}
function DateFromFields(calendar, fields, options) {
    const result = calendar.dateFromFields(fields, options);
    if (!IsTemporalDate(result))
        throw new TypeError('invalid result');
    return result;
}
function YearMonthFromFields(calendar, fields, options) {
    const result = calendar.yearMonthFromFields(fields, options);
    if (!IsTemporalYearMonth(result))
        throw new TypeError('invalid result');
    return result;
}
function MonthDayFromFields(calendar, fields, options) {
    const result = calendar.monthDayFromFields(fields, options);
    if (!IsTemporalMonthDay(result))
        throw new TypeError('invalid result');
    return result;
}
function ToTemporalTimeZone(temporalTimeZoneLikeParam) {
    let temporalTimeZoneLike = temporalTimeZoneLikeParam;
    if (IsObject(temporalTimeZoneLike)) {
        if (IsTemporalZonedDateTime(temporalTimeZoneLike))
            return GetSlot(temporalTimeZoneLike, TIME_ZONE);
        if (!('timeZone' in temporalTimeZoneLike))
            return temporalTimeZoneLike;
        temporalTimeZoneLike = temporalTimeZoneLike.timeZone;
        if (IsObject(temporalTimeZoneLike) && !('timeZone' in temporalTimeZoneLike)) {
            return temporalTimeZoneLike;
        }
    }
    const identifier = ToString(temporalTimeZoneLike);
    const timeZone = ParseTemporalTimeZone(identifier);
    const TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
    return new TemporalTimeZone(timeZone);
}
function TimeZoneEquals(one, two) {
    if (one === two)
        return true;
    const tz1 = ToString(one);
    const tz2 = ToString(two);
    return tz1 === tz2;
}
function TemporalDateTimeToDate(dateTime) {
    return CreateTemporalDate(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, CALENDAR));
}
function TemporalDateTimeToTime(dateTime) {
    const Time = GetIntrinsic('%Temporal.PlainTime%');
    return new Time(GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
}
function GetOffsetNanosecondsFor(timeZone, instant) {
    let getOffsetNanosecondsFor = timeZone.getOffsetNanosecondsFor;
    if (typeof getOffsetNanosecondsFor !== 'function') {
        throw new TypeError('getOffsetNanosecondsFor not callable');
    }
    const offsetNs = Reflect.apply(getOffsetNanosecondsFor, timeZone, [instant]);
    if (typeof offsetNs !== 'number') {
        throw new TypeError('bad return from getOffsetNanosecondsFor');
    }
    if (!IsInteger(offsetNs) || MathAbs(offsetNs) > 86400e9) {
        throw new RangeError('out-of-range return from getOffsetNanosecondsFor');
    }
    return offsetNs;
}
function BuiltinTimeZoneGetOffsetStringFor(timeZone, instant) {
    const offsetNs = GetOffsetNanosecondsFor(timeZone, instant);
    return FormatTimeZoneOffsetString(offsetNs);
}
function BuiltinTimeZoneGetPlainDateTimeFor(timeZone, instant, calendar) {
    const ns = GetSlot(instant, EPOCHNANOSECONDS);
    const offsetNs = GetOffsetNanosecondsFor(timeZone, instant);
    let { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = GetISOPartsFromEpoch(ns);
    ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond + offsetNs));
    return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
}
function BuiltinTimeZoneGetInstantFor(timeZone, dateTime, disambiguation) {
    const possibleInstants = GetPossibleInstantsFor(timeZone, dateTime);
    return DisambiguatePossibleInstants(possibleInstants, timeZone, dateTime, disambiguation);
}
function DisambiguatePossibleInstants(possibleInstants, timeZone, dateTime, disambiguation) {
    const Instant = GetIntrinsic('%Temporal.Instant%');
    const numInstants = possibleInstants.length;
    if (numInstants === 1)
        return possibleInstants[0];
    if (numInstants) {
        switch (disambiguation) {
            case 'compatible':
            // fall through because 'compatible' means 'earlier' for "fall back" transitions
            case 'earlier':
                return possibleInstants[0];
            case 'later':
                return possibleInstants[numInstants - 1];
            case 'reject': {
                throw new RangeError('multiple instants found');
            }
        }
    }
    const year = GetSlot(dateTime, ISO_YEAR);
    const month = GetSlot(dateTime, ISO_MONTH);
    const day = GetSlot(dateTime, ISO_DAY);
    const hour = GetSlot(dateTime, ISO_HOUR);
    const minute = GetSlot(dateTime, ISO_MINUTE);
    const second = GetSlot(dateTime, ISO_SECOND);
    const millisecond = GetSlot(dateTime, ISO_MILLISECOND);
    const microsecond = GetSlot(dateTime, ISO_MICROSECOND);
    const nanosecond = GetSlot(dateTime, ISO_NANOSECOND);
    const utcns = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (utcns === null)
        throw new RangeError('DateTime outside of supported range');
    const dayBefore = new Instant(utcns.minus(86400e9));
    const dayAfter = new Instant(utcns.plus(86400e9));
    const offsetBefore = GetOffsetNanosecondsFor(timeZone, dayBefore);
    const offsetAfter = GetOffsetNanosecondsFor(timeZone, dayAfter);
    const nanoseconds = offsetAfter - offsetBefore;
    switch (disambiguation) {
        case 'earlier': {
            const calendar = GetSlot(dateTime, CALENDAR);
            const PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
            const earlier = AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, 0, 0, 0, 0, 0, 0, 0, 0, 0, -nanoseconds, undefined);
            const earlierPlainDateTime = new PlainDateTime(earlier.year, earlier.month, earlier.day, earlier.hour, earlier.minute, earlier.second, earlier.millisecond, earlier.microsecond, earlier.nanosecond, calendar);
            return GetPossibleInstantsFor(timeZone, earlierPlainDateTime)[0];
        }
        case 'compatible':
        // fall through because 'compatible' means 'later' for "spring forward" transitions
        case 'later': {
            const calendar = GetSlot(dateTime, CALENDAR);
            const PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
            const later = AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar, 0, 0, 0, 0, 0, 0, 0, 0, 0, nanoseconds, undefined);
            const laterPlainDateTime = new PlainDateTime(later.year, later.month, later.day, later.hour, later.minute, later.second, later.millisecond, later.microsecond, later.nanosecond, calendar);
            const possible = GetPossibleInstantsFor(timeZone, laterPlainDateTime);
            return possible[possible.length - 1];
        }
        case 'reject': {
            throw new RangeError('no such instant found');
        }
    }
}
function GetPossibleInstantsFor(timeZone, dateTime) {
    const possibleInstants = timeZone.getPossibleInstantsFor(dateTime);
    const result = [];
    for (const instant of possibleInstants) {
        if (!IsTemporalInstant(instant)) {
            throw new TypeError('bad return from getPossibleInstantsFor');
        }
        ArrayPrototypePush$1.call(result, instant);
    }
    return result;
}
function ISOYearString(year) {
    let yearString;
    if (year < 1000 || year > 9999) {
        const sign = year < 0 ? '-' : '+';
        const yearNumber = MathAbs(year);
        yearString = sign + `000000${yearNumber}`.slice(-6);
    }
    else {
        yearString = `${year}`;
    }
    return yearString;
}
function ISODateTimePartString(part) {
    return `00${part}`.slice(-2);
}
function FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision) {
    if (precision === 'minute')
        return '';
    const secs = `:${ISODateTimePartString(second)}`;
    let fractionNumber = millisecond * 1e6 + microsecond * 1e3 + nanosecond;
    let fraction;
    if (precision === 'auto') {
        if (fractionNumber === 0)
            return secs;
        fraction = `${fractionNumber}`.padStart(9, '0');
        while (fraction[fraction.length - 1] === '0')
            fraction = fraction.slice(0, -1);
    }
    else {
        if (precision === 0)
            return secs;
        fraction = `${fractionNumber}`.padStart(9, '0').slice(0, precision);
    }
    return `${secs}.${fraction}`;
}
function TemporalInstantToString(instant, timeZone, precision) {
    let outputTimeZone = timeZone;
    if (outputTimeZone === undefined) {
        const TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
        outputTimeZone = new TemporalTimeZone('UTC');
    }
    const iso = GetISO8601Calendar();
    const dateTime = BuiltinTimeZoneGetPlainDateTimeFor(outputTimeZone, instant, iso);
    const year = ISOYearString(GetSlot(dateTime, ISO_YEAR));
    const month = ISODateTimePartString(GetSlot(dateTime, ISO_MONTH));
    const day = ISODateTimePartString(GetSlot(dateTime, ISO_DAY));
    const hour = ISODateTimePartString(GetSlot(dateTime, ISO_HOUR));
    const minute = ISODateTimePartString(GetSlot(dateTime, ISO_MINUTE));
    const seconds = FormatSecondsStringPart(GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), precision);
    let timeZoneString = 'Z';
    if (timeZone !== undefined) {
        const offsetNs = GetOffsetNanosecondsFor(outputTimeZone, instant);
        timeZoneString = FormatISOTimeZoneOffsetString(offsetNs);
    }
    return `${year}-${month}-${day}T${hour}:${minute}${seconds}${timeZoneString}`;
}
function TemporalDurationToString(duration, precision = 'auto', options = undefined) {
    function formatNumber(num) {
        if (num <= NumberMaxSafeInteger)
            return num.toString(10);
        return bigInt(num).toString();
    }
    const years = GetSlot(duration, YEARS);
    const months = GetSlot(duration, MONTHS);
    const weeks = GetSlot(duration, WEEKS);
    const days = GetSlot(duration, DAYS);
    const hours = GetSlot(duration, HOURS);
    const minutes = GetSlot(duration, MINUTES);
    let seconds = GetSlot(duration, SECONDS);
    let ms = GetSlot(duration, MILLISECONDS);
    let µs = GetSlot(duration, MICROSECONDS);
    let ns = GetSlot(duration, NANOSECONDS);
    const sign = DurationSign(years, months, weeks, days, hours, minutes, seconds, ms, µs, ns);
    if (options) {
        const { unit, increment, roundingMode } = options;
        ({
            seconds,
            milliseconds: ms,
            microseconds: µs,
            nanoseconds: ns
        } = RoundDuration(0, 0, 0, 0, 0, 0, seconds, ms, µs, ns, increment, unit, roundingMode));
    }
    const dateParts = [];
    if (years)
        dateParts.push(`${formatNumber(MathAbs(years))}Y`);
    if (months)
        dateParts.push(`${formatNumber(MathAbs(months))}M`);
    if (weeks)
        dateParts.push(`${formatNumber(MathAbs(weeks))}W`);
    if (days)
        dateParts.push(`${formatNumber(MathAbs(days))}D`);
    const timeParts = [];
    if (hours)
        timeParts.push(`${formatNumber(MathAbs(hours))}H`);
    if (minutes)
        timeParts.push(`${formatNumber(MathAbs(minutes))}M`);
    const secondParts = [];
    let total = TotalDurationNanoseconds(0, 0, 0, seconds, ms, µs, ns, 0);
    let nsBigInt, µsBigInt, msBigInt, secondsBigInt;
    ({ quotient: total, remainder: nsBigInt } = total.divmod(1000));
    ({ quotient: total, remainder: µsBigInt } = total.divmod(1000));
    ({ quotient: secondsBigInt, remainder: msBigInt } = total.divmod(1000));
    const fraction = MathAbs(msBigInt.toJSNumber()) * 1e6 + MathAbs(µsBigInt.toJSNumber()) * 1e3 + MathAbs(nsBigInt.toJSNumber());
    let decimalPart;
    if (precision === 'auto') {
        if (fraction !== 0) {
            decimalPart = `${fraction}`.padStart(9, '0');
            while (decimalPart[decimalPart.length - 1] === '0') {
                decimalPart = decimalPart.slice(0, -1);
            }
        }
    }
    else if (precision !== 0) {
        decimalPart = `${fraction}`.padStart(9, '0').slice(0, precision);
    }
    if (decimalPart)
        secondParts.unshift('.', decimalPart);
    if (!secondsBigInt.isZero() || secondParts.length)
        secondParts.unshift(secondsBigInt.abs().toString());
    if (secondParts.length)
        timeParts.push(`${secondParts.join('')}S`);
    if (timeParts.length)
        timeParts.unshift('T');
    if (!dateParts.length && !timeParts.length)
        return 'PT0S';
    return `${sign < 0 ? '-' : ''}P${dateParts.join('')}${timeParts.join('')}`;
}
function TemporalDateToString(date, showCalendar = 'auto') {
    const year = ISOYearString(GetSlot(date, ISO_YEAR));
    const month = ISODateTimePartString(GetSlot(date, ISO_MONTH));
    const day = ISODateTimePartString(GetSlot(date, ISO_DAY));
    const calendarID = ToString(GetSlot(date, CALENDAR));
    const calendar = FormatCalendarAnnotation(calendarID, showCalendar);
    return `${year}-${month}-${day}${calendar}`;
}
function TemporalDateTimeToString(dateTime, precision, showCalendar = 'auto', options = undefined) {
    let year = GetSlot(dateTime, ISO_YEAR);
    let month = GetSlot(dateTime, ISO_MONTH);
    let day = GetSlot(dateTime, ISO_DAY);
    let hour = GetSlot(dateTime, ISO_HOUR);
    let minute = GetSlot(dateTime, ISO_MINUTE);
    let second = GetSlot(dateTime, ISO_SECOND);
    let millisecond = GetSlot(dateTime, ISO_MILLISECOND);
    let microsecond = GetSlot(dateTime, ISO_MICROSECOND);
    let nanosecond = GetSlot(dateTime, ISO_NANOSECOND);
    if (options) {
        const { unit, increment, roundingMode } = options;
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode));
    }
    const yearString = ISOYearString(year);
    const monthString = ISODateTimePartString(month);
    const dayString = ISODateTimePartString(day);
    const hourString = ISODateTimePartString(hour);
    const minuteString = ISODateTimePartString(minute);
    const secondsString = FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    const calendarID = ToString(GetSlot(dateTime, CALENDAR));
    const calendar = FormatCalendarAnnotation(calendarID, showCalendar);
    return `${yearString}-${monthString}-${dayString}T${hourString}:${minuteString}${secondsString}${calendar}`;
}
function TemporalMonthDayToString(monthDay, showCalendar = 'auto') {
    const month = ISODateTimePartString(GetSlot(monthDay, ISO_MONTH));
    const day = ISODateTimePartString(GetSlot(monthDay, ISO_DAY));
    let resultString = `${month}-${day}`;
    const calendar = GetSlot(monthDay, CALENDAR);
    const calendarID = ToString(calendar);
    if (calendarID !== 'iso8601') {
        const year = ISOYearString(GetSlot(monthDay, ISO_YEAR));
        resultString = `${year}-${resultString}`;
    }
    const calendarString = FormatCalendarAnnotation(calendarID, showCalendar);
    if (calendarString)
        resultString += calendarString;
    return resultString;
}
function TemporalYearMonthToString(yearMonth, showCalendar = 'auto') {
    const year = ISOYearString(GetSlot(yearMonth, ISO_YEAR));
    const month = ISODateTimePartString(GetSlot(yearMonth, ISO_MONTH));
    let resultString = `${year}-${month}`;
    const calendar = GetSlot(yearMonth, CALENDAR);
    const calendarID = ToString(calendar);
    if (calendarID !== 'iso8601') {
        const day = ISODateTimePartString(GetSlot(yearMonth, ISO_DAY));
        resultString += `-${day}`;
    }
    const calendarString = FormatCalendarAnnotation(calendarID, showCalendar);
    if (calendarString)
        resultString += calendarString;
    return resultString;
}
function TemporalZonedDateTimeToString(zdt, precision, showCalendar = 'auto', showTimeZone = 'auto', showOffset = 'auto', options = undefined) {
    let instant = GetSlot(zdt, INSTANT);
    if (options) {
        const { unit, increment, roundingMode } = options;
        const ns = RoundInstant(GetSlot(zdt, EPOCHNANOSECONDS), increment, unit, roundingMode);
        const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
        instant = new TemporalInstant(ns);
    }
    const tz = GetSlot(zdt, TIME_ZONE);
    const iso = GetISO8601Calendar();
    const dateTime = BuiltinTimeZoneGetPlainDateTimeFor(tz, instant, iso);
    const year = ISOYearString(GetSlot(dateTime, ISO_YEAR));
    const month = ISODateTimePartString(GetSlot(dateTime, ISO_MONTH));
    const day = ISODateTimePartString(GetSlot(dateTime, ISO_DAY));
    const hour = ISODateTimePartString(GetSlot(dateTime, ISO_HOUR));
    const minute = ISODateTimePartString(GetSlot(dateTime, ISO_MINUTE));
    const seconds = FormatSecondsStringPart(GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND), precision);
    let result = `${year}-${month}-${day}T${hour}:${minute}${seconds}`;
    if (showOffset !== 'never') {
        const offsetNs = GetOffsetNanosecondsFor(tz, instant);
        result += FormatISOTimeZoneOffsetString(offsetNs);
    }
    if (showTimeZone !== 'never')
        result += `[${tz}]`;
    const calendarID = ToString(GetSlot(zdt, CALENDAR));
    result += FormatCalendarAnnotation(calendarID, showCalendar);
    return result;
}
function ParseOffsetString(string) {
    const match = OFFSET.exec(StringCtor(string));
    if (!match)
        return null;
    const sign = match[1] === '-' || match[1] === '\u2212' ? -1 : +1;
    const hours = +match[2];
    const minutes = +(match[3] || 0);
    const seconds = +(match[4] || 0);
    const nanoseconds = +((match[5] || 0) + '000000000').slice(0, 9);
    return sign * (((hours * 60 + minutes) * 60 + seconds) * 1e9 + nanoseconds);
}
function GetCanonicalTimeZoneIdentifier(timeZoneIdentifier) {
    const offsetNs = ParseOffsetString(timeZoneIdentifier);
    if (offsetNs !== null)
        return FormatTimeZoneOffsetString(offsetNs);
    const formatter = getIntlDateTimeFormatEnUsForTimeZone(StringCtor(timeZoneIdentifier));
    return formatter.resolvedOptions().timeZone;
}
function GetIANATimeZoneOffsetNanoseconds(epochNanoseconds, id) {
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = GetIANATimeZoneDateTimeParts(epochNanoseconds, id);
    const utc = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (utc === null)
        throw new RangeError('Date outside of supported range');
    return +utc.minus(epochNanoseconds);
}
function FormatTimeZoneOffsetString(offsetNanosecondsParam) {
    const sign = offsetNanosecondsParam < 0 ? '-' : '+';
    const offsetNanoseconds = MathAbs(offsetNanosecondsParam);
    const nanoseconds = offsetNanoseconds % 1e9;
    const seconds = MathFloor(offsetNanoseconds / 1e9) % 60;
    const minutes = MathFloor(offsetNanoseconds / 60e9) % 60;
    const hours = MathFloor(offsetNanoseconds / 3600e9);
    const hourString = ISODateTimePartString(hours);
    const minuteString = ISODateTimePartString(minutes);
    const secondString = ISODateTimePartString(seconds);
    let post = '';
    if (nanoseconds) {
        let fraction = `${nanoseconds}`.padStart(9, '0');
        while (fraction[fraction.length - 1] === '0')
            fraction = fraction.slice(0, -1);
        post = `:${secondString}.${fraction}`;
    }
    else if (seconds) {
        post = `:${secondString}`;
    }
    return `${sign}${hourString}:${minuteString}${post}`;
}
function FormatISOTimeZoneOffsetString(offsetNanosecondsParam) {
    let offsetNanoseconds = RoundNumberToIncrement(bigInt(offsetNanosecondsParam), 60e9, 'halfExpand').toJSNumber();
    const sign = offsetNanoseconds < 0 ? '-' : '+';
    offsetNanoseconds = MathAbs(offsetNanoseconds);
    const minutes = (offsetNanoseconds / 60e9) % 60;
    const hours = MathFloor(offsetNanoseconds / 3600e9);
    const hourString = ISODateTimePartString(hours);
    const minuteString = ISODateTimePartString(minutes);
    return `${sign}${hourString}:${minuteString}`;
}
function GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
    // Note: Date.UTC() interprets one and two-digit years as being in the
    // 20th century, so don't use it
    const legacyDate = new Date();
    legacyDate.setUTCHours(hour, minute, second, millisecond);
    legacyDate.setUTCFullYear(year, month - 1, day);
    const ms = legacyDate.getTime();
    if (NumberIsNaN(ms))
        return null;
    let ns = bigInt(ms).multiply(1e6);
    ns = ns.plus(bigInt(microsecond).multiply(1e3));
    ns = ns.plus(bigInt(nanosecond));
    if (ns.lesser(NS_MIN) || ns.greater(NS_MAX))
        return null;
    return ns;
}
function GetISOPartsFromEpoch(epochNanoseconds) {
    const { quotient, remainder } = bigInt(epochNanoseconds).divmod(1e6);
    let epochMilliseconds = +quotient;
    let nanos = +remainder;
    if (nanos < 0) {
        nanos += 1e6;
        epochMilliseconds -= 1;
    }
    const microsecond = MathFloor(nanos / 1e3) % 1e3;
    const nanosecond = nanos % 1e3;
    const item = new Date(epochMilliseconds);
    const year = item.getUTCFullYear();
    const month = item.getUTCMonth() + 1;
    const day = item.getUTCDate();
    const hour = item.getUTCHours();
    const minute = item.getUTCMinutes();
    const second = item.getUTCSeconds();
    const millisecond = item.getUTCMilliseconds();
    return { epochMilliseconds, year, month, day, hour, minute, second, millisecond, microsecond, nanosecond };
}
// ts-prune-ignore-next TODO: remove this after tests are converted to TS
function GetIANATimeZoneDateTimeParts(epochNanoseconds, id) {
    const { epochMilliseconds, millisecond, microsecond, nanosecond } = GetISOPartsFromEpoch(epochNanoseconds);
    const { year, month, day, hour, minute, second } = GetFormatterParts(id, epochMilliseconds);
    return BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
}
function GetIANATimeZoneNextTransition(epochNanoseconds, id) {
    const uppercap = SystemUTCEpochNanoSeconds().plus(DAY_NANOS.multiply(366));
    let leftNanos = epochNanoseconds;
    const leftOffsetNs = GetIANATimeZoneOffsetNanoseconds(leftNanos, id);
    let rightNanos = leftNanos;
    let rightOffsetNs = leftOffsetNs;
    while (leftOffsetNs === rightOffsetNs && bigInt(leftNanos).compare(uppercap) === -1) {
        rightNanos = bigInt(leftNanos).plus(DAY_NANOS.multiply(2 * 7));
        rightOffsetNs = GetIANATimeZoneOffsetNanoseconds(rightNanos, id);
        if (leftOffsetNs === rightOffsetNs) {
            leftNanos = rightNanos;
        }
    }
    if (leftOffsetNs === rightOffsetNs)
        return null;
    const result = bisect((epochNs) => GetIANATimeZoneOffsetNanoseconds(epochNs, id), leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
    return result;
}
function GetIANATimeZonePreviousTransition(epochNanoseconds, id) {
    const lowercap = BEFORE_FIRST_DST; // 1847-01-01T00:00:00Z
    let rightNanos = bigInt(epochNanoseconds).minus(1);
    const rightOffsetNs = GetIANATimeZoneOffsetNanoseconds(rightNanos, id);
    let leftNanos = rightNanos;
    let leftOffsetNs = rightOffsetNs;
    while (rightOffsetNs === leftOffsetNs && bigInt(rightNanos).compare(lowercap) === 1) {
        leftNanos = bigInt(rightNanos).minus(DAY_NANOS.multiply(2 * 7));
        leftOffsetNs = GetIANATimeZoneOffsetNanoseconds(leftNanos, id);
        if (rightOffsetNs === leftOffsetNs) {
            rightNanos = leftNanos;
        }
    }
    if (rightOffsetNs === leftOffsetNs)
        return null;
    const result = bisect((epochNs) => GetIANATimeZoneOffsetNanoseconds(epochNs, id), leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
    return result;
}
// ts-prune-ignore-next TODO: remove this after tests are converted to TS
function GetFormatterParts(timeZone, epochMilliseconds) {
    const formatter = getIntlDateTimeFormatEnUsForTimeZone(timeZone);
    // Using `format` instead of `formatToParts` for compatibility with older clients
    const datetime = formatter.format(new Date(epochMilliseconds));
    const [month, day, year, era, hour, minute, second] = datetime.split(/[^\w]+/);
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
    const ns = GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    if (ns === null)
        throw new RangeError('DateTime outside of supported range');
    let nsEarlier = ns.minus(DAY_NANOS);
    if (nsEarlier.lesser(NS_MIN))
        nsEarlier = ns;
    let nsLater = ns.plus(DAY_NANOS);
    if (nsLater.greater(NS_MAX))
        nsLater = ns;
    const earliest = GetIANATimeZoneOffsetNanoseconds(nsEarlier, id);
    const latest = GetIANATimeZoneOffsetNanoseconds(nsLater, id);
    const found = earliest === latest ? [earliest] : [earliest, latest];
    return found
        .map((offsetNanoseconds) => {
        const epochNanoseconds = bigInt(ns).minus(offsetNanoseconds);
        const parts = GetIANATimeZoneDateTimeParts(epochNanoseconds, id);
        if (year !== parts.year ||
            month !== parts.month ||
            day !== parts.day ||
            hour !== parts.hour ||
            minute !== parts.minute ||
            second !== parts.second ||
            millisecond !== parts.millisecond ||
            microsecond !== parts.microsecond ||
            nanosecond !== parts.nanosecond) {
            return undefined;
        }
        return epochNanoseconds;
    })
        .filter((x) => x !== undefined);
}
function LeapYear(year) {
    if (undefined === year)
        return false;
    const isDiv4 = year % 4 === 0;
    const isDiv100 = year % 100 === 0;
    const isDiv400 = year % 400 === 0;
    return isDiv4 && (!isDiv100 || isDiv400);
}
function ISODaysInMonth(year, month) {
    const DoM = {
        standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    };
    return DoM[LeapYear(year) ? 'leapyear' : 'standard'][month - 1];
}
function DayOfWeek(year, month, day) {
    const m = month + (month < 3 ? 10 : -2);
    const Y = year - (month < 3 ? 1 : 0);
    const c = MathFloor(Y / 100);
    const y = Y - c * 100;
    const d = day;
    const pD = d;
    const pM = MathFloor(2.6 * m - 0.2);
    const pY = y + MathFloor(y / 4);
    const pC = MathFloor(c / 4) - 2 * c;
    const dow = (pD + pM + pY + pC) % 7;
    return dow + (dow <= 0 ? 7 : 0);
}
function DayOfYear(year, month, day) {
    let days = day;
    for (let m = month - 1; m > 0; m--) {
        days += ISODaysInMonth(year, m);
    }
    return days;
}
function WeekOfYear(year, month, day) {
    const doy = DayOfYear(year, month, day);
    const dow = DayOfWeek(year, month, day) || 7;
    const doj = DayOfWeek(year, 1, 1);
    const week = MathFloor((doy - dow + 10) / 7);
    if (week < 1) {
        if (doj === 5 || (doj === 6 && LeapYear(year - 1))) {
            return 53;
        }
        else {
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
    for (const prop of [y, mon, w, d, h, min, s, ms, µs, ns]) {
        if (prop !== 0)
            return prop < 0 ? -1 : 1;
    }
    return 0;
}
function BalanceISOYearMonth(yearParam, monthParam) {
    let year = yearParam;
    let month = monthParam;
    if (!NumberIsFinite(year) || !NumberIsFinite(month))
        throw new RangeError('infinity is out of range');
    month -= 1;
    year += MathFloor(month / 12);
    month %= 12;
    if (month < 0)
        month += 12;
    month += 1;
    return { year, month };
}
function BalanceISODate(yearParam, monthParam, dayParam) {
    let year = yearParam;
    let month = monthParam;
    let day = dayParam;
    if (!NumberIsFinite(day))
        throw new RangeError('infinity is out of range');
    ({ year, month } = BalanceISOYearMonth(year, month));
    let daysInYear = 0;
    let testYear = month > 2 ? year : year - 1;
    while (((daysInYear = LeapYear(testYear) ? 366 : 365), day < -daysInYear)) {
        year -= 1;
        testYear -= 1;
        day += daysInYear;
    }
    testYear += 1;
    while (((daysInYear = LeapYear(testYear) ? 366 : 365), day > daysInYear)) {
        year += 1;
        testYear += 1;
        day -= daysInYear;
    }
    while (day < 1) {
        ({ year, month } = BalanceISOYearMonth(year, month - 1));
        day += ISODaysInMonth(year, month);
    }
    while (day > ISODaysInMonth(year, month)) {
        day -= ISODaysInMonth(year, month);
        ({ year, month } = BalanceISOYearMonth(year, month + 1));
    }
    return { year, month, day };
}
function BalanceISODateTime(yearParam, monthParam, dayParam, hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam) {
    const { deltaDays, hour, minute, second, millisecond, microsecond, nanosecond } = BalanceTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam);
    const { year, month, day } = BalanceISODate(yearParam, monthParam, dayParam + deltaDays);
    return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond };
}
function BalanceTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam) {
    let hour = hourParam;
    let minute = minuteParam;
    let second = secondParam;
    let millisecond = millisecondParam;
    let microsecond = microsecondParam;
    let nanosecond = nanosecondParam;
    if (!NumberIsFinite(hour) ||
        !NumberIsFinite(minute) ||
        !NumberIsFinite(second) ||
        !NumberIsFinite(millisecond) ||
        !NumberIsFinite(microsecond) ||
        !NumberIsFinite(nanosecond)) {
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
    const deltaDays = MathFloor(hour / 24);
    hour = NonNegativeModulo(hour, 24);
    return { deltaDays, hour, minute, second, millisecond, microsecond, nanosecond };
}
function TotalDurationNanoseconds(daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, offsetShift) {
    const days = bigInt(daysParam);
    let nanoseconds = bigInt(nanosecondsParam);
    if (daysParam !== 0)
        nanoseconds = bigInt(nanosecondsParam).subtract(offsetShift);
    const hours = bigInt(hoursParam).add(bigInt(days).multiply(24));
    const minutes = bigInt(minutesParam).add(hours.multiply(60));
    const seconds = bigInt(secondsParam).add(minutes.multiply(60));
    const milliseconds = bigInt(millisecondsParam).add(seconds.multiply(1000));
    const microseconds = bigInt(microsecondsParam).add(milliseconds.multiply(1000));
    return bigInt(nanoseconds).add(microseconds.multiply(1000));
}
function NanosecondsToDays(nanosecondsParam, relativeTo) {
    const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    const sign = MathSign(nanosecondsParam.toJSNumber());
    let nanoseconds = bigInt(nanosecondsParam);
    let dayLengthNs = 86400e9;
    if (sign === 0)
        return { days: 0, nanoseconds: bigInt.zero, dayLengthNs };
    if (!IsTemporalZonedDateTime(relativeTo)) {
        let days;
        ({ quotient: days, remainder: nanoseconds } = nanoseconds.divmod(dayLengthNs));
        days = days.toJSNumber();
        return { days, nanoseconds, dayLengthNs };
    }
    const startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
    const start = GetSlot(relativeTo, INSTANT);
    const endNs = startNs.add(nanoseconds);
    const end = new TemporalInstant(endNs);
    const timeZone = GetSlot(relativeTo, TIME_ZONE);
    const calendar = GetSlot(relativeTo, CALENDAR);
    // Find the difference in days only.
    const dtStart = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, start, calendar);
    const dtEnd = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, end, calendar);
    let { days } = DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar, 'day');
    let intermediateNs = AddZonedDateTime(start, timeZone, calendar, 0, 0, 0, days, 0, 0, 0, 0, 0, 0);
    // may disambiguate
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
            intermediateNs = AddZonedDateTime(start, timeZone, calendar, 0, 0, 0, days, 0, 0, 0, 0, 0, 0);
            // may do disambiguation
        }
    }
    nanoseconds = endNs.subtract(intermediateNs);
    let isOverflow = false;
    let relativeInstant = new TemporalInstant(intermediateNs);
    do {
        // calculate length of the next day (day that contains the time remainder)
        const oneDayFartherNs = AddZonedDateTime(relativeInstant, timeZone, calendar, 0, 0, 0, sign, 0, 0, 0, 0, 0, 0);
        const relativeNs = GetSlot(relativeInstant, EPOCHNANOSECONDS);
        dayLengthNs = oneDayFartherNs.subtract(relativeNs).toJSNumber();
        isOverflow = nanoseconds.subtract(dayLengthNs).multiply(sign).geq(0);
        if (isOverflow) {
            nanoseconds = nanoseconds.subtract(dayLengthNs);
            relativeInstant = new TemporalInstant(oneDayFartherNs);
            days += sign;
        }
    } while (isOverflow);
    return { days, nanoseconds, dayLengthNs: MathAbs(dayLengthNs) };
}
function BalanceDuration(daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, largestUnit, relativeTo = undefined) {
    let days = daysParam;
    let nanosecondsBigInt, microsecondsBigInt, millisecondsBigInt, secondsBigInt, minutesBigInt, hoursBigInt;
    if (IsTemporalZonedDateTime(relativeTo)) {
        const endNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), GetSlot(relativeTo, TIME_ZONE), GetSlot(relativeTo, CALENDAR), 0, 0, 0, days, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam);
        const startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
        nanosecondsBigInt = endNs.subtract(startNs);
    }
    else {
        nanosecondsBigInt = TotalDurationNanoseconds(days, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, 0);
    }
    if (largestUnit === 'year' || largestUnit === 'month' || largestUnit === 'week' || largestUnit === 'day') {
        ({ days, nanoseconds: nanosecondsBigInt } = NanosecondsToDays(nanosecondsBigInt, relativeTo));
    }
    else {
        days = 0;
    }
    const sign = nanosecondsBigInt.lesser(0) ? -1 : 1;
    nanosecondsBigInt = nanosecondsBigInt.abs();
    microsecondsBigInt = millisecondsBigInt = secondsBigInt = minutesBigInt = hoursBigInt = bigInt.zero;
    switch (largestUnit) {
        case 'year':
        case 'month':
        case 'week':
        case 'day':
        case 'hour':
            ({ quotient: microsecondsBigInt, remainder: nanosecondsBigInt } = nanosecondsBigInt.divmod(1000));
            ({ quotient: millisecondsBigInt, remainder: microsecondsBigInt } = microsecondsBigInt.divmod(1000));
            ({ quotient: secondsBigInt, remainder: millisecondsBigInt } = millisecondsBigInt.divmod(1000));
            ({ quotient: minutesBigInt, remainder: secondsBigInt } = secondsBigInt.divmod(60));
            ({ quotient: hoursBigInt, remainder: minutesBigInt } = minutesBigInt.divmod(60));
            break;
        case 'minute':
            ({ quotient: microsecondsBigInt, remainder: nanosecondsBigInt } = nanosecondsBigInt.divmod(1000));
            ({ quotient: millisecondsBigInt, remainder: microsecondsBigInt } = microsecondsBigInt.divmod(1000));
            ({ quotient: secondsBigInt, remainder: millisecondsBigInt } = millisecondsBigInt.divmod(1000));
            ({ quotient: minutesBigInt, remainder: secondsBigInt } = secondsBigInt.divmod(60));
            break;
        case 'second':
            ({ quotient: microsecondsBigInt, remainder: nanosecondsBigInt } = nanosecondsBigInt.divmod(1000));
            ({ quotient: millisecondsBigInt, remainder: microsecondsBigInt } = microsecondsBigInt.divmod(1000));
            ({ quotient: secondsBigInt, remainder: millisecondsBigInt } = millisecondsBigInt.divmod(1000));
            break;
        case 'millisecond':
            ({ quotient: microsecondsBigInt, remainder: nanosecondsBigInt } = nanosecondsBigInt.divmod(1000));
            ({ quotient: millisecondsBigInt, remainder: microsecondsBigInt } = microsecondsBigInt.divmod(1000));
            break;
        case 'microsecond':
            ({ quotient: microsecondsBigInt, remainder: nanosecondsBigInt } = nanosecondsBigInt.divmod(1000));
            break;
        case 'nanosecond':
            break;
        default:
            throw new Error('assert not reached');
    }
    const hours = hoursBigInt.toJSNumber() * sign;
    const minutes = minutesBigInt.toJSNumber() * sign;
    const seconds = secondsBigInt.toJSNumber() * sign;
    const milliseconds = millisecondsBigInt.toJSNumber() * sign;
    const microseconds = microsecondsBigInt.toJSNumber() * sign;
    const nanoseconds = nanosecondsBigInt.toJSNumber() * sign;
    return { days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function UnbalanceDurationRelative(yearsParam, monthsParam, weeksParam, daysParam, largestUnit, relativeToParam) {
    let years = yearsParam;
    let months = monthsParam;
    let weeks = weeksParam;
    let days = daysParam;
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    const sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    let calendar;
    let relativeTo;
    if (relativeToParam) {
        relativeTo = ToTemporalDate(relativeToParam);
        calendar = GetSlot(relativeTo, CALENDAR);
    }
    const oneYear = new TemporalDuration(sign);
    const oneMonth = new TemporalDuration(0, sign);
    const oneWeek = new TemporalDuration(0, 0, sign);
    switch (largestUnit) {
        case 'year':
            // no-op
            break;
        case 'month':
            {
                if (!calendar)
                    throw new RangeError('a starting point is required for months balancing');
                // balance years down to months
                const dateAdd = calendar.dateAdd;
                const dateUntil = calendar.dateUntil;
                let relativeToDateOnly = relativeTo;
                while (MathAbs(years) > 0) {
                    const addOptions = ObjectCreate$2(null);
                    const newRelativeTo = CalendarDateAdd(calendar, relativeToDateOnly, oneYear, addOptions, dateAdd);
                    const untilOptions = ObjectCreate$2(null);
                    untilOptions.largestUnit = 'month';
                    const untilResult = CalendarDateUntil(calendar, relativeToDateOnly, newRelativeTo, untilOptions, dateUntil);
                    const oneYearMonths = GetSlot(untilResult, MONTHS);
                    relativeToDateOnly = newRelativeTo;
                    months += oneYearMonths;
                    years -= sign;
                }
            }
            break;
        case 'week':
            if (!calendar)
                throw new RangeError('a starting point is required for weeks balancing');
            // balance years down to days
            while (MathAbs(years) > 0) {
                let oneYearDays;
                ({ relativeTo, days: oneYearDays } = MoveRelativeDate(calendar, relativeTo, oneYear));
                days += oneYearDays;
                years -= sign;
            }
            // balance months down to days
            while (MathAbs(months) > 0) {
                let oneMonthDays;
                ({ relativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
                days += oneMonthDays;
                months -= sign;
            }
            break;
        default:
            // balance years down to days
            while (MathAbs(years) > 0) {
                if (!calendar)
                    throw new RangeError('a starting point is required for balancing calendar units');
                let oneYearDays;
                ({ relativeTo, days: oneYearDays } = MoveRelativeDate(calendar, relativeTo, oneYear));
                days += oneYearDays;
                years -= sign;
            }
            // balance months down to days
            while (MathAbs(months) > 0) {
                if (!calendar)
                    throw new RangeError('a starting point is required for balancing calendar units');
                let oneMonthDays;
                ({ relativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
                days += oneMonthDays;
                months -= sign;
            }
            // balance weeks down to days
            while (MathAbs(weeks) > 0) {
                if (!calendar)
                    throw new RangeError('a starting point is required for balancing calendar units');
                let oneWeekDays;
                ({ relativeTo, days: oneWeekDays } = MoveRelativeDate(calendar, relativeTo, oneWeek));
                days += oneWeekDays;
                weeks -= sign;
            }
            break;
    }
    return { years, months, weeks, days };
}
function BalanceDurationRelative(yearsParam, monthsParam, weeksParam, daysParam, largestUnit, relativeToParam) {
    let years = yearsParam;
    let months = monthsParam;
    let weeks = weeksParam;
    let days = daysParam;
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    const sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    if (sign === 0)
        return { years, months, weeks, days };
    let calendar;
    let relativeTo;
    if (relativeToParam) {
        relativeTo = ToTemporalDate(relativeToParam);
        calendar = GetSlot(relativeTo, CALENDAR);
    }
    const oneYear = new TemporalDuration(sign);
    const oneMonth = new TemporalDuration(0, sign);
    const oneWeek = new TemporalDuration(0, 0, sign);
    switch (largestUnit) {
        case 'year': {
            if (!calendar)
                throw new RangeError('a starting point is required for years balancing');
            // balance days up to years
            let newRelativeTo, oneYearDays;
            ({ relativeTo: newRelativeTo, days: oneYearDays } = MoveRelativeDate(calendar, relativeTo, oneYear));
            while (MathAbs(days) >= MathAbs(oneYearDays)) {
                days -= oneYearDays;
                years += sign;
                relativeTo = newRelativeTo;
                ({ relativeTo: newRelativeTo, days: oneYearDays } = MoveRelativeDate(calendar, relativeTo, oneYear));
            }
            // balance days up to months
            let oneMonthDays;
            ({ relativeTo: newRelativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
            while (MathAbs(days) >= MathAbs(oneMonthDays)) {
                days -= oneMonthDays;
                months += sign;
                relativeTo = newRelativeTo;
                ({ relativeTo: newRelativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
            }
            // balance months up to years
            const dateAdd = calendar.dateAdd;
            const addOptions = ObjectCreate$2(null);
            newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, addOptions, dateAdd);
            const dateUntil = calendar.dateUntil;
            const untilOptions = ObjectCreate$2(null);
            untilOptions.largestUnit = 'month';
            let untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, untilOptions, dateUntil);
            let oneYearMonths = GetSlot(untilResult, MONTHS);
            while (MathAbs(months) >= MathAbs(oneYearMonths)) {
                months -= oneYearMonths;
                years += sign;
                relativeTo = newRelativeTo;
                const addOptions = ObjectCreate$2(null);
                newRelativeTo = CalendarDateAdd(calendar, relativeTo, oneYear, addOptions, dateAdd);
                const untilOptions = ObjectCreate$2(null);
                untilOptions.largestUnit = 'month';
                untilResult = CalendarDateUntil(calendar, relativeTo, newRelativeTo, untilOptions, dateUntil);
                oneYearMonths = GetSlot(untilResult, MONTHS);
            }
            break;
        }
        case 'month': {
            if (!calendar)
                throw new RangeError('a starting point is required for months balancing');
            // balance days up to months
            let newRelativeTo, oneMonthDays;
            ({ relativeTo: newRelativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
            while (MathAbs(days) >= MathAbs(oneMonthDays)) {
                days -= oneMonthDays;
                months += sign;
                relativeTo = newRelativeTo;
                ({ relativeTo: newRelativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
            }
            break;
        }
        case 'week': {
            if (!calendar)
                throw new RangeError('a starting point is required for weeks balancing');
            // balance days up to weeks
            let newRelativeTo, oneWeekDays;
            ({ relativeTo: newRelativeTo, days: oneWeekDays } = MoveRelativeDate(calendar, relativeTo, oneWeek));
            while (MathAbs(days) >= MathAbs(oneWeekDays)) {
                days -= oneWeekDays;
                weeks += sign;
                relativeTo = newRelativeTo;
                ({ relativeTo: newRelativeTo, days: oneWeekDays } = MoveRelativeDate(calendar, relativeTo, oneWeek));
            }
            break;
        }
    }
    return { years, months, weeks, days };
}
function CalculateOffsetShift(relativeTo, y, mon, w, d, h, min, s, ms, µs, ns) {
    if (IsTemporalZonedDateTime(relativeTo)) {
        const instant = GetSlot(relativeTo, INSTANT);
        const timeZone = GetSlot(relativeTo, TIME_ZONE);
        const calendar = GetSlot(relativeTo, CALENDAR);
        const offsetBefore = GetOffsetNanosecondsFor(timeZone, instant);
        const after = AddZonedDateTime(instant, timeZone, calendar, y, mon, w, d, h, min, s, ms, µs, ns);
        const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
        const instantAfter = new TemporalInstant(after);
        const offsetAfter = GetOffsetNanosecondsFor(timeZone, instantAfter);
        return offsetAfter - offsetBefore;
    }
    return 0;
}
function CreateNegatedTemporalDuration(duration) {
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    return new TemporalDuration(-GetSlot(duration, YEARS), -GetSlot(duration, MONTHS), -GetSlot(duration, WEEKS), -GetSlot(duration, DAYS), -GetSlot(duration, HOURS), -GetSlot(duration, MINUTES), -GetSlot(duration, SECONDS), -GetSlot(duration, MILLISECONDS), -GetSlot(duration, MICROSECONDS), -GetSlot(duration, NANOSECONDS));
}
function ConstrainToRange(value, min, max) {
    return MathMin(max, MathMax(min, value));
}
function ConstrainISODate(year, monthParam, dayParam) {
    const month = ConstrainToRange(monthParam, 1, 12);
    const day = ConstrainToRange(dayParam, 1, ISODaysInMonth(year, month));
    return { year, month, day };
}
function ConstrainTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam) {
    const hour = ConstrainToRange(hourParam, 0, 23);
    const minute = ConstrainToRange(minuteParam, 0, 59);
    const second = ConstrainToRange(secondParam, 0, 59);
    const millisecond = ConstrainToRange(millisecondParam, 0, 999);
    const microsecond = ConstrainToRange(microsecondParam, 0, 999);
    const nanosecond = ConstrainToRange(nanosecondParam, 0, 999);
    return { hour, minute, second, millisecond, microsecond, nanosecond };
}
function RejectToRange(value, min, max) {
    if (value < min || value > max)
        throw new RangeError(`value out of range: ${min} <= ${value} <= ${max}`);
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
    RejectToRange(year, YEAR_MIN, YEAR_MAX);
    // Reject any DateTime 24 hours or more outside the Instant range
    if ((year === YEAR_MIN &&
        null ==
            GetEpochFromISOParts(year, month, day + 1, hour, minute, second, millisecond, microsecond, nanosecond - 1)) ||
        (year === YEAR_MAX &&
            null ==
                GetEpochFromISOParts(year, month, day - 1, hour, minute, second, millisecond, microsecond, nanosecond + 1))) {
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
    }
    else if (year === YEAR_MAX) {
        RejectToRange(month, 1, 9);
    }
}
function RejectDuration(y, mon, w, d, h, min, s, ms, µs, ns) {
    const sign = DurationSign(y, mon, w, d, h, min, s, ms, µs, ns);
    for (const prop of [y, mon, w, d, h, min, s, ms, µs, ns]) {
        if (!NumberIsFinite(prop))
            throw new RangeError('infinite values not allowed as duration fields');
        const propSign = MathSign(prop);
        if (propSign !== 0 && propSign !== sign)
            throw new RangeError('mixed-sign values not allowed as duration fields');
    }
}
function DifferenceISODate(y1, m1, d1, y2, m2, d2, largestUnit) {
    switch (largestUnit) {
        case 'year':
        case 'month': {
            const sign = -CompareISODate(y1, m1, d1, y2, m2, d2);
            if (sign === 0)
                return { years: 0, months: 0, weeks: 0, days: 0 };
            const start = { year: y1, month: m1, day: d1 };
            const end = { year: y2, month: m2, day: d2 };
            let years = end.year - start.year;
            let mid = AddISODate(y1, m1, d1, years, 0, 0, 0, 'constrain');
            let midSign = -CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);
            if (midSign === 0) {
                return largestUnit === 'year'
                    ? { years, months: 0, weeks: 0, days: 0 }
                    : { years: 0, months: years * 12, weeks: 0, days: 0 };
            }
            let months = end.month - start.month;
            if (midSign !== sign) {
                years -= sign;
                months += sign * 12;
            }
            mid = AddISODate(y1, m1, d1, years, months, 0, 0, 'constrain');
            midSign = -CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);
            if (midSign === 0) {
                return largestUnit === 'year'
                    ? { years, months, weeks: 0, days: 0 }
                    : { years: 0, months: months + years * 12, weeks: 0, days: 0 };
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
            let days = 0;
            // If we get here, months and years are correct (no overflow), and `mid`
            // is within the range from `start` to `end`. To count the days between
            // `mid` and `end`, there are 3 cases:
            // 1) same month: use simple subtraction
            // 2) end is previous month from intermediate (negative duration)
            // 3) end is next month from intermediate (positive duration)
            if (mid.month === end.month) {
                // 1) same month: use simple subtraction
                days = end.day - mid.day;
            }
            else if (sign < 0) {
                // 2) end is previous month from intermediate (negative duration)
                // Example: intermediate: Feb 1, end: Jan 30, DaysInMonth = 31, days = -2
                days = -mid.day - (ISODaysInMonth(end.year, end.month) - end.day);
            }
            else {
                // 3) end is next month from intermediate (positive duration)
                // Example: intermediate: Jan 29, end: Feb 1, DaysInMonth = 31, days = 3
                days = end.day + (ISODaysInMonth(mid.year, mid.month) - mid.day);
            }
            if (largestUnit === 'month') {
                months += years * 12;
                years = 0;
            }
            return { years, months, weeks: 0, days };
        }
        case 'week':
        case 'day': {
            let larger, smaller, sign;
            if (CompareISODate(y1, m1, d1, y2, m2, d2) < 0) {
                smaller = { year: y1, month: m1, day: d1 };
                larger = { year: y2, month: m2, day: d2 };
                sign = 1;
            }
            else {
                smaller = { year: y2, month: m2, day: d2 };
                larger = { year: y1, month: m1, day: d1 };
                sign = -1;
            }
            let days = DayOfYear(larger.year, larger.month, larger.day) - DayOfYear(smaller.year, smaller.month, smaller.day);
            for (let year = smaller.year; year < larger.year; ++year) {
                days += LeapYear(year) ? 366 : 365;
            }
            let weeks = 0;
            if (largestUnit === 'week') {
                weeks = MathFloor(days / 7);
                days %= 7;
            }
            weeks *= sign;
            days *= sign;
            return { years: 0, months: 0, weeks, days };
        }
        default:
            throw new Error('assert not reached');
    }
}
function DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2) {
    let hours = h2 - h1;
    let minutes = min2 - min1;
    let seconds = s2 - s1;
    let milliseconds = ms2 - ms1;
    let microseconds = µs2 - µs1;
    let nanoseconds = ns2 - ns1;
    const sign = DurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    hours *= sign;
    minutes *= sign;
    seconds *= sign;
    milliseconds *= sign;
    microseconds *= sign;
    nanoseconds *= sign;
    let deltaDays = 0;
    ({
        deltaDays,
        hour: hours,
        minute: minutes,
        second: seconds,
        millisecond: milliseconds,
        microsecond: microseconds,
        nanosecond: nanoseconds
    } = BalanceTime(hours, minutes, seconds, milliseconds, microseconds, nanoseconds));
    deltaDays *= sign;
    hours *= sign;
    minutes *= sign;
    seconds *= sign;
    milliseconds *= sign;
    microseconds *= sign;
    nanoseconds *= sign;
    return { deltaDays, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function DifferenceInstant(ns1, ns2, increment, unit, roundingMode) {
    const diff = ns2.minus(ns1);
    const remainder = diff.mod(86400e9);
    const wholeDays = diff.minus(remainder);
    const roundedRemainder = RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
    const roundedDiff = wholeDays.plus(roundedRemainder);
    const nanoseconds = +roundedDiff.mod(1e3);
    const microseconds = +roundedDiff.divide(1e3).mod(1e3);
    const milliseconds = +roundedDiff.divide(1e6).mod(1e3);
    const seconds = +roundedDiff.divide(1e9);
    return { seconds, milliseconds, microseconds, nanoseconds };
}
function DifferenceISODateTime(y1Param, mon1Param, d1Param, h1, min1, s1, ms1, µs1, ns1, y2, mon2, d2, h2, min2, s2, ms2, µs2, ns2, calendar, largestUnit, options = ObjectCreate$2(null)) {
    let y1 = y1Param;
    let mon1 = mon1Param;
    let d1 = d1Param;
    let { deltaDays, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = DifferenceTime(h1, min1, s1, ms1, µs1, ns1, h2, min2, s2, ms2, µs2, ns2);
    const timeSign = DurationSign(0, 0, 0, deltaDays, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    ({ year: y1, month: mon1, day: d1 } = BalanceISODate(y1, mon1, d1 + deltaDays));
    const dateSign = CompareISODate(y2, mon2, d2, y1, mon1, d1);
    if (dateSign === -timeSign) {
        ({ year: y1, month: mon1, day: d1 } = BalanceISODate(y1, mon1, d1 - timeSign));
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(-timeSign, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
    }
    const date1 = CreateTemporalDate(y1, mon1, d1, calendar);
    const date2 = CreateTemporalDate(y2, mon2, d2, calendar);
    const dateLargestUnit = LargerOfTwoTemporalUnits('day', largestUnit);
    const untilOptions = { ...options, largestUnit: dateLargestUnit };
    let { years, months, weeks, days } = CalendarDateUntil(calendar, date1, date2, untilOptions);
    // Signs of date part and time part may not agree; balance them together
    ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
    return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, options) {
    const nsDiff = ns2.subtract(ns1);
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
    }
    // Find the difference in dates only.
    const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    const start = new TemporalInstant(ns1);
    const end = new TemporalInstant(ns2);
    const dtStart = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, start, calendar);
    const dtEnd = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, end, calendar);
    let { years, months, weeks, days } = DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar, largestUnit, options);
    const intermediateNs = AddZonedDateTime(start, timeZone, calendar, years, months, weeks, 0, 0, 0, 0, 0, 0, 0);
    // may disambiguate
    let timeRemainderNs = ns2.subtract(intermediateNs);
    const intermediate = CreateTemporalZonedDateTime(intermediateNs, timeZone, calendar);
    ({ nanoseconds: timeRemainderNs, days } = NanosecondsToDays(timeRemainderNs, intermediate));
    // Finally, merge the date and time durations and return the merged result.
    const { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs.toJSNumber(), 'hour');
    return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function AddISODate(yearParam, monthParam, dayParam, yearsParam, monthsParam, weeksParam, daysParam, overflow) {
    let year = yearParam;
    let month = monthParam;
    let day = dayParam;
    let years = yearsParam;
    let months = monthsParam;
    let weeks = weeksParam;
    let days = daysParam;
    year += years;
    month += months;
    ({ year, month } = BalanceISOYearMonth(year, month));
    ({ year, month, day } = RegulateISODate(year, month, day, overflow));
    days += 7 * weeks;
    day += days;
    ({ year, month, day } = BalanceISODate(year, month, day));
    return { year, month, day };
}
function AddTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
    let hour = hourParam;
    let minute = minuteParam;
    let second = secondParam;
    let millisecond = millisecondParam;
    let microsecond = microsecondParam;
    let nanosecond = nanosecondParam;
    hour += hours;
    minute += minutes;
    second += seconds;
    millisecond += milliseconds;
    microsecond += microseconds;
    nanosecond += nanoseconds;
    let deltaDays = 0;
    ({ deltaDays, hour, minute, second, millisecond, microsecond, nanosecond } = BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond));
    return { deltaDays, hour, minute, second, millisecond, microsecond, nanosecond };
}
function AddDuration(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2, relativeTo) {
    const largestUnit1 = DefaultTemporalLargestUnit(y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
    const largestUnit2 = DefaultTemporalLargestUnit(y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);
    const largestUnit = LargerOfTwoTemporalUnits(largestUnit1, largestUnit2);
    let years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
    if (!relativeTo) {
        if (largestUnit === 'year' || largestUnit === 'month' || largestUnit === 'week') {
            throw new RangeError('relativeTo is required for years, months, or weeks arithmetic');
        }
        years = months = weeks = 0;
        ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(d1 + d2, h1 + h2, min1 + min2, s1 + s2, ms1 + ms2, µs1 + µs2, ns1 + ns2, largestUnit));
    }
    else if (IsTemporalDate(relativeTo)) {
        const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
        const calendar = GetSlot(relativeTo, CALENDAR);
        const dateDuration1 = new TemporalDuration(y1, mon1, w1, d1, 0, 0, 0, 0, 0, 0);
        const dateDuration2 = new TemporalDuration(y2, mon2, w2, d2, 0, 0, 0, 0, 0, 0);
        const dateAdd = calendar.dateAdd;
        const firstAddOptions = ObjectCreate$2(null);
        const intermediate = CalendarDateAdd(calendar, relativeTo, dateDuration1, firstAddOptions, dateAdd);
        const secondAddOptions = ObjectCreate$2(null);
        const end = CalendarDateAdd(calendar, intermediate, dateDuration2, secondAddOptions, dateAdd);
        const dateLargestUnit = LargerOfTwoTemporalUnits('day', largestUnit);
        const differenceOptions = ObjectCreate$2(null);
        differenceOptions.largestUnit = dateLargestUnit;
        ({ years, months, weeks, days } = CalendarDateUntil(calendar, relativeTo, end, differenceOptions));
        // Signs of date part and time part may not agree; balance them together
        ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(days, h1 + h2, min1 + min2, s1 + s2, ms1 + ms2, µs1 + µs2, ns1 + ns2, largestUnit));
    }
    else {
        // relativeTo is a ZonedDateTime
        const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
        const timeZone = GetSlot(relativeTo, TIME_ZONE);
        const calendar = GetSlot(relativeTo, CALENDAR);
        const intermediateNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
        const endNs = AddZonedDateTime(new TemporalInstant(intermediateNs), timeZone, calendar, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);
        if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
            // The user is only asking for a time difference, so return difference of instants.
            years = 0;
            months = 0;
            weeks = 0;
            days = 0;
            ({ seconds, milliseconds, microseconds, nanoseconds } = DifferenceInstant(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, 1, 'nanosecond', 'halfExpand'));
            ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        }
        else {
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                DifferenceZonedDateTime(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, timeZone, calendar, largestUnit));
        }
    }
    RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function AddInstant(epochNanoseconds, h, min, s, ms, µs, ns) {
    let sum = bigInt.zero;
    sum = sum.plus(bigInt(ns));
    sum = sum.plus(bigInt(µs).multiply(1e3));
    sum = sum.plus(bigInt(ms).multiply(1e6));
    sum = sum.plus(bigInt(s).multiply(1e9));
    sum = sum.plus(bigInt(min).multiply(60 * 1e9));
    sum = sum.plus(bigInt(h).multiply(60 * 60 * 1e9));
    const result = bigInt(epochNanoseconds).plus(sum);
    ValidateEpochNanoseconds(result);
    return result;
}
function AddDateTime(year, month, day, hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, calendar, years, months, weeks, daysParam, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options) {
    let days = daysParam;
    // Add the time part
    let { deltaDays, hour, minute, second, millisecond, microsecond, nanosecond } = AddTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    days += deltaDays;
    // Delegate the date part addition to the calendar
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    const datePart = CreateTemporalDate(year, month, day, calendar);
    const dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    const addedDate = CalendarDateAdd(calendar, datePart, dateDuration, options);
    return {
        year: GetSlot(addedDate, ISO_YEAR),
        month: GetSlot(addedDate, ISO_MONTH),
        day: GetSlot(addedDate, ISO_DAY),
        hour,
        minute,
        second,
        millisecond,
        microsecond,
        nanosecond
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
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    if (DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0) === 0) {
        return AddInstant(GetSlot(instant, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
    }
    // RFC 5545 requires the date portion to be added in calendar days and the
    // time portion to be added in exact time.
    const dt = BuiltinTimeZoneGetPlainDateTimeFor(timeZone, instant, calendar);
    const datePart = CreateTemporalDate(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), calendar);
    const dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    const addedDate = CalendarDateAdd(calendar, datePart, dateDuration, options);
    const dtIntermediate = CreateTemporalDateTime(GetSlot(addedDate, ISO_YEAR), GetSlot(addedDate, ISO_MONTH), GetSlot(addedDate, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND), calendar);
    // Note that 'compatible' is used below because this disambiguation behavior
    // is required by RFC 5545.
    const instantIntermediate = BuiltinTimeZoneGetInstantFor(timeZone, dtIntermediate, 'compatible');
    return AddInstant(GetSlot(instantIntermediate, EPOCHNANOSECONDS), h, min, s, ms, µs, ns);
}
function RoundNumberToIncrement(quantity, increment, mode) {
    if (increment === 1)
        return quantity;
    let { quotient, remainder } = quantity.divmod(increment);
    if (remainder.equals(bigInt.zero))
        return quantity;
    const sign = remainder.lt(bigInt.zero) ? -1 : 1;
    switch (mode) {
        case 'ceil':
            if (sign > 0)
                quotient = quotient.add(sign);
            break;
        case 'floor':
            if (sign < 0)
                quotient = quotient.add(sign);
            break;
        case 'trunc':
            // no change needed, because divmod is a truncation
            break;
        case 'halfExpand':
            // "half up away from zero"
            if (remainder.multiply(2).abs().toJSNumber() >= increment)
                quotient = quotient.add(sign);
            break;
    }
    return quotient.multiply(increment);
}
function RoundInstant(epochNs, increment, unit, roundingMode) {
    // Note: NonNegativeModulo, but with BigInt
    let remainder = epochNs.mod(86400e9);
    if (remainder.lesser(0))
        remainder = remainder.plus(86400e9);
    const wholeDays = epochNs.minus(remainder);
    const roundedRemainder = RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
    return wholeDays.plus(roundedRemainder);
}
function RoundISODateTime(yearParam, monthParam, dayParam, hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, increment, unit, roundingMode, dayLengthNs = 86400e9) {
    const { deltaDays, hour, minute, second, millisecond, microsecond, nanosecond } = RoundTime(hourParam, minuteParam, secondParam, millisecondParam, microsecondParam, nanosecondParam, increment, unit, roundingMode, dayLengthNs);
    const { year, month, day } = BalanceISODate(yearParam, monthParam, dayParam + deltaDays);
    return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond };
}
function RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode, dayLengthNs = 86400e9) {
    let quantity = bigInt.zero;
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
    const nsPerUnit = unit === 'day' ? dayLengthNs : nsPerTimeUnit[unit];
    const rounded = RoundNumberToIncrement(quantity, nsPerUnit * increment, roundingMode);
    const result = rounded.divide(nsPerUnit).toJSNumber();
    switch (unit) {
        case 'day':
            return { deltaDays: result, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 };
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
            throw new Error(`Invalid unit ${unit}`);
    }
}
function DaysUntil(earlier, later) {
    return DifferenceISODate(GetSlot(earlier, ISO_YEAR), GetSlot(earlier, ISO_MONTH), GetSlot(earlier, ISO_DAY), GetSlot(later, ISO_YEAR), GetSlot(later, ISO_MONTH), GetSlot(later, ISO_DAY), 'day').days;
}
function MoveRelativeDate(calendar, relativeToParam, duration) {
    const options = ObjectCreate$2(null);
    const later = CalendarDateAdd(calendar, relativeToParam, duration, options);
    const days = DaysUntil(relativeToParam, later);
    return { relativeTo: later, days };
}
function MoveRelativeZonedDateTime(relativeTo, years, months, weeks, days) {
    const timeZone = GetSlot(relativeTo, TIME_ZONE);
    const calendar = GetSlot(relativeTo, CALENDAR);
    const intermediateNs = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    return CreateTemporalZonedDateTime(intermediateNs, timeZone, calendar);
}
function AdjustRoundedDurationDays(yearsParam, monthsParam, weeksParam, daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, increment, unit, roundingMode, relativeTo) {
    let years = yearsParam;
    let months = monthsParam;
    let weeks = weeksParam;
    let days = daysParam;
    let hours = hoursParam;
    let minutes = minutesParam;
    let seconds = secondsParam;
    let milliseconds = millisecondsParam;
    let microseconds = microsecondsParam;
    let nanoseconds = nanosecondsParam;
    if (!IsTemporalZonedDateTime(relativeTo) ||
        unit === 'year' ||
        unit === 'month' ||
        unit === 'week' ||
        unit === 'day' ||
        (unit === 'nanosecond' && increment === 1)) {
        return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
    }
    // There's one more round of rounding possible: if relativeTo is a
    // ZonedDateTime, the time units could have rounded up into enough hours
    // to exceed the day length. If this happens, grow the date part by a
    // single day and re-run exact time rounding on the smaller remainder. DO
    // NOT RECURSE, because once the extra hours are sucked up into the date
    // duration, there's no way for another full day to come from the next
    // round of rounding. And if it were possible (e.g. contrived calendar
    // with 30-minute-long "days") then it'd risk an infinite loop.
    let timeRemainderNs = TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
    const direction = MathSign(timeRemainderNs.toJSNumber());
    const timeZone = GetSlot(relativeTo, TIME_ZONE);
    const calendar = GetSlot(relativeTo, CALENDAR);
    const dayStart = AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone, calendar, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
    const dayEnd = AddZonedDateTime(new TemporalInstant(dayStart), timeZone, calendar, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0);
    const dayLengthNs = dayEnd.subtract(dayStart);
    if (timeRemainderNs.subtract(dayLengthNs).multiply(direction).geq(0)) {
        ({ years, months, weeks, days } = AddDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0, relativeTo));
        timeRemainderNs = RoundInstant(timeRemainderNs.subtract(dayLengthNs), increment, unit, roundingMode);
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs.toJSNumber(), 'hour'));
    }
    return { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds };
}
function RoundDuration(yearsParam, monthsParam, weeksParam, daysParam, hoursParam, minutesParam, secondsParam, millisecondsParam, microsecondsParam, nanosecondsParam, increment, unit, roundingMode, relativeToParam = undefined) {
    let years = yearsParam;
    let months = monthsParam;
    let weeks = weeksParam;
    let days = daysParam;
    let hours = hoursParam;
    let minutes = minutesParam;
    let seconds = secondsParam;
    let milliseconds = millisecondsParam;
    let microseconds = microsecondsParam;
    let nanoseconds = bigInt(nanosecondsParam);
    const TemporalDuration = GetIntrinsic('%Temporal.Duration%');
    let calendar, zdtRelative;
    // A cast is used below because relativeTo will be either PlainDate or
    // undefined for the rest of this long method (after any ZDT=>PlainDate
    // conversion below), and TS isn't smart enough to know that the type has
    // changed. See https://github.com/microsoft/TypeScript/issues/27706.
    let relativeTo = relativeToParam;
    if (relativeTo) {
        if (IsTemporalZonedDateTime(relativeTo)) {
            zdtRelative = relativeTo;
            relativeTo = ToTemporalDate(relativeTo);
        }
        else if (!IsTemporalDate(relativeTo)) {
            throw new TypeError('starting point must be PlainDate or ZonedDateTime');
        }
        calendar = GetSlot(relativeTo, CALENDAR);
    }
    // First convert time units up to days, if rounding to days or higher units.
    // If rounding relative to a ZonedDateTime, then some days may not be 24h.
    let dayLengthNs;
    if (unit === 'year' || unit === 'month' || unit === 'week' || unit === 'day') {
        nanoseconds = TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanosecondsParam, 0);
        let intermediate;
        if (zdtRelative) {
            intermediate = MoveRelativeZonedDateTime(zdtRelative, years, months, weeks, days);
        }
        let deltaDays;
        ({ days: deltaDays, nanoseconds, dayLengthNs } = NanosecondsToDays(nanoseconds, intermediate));
        days += deltaDays;
        hours = minutes = seconds = milliseconds = microseconds = 0;
    }
    let total;
    switch (unit) {
        case 'year': {
            if (!calendar)
                throw new RangeError('A starting point is required for years rounding');
            // convert months and weeks to days by calculating difference(
            // relativeTo + years, relativeTo + { years, months, weeks })
            const yearsDuration = new TemporalDuration(years);
            const dateAdd = calendar.dateAdd;
            const firstAddOptions = ObjectCreate$2(null);
            const yearsLater = CalendarDateAdd(calendar, relativeTo, yearsDuration, firstAddOptions, dateAdd);
            const yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
            const secondAddOptions = ObjectCreate$2(null);
            const yearsMonthsWeeksLater = CalendarDateAdd(calendar, relativeTo, yearsMonthsWeeks, secondAddOptions, dateAdd);
            const monthsWeeksInDays = DaysUntil(yearsLater, yearsMonthsWeeksLater);
            relativeTo = yearsLater;
            days += monthsWeeksInDays;
            const thirdAddOptions = ObjectCreate$2(null);
            const daysLater = CalendarDateAdd(calendar, relativeTo, { days }, thirdAddOptions, dateAdd);
            const untilOptions = ObjectCreate$2(null);
            untilOptions.largestUnit = 'year';
            const yearsPassed = CalendarDateUntil(calendar, relativeTo, daysLater, untilOptions).years;
            years += yearsPassed;
            const oldRelativeTo = relativeTo;
            const fourthAddOptions = ObjectCreate$2(null);
            relativeTo = CalendarDateAdd(calendar, relativeTo, { years: yearsPassed }, fourthAddOptions, dateAdd);
            const daysPassed = DaysUntil(oldRelativeTo, relativeTo);
            days -= daysPassed;
            const oneYear = new TemporalDuration(days < 0 ? -1 : 1);
            let { days: oneYearDays } = MoveRelativeDate(calendar, relativeTo, oneYear);
            // Note that `nanoseconds` below (here and in similar code for months,
            // weeks, and days further below) isn't actually nanoseconds for the
            // full date range.  Instead, it's a BigInt representation of total
            // days multiplied by the number of nanoseconds in the last day of
            // the duration. This lets us do days-or-larger rounding using BigInt
            // math which reduces precision loss.
            oneYearDays = MathAbs(oneYearDays);
            const divisor = bigInt(oneYearDays).multiply(dayLengthNs);
            nanoseconds = divisor.multiply(years).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
            const rounded = RoundNumberToIncrement(nanoseconds, divisor.multiply(increment).toJSNumber(), roundingMode);
            total = nanoseconds.toJSNumber() / divisor.toJSNumber();
            years = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            months = weeks = days = 0;
            break;
        }
        case 'month': {
            if (!calendar)
                throw new RangeError('A starting point is required for months rounding');
            // convert weeks to days by calculating difference(relativeTo +
            //   { years, months }, relativeTo + { years, months, weeks })
            const yearsMonths = new TemporalDuration(years, months);
            const dateAdd = calendar.dateAdd;
            const firstAddOptions = ObjectCreate$2(null);
            const yearsMonthsLater = CalendarDateAdd(calendar, relativeTo, yearsMonths, firstAddOptions, dateAdd);
            const yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
            const secondAddOptions = ObjectCreate$2(null);
            const yearsMonthsWeeksLater = CalendarDateAdd(calendar, relativeTo, yearsMonthsWeeks, secondAddOptions, dateAdd);
            const weeksInDays = DaysUntil(yearsMonthsLater, yearsMonthsWeeksLater);
            relativeTo = yearsMonthsLater;
            days += weeksInDays;
            // Months may be different lengths of days depending on the calendar,
            // convert days to months in a loop as described above under 'years'.
            const sign = MathSign(days);
            const oneMonth = new TemporalDuration(0, days < 0 ? -1 : 1);
            let oneMonthDays;
            ({ relativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
            while (MathAbs(days) >= MathAbs(oneMonthDays)) {
                months += sign;
                days -= oneMonthDays;
                ({ relativeTo, days: oneMonthDays } = MoveRelativeDate(calendar, relativeTo, oneMonth));
            }
            oneMonthDays = MathAbs(oneMonthDays);
            const divisor = bigInt(oneMonthDays).multiply(dayLengthNs);
            nanoseconds = divisor.multiply(months).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
            const rounded = RoundNumberToIncrement(nanoseconds, divisor.multiply(increment).toJSNumber(), roundingMode);
            total = nanoseconds.toJSNumber() / divisor.toJSNumber();
            months = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            weeks = days = 0;
            break;
        }
        case 'week': {
            if (!calendar)
                throw new RangeError('A starting point is required for weeks rounding');
            // Weeks may be different lengths of days depending on the calendar,
            // convert days to weeks in a loop as described above under 'years'.
            const sign = MathSign(days);
            const oneWeek = new TemporalDuration(0, 0, days < 0 ? -1 : 1);
            let oneWeekDays;
            ({ relativeTo, days: oneWeekDays } = MoveRelativeDate(calendar, relativeTo, oneWeek));
            while (MathAbs(days) >= MathAbs(oneWeekDays)) {
                weeks += sign;
                days -= oneWeekDays;
                ({ relativeTo, days: oneWeekDays } = MoveRelativeDate(calendar, relativeTo, oneWeek));
            }
            oneWeekDays = MathAbs(oneWeekDays);
            const divisor = bigInt(oneWeekDays).multiply(dayLengthNs);
            nanoseconds = divisor.multiply(weeks).plus(bigInt(days).multiply(dayLengthNs)).plus(nanoseconds);
            const rounded = RoundNumberToIncrement(nanoseconds, divisor.multiply(increment).toJSNumber(), roundingMode);
            total = nanoseconds.toJSNumber() / divisor.toJSNumber();
            weeks = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            days = 0;
            break;
        }
        case 'day': {
            const divisor = bigInt(dayLengthNs);
            nanoseconds = divisor.multiply(days).plus(nanoseconds);
            const rounded = RoundNumberToIncrement(nanoseconds, divisor.multiply(increment).toJSNumber(), roundingMode);
            total = nanoseconds.toJSNumber() / divisor.toJSNumber();
            days = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            break;
        }
        case 'hour': {
            const divisor = 3600e9;
            nanoseconds = bigInt(hours)
                .multiply(3600e9)
                .plus(bigInt(minutes).multiply(60e9))
                .plus(bigInt(seconds).multiply(1e9))
                .plus(bigInt(milliseconds).multiply(1e6))
                .plus(bigInt(microseconds).multiply(1e3))
                .plus(nanoseconds);
            total = nanoseconds.toJSNumber() / divisor;
            const rounded = RoundNumberToIncrement(nanoseconds, divisor * increment, roundingMode);
            hours = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            minutes = seconds = milliseconds = microseconds = 0;
            break;
        }
        case 'minute': {
            const divisor = 60e9;
            nanoseconds = bigInt(minutes)
                .multiply(60e9)
                .plus(bigInt(seconds).multiply(1e9))
                .plus(bigInt(milliseconds).multiply(1e6))
                .plus(bigInt(microseconds).multiply(1e3))
                .plus(nanoseconds);
            total = nanoseconds.toJSNumber() / divisor;
            const rounded = RoundNumberToIncrement(nanoseconds, divisor * increment, roundingMode);
            minutes = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            seconds = milliseconds = microseconds = 0;
            break;
        }
        case 'second': {
            const divisor = 1e9;
            nanoseconds = bigInt(seconds)
                .multiply(1e9)
                .plus(bigInt(milliseconds).multiply(1e6))
                .plus(bigInt(microseconds).multiply(1e3))
                .plus(nanoseconds);
            total = nanoseconds.toJSNumber() / divisor;
            const rounded = RoundNumberToIncrement(nanoseconds, divisor * increment, roundingMode);
            seconds = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            milliseconds = microseconds = 0;
            break;
        }
        case 'millisecond': {
            const divisor = 1e6;
            nanoseconds = bigInt(milliseconds).multiply(1e6).plus(bigInt(microseconds).multiply(1e3)).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / divisor;
            const rounded = RoundNumberToIncrement(nanoseconds, divisor * increment, roundingMode);
            milliseconds = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            microseconds = 0;
            break;
        }
        case 'microsecond': {
            const divisor = 1e3;
            nanoseconds = bigInt(microseconds).multiply(1e3).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / divisor;
            const rounded = RoundNumberToIncrement(nanoseconds, divisor * increment, roundingMode);
            microseconds = rounded.divide(divisor).toJSNumber();
            nanoseconds = bigInt.zero;
            break;
        }
        case 'nanosecond': {
            total = nanoseconds.toJSNumber();
            nanoseconds = RoundNumberToIncrement(bigInt(nanoseconds), increment, roundingMode);
            break;
        }
    }
    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
        microseconds,
        nanoseconds: nanoseconds.toJSNumber(),
        total
    };
}
function CompareISODate(y1, m1, d1, y2, m2, d2) {
    for (const [x, y] of [
        [y1, y2],
        [m1, m2],
        [d1, d2]
    ]) {
        if (x !== y)
            return ComparisonResult(x - y);
    }
    return 0;
}
function NonNegativeModulo(x, y) {
    let result = x % y;
    if (ObjectIs(result, -0))
        return 0;
    if (result < 0)
        result += y;
    return result;
}
function ToBigInt(arg) {
    if (bigInt.isInstance(arg)) {
        return arg;
    }
    let prim = arg;
    if (typeof arg === 'object') {
        const toPrimFn = arg[Symbol.toPrimitive];
        if (toPrimFn && typeof toPrimFn === 'function') {
            prim = ReflectApply$1(toPrimFn, arg, ['number']);
        }
    }
    switch (typeof prim) {
        case 'undefined':
        case 'object':
        case 'number':
        case 'symbol':
        default:
            throw new TypeError(`cannot convert ${typeof arg} to bigint`);
        case 'string':
            if (!prim.match(/^\s*(?:[+-]?\d+\s*)?$/)) {
                throw new SyntaxError('invalid BigInt syntax');
            }
        // eslint: no-fallthrough: false
        case 'bigint':
            try {
                return bigInt(prim);
            }
            catch (e) {
                if (e instanceof Error && e.message.startsWith('Invalid integer'))
                    throw new SyntaxError(e.message);
                throw e;
            }
        case 'boolean':
            if (prim) {
                return bigInt(1);
            }
            else {
                return bigInt.zero;
            }
    }
}
// Note: This method returns values with bogus nanoseconds based on the previous iteration's
// milliseconds. That way there is a guarantee that the full nanoseconds are always going to be
// increasing at least and that the microsecond and nanosecond fields are likely to be non-zero.
const SystemUTCEpochNanoSeconds = (() => {
    let ns = Date.now() % 1e6;
    return () => {
        const ms = Date.now();
        const result = bigInt(ms).multiply(1e6).plus(ns);
        ns = ms % 1e6;
        return bigInt.min(NS_MAX, bigInt.max(NS_MIN, result));
    };
})();
function SystemTimeZone() {
    const fmt = new IntlDateTimeFormat$1('en-us');
    const TemporalTimeZone = GetIntrinsic('%Temporal.TimeZone%');
    return new TemporalTimeZone(ParseTemporalTimeZone(fmt.resolvedOptions().timeZone));
}
function ComparisonResult(value) {
    return value < 0 ? -1 : value > 0 ? 1 : value;
}
function GetOptionsObject(options) {
    if (options === undefined)
        return ObjectCreate$2(null);
    if (IsObject(options) && options !== null)
        return options;
    throw new TypeError(`Options parameter must be an object, not ${options === null ? 'null' : `${typeof options}`}`);
}
function CreateOnePropObject(propName, propValue) {
    const o = ObjectCreate$2(null);
    o[propName] = propValue;
    return o;
}
function GetOption(options, property, allowedValues, fallback) {
    let value = options[property];
    if (value !== undefined) {
        value = ToString(value);
        if (!allowedValues.includes(value)) {
            throw new RangeError(`${property} must be one of ${allowedValues.join(', ')}, not ${value}`);
        }
        return value;
    }
    return fallback;
}
function GetNumberOption(options, property, minimum, maximum, fallback) {
    let valueRaw = options[property];
    if (valueRaw === undefined)
        return fallback;
    const value = ToNumber(valueRaw);
    if (NumberIsNaN(value) || value < minimum || value > maximum) {
        throw new RangeError(`${property} must be between ${minimum} and ${maximum}, not ${value}`);
    }
    return MathFloor(value);
}
const OFFSET = new RegExp(`^${offset.source}$`);
function bisect(getState, leftParam, rightParam, lstateParam = getState(leftParam), rstateParam = getState(rightParam)) {
    let left = bigInt(leftParam);
    let right = bigInt(rightParam);
    let lstate = lstateParam;
    let rstate = rstateParam;
    while (right.minus(left).greater(1)) {
        const middle = left.plus(right).divide(2);
        const mstate = getState(middle);
        if (mstate === lstate) {
            left = middle;
            lstate = mstate;
        }
        else if (mstate === rstate) {
            right = middle;
            rstate = mstate;
        }
        else {
            throw new Error(`invalid state in bisection ${lstate} - ${mstate} - ${rstate}`);
        }
    }
    return right;
}
const nsPerTimeUnit = {
    hour: 3600e9,
    minute: 60e9,
    second: 1e9,
    millisecond: 1e6,
    microsecond: 1e3,
    nanosecond: 1
};

const DATE = Symbol('date');
const YM = Symbol('ym');
const MD = Symbol('md');
const TIME = Symbol('time');
const DATETIME = Symbol('datetime');
const ZONED = Symbol('zoneddatetime');
const INST = Symbol('instant');
const ORIGINAL = Symbol('original');
const TZ_RESOLVED = Symbol('timezone');
const TZ_GIVEN = Symbol('timezone-id-given');
const CAL_ID = Symbol('calendar-id');
const LOCALE = Symbol('locale');
const OPTIONS = Symbol('options');
const descriptor = (value) => {
    return {
        value,
        enumerable: true,
        writable: false,
        configurable: true
    };
};
const IntlDateTimeFormat = globalThis.Intl.DateTimeFormat;
const ObjectAssign$1 = Object.assign;
const ObjectHasOwnProperty = Object.prototype.hasOwnProperty;
const ReflectApply = Reflect.apply;
// Construction of built-in Intl.DateTimeFormat objects is sloooooow,
// so we'll only create those instances when we need them.
// See https://bugs.chromium.org/p/v8/issues/detail?id=6528
function getPropLazy(obj, prop) {
    let val = obj[prop];
    if (typeof val === 'function') {
        // If we get here, `val` is an "amender function". It will take the user's
        // options and transform them into suitable options to be passed into the
        // built-in (non-polyfill) Intl.DateTimeFormat constructor. These options
        // will vary depending on the Temporal type, so that's why we store separate
        // formatters in separate props on the polyfill's DateTimeFormat instances.
        // The efficiency happens because we don't create an (expensive) formatter
        // until the user calls toLocaleString for that Temporal type.
        val = new IntlDateTimeFormat(obj[LOCALE], val(obj[OPTIONS]));
        // TODO: can this be typed more cleanly?
        obj[prop] = val;
    }
    return val;
}
// Similarly, lazy-init TimeZone instances.
function getResolvedTimeZoneLazy(obj) {
    let val = obj[TZ_RESOLVED];
    if (typeof val === 'string') {
        val = ToTemporalTimeZone(val);
        obj[TZ_RESOLVED] = val;
    }
    return val;
}
function DateTimeFormatImpl(locale = undefined, optionsParam = {}) {
    if (!(this instanceof DateTimeFormatImpl)) {
        return new DateTimeFormatImpl(locale, optionsParam);
    }
    const hasOptions = typeof optionsParam !== 'undefined';
    const options = hasOptions ? ObjectAssign$1({}, optionsParam) : {};
    // TODO: remove type assertion after Temporal types land in TS lib types
    const original = new IntlDateTimeFormat(locale, options);
    const ro = original.resolvedOptions();
    // DateTimeFormat instances are very expensive to create. Therefore, they will
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
        const clonedResolved = ObjectAssign$1({}, ro);
        for (const prop in clonedResolved) {
            if (!ReflectApply(ObjectHasOwnProperty, options, [prop])) {
                delete clonedResolved[prop];
            }
        }
        this[OPTIONS] = clonedResolved;
    }
    else {
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
const DateTimeFormat = DateTimeFormatImpl;
DateTimeFormatImpl.supportedLocalesOf = function (locales, options) {
    return IntlDateTimeFormat.supportedLocalesOf(locales, options);
};
const properties = {
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
    if (!timeZone)
        return formatter;
    const options = formatter.resolvedOptions();
    if (options.timeZone === timeZone)
        return formatter;
    // Existing Intl isn't typed to accept Temporal-specific options, but will not
    // break at runtime if we pass them. Also, the lib types for resolved options
    // are less restrictive than the types for options. For example, `weekday` is
    // `'long' | 'short' | 'narrow'` in options but `string` in resolved options.
    // TODO: investigate why, and file an issue against TS if it's a bug.
    return new IntlDateTimeFormat(options.locale, { ...options, timeZone });
}
// TODO: investigate why there's a rest parameter here. Does this function really need to accept extra params?
// And if so, why doesn't formatRange also accept extra params?
function format(datetime, ...rest) {
    let { instant, formatter, timeZone } = extractOverrides(datetime, this);
    if (instant && formatter) {
        formatter = adjustFormatterTimeZone(formatter, timeZone);
        return formatter.format(instant.epochMilliseconds);
    }
    return this[ORIGINAL].format(datetime, ...rest);
}
function formatToParts(datetime, ...rest) {
    let { instant, formatter, timeZone } = extractOverrides(datetime, this);
    if (instant && formatter) {
        formatter = adjustFormatterTimeZone(formatter, timeZone);
        return formatter.formatToParts(instant.epochMilliseconds);
    }
    return this[ORIGINAL].formatToParts(datetime, ...rest);
}
function formatRange(a, b) {
    if (isTemporalObject(a) || isTemporalObject(b)) {
        if (!sameTemporalType(a, b)) {
            throw new TypeError('Intl.DateTimeFormat.formatRange accepts two values of the same type');
        }
        const { instant: aa, formatter: aformatter, timeZone: atz } = extractOverrides(a, this);
        const { instant: bb, formatter: bformatter, timeZone: btz } = extractOverrides(b, this);
        if (atz && btz && atz !== btz) {
            throw new RangeError('cannot format range between different time zones');
        }
        if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
            const formatter = adjustFormatterTimeZone(aformatter, atz);
            // TODO: Remove type assertion after this method lands in TS lib types
            return formatter.formatRange(aa.epochMilliseconds, bb.epochMilliseconds);
        }
    }
    // TODO: Remove type assertion after this method lands in TS lib types
    return this[ORIGINAL].formatRange(a, b);
}
function formatRangeToParts(a, b) {
    if (isTemporalObject(a) || isTemporalObject(b)) {
        if (!sameTemporalType(a, b)) {
            throw new TypeError('Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type');
        }
        const { instant: aa, formatter: aformatter, timeZone: atz } = extractOverrides(a, this);
        const { instant: bb, formatter: bformatter, timeZone: btz } = extractOverrides(b, this);
        if (atz && btz && atz !== btz) {
            throw new RangeError('cannot format range between different time zones');
        }
        if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
            const formatter = adjustFormatterTimeZone(aformatter, atz);
            // TODO: Remove type assertion after this method lands in TS lib types
            return formatter.formatRangeToParts(aa.epochMilliseconds, bb.epochMilliseconds);
        }
    }
    // TODO: Remove type assertion after this method lands in TS lib types
    return this[ORIGINAL].formatRangeToParts(a, b);
}
function amend(optionsParam = {}, amended = {}) {
    const options = ObjectAssign$1({}, optionsParam);
    for (const opt of [
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'weekday',
        'dayPeriod',
        'timeZoneName',
        'dateStyle',
        'timeStyle'
    ]) {
        options[opt] = opt in amended ? amended[opt] : options[opt];
        if (options[opt] === false || options[opt] === undefined)
            delete options[opt];
    }
    return options;
}
function timeAmend(optionsParam) {
    let options = amend(optionsParam, {
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
    let options = amend(optionsParam, {
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
        options = ObjectAssign$1(options, { year: 'numeric', month: 'numeric' });
    }
    return options;
}
function monthDayAmend(optionsParam) {
    let options = amend(optionsParam, {
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
        options = ObjectAssign$1({}, options, { month: 'numeric', day: 'numeric' });
    }
    return options;
}
function dateAmend(optionsParam) {
    let options = amend(optionsParam, {
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
    let options = amend(optionsParam, { timeZoneName: false });
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
    let options = optionsParam;
    if (!hasTimeOptions(options) && !hasDateOptions(options)) {
        options = ObjectAssign$1({}, options, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        if (options.timeZoneName === undefined)
            options.timeZoneName = 'short';
    }
    return options;
}
function instantAmend(optionsParam) {
    let options = optionsParam;
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
    return ('hour' in options || 'minute' in options || 'second' in options || 'timeStyle' in options || 'dayPeriod' in options);
}
function isTemporalObject(obj) {
    return (IsTemporalDate(obj) ||
        IsTemporalTime(obj) ||
        IsTemporalDateTime(obj) ||
        IsTemporalZonedDateTime(obj) ||
        IsTemporalYearMonth(obj) ||
        IsTemporalMonthDay(obj) ||
        IsTemporalInstant(obj));
}
function sameTemporalType(x, y) {
    if (!isTemporalObject(x) || !isTemporalObject(y))
        return false;
    if (IsTemporalTime(x) && !IsTemporalTime(y))
        return false;
    if (IsTemporalDate(x) && !IsTemporalDate(y))
        return false;
    if (IsTemporalDateTime(x) && !IsTemporalDateTime(y))
        return false;
    if (IsTemporalZonedDateTime(x) && !IsTemporalZonedDateTime(y))
        return false;
    if (IsTemporalYearMonth(x) && !IsTemporalYearMonth(y))
        return false;
    if (IsTemporalMonthDay(x) && !IsTemporalMonthDay(y))
        return false;
    if (IsTemporalInstant(x) && !IsTemporalInstant(y))
        return false;
    return true;
}
function extractOverrides(temporalObj, main) {
    const DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
    if (IsTemporalTime(temporalObj)) {
        const hour = GetSlot(temporalObj, ISO_HOUR);
        const minute = GetSlot(temporalObj, ISO_MINUTE);
        const second = GetSlot(temporalObj, ISO_SECOND);
        const millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
        const microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
        const nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
        const datetime = new DateTime(1970, 1, 1, hour, minute, second, millisecond, microsecond, nanosecond, main[CAL_ID]);
        return {
            instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), datetime, 'compatible'),
            formatter: getPropLazy(main, TIME)
        };
    }
    if (IsTemporalYearMonth(temporalObj)) {
        const isoYear = GetSlot(temporalObj, ISO_YEAR);
        const isoMonth = GetSlot(temporalObj, ISO_MONTH);
        const referenceISODay = GetSlot(temporalObj, ISO_DAY);
        const calendar = ToString(GetSlot(temporalObj, CALENDAR));
        if (calendar !== main[CAL_ID]) {
            throw new RangeError(`cannot format PlainYearMonth with calendar ${calendar} in locale with calendar ${main[CAL_ID]}`);
        }
        const datetime = new DateTime(isoYear, isoMonth, referenceISODay, 12, 0, 0, 0, 0, 0, calendar);
        return {
            instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), datetime, 'compatible'),
            formatter: getPropLazy(main, YM)
        };
    }
    if (IsTemporalMonthDay(temporalObj)) {
        const referenceISOYear = GetSlot(temporalObj, ISO_YEAR);
        const isoMonth = GetSlot(temporalObj, ISO_MONTH);
        const isoDay = GetSlot(temporalObj, ISO_DAY);
        const calendar = ToString(GetSlot(temporalObj, CALENDAR));
        if (calendar !== main[CAL_ID]) {
            throw new RangeError(`cannot format PlainMonthDay with calendar ${calendar} in locale with calendar ${main[CAL_ID]}`);
        }
        const datetime = new DateTime(referenceISOYear, isoMonth, isoDay, 12, 0, 0, 0, 0, 0, calendar);
        return {
            instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), datetime, 'compatible'),
            formatter: getPropLazy(main, MD)
        };
    }
    if (IsTemporalDate(temporalObj)) {
        const isoYear = GetSlot(temporalObj, ISO_YEAR);
        const isoMonth = GetSlot(temporalObj, ISO_MONTH);
        const isoDay = GetSlot(temporalObj, ISO_DAY);
        const calendar = ToString(GetSlot(temporalObj, CALENDAR));
        if (calendar !== 'iso8601' && calendar !== main[CAL_ID]) {
            throw new RangeError(`cannot format PlainDate with calendar ${calendar} in locale with calendar ${main[CAL_ID]}`);
        }
        const datetime = new DateTime(isoYear, isoMonth, isoDay, 12, 0, 0, 0, 0, 0, main[CAL_ID]);
        return {
            instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), datetime, 'compatible'),
            formatter: getPropLazy(main, DATE)
        };
    }
    if (IsTemporalDateTime(temporalObj)) {
        const isoYear = GetSlot(temporalObj, ISO_YEAR);
        const isoMonth = GetSlot(temporalObj, ISO_MONTH);
        const isoDay = GetSlot(temporalObj, ISO_DAY);
        const hour = GetSlot(temporalObj, ISO_HOUR);
        const minute = GetSlot(temporalObj, ISO_MINUTE);
        const second = GetSlot(temporalObj, ISO_SECOND);
        const millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
        const microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
        const nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
        const calendar = ToString(GetSlot(temporalObj, CALENDAR));
        if (calendar !== 'iso8601' && calendar !== main[CAL_ID]) {
            throw new RangeError(`cannot format PlainDateTime with calendar ${calendar} in locale with calendar ${main[CAL_ID]}`);
        }
        let datetime = temporalObj;
        if (calendar === 'iso8601') {
            datetime = new DateTime(isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, main[CAL_ID]);
        }
        return {
            instant: BuiltinTimeZoneGetInstantFor(getResolvedTimeZoneLazy(main), datetime, 'compatible'),
            formatter: getPropLazy(main, DATETIME)
        };
    }
    if (IsTemporalZonedDateTime(temporalObj)) {
        const calendar = ToString(GetSlot(temporalObj, CALENDAR));
        if (calendar !== 'iso8601' && calendar !== main[CAL_ID]) {
            throw new RangeError(`cannot format ZonedDateTime with calendar ${calendar} in locale with calendar ${main[CAL_ID]}`);
        }
        const timeZone = GetSlot(temporalObj, TIME_ZONE);
        const objTimeZone = ToString(timeZone);
        if (main[TZ_GIVEN] && main[TZ_GIVEN] !== objTimeZone) {
            throw new RangeError(`timeZone option ${main[TZ_GIVEN]} doesn't match actual time zone ${objTimeZone}`);
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

const DISALLOWED_UNITS$3 = ['year', 'month', 'week', 'day'];
const MAX_DIFFERENCE_INCREMENTS = {
    hour: 24,
    minute: 60,
    second: 60,
    millisecond: 1000,
    microsecond: 1000,
    nanosecond: 1000
};
class Instant {
    constructor(epochNanoseconds) {
        // Note: if the argument is not passed, ToBigInt(undefined) will throw. This check exists only
        //       to improve the error message.
        if (arguments.length < 1) {
            throw new TypeError('missing argument: epochNanoseconds is required');
        }
        const ns = ToBigInt(epochNanoseconds);
        ValidateEpochNanoseconds(ns);
        CreateSlots(this);
        SetSlot(this, EPOCHNANOSECONDS, ns);
        {
            const repr = TemporalInstantToString(this, undefined, 'auto');
            Object.defineProperty(this, '_repr_', {
                value: `${this[Symbol.toStringTag]} <${repr}>`,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
    }
    get epochSeconds() {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const value = GetSlot(this, EPOCHNANOSECONDS);
        return +value.divide(1e9);
    }
    get epochMilliseconds() {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const value = bigInt(GetSlot(this, EPOCHNANOSECONDS));
        return +value.divide(1e6);
    }
    get epochMicroseconds() {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const value = GetSlot(this, EPOCHNANOSECONDS);
        return bigIntIfAvailable$2(value.divide(1e3));
    }
    get epochNanoseconds() {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        return bigIntIfAvailable$2(GetSlot(this, EPOCHNANOSECONDS));
    }
    add(temporalDurationLike) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = ToLimitedTemporalDuration(temporalDurationLike, ['years', 'months', 'weeks', 'days']);
        const ns = AddInstant(GetSlot(this, EPOCHNANOSECONDS), hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        return new Instant(ns);
    }
    subtract(temporalDurationLike) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = ToLimitedTemporalDuration(temporalDurationLike, ['years', 'months', 'weeks', 'days']);
        const ns = AddInstant(GetSlot(this, EPOCHNANOSECONDS), -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
        return new Instant(ns);
    }
    until(otherParam, optionsParam = undefined) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalInstant(otherParam);
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$3);
        const defaultLargestUnit = LargerOfTwoTemporalUnits('second', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$3, defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, MAX_DIFFERENCE_INCREMENTS[smallestUnit], false);
        const onens = GetSlot(this, EPOCHNANOSECONDS);
        const twons = GetSlot(other, EPOCHNANOSECONDS);
        let { seconds, milliseconds, microseconds, nanoseconds } = DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode);
        let hours, minutes;
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    since(otherParam, optionsParam = undefined) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalInstant(otherParam);
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$3);
        const defaultLargestUnit = LargerOfTwoTemporalUnits('second', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$3, defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, MAX_DIFFERENCE_INCREMENTS[smallestUnit], false);
        const onens = GetSlot(other, EPOCHNANOSECONDS);
        const twons = GetSlot(this, EPOCHNANOSECONDS);
        let { seconds, milliseconds, microseconds, nanoseconds } = DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode);
        let hours, minutes;
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    round(optionsParam) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        if (optionsParam === undefined)
            throw new TypeError('options parameter is required');
        const options = typeof optionsParam === 'string'
            ? CreateOnePropObject('smallestUnit', optionsParam)
            : GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, undefined, DISALLOWED_UNITS$3);
        if (smallestUnit === undefined)
            throw new RangeError('smallestUnit is required');
        const roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
        const maximumIncrements = {
            hour: 24,
            minute: 1440,
            second: 86400,
            millisecond: 86400e3,
            microsecond: 86400e6,
            nanosecond: 86400e9
        };
        const roundingIncrement = ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], true);
        const ns = GetSlot(this, EPOCHNANOSECONDS);
        const roundedNs = RoundInstant(ns, roundingIncrement, smallestUnit, roundingMode);
        return new Instant(roundedNs);
    }
    equals(otherParam) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalInstant(otherParam);
        const one = GetSlot(this, EPOCHNANOSECONDS);
        const two = GetSlot(other, EPOCHNANOSECONDS);
        return bigInt(one).equals(two);
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        let timeZone = options.timeZone;
        if (timeZone !== undefined)
            timeZone = ToTemporalTimeZone(timeZone);
        // Although TS doesn't acknowledge it, below here `timeZone` is a Temporal.TimeZoneProtocol
        const { precision, unit, increment } = ToSecondsStringPrecision(options);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const ns = GetSlot(this, EPOCHNANOSECONDS);
        const roundedNs = RoundInstant(ns, increment, unit, roundingMode);
        const roundedInstant = new Instant(roundedNs);
        return TemporalInstantToString(roundedInstant, timeZone, precision);
    }
    toJSON() {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        return TemporalInstantToString(this, undefined, 'auto');
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.Instant');
    }
    toZonedDateTime(item) {
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(item)) {
            throw new TypeError('invalid argument in toZonedDateTime');
        }
        const calendarLike = item.calendar;
        if (calendarLike === undefined) {
            throw new TypeError('missing calendar property in toZonedDateTime');
        }
        const calendar = ToTemporalCalendar(calendarLike);
        const temporalTimeZoneLike = item.timeZone;
        if (temporalTimeZoneLike === undefined) {
            throw new TypeError('missing timeZone property in toZonedDateTime');
        }
        const timeZone = ToTemporalTimeZone(temporalTimeZoneLike);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
    }
    toZonedDateTimeISO(itemParam) {
        let item = itemParam;
        if (!IsTemporalInstant(this))
            throw new TypeError('invalid receiver');
        if (IsObject(item)) {
            const timeZoneProperty = item.timeZone;
            if (timeZoneProperty !== undefined) {
                item = timeZoneProperty;
            }
        }
        const timeZone = ToTemporalTimeZone(item);
        const calendar = GetISO8601Calendar();
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, calendar);
    }
    static fromEpochSeconds(epochSecondsParam) {
        const epochSeconds = ToNumber(epochSecondsParam);
        const epochNanoseconds = bigInt(epochSeconds).multiply(1e9);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
    }
    static fromEpochMilliseconds(epochMillisecondsParam) {
        const epochMilliseconds = ToNumber(epochMillisecondsParam);
        const epochNanoseconds = bigInt(epochMilliseconds).multiply(1e6);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
    }
    static fromEpochMicroseconds(epochMicrosecondsParam) {
        const epochMicroseconds = ToBigInt(epochMicrosecondsParam);
        const epochNanoseconds = epochMicroseconds.multiply(1e3);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
    }
    static fromEpochNanoseconds(epochNanosecondsParam) {
        const epochNanoseconds = ToBigInt(epochNanosecondsParam);
        ValidateEpochNanoseconds(epochNanoseconds);
        return new Instant(epochNanoseconds);
    }
    static from(item) {
        if (IsTemporalInstant(item)) {
            return new Instant(GetSlot(item, EPOCHNANOSECONDS));
        }
        return ToTemporalInstant(item);
    }
    static compare(oneParam, twoParam) {
        const one = ToTemporalInstant(oneParam);
        const two = ToTemporalInstant(twoParam);
        const oneNs = GetSlot(one, EPOCHNANOSECONDS);
        const twoNs = GetSlot(two, EPOCHNANOSECONDS);
        if (bigInt(oneNs).lesser(twoNs))
            return -1;
        if (bigInt(oneNs).greater(twoNs))
            return 1;
        return 0;
    }
}
MakeIntrinsicClass(Instant, 'Temporal.Instant');
function bigIntIfAvailable$2(wrapper) {
    return typeof globalThis.BigInt === 'undefined' ? wrapper : wrapper.value;
}

const DISALLOWED_UNITS$2 = ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'];
class PlainDate {
    constructor(isoYearParam, isoMonthParam, isoDayParam, calendarParam = GetISO8601Calendar()) {
        const isoYear = ToIntegerThrowOnInfinity(isoYearParam);
        const isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
        const isoDay = ToIntegerThrowOnInfinity(isoDayParam);
        const calendar = ToTemporalCalendar(calendarParam);
        // Note: if the arguments are not passed,
        //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
        //       be rejected by RejectISODate in CreateTemporalDateSlots. This check
        //       exists only to improve the error message.
        if (arguments.length < 3) {
            throw new RangeError('missing argument: isoYear, isoMonth and isoDay are required');
        }
        CreateTemporalDateSlots(this, isoYear, isoMonth, isoDay, calendar);
    }
    get calendar() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
    }
    get era() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), this);
    }
    get eraYear() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), this);
    }
    get year() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), this);
    }
    get month() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), this);
    }
    get monthCode() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
    get day() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), this);
    }
    get dayOfWeek() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
    }
    get dayOfYear() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarDayOfYear(GetSlot(this, CALENDAR), this);
    }
    get weekOfYear() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
    }
    get daysInWeek() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
    }
    get daysInMonth() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
    }
    get daysInYear() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
    }
    get monthsInYear() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
    }
    get inLeapYear() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
    }
    with(temporalDateLike, optionsParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(temporalDateLike)) {
            throw new TypeError('invalid argument');
        }
        RejectObjectWithCalendarOrTimeZone(temporalDateLike);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
        const props = ToPartialRecord(temporalDateLike, fieldNames);
        if (!props) {
            throw new TypeError('invalid date-like');
        }
        let fields = ToTemporalDateFields(this, fieldNames);
        fields = CalendarMergeFields(calendar, fields, props);
        fields = ToTemporalDateFields(fields, fieldNames);
        const options = GetOptionsObject(optionsParam);
        return DateFromFields(calendar, fields, options);
    }
    withCalendar(calendarParam) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const calendar = ToTemporalCalendar(calendarParam);
        return new PlainDate(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar);
    }
    add(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const duration = ToTemporalDuration(temporalDurationLike);
        const options = GetOptionsObject(optionsParam);
        return CalendarDateAdd(GetSlot(this, CALENDAR), this, duration, options);
    }
    subtract(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const duration = CreateNegatedTemporalDuration(ToTemporalDuration(temporalDurationLike));
        const options = GetOptionsObject(optionsParam);
        return CalendarDateAdd(GetSlot(this, CALENDAR), this, duration, options);
    }
    until(otherParam, optionsParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalDate(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarId = ToString(calendar);
        const otherCalendarId = ToString(otherCalendar);
        if (calendarId !== otherCalendarId) {
            throw new RangeError(`cannot compute difference between dates of ${calendarId} and ${otherCalendarId} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'day', DISALLOWED_UNITS$2);
        const defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$2, defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);
        const untilOptions = { ...options, largestUnit };
        const result = CalendarDateUntil(calendar, this, other, untilOptions);
        if (smallestUnit === 'day' && roundingIncrement === 1)
            return result;
        let { years, months, weeks, days } = result;
        ({ years, months, weeks, days } = RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, this));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
    }
    since(otherParam, optionsParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalDate(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarId = ToString(calendar);
        const otherCalendarId = ToString(otherCalendar);
        if (calendarId !== otherCalendarId) {
            throw new RangeError(`cannot compute difference between dates of ${calendarId} and ${otherCalendarId} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'day', DISALLOWED_UNITS$2);
        const defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$2, defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);
        const untilOptions = { ...options, largestUnit };
        let { years, months, weeks, days } = CalendarDateUntil(calendar, this, other, untilOptions);
        const Duration = GetIntrinsic('%Temporal.Duration%');
        if (smallestUnit === 'day' && roundingIncrement === 1) {
            return new Duration(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
        }
        ({ years, months, weeks, days } = RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode), this));
        return new Duration(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
    }
    equals(otherParam) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalDate(otherParam);
        for (const slot of [ISO_YEAR, ISO_MONTH, ISO_DAY]) {
            const val1 = GetSlot(this, slot);
            const val2 = GetSlot(other, slot);
            if (val1 !== val2)
                return false;
        }
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const showCalendar = ToShowCalendarOption(options);
        return TemporalDateToString(this, showCalendar);
    }
    toJSON() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return TemporalDateToString(this);
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainDate');
    }
    toPlainDateTime(temporalTimeParam = undefined) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const year = GetSlot(this, ISO_YEAR);
        const month = GetSlot(this, ISO_MONTH);
        const day = GetSlot(this, ISO_DAY);
        const calendar = GetSlot(this, CALENDAR);
        if (temporalTimeParam === undefined)
            return CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar);
        const temporalTime = ToTemporalTime(temporalTimeParam);
        const hour = GetSlot(temporalTime, ISO_HOUR);
        const minute = GetSlot(temporalTime, ISO_MINUTE);
        const second = GetSlot(temporalTime, ISO_SECOND);
        const millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        const microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        const nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    toZonedDateTime(item) {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        let timeZone, temporalTime;
        if (IsObject(item)) {
            const timeZoneLike = item.timeZone;
            if (timeZoneLike === undefined) {
                // The cast below is needed because it's possible here for
                // `timeZoneLike` here to be `{ plainTime: Temporal.PlainTimeLike }`,
                // not a TimeZoneProtocol.
                // TODO: should we check for that shape to improve on the (bad) error
                // message that the caller will get from ToTemporalTimeZone?
                timeZone = ToTemporalTimeZone(item);
            }
            else {
                timeZone = ToTemporalTimeZone(timeZoneLike);
                temporalTime = item.plainTime;
            }
        }
        else {
            timeZone = ToTemporalTimeZone(item);
        }
        const year = GetSlot(this, ISO_YEAR);
        const month = GetSlot(this, ISO_MONTH);
        const day = GetSlot(this, ISO_DAY);
        const calendar = GetSlot(this, CALENDAR);
        let hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0;
        if (temporalTime !== undefined) {
            temporalTime = ToTemporalTime(temporalTime);
            hour = GetSlot(temporalTime, ISO_HOUR);
            minute = GetSlot(temporalTime, ISO_MINUTE);
            second = GetSlot(temporalTime, ISO_SECOND);
            millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
            microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
            nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        }
        const dt = CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
    toPlainYearMonth() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(this, fieldNames);
        return YearMonthFromFields(calendar, fields);
    }
    toPlainMonthDay() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        const fields = ToTemporalMonthDayFields(this, fieldNames);
        return MonthDayFromFields(calendar, fields);
    }
    getISOFields() {
        if (!IsTemporalDate(this))
            throw new TypeError('invalid receiver');
        return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoYear: GetSlot(this, ISO_YEAR)
        };
    }
    static from(item, optionsParam = undefined) {
        const options = GetOptionsObject(optionsParam);
        if (IsTemporalDate(item)) {
            ToTemporalOverflow(options); // validate and ignore
            return CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
        }
        return ToTemporalDate(item, options);
    }
    static compare(oneParam, twoParam) {
        const one = ToTemporalDate(oneParam);
        const two = ToTemporalDate(twoParam);
        return CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
    }
}
MakeIntrinsicClass(PlainDate, 'Temporal.PlainDate');

class PlainDateTime {
    constructor(isoYearParam, isoMonthParam, isoDayParam, hourParam = 0, minuteParam = 0, secondParam = 0, millisecondParam = 0, microsecondParam = 0, nanosecondParam = 0, calendarParam = GetISO8601Calendar()) {
        const isoYear = ToIntegerThrowOnInfinity(isoYearParam);
        const isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
        const isoDay = ToIntegerThrowOnInfinity(isoDayParam);
        const hour = ToIntegerThrowOnInfinity(hourParam);
        const minute = ToIntegerThrowOnInfinity(minuteParam);
        const second = ToIntegerThrowOnInfinity(secondParam);
        const millisecond = ToIntegerThrowOnInfinity(millisecondParam);
        const microsecond = ToIntegerThrowOnInfinity(microsecondParam);
        const nanosecond = ToIntegerThrowOnInfinity(nanosecondParam);
        const calendar = ToTemporalCalendar(calendarParam);
        // Note: if the arguments are not passed,
        //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
        //       be rejected by RejectDateTime in CreateTemporalDateTimeSlots. This
        //       check exists only to improve the error message.
        if (arguments.length < 3) {
            throw new RangeError('missing argument: isoYear, isoMonth and isoDay are required');
        }
        CreateTemporalDateTimeSlots(this, isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    get calendar() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
    }
    get year() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), this);
    }
    get month() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), this);
    }
    get monthCode() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
    get day() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), this);
    }
    get hour() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_HOUR);
    }
    get minute() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MINUTE);
    }
    get second() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_SECOND);
    }
    get millisecond() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MILLISECOND);
    }
    get microsecond() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MICROSECOND);
    }
    get nanosecond() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_NANOSECOND);
    }
    get era() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), this);
    }
    get eraYear() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), this);
    }
    get dayOfWeek() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
    }
    get dayOfYear() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDayOfYear(GetSlot(this, CALENDAR), this);
    }
    get weekOfYear() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
    }
    get daysInWeek() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
    }
    get daysInYear() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
    }
    get daysInMonth() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
    }
    get monthsInYear() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
    }
    get inLeapYear() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
    }
    with(temporalDateTimeLike, optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(temporalDateTimeLike)) {
            throw new TypeError('invalid argument');
        }
        RejectObjectWithCalendarOrTimeZone(temporalDateTimeLike);
        const options = GetOptionsObject(optionsParam);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, [
            'day',
            'hour',
            'microsecond',
            'millisecond',
            'minute',
            'month',
            'monthCode',
            'nanosecond',
            'second',
            'year'
        ]);
        const props = ToPartialRecord(temporalDateTimeLike, fieldNames);
        if (!props) {
            throw new TypeError('invalid date-time-like');
        }
        let fields = ToTemporalDateTimeFields(this, fieldNames);
        fields = CalendarMergeFields(calendar, fields, props);
        fields = ToTemporalDateTimeFields(fields, fieldNames);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = InterpretTemporalDateTimeFields(calendar, fields, options);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    withPlainTime(temporalTimeParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const year = GetSlot(this, ISO_YEAR);
        const month = GetSlot(this, ISO_MONTH);
        const day = GetSlot(this, ISO_DAY);
        const calendar = GetSlot(this, CALENDAR);
        if (temporalTimeParam === undefined)
            return CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar);
        const temporalTime = ToTemporalTime(temporalTimeParam);
        const hour = GetSlot(temporalTime, ISO_HOUR);
        const minute = GetSlot(temporalTime, ISO_MINUTE);
        const second = GetSlot(temporalTime, ISO_SECOND);
        const millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        const microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        const nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    withPlainDate(temporalDateParam) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const temporalDate = ToTemporalDate(temporalDateParam);
        const year = GetSlot(temporalDate, ISO_YEAR);
        const month = GetSlot(temporalDate, ISO_MONTH);
        const day = GetSlot(temporalDate, ISO_DAY);
        let calendar = GetSlot(temporalDate, CALENDAR);
        const hour = GetSlot(this, ISO_HOUR);
        const minute = GetSlot(this, ISO_MINUTE);
        const second = GetSlot(this, ISO_SECOND);
        const millisecond = GetSlot(this, ISO_MILLISECOND);
        const microsecond = GetSlot(this, ISO_MICROSECOND);
        const nanosecond = GetSlot(this, ISO_NANOSECOND);
        calendar = ConsolidateCalendars(GetSlot(this, CALENDAR), calendar);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    withCalendar(calendarParam) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const calendar = ToTemporalCalendar(calendarParam);
        return new PlainDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar);
    }
    add(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        const { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        const options = GetOptionsObject(optionsParam);
        const calendar = GetSlot(this, CALENDAR);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = AddDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    subtract(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        const { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        const options = GetOptionsObject(optionsParam);
        const calendar = GetSlot(this, CALENDAR);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = AddDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar, -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, options);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    until(otherParam, optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalDateTime(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarId = ToString(calendar);
        const otherCalendarId = ToString(otherCalendar);
        if (calendarId !== otherCalendarId) {
            throw new RangeError(`cannot compute difference between dates of ${calendarId} and ${otherCalendarId} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
        const defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        let { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = DifferenceISODateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar, largestUnit, options);
        const relativeTo = TemporalDateTimeToDate(this);
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
            RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo));
        ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    since(otherParam, optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalDateTime(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarId = ToString(calendar);
        const otherCalendarId = ToString(otherCalendar);
        if (calendarId !== otherCalendarId) {
            throw new RangeError(`cannot compute difference between dates of ${calendarId} and ${otherCalendarId} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
        const defaultLargestUnit = LargerOfTwoTemporalUnits('day', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        let { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = DifferenceISODateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar, largestUnit, options);
        const relativeTo = TemporalDateTimeToDate(this);
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
            RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode), relativeTo));
        ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
    }
    round(optionsParam) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        if (optionsParam === undefined)
            throw new TypeError('options parameter is required');
        const options = typeof optionsParam === 'string'
            ? CreateOnePropObject('smallestUnit', optionsParam)
            : GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, undefined, ['year', 'month', 'week']);
        if (smallestUnit === undefined)
            throw new RangeError('smallestUnit is required');
        const roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
        const maximumIncrements = {
            day: 1,
            hour: 24,
            minute: 60,
            second: 60,
            millisecond: 1000,
            microsecond: 1000,
            nanosecond: 1000
        };
        const roundingIncrement = ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
        let year = GetSlot(this, ISO_YEAR);
        let month = GetSlot(this, ISO_MONTH);
        let day = GetSlot(this, ISO_DAY);
        let hour = GetSlot(this, ISO_HOUR);
        let minute = GetSlot(this, ISO_MINUTE);
        let second = GetSlot(this, ISO_SECOND);
        let millisecond = GetSlot(this, ISO_MILLISECOND);
        let microsecond = GetSlot(this, ISO_MICROSECOND);
        let nanosecond = GetSlot(this, ISO_NANOSECOND);
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode));
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, GetSlot(this, CALENDAR));
    }
    equals(otherParam) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalDateTime(otherParam);
        for (const slot of [
            ISO_YEAR,
            ISO_MONTH,
            ISO_DAY,
            ISO_HOUR,
            ISO_MINUTE,
            ISO_SECOND,
            ISO_MILLISECOND,
            ISO_MICROSECOND,
            ISO_NANOSECOND
        ]) {
            const val1 = GetSlot(this, slot);
            const val2 = GetSlot(other, slot);
            if (val1 !== val2)
                return false;
        }
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const { precision, unit, increment } = ToSecondsStringPrecision(options);
        const showCalendar = ToShowCalendarOption(options);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        return TemporalDateTimeToString(this, precision, showCalendar, { unit, increment, roundingMode });
    }
    toJSON() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return TemporalDateTimeToString(this, 'auto');
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainDateTime');
    }
    toZonedDateTime(temporalTimeZoneLike, optionsParam = undefined) {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const timeZone = ToTemporalTimeZone(temporalTimeZoneLike);
        const options = GetOptionsObject(optionsParam);
        const disambiguation = ToTemporalDisambiguation(options);
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, this, disambiguation);
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
    }
    toPlainDate() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return TemporalDateTimeToDate(this);
    }
    toPlainYearMonth() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(this, fieldNames);
        return YearMonthFromFields(calendar, fields);
    }
    toPlainMonthDay() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        const fields = ToTemporalMonthDayFields(this, fieldNames);
        return MonthDayFromFields(calendar, fields);
    }
    toPlainTime() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
        return TemporalDateTimeToTime(this);
    }
    getISOFields() {
        if (!IsTemporalDateTime(this))
            throw new TypeError('invalid receiver');
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
    static from(item, optionsParam = undefined) {
        const options = GetOptionsObject(optionsParam);
        if (IsTemporalDateTime(item)) {
            ToTemporalOverflow(options); // validate and ignore
            return CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND), GetSlot(item, CALENDAR));
        }
        return ToTemporalDateTime(item, options);
    }
    static compare(oneParam, twoParam) {
        const one = ToTemporalDateTime(oneParam);
        const two = ToTemporalDateTime(twoParam);
        for (const slot of [
            ISO_YEAR,
            ISO_MONTH,
            ISO_DAY,
            ISO_HOUR,
            ISO_MINUTE,
            ISO_SECOND,
            ISO_MILLISECOND,
            ISO_MICROSECOND,
            ISO_NANOSECOND
        ]) {
            const val1 = GetSlot(one, slot);
            const val2 = GetSlot(two, slot);
            if (val1 !== val2)
                return ComparisonResult(val1 - val2);
        }
        return 0;
    }
}
MakeIntrinsicClass(PlainDateTime, 'Temporal.PlainDateTime');

class Duration {
    constructor(yearsParam = 0, monthsParam = 0, weeksParam = 0, daysParam = 0, hoursParam = 0, minutesParam = 0, secondsParam = 0, millisecondsParam = 0, microsecondsParam = 0, nanosecondsParam = 0) {
        const years = ToIntegerWithoutRounding(yearsParam);
        const months = ToIntegerWithoutRounding(monthsParam);
        const weeks = ToIntegerWithoutRounding(weeksParam);
        const days = ToIntegerWithoutRounding(daysParam);
        const hours = ToIntegerWithoutRounding(hoursParam);
        const minutes = ToIntegerWithoutRounding(minutesParam);
        const seconds = ToIntegerWithoutRounding(secondsParam);
        const milliseconds = ToIntegerWithoutRounding(millisecondsParam);
        const microseconds = ToIntegerWithoutRounding(microsecondsParam);
        const nanoseconds = ToIntegerWithoutRounding(nanosecondsParam);
        const sign = DurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        for (const prop of [years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds]) {
            if (!Number.isFinite(prop))
                throw new RangeError('infinite values not allowed as duration fields');
            const propSign = Math.sign(prop);
            if (propSign !== 0 && propSign !== sign)
                throw new RangeError('mixed-sign values not allowed as duration fields');
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
                value: `${this[Symbol.toStringTag]} <${TemporalDurationToString(this)}>`,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
    }
    get years() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, YEARS);
    }
    get months() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, MONTHS);
    }
    get weeks() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, WEEKS);
    }
    get days() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, DAYS);
    }
    get hours() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, HOURS);
    }
    get minutes() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, MINUTES);
    }
    get seconds() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, SECONDS);
    }
    get milliseconds() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, MILLISECONDS);
    }
    get microseconds() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, MICROSECONDS);
    }
    get nanoseconds() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, NANOSECONDS);
    }
    get sign() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
    }
    get blank() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return (DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS)) === 0);
    }
    with(durationLike) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        const props = ToPartialRecord(durationLike, [
            'days',
            'hours',
            'microseconds',
            'milliseconds',
            'minutes',
            'months',
            'nanoseconds',
            'seconds',
            'weeks',
            'years'
        ]);
        if (!props) {
            throw new TypeError('invalid duration-like');
        }
        const { years = GetSlot(this, YEARS), months = GetSlot(this, MONTHS), weeks = GetSlot(this, WEEKS), days = GetSlot(this, DAYS), hours = GetSlot(this, HOURS), minutes = GetSlot(this, MINUTES), seconds = GetSlot(this, SECONDS), milliseconds = GetSlot(this, MILLISECONDS), microseconds = GetSlot(this, MICROSECONDS), nanoseconds = GetSlot(this, NANOSECONDS) } = props;
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    negated() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return CreateNegatedTemporalDuration(this);
    }
    abs() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return new Duration(Math.abs(GetSlot(this, YEARS)), Math.abs(GetSlot(this, MONTHS)), Math.abs(GetSlot(this, WEEKS)), Math.abs(GetSlot(this, DAYS)), Math.abs(GetSlot(this, HOURS)), Math.abs(GetSlot(this, MINUTES)), Math.abs(GetSlot(this, SECONDS)), Math.abs(GetSlot(this, MILLISECONDS)), Math.abs(GetSlot(this, MICROSECONDS)), Math.abs(GetSlot(this, NANOSECONDS)));
    }
    add(other, optionsParam = undefined) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        let { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = ToLimitedTemporalDuration(other);
        const options = GetOptionsObject(optionsParam);
        const relativeTo = ToRelativeTemporalObject(options);
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, relativeTo));
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    subtract(other, optionsParam = undefined) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        let { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = ToLimitedTemporalDuration(other);
        const options = GetOptionsObject(optionsParam);
        const relativeTo = ToRelativeTemporalObject(options);
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, relativeTo));
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    round(optionsParam) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        if (optionsParam === undefined)
            throw new TypeError('options parameter is required');
        let years = GetSlot(this, YEARS);
        let months = GetSlot(this, MONTHS);
        let weeks = GetSlot(this, WEEKS);
        let days = GetSlot(this, DAYS);
        let hours = GetSlot(this, HOURS);
        let minutes = GetSlot(this, MINUTES);
        let seconds = GetSlot(this, SECONDS);
        let milliseconds = GetSlot(this, MILLISECONDS);
        let microseconds = GetSlot(this, MICROSECONDS);
        let nanoseconds = GetSlot(this, NANOSECONDS);
        let defaultLargestUnit = DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        const options = typeof optionsParam === 'string'
            ? CreateOnePropObject('smallestUnit', optionsParam)
            : GetOptionsObject(optionsParam);
        let smallestUnit = ToSmallestTemporalUnit(options, undefined);
        let smallestUnitPresent = true;
        if (!smallestUnit) {
            smallestUnitPresent = false;
            smallestUnit = 'nanosecond';
        }
        defaultLargestUnit = LargerOfTwoTemporalUnits(defaultLargestUnit, smallestUnit);
        let largestUnit = ToLargestTemporalUnit(options, undefined);
        let largestUnitPresent = true;
        if (!largestUnit) {
            largestUnitPresent = false;
            largestUnit = defaultLargestUnit;
        }
        if (largestUnit === 'auto')
            largestUnit = defaultLargestUnit;
        if (!smallestUnitPresent && !largestUnitPresent) {
            throw new RangeError('at least one of smallestUnit or largestUnit is required');
        }
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
        const roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        let relativeTo = ToRelativeTemporalObject(options);
        ({ years, months, weeks, days } = UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo));
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
            RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo));
        ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
            AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo));
        ({ years, months, weeks, days } = BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo));
        if (IsTemporalZonedDateTime(relativeTo)) {
            relativeTo = MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
        }
        ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit, relativeTo));
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    total(optionsParam) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        let years = GetSlot(this, YEARS);
        let months = GetSlot(this, MONTHS);
        let weeks = GetSlot(this, WEEKS);
        let days = GetSlot(this, DAYS);
        let hours = GetSlot(this, HOURS);
        let minutes = GetSlot(this, MINUTES);
        let seconds = GetSlot(this, SECONDS);
        let milliseconds = GetSlot(this, MILLISECONDS);
        let microseconds = GetSlot(this, MICROSECONDS);
        let nanoseconds = GetSlot(this, NANOSECONDS);
        if (optionsParam === undefined)
            throw new TypeError('options argument is required');
        const options = typeof optionsParam === 'string'
            ? CreateOnePropObject('unit', optionsParam)
            : GetOptionsObject(optionsParam);
        const unit = ToTemporalDurationTotalUnit(options);
        if (unit === undefined)
            throw new RangeError('unit option is required');
        const relativeTo = ToRelativeTemporalObject(options);
        // Convert larger units down to days
        ({ years, months, weeks, days } = UnbalanceDurationRelative(years, months, weeks, days, unit, relativeTo));
        // If the unit we're totalling is smaller than `days`, convert days down to that unit.
        let intermediate;
        if (IsTemporalZonedDateTime(relativeTo)) {
            intermediate = MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
        }
        ({ days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, unit, intermediate));
        // Finally, truncate to the correct unit and calculate remainder
        const { total } = RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 1, unit, 'trunc', relativeTo);
        return total;
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const { precision, unit, increment } = ToSecondsStringPrecision(options);
        if (precision === 'minute')
            throw new RangeError('smallestUnit must not be "minute"');
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        return TemporalDurationToString(this, precision, { unit, increment, roundingMode });
    }
    toJSON() {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        return TemporalDurationToString(this);
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalDuration(this))
            throw new TypeError('invalid receiver');
        if (typeof Intl !== 'undefined' && typeof Intl.DurationFormat !== 'undefined') {
            return new Intl.DurationFormat(locales, options).format(this);
        }
        console.warn('Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat.');
        return TemporalDurationToString(this);
    }
    valueOf() {
        throw new TypeError('use compare() to compare Temporal.Duration');
    }
    static from(item) {
        if (IsTemporalDuration(item)) {
            return new Duration(GetSlot(item, YEARS), GetSlot(item, MONTHS), GetSlot(item, WEEKS), GetSlot(item, DAYS), GetSlot(item, HOURS), GetSlot(item, MINUTES), GetSlot(item, SECONDS), GetSlot(item, MILLISECONDS), GetSlot(item, MICROSECONDS), GetSlot(item, NANOSECONDS));
        }
        return ToTemporalDuration(item);
    }
    static compare(oneParam, twoParam, optionsParam = undefined) {
        const one = ToTemporalDuration(oneParam);
        const two = ToTemporalDuration(twoParam);
        const options = GetOptionsObject(optionsParam);
        const relativeTo = ToRelativeTemporalObject(options);
        const y1 = GetSlot(one, YEARS);
        const mon1 = GetSlot(one, MONTHS);
        const w1 = GetSlot(one, WEEKS);
        let d1 = GetSlot(one, DAYS);
        const h1 = GetSlot(one, HOURS);
        const min1 = GetSlot(one, MINUTES);
        const s1 = GetSlot(one, SECONDS);
        const ms1 = GetSlot(one, MILLISECONDS);
        const µs1 = GetSlot(one, MICROSECONDS);
        let ns1 = GetSlot(one, NANOSECONDS);
        const y2 = GetSlot(two, YEARS);
        const mon2 = GetSlot(two, MONTHS);
        const w2 = GetSlot(two, WEEKS);
        let d2 = GetSlot(two, DAYS);
        const h2 = GetSlot(two, HOURS);
        const min2 = GetSlot(two, MINUTES);
        const s2 = GetSlot(two, SECONDS);
        const ms2 = GetSlot(two, MILLISECONDS);
        const µs2 = GetSlot(two, MICROSECONDS);
        let ns2 = GetSlot(two, NANOSECONDS);
        const shift1 = CalculateOffsetShift(relativeTo, y1, mon1, w1, d1, h1, min1, s1, ms1, µs1, ns1);
        const shift2 = CalculateOffsetShift(relativeTo, y2, mon2, w2, d2, h2, min2, s2, ms2, µs2, ns2);
        if (y1 !== 0 || y2 !== 0 || mon1 !== 0 || mon2 !== 0 || w1 !== 0 || w2 !== 0) {
            ({ days: d1 } = UnbalanceDurationRelative(y1, mon1, w1, d1, 'day', relativeTo));
            ({ days: d2 } = UnbalanceDurationRelative(y2, mon2, w2, d2, 'day', relativeTo));
        }
        const totalNs1 = TotalDurationNanoseconds(d1, h1, min1, s1, ms1, µs1, ns1, shift1);
        const totalNs2 = TotalDurationNanoseconds(d2, h2, min2, s2, ms2, µs2, ns2, shift2);
        return ComparisonResult(totalNs1.minus(totalNs2).toJSNumber());
    }
}
MakeIntrinsicClass(Duration, 'Temporal.Duration');

const ObjectCreate$1 = Object.create;
class PlainMonthDay {
    constructor(isoMonthParam, isoDayParam, calendarParam = GetISO8601Calendar(), referenceISOYearParam = 1972) {
        const isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
        const isoDay = ToIntegerThrowOnInfinity(isoDayParam);
        const calendar = ToTemporalCalendar(calendarParam);
        const referenceISOYear = ToIntegerThrowOnInfinity(referenceISOYearParam);
        // Note: if the arguments are not passed,
        //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
        //       be rejected by RejectISODate in CreateTemporalMonthDaySlots. This
        //       check exists only to improve the error message.
        if (arguments.length < 2) {
            throw new RangeError('missing argument: isoMonth and isoDay are required');
        }
        CreateTemporalMonthDaySlots(this, isoMonth, isoDay, calendar, referenceISOYear);
    }
    get monthCode() {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
    get day() {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), this);
    }
    get calendar() {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
    }
    with(temporalMonthDayLike, optionsParam = undefined) {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(temporalMonthDayLike)) {
            throw new TypeError('invalid argument');
        }
        RejectObjectWithCalendarOrTimeZone(temporalMonthDayLike);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['day', 'month', 'monthCode', 'year']);
        const props = ToPartialRecord(temporalMonthDayLike, fieldNames);
        if (!props) {
            throw new TypeError('invalid month-day-like');
        }
        let fields = ToTemporalMonthDayFields(this, fieldNames);
        fields = CalendarMergeFields(calendar, fields, props);
        fields = ToTemporalMonthDayFields(fields, fieldNames);
        const options = GetOptionsObject(optionsParam);
        return MonthDayFromFields(calendar, fields, options);
    }
    equals(otherParam) {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalMonthDay(otherParam);
        for (const slot of [ISO_MONTH, ISO_DAY, ISO_YEAR]) {
            const val1 = GetSlot(this, slot);
            const val2 = GetSlot(other, slot);
            if (val1 !== val2)
                return false;
        }
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const showCalendar = ToShowCalendarOption(options);
        return TemporalMonthDayToString(this, showCalendar);
    }
    toJSON() {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        return TemporalMonthDayToString(this);
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    valueOf() {
        throw new TypeError('use equals() to compare Temporal.PlainMonthDay');
    }
    toPlainDate(item) {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(item))
            throw new TypeError('argument should be an object');
        const calendar = GetSlot(this, CALENDAR);
        const receiverFieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        const fields = ToTemporalMonthDayFields(this, receiverFieldNames);
        const inputFieldNames = CalendarFields(calendar, ['year']);
        const inputEntries = [['year', undefined]];
        // Add extra fields from the calendar at the end
        inputFieldNames.forEach((fieldName) => {
            if (!inputEntries.some(([name]) => name === fieldName)) {
                inputEntries.push([fieldName, undefined]); // Make TS ignore extra fields
            }
        });
        const inputFields = PrepareTemporalFields(item, inputEntries);
        let mergedFields = CalendarMergeFields(calendar, fields, inputFields);
        const mergedFieldNames = [...new Set([...receiverFieldNames, ...inputFieldNames])];
        const mergedEntries = [];
        mergedFieldNames.forEach((fieldName) => {
            if (!mergedEntries.some(([name]) => name === fieldName)) {
                mergedEntries.push([fieldName, undefined]);
            }
        });
        mergedFields = PrepareTemporalFields(mergedFields, mergedEntries);
        const options = ObjectCreate$1(null);
        options.overflow = 'reject';
        return DateFromFields(calendar, mergedFields, options);
    }
    getISOFields() {
        if (!IsTemporalMonthDay(this))
            throw new TypeError('invalid receiver');
        return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoYear: GetSlot(this, ISO_YEAR)
        };
    }
    static from(item, optionsParam = undefined) {
        const options = GetOptionsObject(optionsParam);
        if (IsTemporalMonthDay(item)) {
            ToTemporalOverflow(options); // validate and ignore
            return CreateTemporalMonthDay(GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR), GetSlot(item, ISO_YEAR));
        }
        return ToTemporalMonthDay(item, options);
    }
}
MakeIntrinsicClass(PlainMonthDay, 'Temporal.PlainMonthDay');

const instant = () => {
    const Instant = GetIntrinsic('%Temporal.Instant%');
    return new Instant(SystemUTCEpochNanoSeconds());
};
const plainDateTime = (calendarLike, temporalTimeZoneLike = timeZone()) => {
    const tZ = ToTemporalTimeZone(temporalTimeZoneLike);
    const calendar = ToTemporalCalendar(calendarLike);
    const inst = instant();
    return BuiltinTimeZoneGetPlainDateTimeFor(tZ, inst, calendar);
};
const plainDateTimeISO = (temporalTimeZoneLike = timeZone()) => {
    const tZ = ToTemporalTimeZone(temporalTimeZoneLike);
    const calendar = GetISO8601Calendar();
    const inst = instant();
    return BuiltinTimeZoneGetPlainDateTimeFor(tZ, inst, calendar);
};
const zonedDateTime = (calendarLike, temporalTimeZoneLike = timeZone()) => {
    const tZ = ToTemporalTimeZone(temporalTimeZoneLike);
    const calendar = ToTemporalCalendar(calendarLike);
    return CreateTemporalZonedDateTime(SystemUTCEpochNanoSeconds(), tZ, calendar);
};
const zonedDateTimeISO = (temporalTimeZoneLike = timeZone()) => {
    return zonedDateTime(GetISO8601Calendar(), temporalTimeZoneLike);
};
const plainDate = (calendarLike, temporalTimeZoneLike = timeZone()) => {
    return TemporalDateTimeToDate(plainDateTime(calendarLike, temporalTimeZoneLike));
};
const plainDateISO = (temporalTimeZoneLike = timeZone()) => {
    return TemporalDateTimeToDate(plainDateTimeISO(temporalTimeZoneLike));
};
const plainTimeISO = (temporalTimeZoneLike = timeZone()) => {
    return TemporalDateTimeToTime(plainDateTimeISO(temporalTimeZoneLike));
};
const timeZone = () => {
    return SystemTimeZone();
};
const Now = {
    instant,
    plainDateTime,
    plainDateTimeISO,
    plainDate,
    plainDateISO,
    plainTimeISO,
    timeZone,
    zonedDateTime,
    zonedDateTimeISO,
    [Symbol.toStringTag]: 'Temporal.Now'
};
Object.defineProperty(Now, Symbol.toStringTag, {
    value: 'Temporal.Now',
    writable: false,
    enumerable: false,
    configurable: true
});

const ObjectAssign = Object.assign;
const DISALLOWED_UNITS$1 = ['year', 'month', 'week', 'day'];
const MAX_INCREMENTS = {
    hour: 24,
    minute: 60,
    second: 60,
    millisecond: 1000,
    microsecond: 1000,
    nanosecond: 1000
};
function TemporalTimeToString(time, precision, options = undefined) {
    let hour = GetSlot(time, ISO_HOUR);
    let minute = GetSlot(time, ISO_MINUTE);
    let second = GetSlot(time, ISO_SECOND);
    let millisecond = GetSlot(time, ISO_MILLISECOND);
    let microsecond = GetSlot(time, ISO_MICROSECOND);
    let nanosecond = GetSlot(time, ISO_NANOSECOND);
    if (options) {
        const { unit, increment, roundingMode } = options;
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode));
    }
    const hourString = ISODateTimePartString(hour);
    const minuteString = ISODateTimePartString(minute);
    const seconds = FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
    return `${hourString}:${minuteString}${seconds}`;
}
class PlainTime {
    constructor(isoHourParam = 0, isoMinuteParam = 0, isoSecondParam = 0, isoMillisecondParam = 0, isoMicrosecondParam = 0, isoNanosecondParam = 0) {
        const isoHour = ToIntegerThrowOnInfinity(isoHourParam);
        const isoMinute = ToIntegerThrowOnInfinity(isoMinuteParam);
        const isoSecond = ToIntegerThrowOnInfinity(isoSecondParam);
        const isoMillisecond = ToIntegerThrowOnInfinity(isoMillisecondParam);
        const isoMicrosecond = ToIntegerThrowOnInfinity(isoMicrosecondParam);
        const isoNanosecond = ToIntegerThrowOnInfinity(isoNanosecondParam);
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
                value: `${this[Symbol.toStringTag]} <${TemporalTimeToString(this, 'auto')}>`,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
    }
    get calendar() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        // PlainTime's calendar isn't settable, so can't be a userland calendar
        return GetSlot(this, CALENDAR);
    }
    get hour() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_HOUR);
    }
    get minute() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MINUTE);
    }
    get second() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_SECOND);
    }
    get millisecond() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MILLISECOND);
    }
    get microsecond() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_MICROSECOND);
    }
    get nanosecond() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, ISO_NANOSECOND);
    }
    with(temporalTimeLike, optionsParam = undefined) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(temporalTimeLike)) {
            throw new TypeError('invalid argument');
        }
        RejectObjectWithCalendarOrTimeZone(temporalTimeLike);
        const options = GetOptionsObject(optionsParam);
        const overflow = ToTemporalOverflow(options);
        const props = ToPartialRecord(temporalTimeLike, [
            'hour',
            'microsecond',
            'millisecond',
            'minute',
            'nanosecond',
            'second'
        ]);
        if (!props) {
            throw new TypeError('invalid time-like');
        }
        const fields = ToTemporalTimeRecord(this);
        let { hour, minute, second, millisecond, microsecond, nanosecond } = ObjectAssign(fields, props);
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow));
        return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    add(temporalDurationLike) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        const { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        let hour = GetSlot(this, ISO_HOUR);
        let minute = GetSlot(this, ISO_MINUTE);
        let second = GetSlot(this, ISO_SECOND);
        let millisecond = GetSlot(this, ISO_MILLISECOND);
        let microsecond = GetSlot(this, ISO_MICROSECOND);
        let nanosecond = GetSlot(this, ISO_NANOSECOND);
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds));
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, 'reject'));
        return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    subtract(temporalDurationLike) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        const { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        let hour = GetSlot(this, ISO_HOUR);
        let minute = GetSlot(this, ISO_MINUTE);
        let second = GetSlot(this, ISO_SECOND);
        let millisecond = GetSlot(this, ISO_MILLISECOND);
        let microsecond = GetSlot(this, ISO_MICROSECOND);
        let nanosecond = GetSlot(this, ISO_NANOSECOND);
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = AddTime(hour, minute, second, millisecond, microsecond, nanosecond, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds));
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, 'reject'));
        return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    until(otherParam, optionsParam = undefined) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalTime(otherParam);
        const options = GetOptionsObject(optionsParam);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$1, 'hour');
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$1);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, MAX_INCREMENTS[smallestUnit], false);
        let { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = DifferenceTime(GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND));
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = RoundDuration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode));
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    since(otherParam, optionsParam = undefined) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalTime(otherParam);
        const options = GetOptionsObject(optionsParam);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS$1, 'hour');
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond', DISALLOWED_UNITS$1);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, MAX_INCREMENTS[smallestUnit], false);
        let { hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = DifferenceTime(GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND));
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = RoundDuration(0, 0, 0, 0, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode)));
        hours = -hours;
        minutes = -minutes;
        seconds = -seconds;
        milliseconds = -milliseconds;
        microseconds = -microseconds;
        nanoseconds = -nanoseconds;
        ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    round(optionsParam) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        if (optionsParam === undefined)
            throw new TypeError('options parameter is required');
        const options = typeof optionsParam === 'string'
            ? CreateOnePropObject('smallestUnit', optionsParam)
            : GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, undefined, DISALLOWED_UNITS$1);
        if (smallestUnit === undefined)
            throw new RangeError('smallestUnit is required');
        const roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
        const roundingIncrement = ToTemporalRoundingIncrement(options, MAX_INCREMENTS[smallestUnit], false);
        let hour = GetSlot(this, ISO_HOUR);
        let minute = GetSlot(this, ISO_MINUTE);
        let second = GetSlot(this, ISO_SECOND);
        let millisecond = GetSlot(this, ISO_MILLISECOND);
        let microsecond = GetSlot(this, ISO_MICROSECOND);
        let nanosecond = GetSlot(this, ISO_NANOSECOND);
        ({ hour, minute, second, millisecond, microsecond, nanosecond } = RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode));
        return new PlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    equals(otherParam) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalTime(otherParam);
        for (const slot of [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]) {
            const val1 = GetSlot(this, slot);
            const val2 = GetSlot(other, slot);
            if (val1 !== val2)
                return false;
        }
        return true;
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const { precision, unit, increment } = ToSecondsStringPrecision(options);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        return TemporalTimeToString(this, precision, { unit, increment, roundingMode });
    }
    toJSON() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return TemporalTimeToString(this, 'auto');
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainTime');
    }
    toPlainDateTime(temporalDateParam) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        const temporalDate = ToTemporalDate(temporalDateParam);
        const year = GetSlot(temporalDate, ISO_YEAR);
        const month = GetSlot(temporalDate, ISO_MONTH);
        const day = GetSlot(temporalDate, ISO_DAY);
        const calendar = GetSlot(temporalDate, CALENDAR);
        const hour = GetSlot(this, ISO_HOUR);
        const minute = GetSlot(this, ISO_MINUTE);
        const second = GetSlot(this, ISO_SECOND);
        const millisecond = GetSlot(this, ISO_MILLISECOND);
        const microsecond = GetSlot(this, ISO_MICROSECOND);
        const nanosecond = GetSlot(this, ISO_NANOSECOND);
        return CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
    }
    toZonedDateTime(item) {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(item)) {
            throw new TypeError('invalid argument');
        }
        const dateLike = item.plainDate;
        if (dateLike === undefined) {
            throw new TypeError('missing date property');
        }
        const temporalDate = ToTemporalDate(dateLike);
        const timeZoneLike = item.timeZone;
        if (timeZoneLike === undefined) {
            throw new TypeError('missing timeZone property');
        }
        const timeZone = ToTemporalTimeZone(timeZoneLike);
        const year = GetSlot(temporalDate, ISO_YEAR);
        const month = GetSlot(temporalDate, ISO_MONTH);
        const day = GetSlot(temporalDate, ISO_DAY);
        const calendar = GetSlot(temporalDate, CALENDAR);
        const hour = GetSlot(this, ISO_HOUR);
        const minute = GetSlot(this, ISO_MINUTE);
        const second = GetSlot(this, ISO_SECOND);
        const millisecond = GetSlot(this, ISO_MILLISECOND);
        const microsecond = GetSlot(this, ISO_MICROSECOND);
        const nanosecond = GetSlot(this, ISO_NANOSECOND);
        const PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        const dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
    getISOFields() {
        if (!IsTemporalTime(this))
            throw new TypeError('invalid receiver');
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
    static from(item, optionsParam = undefined) {
        const options = GetOptionsObject(optionsParam);
        const overflow = ToTemporalOverflow(options);
        if (IsTemporalTime(item)) {
            return new PlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
        }
        return ToTemporalTime(item, overflow);
    }
    static compare(oneParam, twoParam) {
        const one = ToTemporalTime(oneParam);
        const two = ToTemporalTime(twoParam);
        for (const slot of [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]) {
            const val1 = GetSlot(one, slot);
            const val2 = GetSlot(two, slot);
            if (val1 !== val2)
                return ComparisonResult(val1 - val2);
        }
        return 0;
    }
}
MakeIntrinsicClass(PlainTime, 'Temporal.PlainTime');

class TimeZone {
    constructor(timeZoneIdentifierParam) {
        // Note: if the argument is not passed, GetCanonicalTimeZoneIdentifier(undefined) will throw.
        //       This check exists only to improve the error message.
        if (arguments.length < 1) {
            throw new RangeError('missing argument: identifier is required');
        }
        const timeZoneIdentifier = GetCanonicalTimeZoneIdentifier(timeZoneIdentifierParam);
        CreateSlots(this);
        SetSlot(this, TIMEZONE_ID, timeZoneIdentifier);
        {
            Object.defineProperty(this, '_repr_', {
                value: `${this[Symbol.toStringTag]} <${timeZoneIdentifier}>`,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
    }
    get id() {
        return ToString(this);
    }
    getOffsetNanosecondsFor(instantParam) {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        const instant = ToTemporalInstant(instantParam);
        const id = GetSlot(this, TIMEZONE_ID);
        const offsetNs = ParseOffsetString(id);
        if (offsetNs !== null)
            return offsetNs;
        return GetIANATimeZoneOffsetNanoseconds(GetSlot(instant, EPOCHNANOSECONDS), id);
    }
    getOffsetStringFor(instantParam) {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        const instant = ToTemporalInstant(instantParam);
        return BuiltinTimeZoneGetOffsetStringFor(this, instant);
    }
    getPlainDateTimeFor(instantParam, calendarParam = GetISO8601Calendar()) {
        const instant = ToTemporalInstant(instantParam);
        const calendar = ToTemporalCalendar(calendarParam);
        return BuiltinTimeZoneGetPlainDateTimeFor(this, instant, calendar);
    }
    getInstantFor(dateTimeParam, optionsParam = undefined) {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        const dateTime = ToTemporalDateTime(dateTimeParam);
        const options = GetOptionsObject(optionsParam);
        const disambiguation = ToTemporalDisambiguation(options);
        return BuiltinTimeZoneGetInstantFor(this, dateTime, disambiguation);
    }
    getPossibleInstantsFor(dateTimeParam) {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        const dateTime = ToTemporalDateTime(dateTimeParam);
        const Instant = GetIntrinsic('%Temporal.Instant%');
        const id = GetSlot(this, TIMEZONE_ID);
        const offsetNs = ParseOffsetString(id);
        if (offsetNs !== null) {
            const epochNs = GetEpochFromISOParts(GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
            if (epochNs === null)
                throw new RangeError('DateTime outside of supported range');
            return [new Instant(epochNs.minus(offsetNs))];
        }
        const possibleEpochNs = GetIANATimeZoneEpochValue(id, GetSlot(dateTime, ISO_YEAR), GetSlot(dateTime, ISO_MONTH), GetSlot(dateTime, ISO_DAY), GetSlot(dateTime, ISO_HOUR), GetSlot(dateTime, ISO_MINUTE), GetSlot(dateTime, ISO_SECOND), GetSlot(dateTime, ISO_MILLISECOND), GetSlot(dateTime, ISO_MICROSECOND), GetSlot(dateTime, ISO_NANOSECOND));
        return possibleEpochNs.map((ns) => new Instant(ns));
    }
    getNextTransition(startingPointParam) {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        const startingPoint = ToTemporalInstant(startingPointParam);
        const id = GetSlot(this, TIMEZONE_ID);
        // Offset time zones or UTC have no transitions
        if (ParseOffsetString(id) !== null || id === 'UTC') {
            return null;
        }
        let epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
        const Instant = GetIntrinsic('%Temporal.Instant%');
        epochNanoseconds = GetIANATimeZoneNextTransition(epochNanoseconds, id);
        return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
    }
    getPreviousTransition(startingPointParam) {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        const startingPoint = ToTemporalInstant(startingPointParam);
        const id = GetSlot(this, TIMEZONE_ID);
        // Offset time zones or UTC have no transitions
        if (ParseOffsetString(id) !== null || id === 'UTC') {
            return null;
        }
        let epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
        const Instant = GetIntrinsic('%Temporal.Instant%');
        epochNanoseconds = GetIANATimeZonePreviousTransition(epochNanoseconds, id);
        return epochNanoseconds === null ? null : new Instant(epochNanoseconds);
    }
    toString() {
        if (!IsTemporalTimeZone(this))
            throw new TypeError('invalid receiver');
        return ToString(GetSlot(this, TIMEZONE_ID));
    }
    toJSON() {
        return ToString(this);
    }
    static from(item) {
        return ToTemporalTimeZone(item);
    }
}
MakeIntrinsicClass(TimeZone, 'Temporal.TimeZone');

const ObjectCreate = Object.create;
const DISALLOWED_UNITS = [
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
    'microsecond',
    'nanosecond'
];
class PlainYearMonth {
    constructor(isoYearParam, isoMonthParam, calendarParam = GetISO8601Calendar(), referenceISODayParam = 1) {
        const isoYear = ToIntegerThrowOnInfinity(isoYearParam);
        const isoMonth = ToIntegerThrowOnInfinity(isoMonthParam);
        const calendar = ToTemporalCalendar(calendarParam);
        const referenceISODay = ToIntegerThrowOnInfinity(referenceISODayParam);
        // Note: if the arguments are not passed,
        //       ToIntegerThrowOnInfinity(undefined) will have returned 0, which will
        //       be rejected by RejectISODate in CreateTemporalYearMonthSlots. This
        //       check exists only to improve the error message.
        if (arguments.length < 2) {
            throw new RangeError('missing argument: isoYear and isoMonth are required');
        }
        CreateTemporalYearMonthSlots(this, isoYear, isoMonth, calendar, referenceISODay);
    }
    get year() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), this);
    }
    get month() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), this);
    }
    get monthCode() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), this);
    }
    get calendar() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
    }
    get era() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), this);
    }
    get eraYear() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), this);
    }
    get daysInMonth() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
    }
    get daysInYear() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), this);
    }
    get monthsInYear() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
    }
    get inLeapYear() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), this);
    }
    with(temporalYearMonthLike, optionsParam = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(temporalYearMonthLike)) {
            throw new TypeError('invalid argument');
        }
        RejectObjectWithCalendarOrTimeZone(temporalYearMonthLike);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['month', 'monthCode', 'year']);
        const props = ToPartialRecord(temporalYearMonthLike, fieldNames);
        if (!props) {
            throw new TypeError('invalid year-month-like');
        }
        let fields = ToTemporalYearMonthFields(this, fieldNames);
        fields = CalendarMergeFields(calendar, fields, props);
        fields = ToTemporalYearMonthFields(fields, fieldNames);
        const options = GetOptionsObject(optionsParam);
        return YearMonthFromFields(calendar, fields, options);
    }
    add(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        let { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        ({ days } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'day'));
        const options = GetOptionsObject(optionsParam);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(this, fieldNames);
        const sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        const day = sign < 0 ? ToPositiveInteger(CalendarDaysInMonth(calendar, this)) : 1;
        const startDate = DateFromFields(calendar, { ...fields, day });
        const optionsCopy = { ...options };
        const addedDate = CalendarDateAdd(calendar, startDate, { ...duration, days }, options);
        const addedDateFields = ToTemporalYearMonthFields(addedDate, fieldNames);
        return YearMonthFromFields(calendar, addedDateFields, optionsCopy);
    }
    subtract(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        let duration = ToLimitedTemporalDuration(temporalDurationLike);
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
        let { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        ({ days } = BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 'day'));
        const options = GetOptionsObject(optionsParam);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(this, fieldNames);
        const sign = DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        const day = sign < 0 ? ToPositiveInteger(CalendarDaysInMonth(calendar, this)) : 1;
        const startDate = DateFromFields(calendar, { ...fields, day });
        const optionsCopy = { ...options };
        const addedDate = CalendarDateAdd(calendar, startDate, { ...duration, days }, options);
        const addedDateFields = ToTemporalYearMonthFields(addedDate, fieldNames);
        return YearMonthFromFields(calendar, addedDateFields, optionsCopy);
    }
    until(otherParam, optionsParam = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalYearMonth(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarID = ToString(calendar);
        const otherCalendarID = ToString(otherCalendar);
        if (calendarID !== otherCalendarID) {
            throw new RangeError(`cannot compute difference between months of ${calendarID} and ${otherCalendarID} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'month', DISALLOWED_UNITS);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS, 'year');
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const otherFields = ToTemporalYearMonthFields(other, fieldNames);
        const thisFields = ToTemporalYearMonthFields(this, fieldNames);
        const otherDate = DateFromFields(calendar, { ...otherFields, day: 1 });
        const thisDate = DateFromFields(calendar, { ...thisFields, day: 1 });
        const untilOptions = { ...options, largestUnit };
        const result = CalendarDateUntil(calendar, thisDate, otherDate, untilOptions);
        if (smallestUnit === 'month' && roundingIncrement === 1)
            return result;
        let { years, months } = result;
        ({ years, months } = RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, thisDate));
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(years, months, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    since(otherParam, optionsParam = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalYearMonth(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarID = ToString(calendar);
        const otherCalendarID = ToString(otherCalendar);
        if (calendarID !== otherCalendarID) {
            throw new RangeError(`cannot compute difference between months of ${calendarID} and ${otherCalendarID} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'month', DISALLOWED_UNITS);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', DISALLOWED_UNITS, 'year');
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalRoundingIncrement(options, undefined, false);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const otherFields = ToTemporalYearMonthFields(other, fieldNames);
        const thisFields = ToTemporalYearMonthFields(this, fieldNames);
        const otherDate = DateFromFields(calendar, { ...otherFields, day: 1 });
        const thisDate = DateFromFields(calendar, { ...thisFields, day: 1 });
        const untilOptions = { ...options, largestUnit };
        let { years, months } = CalendarDateUntil(calendar, thisDate, otherDate, untilOptions);
        const Duration = GetIntrinsic('%Temporal.Duration%');
        if (smallestUnit === 'month' && roundingIncrement === 1) {
            return new Duration(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        ({ years, months } = RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, NegateTemporalRoundingMode(roundingMode), thisDate));
        return new Duration(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
    }
    equals(otherParam) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalYearMonth(otherParam);
        for (const slot of [ISO_YEAR, ISO_MONTH, ISO_DAY]) {
            const val1 = GetSlot(this, slot);
            const val2 = GetSlot(other, slot);
            if (val1 !== val2)
                return false;
        }
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const showCalendar = ToShowCalendarOption(options);
        return TemporalYearMonthToString(this, showCalendar);
    }
    toJSON() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return TemporalYearMonthToString(this);
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.PlainYearMonth');
    }
    toPlainDate(item) {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(item))
            throw new TypeError('argument should be an object');
        const calendar = GetSlot(this, CALENDAR);
        const receiverFieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(this, receiverFieldNames);
        const inputFieldNames = CalendarFields(calendar, ['day']);
        const inputEntries = [['day']];
        // Add extra fields from the calendar at the end
        inputFieldNames.forEach((fieldName) => {
            if (!inputEntries.some(([name]) => name === fieldName)) {
                inputEntries.push([
                    fieldName,
                    undefined
                ]); // Make TS ignore extra fields
            }
        });
        const inputFields = PrepareTemporalFields(item, inputEntries);
        let mergedFields = CalendarMergeFields(calendar, fields, inputFields);
        const mergedFieldNames = [...new Set([...receiverFieldNames, ...inputFieldNames])];
        const mergedEntries = [];
        mergedFieldNames.forEach((fieldName) => {
            if (!mergedEntries.some(([name]) => name === fieldName)) {
                mergedEntries.push([fieldName, undefined]);
            }
        });
        mergedFields = PrepareTemporalFields(mergedFields, mergedEntries);
        const options = ObjectCreate(null);
        options.overflow = 'reject';
        return DateFromFields(calendar, mergedFields, options);
    }
    getISOFields() {
        if (!IsTemporalYearMonth(this))
            throw new TypeError('invalid receiver');
        return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoYear: GetSlot(this, ISO_YEAR)
        };
    }
    static from(item, optionsParam = undefined) {
        const options = GetOptionsObject(optionsParam);
        if (IsTemporalYearMonth(item)) {
            ToTemporalOverflow(options); // validate and ignore
            return CreateTemporalYearMonth(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, CALENDAR), GetSlot(item, ISO_DAY));
        }
        return ToTemporalYearMonth(item, options);
    }
    static compare(oneParam, twoParam) {
        const one = ToTemporalYearMonth(oneParam);
        const two = ToTemporalYearMonth(twoParam);
        return CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
    }
}
MakeIntrinsicClass(PlainYearMonth, 'Temporal.PlainYearMonth');

const ArrayPrototypePush = Array.prototype.push;
class ZonedDateTime {
    constructor(epochNanosecondsParam, timeZoneParam, calendarParam = GetISO8601Calendar()) {
        // Note: if the argument is not passed, ToBigInt(undefined) will throw. This check exists only
        //       to improve the error message.
        //       ToTemporalTimeZone(undefined) will end up calling TimeZone.from("undefined"), which
        //       could succeed.
        if (arguments.length < 1) {
            throw new TypeError('missing argument: epochNanoseconds is required');
        }
        const epochNanoseconds = ToBigInt(epochNanosecondsParam);
        const timeZone = ToTemporalTimeZone(timeZoneParam);
        const calendar = ToTemporalCalendar(calendarParam);
        CreateTemporalZonedDateTimeSlots(this, epochNanoseconds, timeZone, calendar);
    }
    get calendar() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, CALENDAR);
    }
    get timeZone() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(this, TIME_ZONE);
    }
    get year() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get month() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarMonth(GetSlot(this, CALENDAR), dateTime(this));
    }
    get monthCode() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthCode(GetSlot(this, CALENDAR), dateTime(this));
    }
    get day() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDay(GetSlot(this, CALENDAR), dateTime(this));
    }
    get hour() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_HOUR);
    }
    get minute() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_MINUTE);
    }
    get second() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_SECOND);
    }
    get millisecond() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_MILLISECOND);
    }
    get microsecond() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_MICROSECOND);
    }
    get nanosecond() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetSlot(dateTime(this), ISO_NANOSECOND);
    }
    get era() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarEra(GetSlot(this, CALENDAR), dateTime(this));
    }
    get eraYear() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarEraYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get epochSeconds() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const value = GetSlot(this, EPOCHNANOSECONDS);
        return +value.divide(1e9);
    }
    get epochMilliseconds() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const value = GetSlot(this, EPOCHNANOSECONDS);
        return +value.divide(1e6);
    }
    get epochMicroseconds() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const value = GetSlot(this, EPOCHNANOSECONDS);
        return bigIntIfAvailable$1(value.divide(1e3));
    }
    get epochNanoseconds() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return bigIntIfAvailable$1(GetSlot(this, EPOCHNANOSECONDS));
    }
    get dayOfWeek() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDayOfWeek(GetSlot(this, CALENDAR), dateTime(this));
    }
    get dayOfYear() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDayOfYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get weekOfYear() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarWeekOfYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get hoursInDay() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const dt = dateTime(this);
        const DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        const year = GetSlot(dt, ISO_YEAR);
        const month = GetSlot(dt, ISO_MONTH);
        const day = GetSlot(dt, ISO_DAY);
        const today = new DateTime(year, month, day, 0, 0, 0, 0, 0, 0);
        const tomorrowFields = AddISODate(year, month, day, 0, 0, 0, 1, 'reject');
        const tomorrow = new DateTime(tomorrowFields.year, tomorrowFields.month, tomorrowFields.day, 0, 0, 0, 0, 0, 0);
        const timeZone = GetSlot(this, TIME_ZONE);
        const todayNs = GetSlot(BuiltinTimeZoneGetInstantFor(timeZone, today, 'compatible'), EPOCHNANOSECONDS);
        const tomorrowNs = GetSlot(BuiltinTimeZoneGetInstantFor(timeZone, tomorrow, 'compatible'), EPOCHNANOSECONDS);
        return tomorrowNs.subtract(todayNs).toJSNumber() / 3.6e12;
    }
    get daysInWeek() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInWeek(GetSlot(this, CALENDAR), dateTime(this));
    }
    get daysInMonth() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInMonth(GetSlot(this, CALENDAR), dateTime(this));
    }
    get daysInYear() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarDaysInYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get monthsInYear() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarMonthsInYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get inLeapYear() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return CalendarInLeapYear(GetSlot(this, CALENDAR), dateTime(this));
    }
    get offset() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return BuiltinTimeZoneGetOffsetStringFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
    }
    get offsetNanoseconds() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return GetOffsetNanosecondsFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
    }
    with(temporalZonedDateTimeLike, optionsParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        if (!IsObject(temporalZonedDateTimeLike)) {
            throw new TypeError('invalid zoned-date-time-like');
        }
        RejectObjectWithCalendarOrTimeZone(temporalZonedDateTimeLike);
        const options = GetOptionsObject(optionsParam);
        const disambiguation = ToTemporalDisambiguation(options);
        const offset = ToTemporalOffset(options, 'prefer');
        const timeZone = GetSlot(this, TIME_ZONE);
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, [
            'day',
            'hour',
            'microsecond',
            'millisecond',
            'minute',
            'month',
            'monthCode',
            'nanosecond',
            'second',
            'year'
        ]);
        ArrayPrototypePush.call(fieldNames, 'offset');
        const props = ToPartialRecord(temporalZonedDateTimeLike, fieldNames);
        if (!props) {
            throw new TypeError('invalid zoned-date-time-like');
        }
        // Unlike ToTemporalZonedDateTimeFields, the offset property will be required.
        const entries = [
            ['day', undefined],
            ['hour', 0],
            ['microsecond', 0],
            ['millisecond', 0],
            ['minute', 0],
            ['month', undefined],
            ['monthCode', undefined],
            ['nanosecond', 0],
            ['second', 0],
            ['year', undefined],
            ['offset'],
            ['timeZone']
        ];
        // Add extra fields from the calendar at the end
        fieldNames.forEach((fieldName) => {
            if (!entries.some(([name]) => name === fieldName)) {
                entries.push([fieldName, undefined]);
            }
        });
        let fields = PrepareTemporalFields(this, entries);
        fields = CalendarMergeFields(calendar, fields, props);
        fields = PrepareTemporalFields(fields, entries);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = InterpretTemporalDateTimeFields(calendar, fields, options);
        const offsetNs = ParseOffsetString(fields.offset);
        const epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, 'option', offsetNs, timeZone, disambiguation, offset, 
        /* matchMinute = */ false);
        return CreateTemporalZonedDateTime(epochNanoseconds, GetSlot(this, TIME_ZONE), calendar);
    }
    withPlainDate(temporalDateParam) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const temporalDate = ToTemporalDate(temporalDateParam);
        const year = GetSlot(temporalDate, ISO_YEAR);
        const month = GetSlot(temporalDate, ISO_MONTH);
        const day = GetSlot(temporalDate, ISO_DAY);
        let calendar = GetSlot(temporalDate, CALENDAR);
        const thisDt = dateTime(this);
        const hour = GetSlot(thisDt, ISO_HOUR);
        const minute = GetSlot(thisDt, ISO_MINUTE);
        const second = GetSlot(thisDt, ISO_SECOND);
        const millisecond = GetSlot(thisDt, ISO_MILLISECOND);
        const microsecond = GetSlot(thisDt, ISO_MICROSECOND);
        const nanosecond = GetSlot(thisDt, ISO_NANOSECOND);
        calendar = ConsolidateCalendars(GetSlot(this, CALENDAR), calendar);
        const timeZone = GetSlot(this, TIME_ZONE);
        const PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        const dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
    withPlainTime(temporalTimeParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const PlainTime = GetIntrinsic('%Temporal.PlainTime%');
        const temporalTime = temporalTimeParam == undefined ? new PlainTime() : ToTemporalTime(temporalTimeParam);
        const thisDt = dateTime(this);
        const year = GetSlot(thisDt, ISO_YEAR);
        const month = GetSlot(thisDt, ISO_MONTH);
        const day = GetSlot(thisDt, ISO_DAY);
        const calendar = GetSlot(this, CALENDAR);
        const hour = GetSlot(temporalTime, ISO_HOUR);
        const minute = GetSlot(temporalTime, ISO_MINUTE);
        const second = GetSlot(temporalTime, ISO_SECOND);
        const millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
        const microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
        const nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
        const timeZone = GetSlot(this, TIME_ZONE);
        const PlainDateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        const dt = new PlainDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar);
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, dt, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
    withTimeZone(timeZoneParam) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const timeZone = ToTemporalTimeZone(timeZoneParam);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone, GetSlot(this, CALENDAR));
    }
    withCalendar(calendarParam) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const calendar = ToTemporalCalendar(calendarParam);
        return CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), GetSlot(this, TIME_ZONE), calendar);
    }
    add(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        const { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        const options = GetOptionsObject(optionsParam);
        const timeZone = GetSlot(this, TIME_ZONE);
        const calendar = GetSlot(this, CALENDAR);
        const epochNanoseconds = AddZonedDateTime(GetSlot(this, INSTANT), timeZone, calendar, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options);
        return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
    }
    subtract(temporalDurationLike, optionsParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const duration = ToLimitedTemporalDuration(temporalDurationLike);
        const { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = duration;
        const options = GetOptionsObject(optionsParam);
        const timeZone = GetSlot(this, TIME_ZONE);
        const calendar = GetSlot(this, CALENDAR);
        const epochNanoseconds = AddZonedDateTime(GetSlot(this, INSTANT), timeZone, calendar, -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, options);
        return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, calendar);
    }
    until(otherParam, optionsParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalZonedDateTime(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarId = ToString(calendar);
        const otherCalendarId = ToString(otherCalendar);
        if (calendarId !== otherCalendarId) {
            throw new RangeError(`cannot compute difference between dates of ${calendarId} and ${otherCalendarId} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
        const defaultLargestUnit = LargerOfTwoTemporalUnits('hour', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        const ns1 = GetSlot(this, EPOCHNANOSECONDS);
        const ns2 = GetSlot(other, EPOCHNANOSECONDS);
        let years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
        if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
            // The user is only asking for a time difference, so return difference of instants.
            years = 0;
            months = 0;
            weeks = 0;
            days = 0;
            ({ seconds, milliseconds, microseconds, nanoseconds } = DifferenceInstant(ns1, ns2, roundingIncrement, smallestUnit, roundingMode));
            ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        }
        else {
            const timeZone = GetSlot(this, TIME_ZONE);
            if (!TimeZoneEquals(timeZone, GetSlot(other, TIME_ZONE))) {
                throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' " +
                    'or smaller because day lengths can vary between time zones due to DST or time zone offset changes.');
            }
            const untilOptions = { ...options, largestUnit };
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, untilOptions));
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this));
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this));
        }
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
    }
    since(otherParam, optionsParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalZonedDateTime(otherParam);
        const calendar = GetSlot(this, CALENDAR);
        const otherCalendar = GetSlot(other, CALENDAR);
        const calendarId = ToString(calendar);
        const otherCalendarId = ToString(otherCalendar);
        if (calendarId !== otherCalendarId) {
            throw new RangeError(`cannot compute difference between dates of ${calendarId} and ${otherCalendarId} calendars`);
        }
        const options = GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, 'nanosecond');
        const defaultLargestUnit = LargerOfTwoTemporalUnits('hour', smallestUnit);
        const largestUnit = ToLargestTemporalUnit(options, 'auto', [], defaultLargestUnit);
        ValidateTemporalUnitRange(largestUnit, smallestUnit);
        let roundingMode = ToTemporalRoundingMode(options, 'trunc');
        roundingMode = NegateTemporalRoundingMode(roundingMode);
        const roundingIncrement = ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
        const ns1 = GetSlot(this, EPOCHNANOSECONDS);
        const ns2 = GetSlot(other, EPOCHNANOSECONDS);
        let years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
        if (largestUnit !== 'year' && largestUnit !== 'month' && largestUnit !== 'week' && largestUnit !== 'day') {
            // The user is only asking for a time difference, so return difference of instants.
            years = 0;
            months = 0;
            weeks = 0;
            days = 0;
            ({ seconds, milliseconds, microseconds, nanoseconds } = DifferenceInstant(ns1, ns2, roundingIncrement, smallestUnit, roundingMode));
            ({ hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit));
        }
        else {
            const timeZone = GetSlot(this, TIME_ZONE);
            if (!TimeZoneEquals(timeZone, GetSlot(other, TIME_ZONE))) {
                throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' " +
                    'or smaller because day lengths can vary between time zones due to DST or time zone offset changes.');
            }
            const untilOptions = { ...options, largestUnit };
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                DifferenceZonedDateTime(ns1, ns2, timeZone, calendar, largestUnit, untilOptions));
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this));
            ({ years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } =
                AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this));
        }
        const Duration = GetIntrinsic('%Temporal.Duration%');
        return new Duration(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
    }
    round(optionsParam) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        if (optionsParam === undefined)
            throw new TypeError('options parameter is required');
        const options = typeof optionsParam === 'string'
            ? CreateOnePropObject('smallestUnit', optionsParam)
            : GetOptionsObject(optionsParam);
        const smallestUnit = ToSmallestTemporalUnit(options, undefined, ['year', 'month', 'week']);
        if (smallestUnit === undefined)
            throw new RangeError('smallestUnit is required');
        const roundingMode = ToTemporalRoundingMode(options, 'halfExpand');
        const maximumIncrements = {
            day: 1,
            hour: 24,
            minute: 60,
            second: 60,
            millisecond: 1000,
            microsecond: 1000,
            nanosecond: 1000
        };
        const roundingIncrement = ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
        // first, round the underlying DateTime fields
        const dt = dateTime(this);
        let year = GetSlot(dt, ISO_YEAR);
        let month = GetSlot(dt, ISO_MONTH);
        let day = GetSlot(dt, ISO_DAY);
        let hour = GetSlot(dt, ISO_HOUR);
        let minute = GetSlot(dt, ISO_MINUTE);
        let second = GetSlot(dt, ISO_SECOND);
        let millisecond = GetSlot(dt, ISO_MILLISECOND);
        let microsecond = GetSlot(dt, ISO_MICROSECOND);
        let nanosecond = GetSlot(dt, ISO_NANOSECOND);
        const DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        const timeZone = GetSlot(this, TIME_ZONE);
        const calendar = GetSlot(this, CALENDAR);
        const dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0);
        const instantStart = BuiltinTimeZoneGetInstantFor(timeZone, dtStart, 'compatible');
        const endNs = AddZonedDateTime(instantStart, timeZone, calendar, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
        const dayLengthNs = endNs.subtract(GetSlot(instantStart, EPOCHNANOSECONDS));
        if (dayLengthNs.isZero()) {
            throw new RangeError('cannot round a ZonedDateTime in a calendar with zero-length days');
        }
        ({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode, 
        // Days are guaranteed to be shorter than Number.MAX_SAFE_INTEGER
        // (which can hold up to 104 days in nanoseconds)
        dayLengthNs.toJSNumber()));
        // Now reset all DateTime fields but leave the TimeZone. The offset will
        // also be retained if the new date/time values are still OK with the old
        // offset. Otherwise the offset will be changed to be compatible with the
        // new date/time values. If DST disambiguation is required, the `compatible`
        // disambiguation algorithm will be used.
        const offsetNs = GetOffsetNanosecondsFor(timeZone, GetSlot(this, INSTANT));
        const epochNanoseconds = InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, 'option', offsetNs, timeZone, 'compatible', 'prefer', 
        /* matchMinute = */ false);
        return CreateTemporalZonedDateTime(epochNanoseconds, timeZone, GetSlot(this, CALENDAR));
    }
    equals(otherParam) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const other = ToTemporalZonedDateTime(otherParam);
        const one = GetSlot(this, EPOCHNANOSECONDS);
        const two = GetSlot(other, EPOCHNANOSECONDS);
        if (!bigInt(one).equals(two))
            return false;
        if (!TimeZoneEquals(GetSlot(this, TIME_ZONE), GetSlot(other, TIME_ZONE)))
            return false;
        return CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
    }
    toString(optionsParam = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const options = GetOptionsObject(optionsParam);
        const { precision, unit, increment } = ToSecondsStringPrecision(options);
        const roundingMode = ToTemporalRoundingMode(options, 'trunc');
        const showCalendar = ToShowCalendarOption(options);
        const showTimeZone = ToShowTimeZoneNameOption(options);
        const showOffset = ToShowOffsetOption(options);
        return TemporalZonedDateTimeToString(this, precision, showCalendar, showTimeZone, showOffset, {
            unit,
            increment,
            roundingMode
        });
    }
    toLocaleString(locales = undefined, options = undefined) {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return new DateTimeFormat(locales, options).format(this);
    }
    toJSON() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return TemporalZonedDateTimeToString(this, 'auto');
    }
    valueOf() {
        throw new TypeError('use compare() or equals() to compare Temporal.ZonedDateTime');
    }
    startOfDay() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const dt = dateTime(this);
        const DateTime = GetIntrinsic('%Temporal.PlainDateTime%');
        const calendar = GetSlot(this, CALENDAR);
        const dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar);
        const timeZone = GetSlot(this, TIME_ZONE);
        const instant = BuiltinTimeZoneGetInstantFor(timeZone, dtStart, 'compatible');
        return CreateTemporalZonedDateTime(GetSlot(instant, EPOCHNANOSECONDS), timeZone, calendar);
    }
    toInstant() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const TemporalInstant = GetIntrinsic('%Temporal.Instant%');
        return new TemporalInstant(GetSlot(this, EPOCHNANOSECONDS));
    }
    toPlainDate() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return TemporalDateTimeToDate(dateTime(this));
    }
    toPlainTime() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return TemporalDateTimeToTime(dateTime(this));
    }
    toPlainDateTime() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        return dateTime(this);
    }
    toPlainYearMonth() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['monthCode', 'year']);
        const fields = ToTemporalYearMonthFields(this, fieldNames);
        return YearMonthFromFields(calendar, fields);
    }
    toPlainMonthDay() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const calendar = GetSlot(this, CALENDAR);
        const fieldNames = CalendarFields(calendar, ['day', 'monthCode']);
        const fields = ToTemporalMonthDayFields(this, fieldNames);
        return MonthDayFromFields(calendar, fields);
    }
    getISOFields() {
        if (!IsTemporalZonedDateTime(this))
            throw new TypeError('invalid receiver');
        const dt = dateTime(this);
        const tz = GetSlot(this, TIME_ZONE);
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
    static from(item, optionsParam = undefined) {
        const options = GetOptionsObject(optionsParam);
        if (IsTemporalZonedDateTime(item)) {
            ToTemporalOverflow(options); // validate and ignore
            ToTemporalDisambiguation(options);
            ToTemporalOffset(options, 'reject');
            return CreateTemporalZonedDateTime(GetSlot(item, EPOCHNANOSECONDS), GetSlot(item, TIME_ZONE), GetSlot(item, CALENDAR));
        }
        return ToTemporalZonedDateTime(item, options);
    }
    static compare(oneParam, twoParam) {
        const one = ToTemporalZonedDateTime(oneParam);
        const two = ToTemporalZonedDateTime(twoParam);
        const ns1 = GetSlot(one, EPOCHNANOSECONDS);
        const ns2 = GetSlot(two, EPOCHNANOSECONDS);
        if (bigInt(ns1).lesser(ns2))
            return -1;
        if (bigInt(ns1).greater(ns2))
            return 1;
        return 0;
    }
}
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
    const epochNanoseconds = bigInt(+this).multiply(1e6);
    return new Instant(bigIntIfAvailable(epochNanoseconds));
}
function bigIntIfAvailable(wrapper) {
    return typeof globalThis.BigInt === 'undefined' ? wrapper : wrapper.value;
}

export { intl as Intl, temporal as Temporal, toTemporalInstant };

