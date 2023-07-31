function redirect(toWhere ,username) {
    if(toWhere == "instagram") {
        window.open(`https://instagram.com/${username}`);
    } if(toWhere == "whatsapp") {
        window.open(`https://wa.me/${username}`);
    }
}

