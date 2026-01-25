export const sanitizeString = (str, { maxLen = 2000 } = {}) => {
    if (typeof str !== 'string') return str;
    let s = str.trim();
    // Remove HTML tags and scripts
    s = s.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    s = s.replace(/<[^>]+>/g, '');
    // Collapse whitespace
    s = s.replace(/\s{2,}/g, ' ');
    // Limit length
    if (s.length > maxLen) s = s.slice(0, maxLen);
    return s;
};

export const sanitizeObjectStrings = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;
    const out = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        const val = obj[key];
        if (typeof val === 'string') out[key] = sanitizeString(val);
        else if (Array.isArray(val)) out[key] = val.map(v => (typeof v === 'string' ? sanitizeString(v) : v));
        else if (typeof val === 'object' && val !== null) out[key] = sanitizeObjectStrings(val);
        else out[key] = val;
    }
    return out;
};

export const isValidEmail = (email) => {
    const re = /^[\w.!#$%&’*+/=?`{|}~^-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return typeof email === 'string' && email.length <= 254 && re.test(email.trim());
};
