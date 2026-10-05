(() => {
    const iconStyles = document.createElement('link');
    iconStyles.rel = 'stylesheet';
    iconStyles.href = 'https://use.fontawesome.com/releases/v5.8.1/css/all.css';
    iconStyles.integrity = 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf';
    iconStyles.crossOrigin = 'anonymous';
    document.head.append(iconStyles);

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
        ['Music', 'https://mvndi.ffm.to/symphoniaemvndi', 'fa fa-music'],
        ['Discord', 'https://discord.mvndicraft.net/', 'fab fa-discord'],
        ['Map', 'https://map.mvndicraft.net', 'fa fa-map'],
    ]) {
        const link = document.createElement('a');
        link.href = href;
        link.title = name;
        link.setAttribute('aria-label', name);
        const glyph = document.createElement('i');
        glyph.className = icon;
        glyph.setAttribute('aria-hidden', 'true');
        link.append(glyph);
        buttons.append(link);
    }
})();
