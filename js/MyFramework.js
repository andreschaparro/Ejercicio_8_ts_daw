class MyFramework {
    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementById(id) {
        let el;
        el = document.getElementById(id);
        return el;
    }
    /**
     * getElementByEvent: Busca un elemento del DOM por su Event
     * @param evt : Event a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementByEvent(evt) {
        return evt.target;
    }
    requestGET(url, listener) {
        let xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    listener.handleGETResponse(xhr.status, xhr.responseText);
                }
                else {
                    listener.handleGETResponse(xhr.status, null);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    }
}
