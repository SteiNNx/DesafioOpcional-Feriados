/** Desafio Opcional */
/** Variables */
const API_URL_FERIADOS = 'https://www.feriadosapp.com/api/holidays.json';

$(document).ready(function () {
    const setTable = value => {
        const contentTable = value
            .map((valueFeriado) => {
                return `<tr><th>${valueFeriado.id}</th><td>${valueFeriado.date}</td><td>${valueFeriado.title}</td><td>${valueFeriado.extra}</td><td>${valueFeriado.law.join()}</td></tr>`;
            })
            .join('');

        $('table tbody').html(contentTable);
    }

    $.ajax({ url: `${API_URL_FERIADOS}`, })
        .done((success) => {
            setTable(success.data)
            console.log({ success });
        })
        .fail((error) => {
            console.log({ error });
        })
        .always(() => {
        });
});