(() => {
    // Font Awesome Free 5.8.1 icons, copyright Fonticons, Inc.
    // Icons licensed under CC BY 4.0: https://fontawesome.com/license/free
    const icons = {
    "music": {
        "viewBox": "0 0 512 512",
        "path": "M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z"
    },
    "discord": {
        "viewBox": "0 0 448 512",
        "path": "M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
    },
    "map": {
        "viewBox": "0 0 576 512",
        "path": "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"
    }
};

    const title = document.querySelector('.menu-title');
    const logo = document.createElement('a');
    logo.className = 'logo';
    logo.href = path_to_root + 'index.html';

    const favicon = document.createElement('span');
    favicon.className = 'logo-favicon';
    const image = document.createElement('img');
    image.src = document.querySelector('link[rel="shortcut icon"]').href;
    image.alt = '';
    image.width = 32;
    favicon.append(image);

    const label = document.createElement('span');
    label.textContent = title.textContent;
    logo.append(favicon, label);
    title.replaceChildren(logo);

    const buttons = document.querySelector('.right-buttons');
    for (const [name, href, icon] of [
        ['Music', 'https://mvndi.ffm.to/symphoniaemvndi', 'music'],
        ['Discord', 'https://discord.mvndicraft.net/', 'discord'],
        ['Map', 'https://map.mvndicraft.net', 'map'],
    ]) {
        const link = document.createElement('a');
        link.href = href;
        link.title = name;
        link.className = 'mvndi-menu-link';
        link.setAttribute('aria-label', name);
        const glyph = document.createElement('span');
        glyph.className = 'mvndi-menu-icon';
        glyph.setAttribute('aria-hidden', 'true');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', icons[icon].viewBox);
        svg.setAttribute('focusable', 'false');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', icons[icon].path);
        svg.append(path);
        glyph.append(svg);
        link.append(glyph);
        buttons.append(link);
    }
})();
