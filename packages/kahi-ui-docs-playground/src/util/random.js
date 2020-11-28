export function generate_id_time() {
    return Date.now().toString(32);
}

export function generate_id_token() {
    const view = new Uint32Array(1);
    window.crypto.getRandomValues(view);

    return view[0].toString(32);
}

export function generate_id() {
    // NOTE: This is not meant to be cryptographically secure or any
    // thing really else, just a simple identifier generator
    const time = generate_id_time().slice(-4);
    const token = generate_id_token().slice(-4);

    return time + "-" + token;
}
