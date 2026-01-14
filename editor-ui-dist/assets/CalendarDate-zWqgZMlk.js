function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
	return amount - numerator * Math.floor(amount / numerator);
}
var $3b62074eb05584b2$var$EPOCH = 1721426;
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
	year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
	let y1 = year - 1;
	let monthOffset = -2;
	if (month <= 2) monthOffset = 0;
	else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) monthOffset = -1;
	return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
	return era === "BC" ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
	let era = "AD";
	if (year <= 0) {
		era = "BC";
		year = 1 - year;
	}
	return [era, year];
}
var $3b62074eb05584b2$var$daysInMonth = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
};
var $3b62074eb05584b2$export$80ee6245ec4f29ec = class {
	fromJulianDay(jd) {
		let jd0 = jd;
		let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
		let quadricent = Math.floor(depoch / 146097);
		let dqc = $2b4dce13dd5a17fa$export$842a2cf37af977e1(depoch, 146097);
		let cent = Math.floor(dqc / 36524);
		let dcent = $2b4dce13dd5a17fa$export$842a2cf37af977e1(dqc, 36524);
		let quad = Math.floor(dcent / 1461);
		let dquad = $2b4dce13dd5a17fa$export$842a2cf37af977e1(dcent, 1461);
		let yindex = Math.floor(dquad / 365);
		let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0));
		let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
		let leapAdj = 2;
		if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;
		else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year)) leapAdj = 1;
		let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
		return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(era, year, month, jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1);
	}
	toJulianDay(date) {
		return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
	}
	getDaysInMonth(date) {
		return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
	}
	getMonthsInYear(date) {
		return 12;
	}
	getDaysInYear(date) {
		return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
	}
	getYearsInEra(date) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(date) {
		return date.era === "BC";
	}
	balanceDate(date) {
		if (date.year <= 0) {
			date.era = date.era === "BC" ? "AD" : "BC";
			date.year = 1 - date.year;
		}
	}
	constructor() {
		this.identifier = "gregory";
	}
};
var $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1
};
function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b) {
	b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
	return a.era === b.era && a.year === b.year && a.month === b.month && a.day === b.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a, b) {
	b = $11d87f3f76e88657$export$b4a036af3fc0b032(b, a.calendar);
	a = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a);
	b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
	return a.era === b.era && a.year === b.year && a.month === b.month;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a, b) {
	return $14e0f24ef4ac5c92$export$dbc69fd56b53d5e(a.calendar, b.calendar) && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a, b);
}
function $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(a, b) {
	return $14e0f24ef4ac5c92$export$dbc69fd56b53d5e(a.calendar, b.calendar) && $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a, b);
}
function $14e0f24ef4ac5c92$export$dbc69fd56b53d5e(a, b) {
	var _a_isEqual, _b_isEqual;
	var _a_isEqual1, _ref;
	return (_ref = (_a_isEqual1 = (_a_isEqual = a.isEqual) === null || _a_isEqual === void 0 ? void 0 : _a_isEqual.call(a, b)) !== null && _a_isEqual1 !== void 0 ? _a_isEqual1 : (_b_isEqual = b.isEqual) === null || _b_isEqual === void 0 ? void 0 : _b_isEqual.call(b, a)) !== null && _ref !== void 0 ? _ref : a.identifier === b.identifier;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
	return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
var $14e0f24ef4ac5c92$var$DAY_MAP = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale, firstDayOfWeek) {
	let julian = date.calendar.toJulianDay(date);
	let weekStart = firstDayOfWeek ? $14e0f24ef4ac5c92$var$DAY_MAP[firstDayOfWeek] : $14e0f24ef4ac5c92$var$getWeekStart(locale);
	let dayOfWeek = Math.ceil(julian + 1 - weekStart) % 7;
	if (dayOfWeek < 0) dayOfWeek += 7;
	return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
	return $11d87f3f76e88657$export$1b96692a1ba042ac(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
	return $11d87f3f76e88657$export$93522d1a439f3617($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a, b) {
	return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a, b) {
	return $14e0f24ef4ac5c92$var$timeToMs(a) - $14e0f24ef4ac5c92$var$timeToMs(b);
}
function $14e0f24ef4ac5c92$var$timeToMs(a) {
	return a.hour * 36e5 + a.minute * 6e4 + a.second * 1e3 + a.millisecond;
}
var $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
	if ($14e0f24ef4ac5c92$var$localTimeZone == null) $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
	return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
	return date.subtract({ days: date.day - 1 });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
	return date.add({ days: date.calendar.getDaysInMonth(date) - date.day });
}
var $14e0f24ef4ac5c92$var$cachedRegions = /* @__PURE__ */ new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
	if (Intl.Locale) {
		let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
		if (!region) {
			region = new Intl.Locale(locale).maximize().region;
			if (region) $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
		}
		return region;
	}
	let part = locale.split("-")[1];
	return part === "u" ? void 0 : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
	let region = $14e0f24ef4ac5c92$var$getRegion(locale);
	return region ? $2fe286d2fb449abb$export$7a5acbd77d414bd9[region] || 0 : 0;
}
function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
	date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
	return $11d87f3f76e88657$var$epochFromParts($3b62074eb05584b2$export$c36e0ecb2d4fa69d(date.era, date.year), date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
	let date = /* @__PURE__ */ new Date();
	date.setUTCHours(hour, minute, second, millisecond);
	date.setUTCFullYear(year, month - 1, day);
	return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone) {
	if (timeZone === "UTC") return 0;
	if (ms > 0 && timeZone === $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) return new Date(ms).getTimezoneOffset() * -6e4;
	let { year, month, day, hour, minute, second } = $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone);
	return $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0) - Math.floor(ms / 1e3) * 1e3;
}
var $11d87f3f76e88657$var$formattersByTimeZone = /* @__PURE__ */ new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms, timeZone) {
	let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat("en-US", {
			timeZone,
			hour12: false,
			era: "short",
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		});
		$11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
	}
	let parts = formatter.formatToParts(new Date(ms));
	let namedParts = {};
	for (let part of parts) if (part.type !== "literal") namedParts[part.type] = part.value;
	return {
		year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
		month: +namedParts.month,
		day: +namedParts.day,
		hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
		minute: +namedParts.minute,
		second: +namedParts.second
	};
}
var $11d87f3f76e88657$var$DAYMILLIS = 864e5;
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
	return (earlier === later ? [earlier] : [earlier, later]).filter((absolute) => $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
	let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
	return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
	let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
	if (timeZone === "UTC") return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
	if (timeZone === $14e0f24ef4ac5c92$export$aa8b41735afcabd2() && disambiguation === "compatible") {
		dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
		let date$1 = /* @__PURE__ */ new Date();
		let year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(dateTime.era, dateTime.year);
		date$1.setFullYear(year, dateTime.month - 1, dateTime.day);
		date$1.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
		return date$1.getTime();
	}
	let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
	let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
	let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
	let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
	if (valid.length === 1) return valid[0];
	if (valid.length > 1) switch (disambiguation) {
		case "compatible":
		case "earlier": return valid[0];
		case "later": return valid[valid.length - 1];
		case "reject": throw new RangeError("Multiple possible absolute times found");
	}
	switch (disambiguation) {
		case "earlier": return Math.min(ms - offsetBefore, ms - offsetAfter);
		case "compatible":
		case "later": return Math.max(ms - offsetBefore, ms - offsetAfter);
		case "reject": throw new RangeError("No such absolute time found");
	}
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
	return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms, timeZone) {
	let offset = $11d87f3f76e88657$export$59c99f3515d3493f(ms, timeZone);
	let date = new Date(ms + offset);
	let year = date.getUTCFullYear();
	let month = date.getUTCMonth() + 1;
	let day = date.getUTCDate();
	let hour = date.getUTCHours();
	let minute = date.getUTCMinutes();
	let second = date.getUTCSeconds();
	let millisecond = date.getUTCMilliseconds();
	return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(year < 1 ? "BC" : "AD", year < 1 ? -year + 1 : year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
	return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
	let hour = 0, minute = 0, second = 0, millisecond = 0;
	if ("timeZone" in date) ({hour: hour, minute: minute, second: second, millisecond: millisecond} = date);
	else if ("hour" in date && !time) return date;
	if (time) ({hour: hour, minute: minute, second: second, millisecond: millisecond} = time);
	return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
	if ($14e0f24ef4ac5c92$export$dbc69fd56b53d5e(date.calendar, calendar)) return date;
	let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
	let copy = date.copy();
	copy.calendar = calendar;
	copy.era = calendarDate.era;
	copy.year = calendarDate.year;
	copy.month = calendarDate.month;
	copy.day = calendarDate.day;
	$735220c2d4774dd3$export$c4e2ecac49351ef2(copy);
	return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
	if (date instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea) {
		if (date.timeZone === timeZone) return date;
		return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
	}
	return $11d87f3f76e88657$export$1b96692a1ba042ac($11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation), timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
	let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
	return new Date(ms);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
	return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac($11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset, timeZone), date.calendar);
}
var $735220c2d4774dd3$var$ONE_HOUR = 36e5;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
	let mutableDate = date.copy();
	let days = "hour" in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
	$735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
	if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
	mutableDate.month += duration.months || 0;
	$735220c2d4774dd3$var$balanceYearMonth(mutableDate);
	$735220c2d4774dd3$var$constrainMonthDay(mutableDate);
	mutableDate.day += (duration.weeks || 0) * 7;
	mutableDate.day += duration.days || 0;
	mutableDate.day += days;
	$735220c2d4774dd3$var$balanceDay(mutableDate);
	if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
	if (mutableDate.year < 1) {
		mutableDate.year = 1;
		mutableDate.month = 1;
		mutableDate.day = 1;
	}
	let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
	if (mutableDate.year > maxYear) {
		var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
		let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
		mutableDate.year = maxYear;
		mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
		mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
	}
	if (mutableDate.month < 1) {
		mutableDate.month = 1;
		mutableDate.day = 1;
	}
	let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
	if (mutableDate.month > maxMonth) {
		mutableDate.month = maxMonth;
		mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
	}
	mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
	return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
	var _date_calendar_isInverseEra, _date_calendar;
	if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date)) years = -years;
	date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
	while (date.month < 1) {
		$735220c2d4774dd3$var$addYears(date, -1);
		date.month += date.calendar.getMonthsInYear(date);
	}
	let monthsInYear = 0;
	while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
		date.month -= monthsInYear;
		$735220c2d4774dd3$var$addYears(date, 1);
	}
}
function $735220c2d4774dd3$var$balanceDay(date) {
	while (date.day < 1) {
		date.month--;
		$735220c2d4774dd3$var$balanceYearMonth(date);
		date.day += date.calendar.getDaysInMonth(date);
	}
	while (date.day > date.calendar.getDaysInMonth(date)) {
		date.day -= date.calendar.getDaysInMonth(date);
		date.month++;
		$735220c2d4774dd3$var$balanceYearMonth(date);
	}
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
	date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
	date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
	if (date.calendar.constrainDate) date.calendar.constrainDate(date);
	date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
	$735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
	let inverseDuration = {};
	for (let key in duration) if (typeof duration[key] === "number") inverseDuration[key] = -duration[key];
	return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
	return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
	let mutableDate = date.copy();
	if (fields.era != null) mutableDate.era = fields.era;
	if (fields.year != null) mutableDate.year = fields.year;
	if (fields.month != null) mutableDate.month = fields.month;
	if (fields.day != null) mutableDate.day = fields.day;
	$735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
	return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
	let mutableValue = value.copy();
	if (fields.hour != null) mutableValue.hour = fields.hour;
	if (fields.minute != null) mutableValue.minute = fields.minute;
	if (fields.second != null) mutableValue.second = fields.second;
	if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
	$735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
	return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
	time.second += Math.floor(time.millisecond / 1e3);
	time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1e3);
	time.minute += Math.floor(time.second / 60);
	time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
	time.hour += Math.floor(time.minute / 60);
	time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
	let days = Math.floor(time.hour / 24);
	time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
	return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
	time.millisecond = Math.max(0, Math.min(time.millisecond, 1e3));
	time.second = Math.max(0, Math.min(time.second, 59));
	time.minute = Math.max(0, Math.min(time.minute, 59));
	time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a, b) {
	let result = a % b;
	if (result < 0) result += b;
	return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
	time.hour += duration.hours || 0;
	time.minute += duration.minutes || 0;
	time.second += duration.seconds || 0;
	time.millisecond += duration.milliseconds || 0;
	return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
	let mutable = value.copy();
	switch (field) {
		case "era": {
			let eras = value.calendar.getEras();
			let eraIndex = eras.indexOf(value.era);
			if (eraIndex < 0) throw new Error("Invalid era: " + value.era);
			eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
			mutable.era = eras[eraIndex];
			$735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
			break;
		}
		case "year":
			var _mutable_calendar_isInverseEra, _mutable_calendar;
			if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable)) amount = -amount;
			mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
			if (mutable.year === -Infinity) mutable.year = 1;
			if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
			break;
		case "month":
			mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
			break;
		case "day":
			mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
			break;
		default: throw new Error("Unsupported field " + field);
	}
	if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
	$735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
	return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
	let mutable = value.copy();
	switch (field) {
		case "hour": {
			let hours = value.hour;
			let min = 0;
			let max = 23;
			if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
				let isPM = hours >= 12;
				min = isPM ? 12 : 0;
				max = isPM ? 23 : 11;
			}
			mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min, max, options === null || options === void 0 ? void 0 : options.round);
			break;
		}
		case "minute":
			mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
			break;
		case "second":
			mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
			break;
		case "millisecond":
			mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
			break;
		default: throw new Error("Unsupported field " + field);
	}
	return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min, max, round = false) {
	if (round) {
		value += Math.sign(amount);
		if (value < min) value = max;
		let div = Math.abs(amount);
		if (amount > 0) value = Math.ceil(value / div) * div;
		else value = Math.floor(value / div) * div;
		if (value > max) value = min;
	} else {
		value += amount;
		if (value < min) value = max - (min - value - 1);
		else if (value > max) value = min + (value - max - 1);
	}
	return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
	let ms;
	if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) ms = $11d87f3f76e88657$export$5107c82f94518f5c($735220c2d4774dd3$export$e16d8520af44a096($11d87f3f76e88657$export$b21e0b124e224484(dateTime), {
		years: duration.years,
		months: duration.months,
		weeks: duration.weeks,
		days: duration.days
	}), dateTime.timeZone);
	else ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
	ms += duration.milliseconds || 0;
	ms += (duration.seconds || 0) * 1e3;
	ms += (duration.minutes || 0) * 6e4;
	ms += (duration.hours || 0) * 36e5;
	return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
	return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
	switch (field) {
		case "hour": {
			let min = 0;
			let max = 23;
			if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
				let isPM = dateTime.hour >= 12;
				min = isPM ? 12 : 0;
				max = isPM ? 23 : 11;
			}
			let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(dateTime);
			let minDate = $11d87f3f76e88657$export$b4a036af3fc0b032($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, { hour: min }), new $3b62074eb05584b2$export$80ee6245ec4f29ec());
			let minAbsolute = [$11d87f3f76e88657$export$5107c82f94518f5c(minDate, dateTime.timeZone, "earlier"), $11d87f3f76e88657$export$5107c82f94518f5c(minDate, dateTime.timeZone, "later")].filter((ms$1) => $11d87f3f76e88657$export$1b96692a1ba042ac(ms$1, dateTime.timeZone).day === minDate.day)[0];
			let maxDate = $11d87f3f76e88657$export$b4a036af3fc0b032($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, { hour: max }), new $3b62074eb05584b2$export$80ee6245ec4f29ec());
			let maxAbsolute = [$11d87f3f76e88657$export$5107c82f94518f5c(maxDate, dateTime.timeZone, "earlier"), $11d87f3f76e88657$export$5107c82f94518f5c(maxDate, dateTime.timeZone, "later")].filter((ms$1) => $11d87f3f76e88657$export$1b96692a1ba042ac(ms$1, dateTime.timeZone).day === maxDate.day).pop();
			let ms = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
			let hours = Math.floor(ms / $735220c2d4774dd3$var$ONE_HOUR);
			let remainder = ms % $735220c2d4774dd3$var$ONE_HOUR;
			ms = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
			return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
		case "era":
		case "year":
		case "month":
		case "day": return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac($11d87f3f76e88657$export$5107c82f94518f5c($735220c2d4774dd3$export$d52ced6badfb9a4c($11d87f3f76e88657$export$b21e0b124e224484(dateTime), field, amount, options), dateTime.timeZone), dateTime.timeZone), dateTime.calendar);
		default: throw new Error("Unsupported field " + field);
	}
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
	let plainDateTime = $11d87f3f76e88657$export$b21e0b124e224484(dateTime);
	let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
	if (res.compare(plainDateTime) === 0) return dateTime;
	return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac($11d87f3f76e88657$export$5107c82f94518f5c(res, dateTime.timeZone, disambiguation), dateTime.timeZone), dateTime.calendar);
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
	return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1e3).slice(1) : ""}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
	let gregorianDate = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new $3b62074eb05584b2$export$80ee6245ec4f29ec());
	let year;
	if (gregorianDate.era === "BC") year = gregorianDate.year === 1 ? "0000" : "-" + String(Math.abs(1 - gregorianDate.year)).padStart(6, "00");
	else year = String(gregorianDate.year).padStart(4, "0");
	return `${year}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
	return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset) {
	let sign = Math.sign(offset) < 0 ? "-" : "+";
	offset = Math.abs(offset);
	let offsetHours = Math.floor(offset / 36e5);
	let offsetMinutes = offset % 36e5 / 6e4;
	return `${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
	return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}
function _check_private_redeclaration(obj, privateCollection) {
	if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _class_private_field_init(obj, privateMap, value) {
	_check_private_redeclaration(obj, privateMap);
	privateMap.set(obj, value);
}
function $35ea8db9cb2ccb90$var$shiftArgs(args) {
	let calendar = typeof args[0] === "object" ? args.shift() : new $3b62074eb05584b2$export$80ee6245ec4f29ec();
	let era;
	if (typeof args[0] === "string") era = args.shift();
	else {
		let eras = calendar.getEras();
		era = eras[eras.length - 1];
	}
	let year = args.shift();
	let month = args.shift();
	let day = args.shift();
	return [
		calendar,
		era,
		year,
		month,
		day
	];
}
var $35ea8db9cb2ccb90$var$_type = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$99faa760c7908e4f = class $35ea8db9cb2ccb90$export$99faa760c7908e4f {
	copy() {
		if (this.era) return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
		else return new $35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
	}
	add(duration) {
		return $735220c2d4774dd3$export$e16d8520af44a096(this, duration);
	}
	subtract(duration) {
		return $735220c2d4774dd3$export$4e2d2ead65e5f7e3(this, duration);
	}
	set(fields) {
		return $735220c2d4774dd3$export$adaa4cf7ef1b65be(this, fields);
	}
	cycle(field, amount, options) {
		return $735220c2d4774dd3$export$d52ced6badfb9a4c(this, field, amount, options);
	}
	toDate(timeZone) {
		return $11d87f3f76e88657$export$e67a095c620b86fe(this, timeZone);
	}
	toString() {
		return $fae977aafc393c5c$export$60dfd74aa96791bd(this);
	}
	compare(b) {
		return $14e0f24ef4ac5c92$export$68781ddf31c0090f(this, b);
	}
	constructor(...args) {
		_class_private_field_init(this, $35ea8db9cb2ccb90$var$_type, {
			writable: true,
			value: void 0
		});
		let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
		this.calendar = calendar;
		this.era = era;
		this.year = year;
		this.month = month;
		this.day = day;
		$735220c2d4774dd3$export$c4e2ecac49351ef2(this);
	}
};
var $35ea8db9cb2ccb90$var$_type2 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$ca871e8dbb80966f = class $35ea8db9cb2ccb90$export$ca871e8dbb80966f {
	copy() {
		if (this.era) return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
		else return new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(duration) {
		return $735220c2d4774dd3$export$e16d8520af44a096(this, duration);
	}
	subtract(duration) {
		return $735220c2d4774dd3$export$4e2d2ead65e5f7e3(this, duration);
	}
	set(fields) {
		return $735220c2d4774dd3$export$adaa4cf7ef1b65be($735220c2d4774dd3$export$e5d5e1c1822b6e56(this, fields), fields);
	}
	cycle(field, amount, options) {
		switch (field) {
			case "era":
			case "year":
			case "month":
			case "day": return $735220c2d4774dd3$export$d52ced6badfb9a4c(this, field, amount, options);
			default: return $735220c2d4774dd3$export$dd02b3e0007dfe28(this, field, amount, options);
		}
	}
	toDate(timeZone, disambiguation) {
		return $11d87f3f76e88657$export$e67a095c620b86fe(this, timeZone, disambiguation);
	}
	toString() {
		return $fae977aafc393c5c$export$4223de14708adc63(this);
	}
	compare(b) {
		let res = $14e0f24ef4ac5c92$export$68781ddf31c0090f(this, b);
		if (res === 0) return $14e0f24ef4ac5c92$export$c19a80a9721b80f6(this, $11d87f3f76e88657$export$b21e0b124e224484(b));
		return res;
	}
	constructor(...args) {
		_class_private_field_init(this, $35ea8db9cb2ccb90$var$_type2, {
			writable: true,
			value: void 0
		});
		let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
		this.calendar = calendar;
		this.era = era;
		this.year = year;
		this.month = month;
		this.day = day;
		this.hour = args.shift() || 0;
		this.minute = args.shift() || 0;
		this.second = args.shift() || 0;
		this.millisecond = args.shift() || 0;
		$735220c2d4774dd3$export$c4e2ecac49351ef2(this);
	}
};
var $35ea8db9cb2ccb90$var$_type3 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$d3b7288e7994edea = class $35ea8db9cb2ccb90$export$d3b7288e7994edea {
	copy() {
		if (this.era) return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
		else return new $35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(duration) {
		return $735220c2d4774dd3$export$96b1d28349274637(this, duration);
	}
	subtract(duration) {
		return $735220c2d4774dd3$export$6814caac34ca03c7(this, duration);
	}
	set(fields, disambiguation) {
		return $735220c2d4774dd3$export$31b5430eb18be4f8(this, fields, disambiguation);
	}
	cycle(field, amount, options) {
		return $735220c2d4774dd3$export$9a297d111fc86b79(this, field, amount, options);
	}
	toDate() {
		return $11d87f3f76e88657$export$83aac07b4c37b25(this);
	}
	toString() {
		return $fae977aafc393c5c$export$bf79f1ebf4b18792(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(b) {
		return this.toDate().getTime() - $11d87f3f76e88657$export$84c95a83c799e074(b, this.timeZone).toDate().getTime();
	}
	constructor(...args) {
		_class_private_field_init(this, $35ea8db9cb2ccb90$var$_type3, {
			writable: true,
			value: void 0
		});
		let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
		let timeZone = args.shift();
		let offset = args.shift();
		this.calendar = calendar;
		this.era = era;
		this.year = year;
		this.month = month;
		this.day = day;
		this.timeZone = timeZone;
		this.offset = offset;
		this.hour = args.shift() || 0;
		this.minute = args.shift() || 0;
		this.second = args.shift() || 0;
		this.millisecond = args.shift() || 0;
		$735220c2d4774dd3$export$c4e2ecac49351ef2(this);
	}
};
export { $2b4dce13dd5a17fa$export$842a2cf37af977e1 as S, $3b62074eb05584b2$export$4475b7e617eb123c as _, $11d87f3f76e88657$export$b4a036af3fc0b032 as a, $3b62074eb05584b2$export$c36e0ecb2d4fa69d as b, $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2 as c, $14e0f24ef4ac5c92$export$a18c89cbd24170ff as d, $14e0f24ef4ac5c92$export$a2258d9c4118825c as f, $14e0f24ef4ac5c92$export$ea39ec197993aef0 as g, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3 as h, $11d87f3f76e88657$export$b21e0b124e224484 as i, $14e0f24ef4ac5c92$export$629b0a497aa65267 as l, $14e0f24ef4ac5c92$export$aa8b41735afcabd2 as m, $35ea8db9cb2ccb90$export$ca871e8dbb80966f as n, $14e0f24ef4ac5c92$export$2061056d06d7cdf7 as o, $14e0f24ef4ac5c92$export$a5a3b454ada2268e as p, $35ea8db9cb2ccb90$export$d3b7288e7994edea as r, $14e0f24ef4ac5c92$export$461939dd4422153 as s, $35ea8db9cb2ccb90$export$99faa760c7908e4f as t, $14e0f24ef4ac5c92$export$91b62ebf2ba703ee as u, $3b62074eb05584b2$export$553d7fa8e3805fc0 as v, $3b62074eb05584b2$export$f297eb839006d339 as x, $3b62074eb05584b2$export$80ee6245ec4f29ec as y };
